import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ACTalyse — Adaptive Communication Training',
  description: 'AI-powered training for fields where client communication matters: Social Work, Psychiatry, Medicine, Nursing and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen font-sans">
        {children}
      </body>
    </html>
  )
}
