"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Article, CardData } from "@/lib/types";
import { NewsCard } from "./NewsCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalArticlesProps {
  title?: string;
  articles: Article[];
  surface: "home" | "search" | "category" | "related";
  intervalMs?: number;
}

export default function HorizontalArticles({
  title = "Featured Articles",
  articles,
  surface,
  intervalMs = 3500,
}: HorizontalArticlesProps) {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: intervalMs,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [intervalMs]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnapCount(emblaApi.scrollSnapList().length);
      onSelect();
    });

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  if (!articles?.length) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex items-center gap-2">
          <Button type="button" variant="outline" size="icon" onClick={scrollPrev} aria-label="Previous">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button type="button" variant="outline" size="icon" onClick={scrollNext} aria-label="Next">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {articles.map((article, index) => {
            const cardData: CardData = {
              card_id: `card-${surface}-carousel-${article.article_id}-${index + 1}`,
              article_id: article.article_id,
              surface,
              slot_position: index + 1,
            };

            return (
              <div key={article.article_id} className="shrink-0 w-full">
                <div className="px-1">
                  <NewsCard
                    article={article}
                    cardData={cardData}
                    variant="horizontal"
                    showExcerpt={true}
                    showImage={true}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length: snapCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === selectedIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
