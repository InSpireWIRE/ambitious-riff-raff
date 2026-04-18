import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-fraunces',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ambitious Riff Raff - Twenty years of unscripted TV',
  description: 'A New York studio for docu-series and branded content — plus the AI tools I wish had existed.',
  keywords: 'unscripted television, docu-series, branded content, production, AI tools, New York',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased bg-bg text-fg`}>
        {children}
      </body>
    </html>
  )
}
