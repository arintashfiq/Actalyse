'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Header } from '@/components/Header'

const plans = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Get started with ACTalyse',
    price: 0,
    period: 'forever',
    credits: '10 practice sessions per month',
    features: [
      'Access to 1 training field (Social Work)',
      'Basic client scenarios',
      'Email support',
      'Community access',
    ],
    cta: 'Get started free',
    href: '#',
    highlighted: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'For regular practitioners',
    price: 19,
    period: 'month',
    credits: '50 practice sessions per month',
    features: [
      'All available training fields',
      'Expanded client scenarios',
      'Real-time feedback',
      'Email support',
      'Session history',
    ],
    cta: 'Start free trial',
    href: '#',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For dedicated professionals',
    price: 49,
    period: 'month',
    credits: '200 practice sessions per month',
    features: [
      'Everything in Standard',
      'Priority support',
      'Custom scenario requests',
      'Progress analytics',
      'Certificate of completion',
      'Early access to new fields',
    ],
    cta: 'Start free trial',
    href: '#',
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'For teams and institutions',
    price: null,
    period: 'Custom',
    credits: 'Unlimited sessions',
    features: [
      'Everything in Pro',
      'Unlimited users (team licence)',
      'Dedicated account manager',
      'Custom integrations',
      'SSO & compliance support',
      'Onboarding & training',
    ],
    cta: 'Contact sales',
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
            Choose the plan that fits your practice. Start free and upgrade as you grow.
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
          All paid plans include a 14-day free trial. No credit card required to start.
        </p>

        <footer className="mt-16 pt-8 border-t border-brand-100 text-center text-brand-700 text-sm">
          ACTalyse — Adaptive Communication Training + Catalyse. Built for professionals who care.
        </footer>
      </main>
    </div>
  )
}
