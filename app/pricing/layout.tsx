import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — ACTalyse',
  description: 'Subscription plans for ACTalyse: Free, Standard, Pro, and Premium tiers for adaptive communication training.',
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
