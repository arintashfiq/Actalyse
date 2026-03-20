'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/Header'

const plans = [
  {
    id: 'base',
    name: 'Base',
    tagline: 'All fields, limited practice—start building confidence fast.',
    price: 149,
    period: 'month',
    credits: '10 sessions/month across all fields',
    features: [
      'Access to all available fields (incl. future launches)',
      '2 client profiles per field (2 scenarios)',
      'Standard guided feedback',
      'Basic session history',
      'Email support',
    ],
    cta: 'Start Base',
    href: '#',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'More scenarios, more complex cases—deeper coaching for real practice.',
    price: 199,
    period: 'month',
    credits: '25 sessions/month across all fields',
    features: [
      'Access to all available fields',
      '4 client profiles per field (4 scenarios)',
      'More complex client backgrounds',
      'Advanced feedback + session review',
      'Priority email support',
    ],
    cta: 'Start Pro',
    href: '#',
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'Unlimited profiles + unlimited practice—maximum training capacity.',
    price: 399,
    period: 'month',
    credits: 'Unlimited sessions across all fields',
    features: [
      'Unlimited client profiles per field',
      'Unlimited practice sessions',
      'Full scenario library access',
      'Advanced analytics (strengths/weaknesses trends)',
      'Highest priority support + early access',
    ],
    cta: 'Go Premium',
    href: '#',
    highlighted: false,
  },
  {
    id: 'educational',
    name: 'Educational',
    tagline: 'Premium facilities for education at a lower per-account price.',
    price: 199,
    period: 'month',
    credits: 'Per educational account',
    features: [
      'Includes Premium facilities',
      'Unlimited client profiles per field',
      'Unlimited practice sessions',
      'Instructor-ready reporting (training admin tools)',
      'Education-focused onboarding & support',
    ],
    cta: 'Request education pricing',
    href: '#',
    highlighted: false,
  },
]

function PlanCard({
  name,
  tagline,
  price,
  period,
  credits,
  features,
  cta,
  href,
  highlighted,
  selected,
  onSelect,
}: {
  name: string
  tagline: string
  price: number | null
  period: string
  credits: string
  features: string[]
  cta: string
  href: string
  highlighted: boolean
  selected: boolean
  onSelect: () => void
}) {
  const showOutline = selected
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect() } }}
      className={`rounded-2xl p-6 sm:p-8 flex flex-col cursor-pointer transition-all duration-200 ${
        showOutline
          ? 'bg-white border-2 border-brand-600 shadow-card'
          : 'bg-white border border-brand-100 shadow-card hover:border-brand-300'
      }`}
    >
      {highlighted && (
        <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-2">
          Most popular
        </span>
      )}
      <h3 className="text-xl font-bold text-brand-900">{name}</h3>
      <p className="text-brand-700 text-sm mt-1">{tagline}</p>
      <div className="mt-6 flex items-baseline gap-1">
        {price !== null ? (
          <>
            <span className="text-3xl font-bold text-brand-900">${price}</span>
            <span className="text-brand-600">/{period}</span>
          </>
        ) : (
          <span className="text-2xl font-bold text-brand-900">Custom</span>
        )}
      </div>
      <p className="text-sm text-brand-800 mt-2">{credits}</p>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-brand-800">
            <svg
              className="w-5 h-5 text-brand-600 shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        onClick={(e) => e.stopPropagation()}
        className={`mt-8 block w-full py-3 px-4 rounded-xl text-center font-semibold text-sm transition-colors ${
          showOutline
            ? 'bg-brand-600 text-white hover:bg-brand-700'
            : 'bg-brand-50 text-brand-800 hover:bg-brand-100 border border-brand-200'
        }`}
      >
        {cta}
      </Link>
    </div>
  )
}

export default function PricingPage() {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>('pro')
  return (
    <div className="min-h-screen flex flex-col">
      <Header activePage="pricing" />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 sm:py-16">
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-900 tracking-tight">
            Subscription plans
          </h1>
          <p className="text-brand-800 mt-3 max-w-xl mx-auto">
            Choose the tier that matches your training intensity. Upgrade anytime.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              name={plan.name}
              tagline={plan.tagline}
              price={plan.price}
              period={plan.period}
              credits={plan.credits}
              features={plan.features}
              cta={plan.cta}
              href={plan.href}
              highlighted={plan.highlighted}
              selected={selectedPlanId === plan.id}
              onSelect={() => setSelectedPlanId(plan.id)}
            />
          ))}
        </section>

        <p className="text-center text-brand-700 text-sm mt-10">
          Built for hands-on communication training—pick your capacity and coach yourself faster.
        </p>

        <footer className="mt-16 pt-8 border-t border-brand-100 text-center text-brand-700 text-sm">
          ACTalyse — Adaptive Communication Training + Catalyse. Built for professionals who care.
        </footer>
      </main>
    </div>
  )
}
