import crypto from 'node:crypto'

// Server-only helpers for issuing and verifying signed pitch-access cookies.
// Never import this from a Client Component — it depends on node:crypto and
// reads server-side secrets.

const SEVEN_DAYS_SECONDS = 7 * 24 * 60 * 60

/** Cookie name for a given pitch slug, e.g. `pitch_auth_true-crime-1`. */
export function cookieName(slug: string): string {
  return `pitch_auth_${slug}`
}

/**
 * Env var holding the password for a slug.
 * `true-crime-1` -> `PITCH_PASSWORD_TRUE_CRIME_1`
 */
export function passwordEnvName(slug: string): string {
  return `PITCH_PASSWORD_${slug.toUpperCase().replace(/-/g, '_')}`
}

/** The configured password for a pitch, or undefined if none is set. */
export function getPitchPassword(slug: string): string | undefined {
  return process.env[passwordEnvName(slug)]
}

function getSecret(): string {
  const secret = process.env.PITCH_AUTH_SECRET
  if (!secret) {
    throw new Error('PITCH_AUTH_SECRET is not set — cannot sign pitch cookies.')
  }
  return secret
}

function hmac(value: string): string {
  return crypto.createHmac('sha256', getSecret()).update(value).digest('hex')
}

/** Constant-time string compare that tolerates length mismatches. */
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return crypto.timingSafeEqual(bufA, bufB)
}

/**
 * Check a submitted password against the configured one for a slug,
 * in constant time. Returns false if no password is configured.
 */
export function verifyPassword(slug: string, submitted: string): boolean {
  const expected = getPitchPassword(slug)
  if (!expected) return false
  return safeEqual(submitted, expected)
}

/**
 * Create a signed token bound to a slug and an absolute expiry.
 * Format: `<expiresAtMs>.<hmac(slug:expiresAtMs)>`
 */
export function createToken(slug: string): string {
  const expiresAt = Date.now() + SEVEN_DAYS_SECONDS * 1000
  const payload = `${slug}:${expiresAt}`
  return `${expiresAt}.${hmac(payload)}`
}

/** Validate a token's signature and expiry against a slug. */
export function verifyToken(slug: string, token: string | undefined): boolean {
  if (!token) return false
  const dot = token.indexOf('.')
  if (dot <= 0) return false

  const expiresAtRaw = token.slice(0, dot)
  const signature = token.slice(dot + 1)

  const expiresAt = Number(expiresAtRaw)
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false

  const expected = hmac(`${slug}:${expiresAt}`)
  return safeEqual(signature, expected)
}

/** Cookie options for setting the access cookie (7-day, httpOnly, signed). */
export function cookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: SEVEN_DAYS_SECONDS,
  }
}
