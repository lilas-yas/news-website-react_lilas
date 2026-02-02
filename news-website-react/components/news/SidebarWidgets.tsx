"use client";

import React from "react"

import { useState } from "react";
import { Article, CardData } from "@/lib/types";
import { NewsCard } from "./NewsCard";
import { AdSlot } from "./AdSlot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendingUp, Mail, CheckCircle } from "lucide-react";

interface MostReadWidgetProps {
  articles: Article[];
}

export function MostReadWidget({ articles }: MostReadWidgetProps) {
  return (
    <div className="border rounded-lg p-4 bg-card">
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        Most Read
      </h3>
      <div className="space-y-1 divide-y">
        {articles.map((article, index) => {
          const cardData: CardData = {
            card_id: `card-most-read-${article.article_id}-${index + 1}`,
            article_id: article.article_id,
            surface: "home",
            slot_position: index + 1,
          };
          return (
            <NewsCard
              key={article.article_id}
              article={article}
              cardData={cardData}
              variant="compact"
            />
          );
        })}
      </div>
    </div>
  );
}

interface TrendingWidgetProps {
  tags: string[];
}

export function TrendingWidget({ tags }: TrendingWidgetProps) {
  return (
    <div className="border rounded-lg p-4 bg-card">
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary" />
        Trending Topics
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <a
            key={tag}
            href={`/search?q=${encodeURIComponent(tag)}`}
            className="px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium transition-colors"
          >
            #{tag}
          </a>
        ))}
      </div>
    </div>
  );
}

export function NewsletterWidget() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Mock success
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border rounded-lg p-4 bg-card">
        <div className="flex flex-col items-center text-center py-4">
          <CheckCircle className="w-12 h-12 text-green-500 mb-3" />
          <h3 className="font-bold text-lg mb-1">You're subscribed!</h3>
          <p className="text-sm text-muted-foreground">
            Check your inbox for a confirmation email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4 bg-card">
      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
        <Mail className="w-5 h-5 text-primary" />
        Newsletter
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Get the latest news delivered directly to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? "border-destructive" : ""}
          />
          {error && (
            <p className="text-xs text-destructive mt-1">{error}</p>
          )}
        </div>
        <Button type="submit" className="w-full">
          Subscribe
        </Button>
      </form>
      <p className="text-xs text-muted-foreground mt-3">
        By subscribing, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

export function SidebarAdWidget() {
  return (
    <div className="flex flex-col items-center gap-4">
      <AdSlot slot="sidebar" />
    </div>
  );
}

interface SidebarProps {
  mostReadArticles?: Article[];
  trendingTags?: string[];
  showNewsletter?: boolean;
  showAds?: boolean;
}

export function Sidebar({
  mostReadArticles = [],
  trendingTags = [],
  showNewsletter = true,
  showAds = true,
}: SidebarProps) {
  return (
    <aside className="space-y-6">
      {mostReadArticles.length > 0 && (
        <MostReadWidget articles={mostReadArticles} />
      )}
      {showAds && <SidebarAdWidget />}
      {trendingTags.length > 0 && <TrendingWidget tags={trendingTags} />}
      {showNewsletter && <NewsletterWidget />}
      {showAds && <SidebarAdWidget />}
    </aside>
  );
}
