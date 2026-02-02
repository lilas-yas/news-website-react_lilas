import { Ad } from '../types';

export const ads: Ad[] = [
  {
    ad_id: 'ad-top-1',
    ad_slot: 'top_article',
    creative_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=728&h=90&fit=crop',
    creative_alt: 'Business Solutions Banner',
    landing_url: 'https://example.com/business-solutions',
    advertiser: 'TechCorp Solutions',
  },
  {
    ad_id: 'ad-mid-1',
    ad_slot: 'mid_article',
    creative_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
    creative_alt: 'Cloud Services Ad',
    landing_url: 'https://example.com/cloud-services',
    advertiser: 'CloudFirst Inc',
  },
  {
    ad_id: 'ad-sidebar-1',
    ad_slot: 'sidebar',
    creative_url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=250&fit=crop',
    creative_alt: 'Finance App Ad',
    landing_url: 'https://example.com/finance-app',
    advertiser: 'FinanceApp Pro',
  },
  {
    ad_id: 'ad-sidebar-2',
    ad_slot: 'sidebar',
    creative_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=250&fit=crop',
    creative_alt: 'Social Media Tool Ad',
    landing_url: 'https://example.com/social-tool',
    advertiser: 'SocialBoost',
  },
  {
    ad_id: 'ad-infeed-1',
    ad_slot: 'in_feed',
    targeting_context: { category: 'tech' },
    creative_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop',
    creative_alt: 'Tech Gadgets Ad',
    landing_url: 'https://example.com/tech-gadgets',
    advertiser: 'GadgetWorld',
  },
  {
    ad_id: 'ad-infeed-2',
    ad_slot: 'in_feed',
    targeting_context: { category: 'sports' },
    creative_url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=200&fit=crop',
    creative_alt: 'Sports Equipment Ad',
    landing_url: 'https://example.com/sports-gear',
    advertiser: 'SportsPro Gear',
  },
  {
    ad_id: 'ad-infeed-3',
    ad_slot: 'in_feed',
    creative_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    creative_alt: 'E-commerce Platform Ad',
    landing_url: 'https://example.com/ecommerce',
    advertiser: 'ShopEasy',
  },
  {
    ad_id: 'ad-footer-1',
    ad_slot: 'footer',
    creative_url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=970&h=90&fit=crop',
    creative_alt: 'Newsletter Signup Banner',
    landing_url: 'https://example.com/newsletter',
    advertiser: 'Daily Digest',
  },
];

export function getAdBySlot(slot: Ad['ad_slot']): Ad | undefined {
  return ads.find(ad => ad.ad_slot === slot);
}

export function getAdsBySlot(slot: Ad['ad_slot']): Ad[] {
  return ads.filter(ad => ad.ad_slot === slot);
}

export function getInFeedAd(index: number): Ad | undefined {
  const inFeedAds = ads.filter(ad => ad.ad_slot === 'in_feed');
  return inFeedAds[index % inFeedAds.length];
}
