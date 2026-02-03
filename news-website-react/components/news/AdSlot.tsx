"use client";
import AdsenseAd from "@/components/AdsenseAd";
import { Ad } from "@/lib/types";
import { getAdBySlot, getAdsBySlot } from "@/lib/data/ads";
import { cn } from "@/lib/utils";

interface AdSlotProps {
  slot: Ad["ad_slot"];
  className?: string;
}

export function AdSlot({ slot, className }: AdSlotProps) {
  const ads = getAdsBySlot(slot);
const ad = ads[0] || getAdBySlot(slot);

  if (!ad) return null;

  const slotStyles: Record<Ad["ad_slot"], string> = {
    top_article: "w-full max-w-[728px] h-[90px]",
    mid_article: "w-full max-w-[600px] h-[250px]",
    sidebar: "w-[300px] h-[250px]",
    in_feed: "w-full max-w-[400px] h-[200px]",
    footer: "w-full max-w-[970px] h-[90px]",
  };  

  return (
  <div
    data-ad-id={ad.ad_id}
    data-ad-slot={ad.ad_slot}
    data-advertiser={ad.advertiser}
    className={cn(
      "block relative bg-muted rounded-lg overflow-hidden group",
      slotStyles[slot],
      className
    )}
  >
    {/* Google AdSense (يحافظ على نفس مساحة الإعلان) */}
    <div className="w-full h-full">
      <AdsenseAd
        slot="6131382082"
        className="w-full h-full"
        style={{ minHeight: "100%" }}
      />
    </div>

    {/* نفس شارة Ad */}
    <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-black/60 text-white text-[10px] rounded pointer-events-none">
      Ad
    </div>

    {/* نفس نص المعلن عند hover */}
    <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-black/60 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Sponsored
    </div>
  </div>
);
}
