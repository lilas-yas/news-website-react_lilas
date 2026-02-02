import { notFound } from "next/navigation";
import {
  articles,
  getArticleById,
  getRelatedArticles,
  getNextArticle,
  getPreviousArticle,
} from "@/lib/data/articles";
import { getCommentsByArticleId } from "@/lib/data/comments";
import { ArticlePageContent } from "@/components/news/ArticlePageContent";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.article_id,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    return {
      title: "Article Not Found - NewsDaily",
    };
  }

  return {
    title: `${article.title} - NewsDaily`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.hero_image_url],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(id, 4);
  const nextArticle = getNextArticle(id);
  const previousArticle = getPreviousArticle(id);
  const comments = getCommentsByArticleId(id);

  return (
    <ArticlePageContent
      article={article}
      relatedArticles={relatedArticles}
      nextArticle={nextArticle}
      previousArticle={previousArticle}
      comments={comments}
    />
  );
}
