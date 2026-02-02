"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle } from "lucide-react";

export function PremiumGate() {
  const benefits = [
    "Unlimited access to all premium articles",
    "Ad-free reading experience",
    "Exclusive newsletters and analysis",
    "Early access to breaking news",
    "Downloadable articles for offline reading",
  ];

  return (
    <div className="relative bg-gradient-to-b from-transparent to-background pt-32 -mt-32">
      <div className="bg-muted/80 backdrop-blur-sm border rounded-xl p-8 text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-amber-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Premium Content</h3>
        <p className="text-muted-foreground mb-6">
          This article is available exclusively to premium subscribers.
          Subscribe now to unlock this and all premium content.
        </p>

        <div className="text-left mb-6">
          <p className="font-medium mb-3">What you'll get:</p>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/subscribe">
            <Button size="lg" className="w-full sm:w-auto">
              Subscribe Now
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Already a subscriber? Sign in
            </Button>
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Plans start at $9.99/month. Cancel anytime.
        </p>
      </div>
    </div>
  );
}
