import { cookies } from 'next/headers'
import { getPitch } from '@/content/pitches'
import {
  cookieName,
  cookieOptions,
  createToken,
  verifyPassword,
} from '@/lib/pitch-auth'

// POST /api/pitch/auth  — body: { slug, password }
// Validates the password for a pitch and, on success, sets a signed
// httpOnly access cookie (7-day expiry). No client-side bypass possible.
export async function POST(request: Request) {
  let body: { slug?: unknown; password?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const slug = typeof body.slug === 'string' ? body.slug : ''
  const password = typeof body.password === 'string' ? body.password : ''

  if (!slug || !password) {
    return Response.json(
      { error: 'Missing slug or password.' },
      { status: 400 }
    )
  }

  // Unknown pitch — don't reveal whether the slug or the password was wrong.
  if (!getPitch(slug)) {
    return Response.json({ error: 'Incorrect password.' }, { status: 401 })
  }

  if (!verifyPassword(slug, password)) {
    return Response.json({ error: 'Incorrect password.' }, { status: 401 })
  }

  const cookieStore = await cookies()
  cookieStore.set(cookieName(slug), createToken(slug), cookieOptions())

  return Response.json({ ok: true })
}
