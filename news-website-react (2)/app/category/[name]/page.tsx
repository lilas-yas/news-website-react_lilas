import { notFound } from "next/navigation";
import { categories, getArticlesByCategory, getMostRead } from "@/lib/data/articles";
import { Category } from "@/lib/types";
import { CategoryPageContent } from "@/components/news/CategoryPageContent";

interface CategoryPageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    name: category,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { name } = await params;
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

  const label = categoryLabels[name] || name;

  return {
    title: `${label} News - NewsDaily`,
    description: `Latest ${label.toLowerCase()} news, analysis, and expert commentary from NewsDaily.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { name } = await params;

  if (!categories.includes(name as Category)) {
    notFound();
  }

  const articles = getArticlesByCategory(name as Category);
  const mostReadArticles = getMostRead(5);

  const trendingTags = [
    "breaking",
    "analysis",
    "exclusive",
    "opinion",
    "investigation",
    "update",
  ];

  return (
    <CategoryPageContent
      category={name as Category}
      articles={articles}
      mostReadArticles={mostReadArticles}
      trendingTags={trendingTags}
    />
  );
}
