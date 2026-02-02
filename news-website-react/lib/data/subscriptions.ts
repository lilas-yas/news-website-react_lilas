import { SubscriptionPlan } from '../types';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'plan-basic',
    name: 'Basic',
    price_monthly: 9.99,
    price_yearly: 99.99,
    features: [
      'Unlimited article access',
      'Ad-free reading experience',
      'Daily newsletter',
      'Mobile app access',
    ],
    is_popular: false,
  },
  {
    id: 'plan-premium',
    name: 'Premium',
    price_monthly: 19.99,
    price_yearly: 199.99,
    features: [
      'Everything in Basic',
      'Exclusive premium content',
      'Early access to breaking news',
      'Downloadable articles for offline reading',
      'Priority customer support',
      'Monthly exclusive webinars',
    ],
    is_popular: true,
  },
  {
    id: 'plan-enterprise',
    name: 'Enterprise',
    price_monthly: 49.99,
    price_yearly: 499.99,
    features: [
      'Everything in Premium',
      'Team access (up to 10 users)',
      'API access for integrations',
      'Custom news feeds',
      'Dedicated account manager',
      'White-label options',
      'Advanced analytics dashboard',
    ],
    is_popular: false,
  },
];

export function getPlanById(id: string): SubscriptionPlan | undefined {
  return subscriptionPlans.find(p => p.id === id);
}
