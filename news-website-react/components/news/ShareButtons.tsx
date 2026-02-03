"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin } from "lucide-react";

type ShareButtonsProps = {
  title: string;
};

export function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState(""); // ✅ نفس القيمة على السيرفر وأول رندر بالعميل

  useEffect(() => {
    // ✅ يتعبّى فقط على المتصفح بعد التحميل
    setUrl(window.location.href);
  }, []);

  const links = useMemo(() => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);

    return {
      twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };
  }, [title, url]);

  const disabled = !url; // أول لحظة قبل ما ينعبي

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" asChild disabled={disabled}>
        <a
          href={disabled ? "#" : links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild disabled={disabled}>
        <a
          href={disabled ? "#" : links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild disabled={disabled}>
        <a
          href={disabled ? "#" : links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
}
