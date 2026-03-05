'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'

const SWITCH_APP_URL = 'https://switch.share.zrok.io/'
const LOGO_SRC = '/logo.png'

const FIELD_IMAGE_BASE = '/field-images'

const fields = [
  {
    id: 'social-work',
    title: 'Social Work',
    subtitle: 'SWITCH',
    description: 'AI-powered client simulation for social worker training. Practice with diverse scenarios and real-time feedback.',
    available: true,
    href: SWITCH_APP_URL,
  },
  {
    id: 'psychiatry',
    title: 'Psychiatry',
    subtitle: null,
    description: 'Simulated patient conversations for psychiatric training.',
    available: false,
  },
  {
    id: 'medicine',
    title: 'Medicine',
    subtitle: null,
    description: 'Clinical communication and patient history practice.',
    available: false,
  },
  {
    id: 'nursing',
    title: 'Nursing',
    subtitle: null,
    description: 'Patient care communication and bedside manner training.',
    available: false,
  },
  {
    id: 'counselling',
    title: 'Counselling',
    subtitle: null,
    description: 'Therapeutic dialogue and active listening practice.',
    available: false,
  },
  {
    id: 'legal-consultation',
    title: 'Legal Consultation',
    subtitle: null,
    description: 'Client intake and legal consultation communication practice.',
    available: false,
  },
] as const

function FieldCard({
  id,
  title,
  subtitle,
  description,
  available,
  href,
}: {
  id: string
  title: string
  subtitle: string | null
  description: string
  available: boolean
  href?: string
}) {
  const imageSrc = `${FIELD_IMAGE_BASE}/${id}.jpg`
  const content = (
    <>
      <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden bg-brand-50">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      </div>
      <div className="p-6 flex flex-col">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="text-xl font-bold text-brand-900">{title}</h3>
          {subtitle && (
            <span className="text-sm font-semibold text-brand-600 bg-brand-100 px-2 py-0.5 rounded">
              {subtitle}
            </span>
          )}
        </div>
        <p className="text-brand-800/90 text-sm mt-2 leading-relaxed">{description}</p>
        {available ? (
          <span className="inline-flex items-center gap-1.5 mt-4 text-brand-600 font-semibold text-sm">
            Open app
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 mt-4 text-amber-700 bg-amber-100 px-3 py-1 rounded-full text-sm font-medium">
            Under development
          </span>
        )}
      </div>
    </>
  )

  if (available && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl bg-white shadow-card border border-brand-100 hover:shadow-cardHover hover:border-brand-300 transition-all duration-300 text-left overflow-hidden"
      >
        {content}
      </a>
    )
  }

  return (
    <div
      className="rounded-2xl bg-white/90 shadow-sm border border-brand-100 text-left cursor-not-allowed opacity-90 overflow-hidden"
      aria-disabled
    >
      {content}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage="home" />

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16">
        <section className="text-center mb-14 sm:mb-18">
          <p className="text-brand-600 text-sm font-medium uppercase tracking-wider mb-2">
            Introducing
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-900 tracking-tight mb-3">
            ACTalyse
          </h1>
          <p className="text-lg sm:text-xl text-brand-800/90 max-w-2xl mx-auto font-medium">
            Adaptive Communication Training — practice client communication across multiple
            fields with AI-powered simulations.
          </p>
          <p className="text-brand-700 text-sm mt-3 max-w-xl mx-auto">
            Choose a field below to start training. More disciplines are coming soon.
          </p>
        </section>

        <section id="fields" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {fields.map((field) => (
            <FieldCard
              key={field.id}
              id={field.id}
              title={field.title}
              subtitle={field.subtitle}
              description={field.description}
              available={field.available}
              href={field.available ? field.href : undefined}
            />
          ))}
        </section>

        <footer className="mt-16 pt-8 border-t border-brand-100 text-center text-brand-700 text-sm">
          ACTalyse — Adaptive Communication Training + Catalyse. Built for professionals who care.
        </footer>
      </main>
    </div>
  )
}
