"use client";

import { Article, CardData } from "@/lib/types";
import { NewsCard } from "./NewsCard";

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

export function RelatedArticles({
  articles,
  title = "Related Articles",
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="border-t pt-8 mt-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => {
          const cardData: CardData = {
            card_id: `card-related-${article.article_id}-${index + 1}`,
            article_id: article.article_id,
            surface: "related",
            slot_position: index + 1,
          };

          return (
            <NewsCard
              key={article.article_id}
              article={article}
              cardData={cardData}
              showExcerpt={false}
            />
          );
        })}
      </div>
    </section>
  );
}
