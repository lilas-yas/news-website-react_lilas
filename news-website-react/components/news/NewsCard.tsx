"use client";

import Link from "next/link";
import Image from "next/image";
import { Article, CardData } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Clock, Lock } from "lucide-react";

interface NewsCardProps {
  article: Article;
  cardData: CardData;
  variant?: "default" | "hero" | "compact" | "horizontal";
  showExcerpt?: boolean;
  showImage?: boolean;
}

export function NewsCard({
  article,
  cardData,
  variant = "default",
  showExcerpt = true,
  showImage = true,
}: NewsCardProps) {
  const categoryLabels: Record<string, string> = {
    politics: "Politics",
    economy: "Economy",
    sports: "Sports",
    tech: "Technology",
    world: "World",
    entertainment: "Entertainment",
    science: "Science",
    health: "Health",
    business: "Business",
    opinion: "Opinion",
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "Yesterday";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  if (variant === "hero") {
    return (
      <Link
        href={`/article/${article.article_id}`}
        data-card-id={cardData.card_id}
        data-article-id={cardData.article_id}
        data-surface={cardData.surface}
        data-slot-position={cardData.slot_position}
        className="group relative block overflow-hidden rounded-xl bg-muted aspect-[16/9] md:aspect-[21/9]"
      >
        {showImage && (
          <Image
            src={article.hero_image_url || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              {categoryLabels[article.category]}
            </Badge>
            {article.is_premium && (
              <Badge variant="outline" className="bg-amber-500/20 text-amber-200 border-amber-500/50">
                <Lock className="w-3 h-3 mr-1" />
                Premium
              </Badge>
            )}
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-2 line-clamp-2 group-hover:underline">
            {article.title}
          </h2>
          {article.subtitle && (
            <p className="text-white/80 text-sm md:text-base mb-3 line-clamp-2 hidden md:block">
              {article.subtitle}
            </p>
          )}
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <span>{article.author.name}</span>
            <span>{formatDate(article.published_at)}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.reading_time_minutes} min read
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={`/article/${article.article_id}`}
        data-card-id={cardData.card_id}
        data-article-id={cardData.article_id}
        data-surface={cardData.surface}
        data-slot-position={cardData.slot_position}
        className="group flex items-start gap-3 py-3"
      >
        <span className="text-2xl font-bold text-muted-foreground/50 w-6 shrink-0">
          {cardData.slot_position}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <span>{formatDate(article.published_at)}</span>
            {article.is_premium && <Lock className="w-3 h-3 text-amber-500" />}
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link
        href={`/article/${article.article_id}`}
        data-card-id={cardData.card_id}
        data-article-id={cardData.article_id}
        data-surface={cardData.surface}
        data-slot-position={cardData.slot_position}
        className="group flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
      >
        {showImage && (
          <div className="relative w-32 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden shrink-0 bg-muted">
            <Image
              src={article.hero_image_url || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {categoryLabels[article.category]}
            </Badge>
            {article.is_premium && (
              <Lock className="w-3 h-3 text-amber-500" />
            )}
          </div>
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          {showExcerpt && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1 hidden md:block">
              {article.excerpt}
            </p>
          )}
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span>{article.author.name}</span>
            <span>{formatDate(article.published_at)}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link
      href={`/article/${article.article_id}`}
      data-card-id={cardData.card_id}
      data-article-id={cardData.article_id}
      data-surface={cardData.surface}
      data-slot-position={cardData.slot_position}
      className="group flex flex-col rounded-lg overflow-hidden border bg-card hover:shadow-md transition-shadow"
    >
      {showImage && (
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={article.hero_image_url || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {categoryLabels[article.category]}
          </Badge>
          {article.is_premium && (
            <Badge variant="outline" className="text-xs text-amber-600 border-amber-500/50">
              <Lock className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          )}
        </div>
        <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors mb-2">
          {article.title}
        </h3>
        {showExcerpt && (
          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
            {article.excerpt}
          </p>
        )}
        <div className="flex items-center justify-between mt-3 pt-3 border-t text-xs text-muted-foreground">
          <span>{article.author.name}</span>
          <div className="flex items-center gap-2">
            <span>{formatDate(article.published_at)}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.reading_time_minutes}m
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
