// Content Model Types

export interface Article {
  article_id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: ContentBlock[];
  category: Category;
  tags: string[];
  author: Author;
  published_at: string;
  updated_at?: string;
  hero_image_url: string;
  reading_time_minutes: number;
  is_premium: boolean;
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'image' | 'list';
  content: string;
  level?: number; // for headings
  items?: string[]; // for lists
  caption?: string; // for images
}

export interface Author {
  id: string;
  name: string;
  avatar_url: string;
  bio: string;
}

export type Category = 
  | 'politics'
  | 'economy'
  | 'sports'
  | 'tech'
  | 'world'
  | 'entertainment'
  | 'science'
  | 'health'
  | 'business'
  | 'opinion';

export interface CardData {
  card_id: string;
  article_id: string;
  surface: 'home' | 'category' | 'search' | 'related';
  slot_position: number;
}

export interface Ad {
  ad_id: string;
  ad_slot: 'top_article' | 'mid_article' | 'sidebar' | 'in_feed' | 'footer';
  targeting_context?: {
    category?: Category;
    device?: 'mobile' | 'desktop';
  };
  creative_url: string;
  creative_alt: string;
  landing_url: string;
  advertiser: string;
}

export interface Comment {
  id: string;
  article_id: string;
  author_name: string;
  content: string;
  created_at: string;
  likes: number;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price_monthly: number;
  price_yearly: number;
  features: string[];
  is_popular: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  subscription_status: 'none' | 'basic' | 'premium' | 'enterprise';
  subscription_expires_at?: string;
}

export interface SearchFilters {
  query: string;
  category?: Category;
  dateRange?: 'day' | 'week' | 'month' | 'all';
}
