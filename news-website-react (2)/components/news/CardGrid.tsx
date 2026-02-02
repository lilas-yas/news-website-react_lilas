"use client";

import { Article, CardData } from "@/lib/types";
import { NewsCard } from "./NewsCard";
import { AdSlot } from "./AdSlot";

interface CardGridProps {
  articles: Article[];
  surface: CardData["surface"];
  showAds?: boolean;
  adPositions?: number[];
  columns?: 1 | 2 | 3 | 4;
  variant?: "default" | "horizontal";
}

export function CardGrid({
  articles,
  surface,
  showAds = false,
  adPositions = [3, 10],
  columns = 3,
  variant = "default",
}: CardGridProps) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  // Build list with ads inserted at specified positions
  const itemsWithAds: Array<{ type: "article"; article: Article; position: number } | { type: "ad"; position: number }> = [];
  let articleIndex = 0;
  let adIndex = 0;

  for (let i = 0; i < articles.length + (showAds ? adPositions.length : 0); i++) {
    if (showAds && adPositions.includes(i) && adIndex < adPositions.length) {
      itemsWithAds.push({ type: "ad", position: i });
      adIndex++;
    } else if (articleIndex < articles.length) {
      itemsWithAds.push({ type: "article", article: articles[articleIndex], position: articleIndex + 1 });
      articleIndex++;
    }
  }

  if (variant === "horizontal") {
    return (
      <div className="flex flex-col divide-y">
        {itemsWithAds.map((item, index) => {
          if (item.type === "ad") {
            return (
              <div key={`ad-${item.position}`} className="py-4">
                <AdSlot slot="in_feed" className="mx-auto" />
              </div>
            );
          }

          const cardData: CardData = {
            card_id: `card-${surface}-${item.article.article_id}-${item.position}`,
            article_id: item.article.article_id,
            surface,
            slot_position: item.position,
          };

          return (
            <NewsCard
              key={item.article.article_id}
              article={item.article}
              cardData={cardData}
              variant="horizontal"
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid ${columnClasses[columns]} gap-6`}>
      {itemsWithAds.map((item, index) => {
        if (item.type === "ad") {
          return (
            <div key={`ad-${item.position}`} className="col-span-full">
              <AdSlot slot="in_feed" className="mx-auto" />
            </div>
          );
        }

        const cardData: CardData = {
          card_id: `card-${surface}-${item.article.article_id}-${item.position}`,
          article_id: item.article.article_id,
          surface,
          slot_position: item.position,
        };

        return (
          <NewsCard
            key={item.article.article_id}
            article={item.article}
            cardData={cardData}
          />
        );
      })}
    </div>
  );
}
