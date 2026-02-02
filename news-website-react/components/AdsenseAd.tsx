"use client";

import { useEffect, useId } from "react";

type AdsenseAdProps = {
  slot: string;
  className?: string;
  style?: React.CSSProperties;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  responsive?: boolean;
};

export default function AdsenseAd({
  slot,
  className,
  style,
  format = "auto",
  responsive = true,
}: AdsenseAdProps) {
  const id = useId();

  useEffect(() => {
    const key = `adsbygoogle-${id}`;
    // @ts-ignore
    if (window[key]) return;
    // @ts-ignore
    window[key] = true;

    try {
      // @ts-expect-error adsbygoogle injected by AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, [id]);

  return (
    <ins
      className={`adsbygoogle ${className ?? ""}`}
      style={{ display: "block", ...style }}
      data-ad-client="ca-pub-5313554185887378"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}
