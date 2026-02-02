import Link from "next/link";
import { subscriptionPlans } from "@/lib/data/subscriptions";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export const metadata = {
  title: "Subscribe - NewsDaily",
  description: "Subscribe to NewsDaily for unlimited access to premium content and exclusive features.",
};

export default function SubscribePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get unlimited access to premium journalism, in-depth analysis, and
          exclusive features with a NewsDaily subscription.
        </p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl border-2 p-8 ${
              plan.is_popular
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border"
            }`}
          >
            {plan.is_popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  <Star className="w-4 h-4" />
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">${plan.price_monthly}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                or ${plan.price_yearly}/year (save{" "}
                {Math.round(
                  ((plan.price_monthly * 12 - plan.price_yearly) /
                    (plan.price_monthly * 12)) *
                    100
                )}
                %)
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={`/checkout?plan=${plan.id}`}>
              <Button
                className="w-full"
                variant={plan.is_popular ? "default" : "outline"}
                size="lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Subscribe to NewsDaily?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Premium Content</h3>
            <p className="text-sm text-muted-foreground">
              Access exclusive articles, in-depth analysis, and premium features
              not available to free readers.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Ad-Free Experience</h3>
            <p className="text-sm text-muted-foreground">
              Enjoy uninterrupted reading without any advertisements cluttering
              your experience.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Exclusive Newsletters</h3>
            <p className="text-sm text-muted-foreground">
              Receive curated newsletters with breaking news and expert insights
              delivered to your inbox.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-muted-foreground text-sm">
              Yes, you can cancel your subscription at any time. You'll continue
              to have access until the end of your billing period.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground text-sm">
              We accept all major credit cards (Visa, MasterCard, American
              Express) and PayPal.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">
              Is there a free trial?
            </h3>
            <p className="text-muted-foreground text-sm">
              We offer a 7-day free trial for new subscribers. You won't be
              charged until the trial period ends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
