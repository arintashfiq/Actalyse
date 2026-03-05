'use client'

import Image from 'next/image'
import Link from 'next/link'

const LOGO_SRC = '/logo.png'

const navLinkClass = (active: boolean) =>
  active
    ? 'text-brand-900 font-semibold border-b-2 border-brand-600 pb-0.5'
    : 'text-brand-700 hover:text-brand-900 border-b-2 border-transparent pb-0.5 hover:border-brand-200'

export function Header({ activePage }: { activePage: 'home' | 'pricing' }) {
  return (
    <header className="border-b border-brand-100 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={LOGO_SRC}
            alt="ACTalyse"
            width={160}
            height={42}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="flex gap-8 text-sm font-medium">
          <Link href="/" className={navLinkClass(activePage === 'home')}>
            Home
          </Link>
          <Link href="/pricing" className={navLinkClass(activePage === 'pricing')}>
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  )
}
