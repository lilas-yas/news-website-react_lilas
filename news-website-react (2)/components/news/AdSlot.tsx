"use client";

import { Ad } from "@/lib/types";
import { getAdBySlot, getAdsBySlot } from "@/lib/data/ads";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  slot: Ad["ad_slot"];
  className?: string;
}

export function AdSlot({ slot, className }: AdSlotProps) {
  const ads = getAdsBySlot(slot);
  const ad = ads[Math.floor(Math.random() * ads.length)] || getAdBySlot(slot);

  if (!ad) return null;

  const slotStyles: Record<Ad["ad_slot"], string> = {
    top_article: "w-full max-w-[728px] h-[90px]",
    mid_article: "w-full max-w-[600px] h-[250px]",
    sidebar: "w-[300px] h-[250px]",
    in_feed: "w-full max-w-[400px] h-[200px]",
    footer: "w-full max-w-[970px] h-[90px]",
  };

  return (
    <a
      href={ad.landing_url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      data-ad-id={ad.ad_id}
      data-ad-slot={ad.ad_slot}
      data-advertiser={ad.advertiser}
      className={cn(
        "block relative bg-muted rounded-lg overflow-hidden group",
        slotStyles[slot],
        className
      )}
    >
      <Image
        src={ad.creative_url || "/placeholder.svg"}
        alt={ad.creative_alt}
        fill
        className="object-cover"
      />
      <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-black/60 text-white text-[10px] rounded">
        Ad
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-black/60 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        {ad.advertiser}
      </div>
    </a>
  );
}
