"use client";

import { useState } from "react";
import { Article, CardData } from "@/lib/types";
import { NewsCard } from "./NewsCard";
import { CardGrid } from "./CardGrid";
import { Sidebar } from "./SidebarWidgets";
import { Pagination } from "./Pagination";
import { getLatestArticles } from "@/lib/data/articles";
import HorizontalArticles from "./HorizontalArticles";

interface HomePageContentProps {
  topStories: Article[];
  latestArticles: Article[];
  mostReadArticles: Article[];
  trendingTags: string[];
  totalPages: number;
}

export function HomePageContent({
  topStories,
  latestArticles: initialArticles,
  mostReadArticles,
  trendingTags,
  totalPages: initialTotalPages,
}: HomePageContentProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState(initialArticles);
  const [totalPages, setTotalPages] = useState(initialTotalPages);

  const handlePageChange = (page: number) => {
    const { articles: newArticles, totalPages: newTotalPages } = getLatestArticles(page, 12);
    setArticles(newArticles);
    setTotalPages(newTotalPages);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const heroArticle = topStories[0];
  const secondaryStories = topStories.slice(1, 5);
  const horizontalArticles = topStories.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Top Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {heroArticle && (
              <NewsCard
                article={heroArticle}
                cardData={{
                  card_id: `card-home-hero-${heroArticle.article_id}`,
                  article_id: heroArticle.article_id,
                  surface: "home",
                  slot_position: 1,
                }}
                variant="hero"
              />
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {secondaryStories.map((article, index) => {
              const cardData: CardData = {
                card_id: `card-home-secondary-${article.article_id}-${index + 2}`,
                article_id: article.article_id,
                surface: "home",
                slot_position: index + 2,
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
        </div>
      </section>

      <HorizontalArticles articles={horizontalArticles} surface="home" title="Featured Articles" intervalMs={3500} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section>
            <h2 className="text-2xl font-bold mb-6">Latest News</h2>
            <CardGrid
              articles={articles}
              surface="home"
              showAds={true}
              adPositions={[3, 10]}
              columns={2}
            />

            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <Sidebar
            mostReadArticles={mostReadArticles}
            trendingTags={trendingTags}
            showNewsletter={true}
            showAds={true}
          />
        </div>
      </div>
    </div>
  );
}
