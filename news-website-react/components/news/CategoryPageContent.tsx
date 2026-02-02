"use client";

import { useState, useMemo } from "react";
import { Article, Category } from "@/lib/types";
import { CardGrid } from "./CardGrid";
import { Sidebar } from "./SidebarWidgets";
import { Pagination } from "./Pagination";
import { Button } from "@/components/ui/button";

interface CategoryPageContentProps {
  category: Category;
  articles: Article[];
  mostReadArticles: Article[];
  trendingTags: string[];
}

type SortOption = "latest" | "popular" | "premium";

export function CategoryPageContent({
  category,
  articles,
  mostReadArticles,
  trendingTags,
}: CategoryPageContentProps) {
  const [sortBy, setSortBy] = useState<SortOption>("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const categoryLabels: Record<Category, string> = {
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

  const sortedArticles = useMemo(() => {
    let sorted = [...articles];

    switch (sortBy) {
      case "latest":
        sorted.sort(
          (a, b) =>
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()
        );
        break;
      case "popular":
        // Simulate popularity by reading time (longer = more popular)
        sorted.sort(
          (a, b) => b.reading_time_minutes - a.reading_time_minutes
        );
        break;
      case "premium":
        sorted = sorted.filter((a) => a.is_premium);
        break;
    }

    return sorted;
  }, [articles, sortBy]);

  const totalPages = Math.ceil(sortedArticles.length / pageSize);
  const paginatedArticles = sortedArticles.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {categoryLabels[category]}
        </h1>
        <p className="text-muted-foreground">
          Latest {categoryLabels[category].toLowerCase()} news, analysis, and
          expert commentary
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b">
        <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
        <Button
          variant={sortBy === "latest" ? "default" : "outline"}
          size="sm"
          onClick={() => handleSortChange("latest")}
        >
          Latest
        </Button>
        <Button
          variant={sortBy === "popular" ? "default" : "outline"}
          size="sm"
          onClick={() => handleSortChange("popular")}
        >
          Popular
        </Button>
        <Button
          variant={sortBy === "premium" ? "default" : "outline"}
          size="sm"
          onClick={() => handleSortChange("premium")}
        >
          Premium Only
        </Button>
        <span className="text-sm text-muted-foreground ml-auto">
          {sortedArticles.length} articles
        </span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles Grid */}
        <div className="lg:col-span-2">
          {paginatedArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No articles found in this category.
              </p>
            </div>
          ) : (
            <>
              <CardGrid
                articles={paginatedArticles}
                surface="category"
                showAds={true}
                adPositions={[3, 9]}
                columns={2}
              />

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
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
