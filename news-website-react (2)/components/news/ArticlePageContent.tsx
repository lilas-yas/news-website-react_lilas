"use client";

import Image from "next/image";
import Link from "next/link";
import { Article, Comment } from "@/lib/types";
import { ArticleBody } from "./ArticleBody";
import { RelatedArticles } from "./RelatedArticles";
import { Comments } from "./Comments";
import { ShareButtons } from "./ShareButtons";
import { PremiumGate } from "./PremiumGate";
import { AdSlot } from "./AdSlot";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, User, ChevronLeft, ChevronRight, Lock } from "lucide-react";

interface ArticlePageContentProps {
  article: Article;
  relatedArticles: Article[];
  nextArticle?: Article;
  previousArticle?: Article;
  comments: Comment[];
}

export function ArticlePageContent({
  article,
  relatedArticles,
  nextArticle,
  previousArticle,
  comments,
}: ArticlePageContentProps) {
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
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Simulate user not being premium subscriber
  const userIsPremium = false;
  const showPremiumGate = article.is_premium && !userIsPremium;

  return (
    <article className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {/* Top Ad */}
          <div className="mb-6 flex justify-center">
            <AdSlot slot="top_article" />
          </div>

          {/* Article Header */}
          <header className="mb-8">
            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Link href={`/category/${article.category}`}>
                <Badge variant="default" className="hover:bg-primary/90">
                  {categoryLabels[article.category]}
                </Badge>
              </Link>
              {article.is_premium && (
                <Badge variant="outline" className="text-amber-600 border-amber-500">
                  <Lock className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              )}
              {article.tags.map((tag) => (
                <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                  <Badge variant="secondary" className="hover:bg-secondary/80">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
              {article.title}
            </h1>

            {/* Subtitle */}
            {article.subtitle && (
              <p className="text-xl text-muted-foreground mb-6">
                {article.subtitle}
              </p>
            )}

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Image
                  src={article.author.avatar_url || "/placeholder.svg"}
                  alt={article.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-foreground">
                    {article.author.name}
                  </p>
                  <p className="text-xs">{article.author.bio.slice(0, 50)}...</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(article.published_at)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.reading_time_minutes} min read
              </div>
            </div>

            {/* Share */}
            <ShareButtons title={article.title} />
          </header>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-8 bg-muted">
            <Image
              src={article.hero_image_url || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <ArticleBody
            content={article.content}
            showAds={!showPremiumGate}
            isPremium={article.is_premium}
            isPreview={showPremiumGate}
          />

          {/* Premium Gate */}
          {showPremiumGate && <PremiumGate />}

          {/* Article Navigation */}
          {!showPremiumGate && (
            <nav className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t">
              {previousArticle ? (
                <Link
                  href={`/article/${previousArticle.article_id}`}
                  className="flex-1 group"
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 px-4 justify-start text-left bg-transparent"
                  >
                    <ChevronLeft className="w-5 h-5 mr-2 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">
                        Previous Article
                      </p>
                      <p className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                        {previousArticle.title}
                      </p>
                    </div>
                  </Button>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextArticle && (
                <Link
                  href={`/article/${nextArticle.article_id}`}
                  className="flex-1 group"
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 px-4 justify-end text-right bg-transparent"
                  >
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground mb-1">
                        Next Article
                      </p>
                      <p className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
                        {nextArticle.title}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 ml-2 shrink-0" />
                  </Button>
                </Link>
              )}
            </nav>
          )}

          {/* Related Articles */}
          {!showPremiumGate && <RelatedArticles articles={relatedArticles} />}

          {/* Comments */}
          {!showPremiumGate && (
            <Comments articleId={article.article_id} initialComments={comments} />
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-20">
            <AdSlot slot="sidebar" className="mb-6" />

            {/* Author Info Card */}
            <div className="border rounded-lg p-4 bg-card mb-6">
              <h3 className="font-bold mb-4">About the Author</h3>
              <div className="flex items-start gap-3">
                <Image
                  src={article.author.avatar_url || "/placeholder.svg"}
                  alt={article.author.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {article.author.bio}
                  </p>
                </div>
              </div>
            </div>

            <AdSlot slot="sidebar" />
          </div>
        </aside>
      </div>
    </article>
  );
}
