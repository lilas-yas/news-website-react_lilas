import { getTopStories, getLatestArticles, getMostRead } from "@/lib/data/articles";
import { HomePageContent } from "@/components/news/HomePageContent";

export default function HomePage() {
  const topStories = getTopStories(5);
  const { articles: latestArticles, totalPages } = getLatestArticles(1, 12);
  const mostReadArticles = getMostRead(5);

  const trendingTags = [
    "election2024",
    "ai",
    "climatechange",
    "economy",
    "sports",
    "technology",
    "health",
    "world",
  ];

  return (
    <HomePageContent
      topStories={topStories}
      latestArticles={latestArticles}
      mostReadArticles={mostReadArticles}
      trendingTags={trendingTags}
      totalPages={totalPages}
    />
  );
}
