"use client";

import Image from "next/image";
import { ContentBlock } from "@/lib/types";
import { AdSlot } from "./AdSlot";

interface ArticleBodyProps {
  content: ContentBlock[];
  showAds?: boolean;
  isPremium?: boolean;
  isPreview?: boolean;
}

export function ArticleBody({
  content,
  showAds = true,
  isPremium = false,
  isPreview = false,
}: ArticleBodyProps) {
  // If preview mode, only show first few blocks
  const displayContent = isPreview ? content.slice(0, 4) : content;

  // Insert mid-article ad after paragraph 4
  const midAdPosition = 4;

  return (
    <div className="prose prose-lg max-w-none">
      {displayContent.map((block, index) => {
        const showMidAd = showAds && index === midAdPosition && !isPreview;

        return (
          <div key={index}>
            {showMidAd && (
              <div className="not-prose my-8 flex justify-center">
                <AdSlot slot="mid_article" />
              </div>
            )}
            <ContentBlockRenderer block={block} />
          </div>
        );
      })}

      {isPreview && (
        <div className="relative mt-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" style={{ top: "-100px", height: "200px" }} />
        </div>
      )}
    </div>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-foreground/90 leading-relaxed mb-6">
          {block.content}
        </p>
      );

    case "heading":
      if (block.level === 2) {
        return (
          <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
            {block.content}
          </h2>
        );
      }
      if (block.level === 3) {
        return (
          <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">
            {block.content}
          </h3>
        );
      }
      return (
        <h4 className="text-lg font-semibold mt-4 mb-2 text-foreground">
          {block.content}
        </h4>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-foreground/80 bg-muted/30 rounded-r-lg pr-4">
          {block.content}
        </blockquote>
      );

    case "image":
      return (
        <figure className="my-8">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <Image
              src={block.content || "/placeholder.svg"}
              alt={block.caption || "Article image"}
              fill
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="text-sm text-muted-foreground text-center mt-2">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "list":
      return (
        <div className="my-6">
          {block.content && (
            <p className="font-medium mb-3 text-foreground">{block.content}</p>
          )}
          <ul className="list-disc pl-6 space-y-2">
            {block.items?.map((item, index) => (
              <li key={index} className="text-foreground/90">
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}
