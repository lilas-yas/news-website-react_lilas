"use client";

import React from "react"

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Article, Category } from "@/lib/types";
import { searchArticles, categories } from "@/lib/data/articles";
import { CardGrid } from "./CardGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, AlertCircle } from "lucide-react";

type DateRange = "day" | "week" | "month" | "all";

export function SearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get("q") || "";
  const initialCategory = (searchParams.get("category") as Category) || undefined;
  const initialDateRange = (searchParams.get("date") as DateRange) || "all";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<Category | undefined>(initialCategory);
  const [dateRange, setDateRange] = useState<DateRange>(initialDateRange);
  const [results, setResults] = useState<Article[]>([]);
  const [hasSearched, setHasSearched] = useState(!!initialQuery);

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

  useEffect(() => {
    if (initialQuery) {
      const searchResults = searchArticles(initialQuery, initialCategory, initialDateRange);
      setResults(searchResults);
      setHasSearched(true);
    }
  }, [initialQuery, initialCategory, initialDateRange]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const params = new URLSearchParams();
    params.set("q", query.trim());
    if (category) params.set("category", category);
    if (dateRange !== "all") params.set("date", dateRange);

    router.push(`/search?${params.toString()}`);

    const searchResults = searchArticles(query.trim(), category, dateRange);
    setResults(searchResults);
    setHasSearched(true);
  };

  const clearFilters = () => {
    setCategory(undefined);
    setDateRange("all");
  };

  const getSuggestions = (): string[] => {
    if (!query || results.length > 0) return [];
    
    // Simple suggestions based on common words
    const suggestions: Record<string, string[]> = {
      pol: ["politics", "policy"],
      eco: ["economy", "economics"],
      tec: ["technology", "tech"],
      spo: ["sports"],
      hea: ["health", "healthcare"],
      bus: ["business"],
      sci: ["science"],
      ent: ["entertainment"],
      wor: ["world"],
    };

    const prefix = query.toLowerCase().slice(0, 3);
    return suggestions[prefix] || [];
  };

  const suggestions = getSuggestions();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Articles</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12 text-lg"
              autoFocus
            />
          </div>
          <Button type="submit" size="lg" className="h-12">
            Search
          </Button>
        </div>
      </form>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8 pb-4 border-b">
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Category:</span>
          <select
            value={category || ""}
            onChange={(e) => setCategory((e.target.value || undefined) as Category | undefined)}
            className="h-9 rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {categoryLabels[cat]}
              </option>
            ))}
          </select>
        </div>

        {/* Date Filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Date:</span>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value as DateRange)}
            className="h-9 rounded-md border border-input bg-background px-3 text-sm"
          >
            <option value="all">All Time</option>
            <option value="day">Last 24 Hours</option>
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
          </select>
        </div>

        {/* Clear Filters */}
        {(category || dateRange !== "all") && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="w-4 h-4 mr-1" />
            Clear Filters
          </Button>
        )}

        {/* Results Count */}
        {hasSearched && (
          <span className="text-sm text-muted-foreground ml-auto">
            {results.length} {results.length === 1 ? "result" : "results"} found
          </span>
        )}
      </div>

      {/* Results */}
      {hasSearched ? (
        results.length > 0 ? (
          <CardGrid
            articles={results}
            surface="search"
            showAds={true}
            adPositions={[5]}
            columns={1}
            variant="horizontal"
          />
        ) : (
          <div className="text-center py-16">
            <AlertCircle className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any articles matching "{query}"
            </p>

            {/* Did You Mean */}
            {suggestions.length > 0 && (
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Did you mean:</p>
                <div className="flex justify-center gap-2">
                  {suggestions.map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setQuery(suggestion);
                        router.push(`/search?q=${encodeURIComponent(suggestion)}`);
                        setResults(searchArticles(suggestion, category, dateRange));
                      }}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        )
      ) : (
        <div className="text-center py-16">
          <Search className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Search NewsDaily</h2>
          <p className="text-muted-foreground">
            Enter a search term to find articles across all categories
          </p>
        </div>
      )}
    </div>
  );
}
