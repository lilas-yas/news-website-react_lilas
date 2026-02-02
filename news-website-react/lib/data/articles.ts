import { Article, Category, ContentBlock } from "../types";
import { authors } from "./authors";

const generateContent = (topic: string, isPremium: boolean): ContentBlock[] => {
  const blocks: ContentBlock[] = [
    {
      type: "paragraph",
      content: `The latest developments in ${topic} have captured the attention of experts and the public alike. As we delve deeper into this story, it becomes clear that the implications are far-reaching and will likely shape policy discussions for months to come.`,
    },
    {
      type: "paragraph",
      content: `Industry analysts have been closely monitoring these developments, noting that the current trajectory suggests significant changes ahead. "We're seeing unprecedented shifts in how organizations approach this challenge," said one leading expert who spoke on condition of anonymity.`,
    },
    {
      type: "heading",
      content: "Background and Context",
      level: 2,
    },
    {
      type: "paragraph",
      content: `To understand the full scope of this situation, we need to examine the historical context. Over the past decade, gradual changes have accumulated to create the conditions we see today. Multiple factors have converged to bring this issue to the forefront of public discourse.`,
    },
    {
      type: "paragraph",
      content: `Research conducted by leading institutions reveals a pattern of evolution that many had anticipated but few expected to materialize so quickly. The data shows a clear trend line that policymakers and business leaders can no longer ignore.`,
    },
    {
      type: "quote",
      content: `"This represents a pivotal moment in our understanding of the issue. The decisions made in the coming weeks will have lasting consequences for generations to come." — Dr. Elizabeth Monroe, Research Director`,
    },
    {
      type: "heading",
      content: "Key Stakeholder Perspectives",
      level: 2,
    },
    {
      type: "paragraph",
      content: `Various stakeholders have weighed in with their perspectives on the matter. Government officials have emphasized the need for balanced approaches that consider both immediate needs and long-term sustainability.`,
    },
    {
      type: "list",
      content: "Key points from stakeholder discussions:",
      items: [
        "Immediate action is required to address urgent concerns",
        "Long-term planning must account for evolving circumstances",
        "Collaboration between public and private sectors is essential",
        "International coordination will be necessary for optimal outcomes",
      ],
    },
    {
      type: "paragraph",
      content: `Private sector representatives have offered their own analysis, highlighting opportunities for innovation and growth. Many see the current situation as a catalyst for positive transformation.`,
    },
    {
      type: "heading",
      content: "Looking Ahead",
      level: 2,
    },
    {
      type: "paragraph",
      content: `As we look to the future, several key questions remain unanswered. Experts are divided on the most likely scenarios, though most agree that the status quo is unlikely to persist indefinitely.`,
    },
    {
      type: "paragraph",
      content: `The coming months will be critical in determining the direction of events. All eyes will be on key decision-makers as they navigate these complex waters and chart a course forward.`,
    },
  ];

  if (isPremium) {
    blocks.push(
      {
        type: "heading",
        content: "Exclusive Analysis",
        level: 2,
      },
      {
        type: "paragraph",
        content: `Our in-depth analysis reveals additional layers of complexity that have not been widely reported. Sources close to the situation have provided exclusive information that sheds new light on the dynamics at play.`,
      },
      {
        type: "paragraph",
        content: `Financial modeling conducted by our research team suggests potential outcomes that differ significantly from mainstream projections. These findings have implications for investors and policymakers alike.`,
      },
      {
        type: "image",
        content:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        caption: "Data visualization showing trend analysis",
      },
      {
        type: "paragraph",
        content: `The proprietary data we've compiled from multiple sources paints a nuanced picture that challenges conventional wisdom. Industry insiders who reviewed our findings confirmed their significance.`,
      }
    );
  }

  blocks.push({
    type: "paragraph",
    content: `This story continues to develop. Check back for updates as new information becomes available. Our team remains committed to providing comprehensive coverage of this important topic.`,
  });

  return blocks;
};

const categoryImages: Record<Category, string[]> = {
  politics: [
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1575320181282-9afab399332c?w=800&h=450&fit=crop",
  ],
  economy: [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=450&fit=crop",
  ],
  sports: [
    "https://images.unsplash.com/photo-1461896836934- voices-508224c8d?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=450&fit=crop",
  ],
  tech: [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
  ],
  world: [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=450&fit=crop",
  ],
  entertainment: [
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=800&h=450&fit=crop",
  ],
  science: [
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1564325724739-bae0bd08e7c4?w=800&h=450&fit=crop",
  ],
  health: [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=450&fit=crop",
  ],
  business: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
  ],
  opinion: [
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=450&fit=crop",
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop",
  ],
};

const articleTitles: Record<Category, string[]> = {
  politics: [
    "Senate Passes Landmark Infrastructure Bill After Months of Debate",
    "Presidential Approval Ratings Reach New High Amid Economic Recovery",
    "Local Elections Signal Shifting Political Landscape",
    "International Summit Addresses Climate Policy Framework",
    "Congressional Leaders Announce Bipartisan Committee Formation",
    "State Governors Push Back Against Federal Regulations",
    "Campaign Finance Reform Gains Momentum in Legislature",
  ],
  economy: [
    "Federal Reserve Signals Interest Rate Decision Coming Soon",
    "Stock Markets Rally on Strong Employment Data",
    "Housing Market Shows Signs of Cooling After Record Year",
    "Small Business Confidence Reaches Post-Pandemic Peak",
    "Global Supply Chain Improvements Drive Economic Optimism",
    "Inflation Concerns Ease as Consumer Prices Stabilize",
    "Tech Sector Layoffs Impact Regional Economies",
  ],
  sports: [
    "Championship Finals Set Historic Viewership Records",
    "Star Athlete Signs Record-Breaking Contract Extension",
    "Olympic Committee Announces Host City Selection",
    "College Basketball Tournament Produces Stunning Upsets",
    "Professional League Expands with New Franchise Announcement",
    "Legendary Coach Announces Retirement After Historic Career",
    "International Soccer Tournament Draws Global Attention",
  ],
  tech: [
    "AI Breakthrough: New Language Model Demonstrates Reasoning Abilities",
    "Major Tech Company Unveils Revolutionary Smartphone Design",
    "Cybersecurity Threats Prompt Industry-Wide Response",
    "Quantum Computing Milestone Achieved by Research Team",
    "Social Media Platform Introduces Sweeping Policy Changes",
    "Electric Vehicle Technology Advances With New Battery Design",
    "Cloud Computing Trends Reshape Enterprise Infrastructure",
  ],
  world: [
    "International Peace Talks Resume After Prolonged Standoff",
    "Climate Summit Produces Binding Emissions Agreement",
    "Humanitarian Crisis Deepens in Conflict Zone",
    "Trade Relations Improve Between Major Economic Powers",
    "Historic Archaeological Discovery Reveals Ancient Civilization",
    "Global Health Organization Issues New Guidelines",
    "Migration Patterns Shift Due to Environmental Changes",
  ],
  entertainment: [
    "Award Season Predictions: Critics Weigh In on Top Contenders",
    "Streaming Platform Announces Major Content Expansion",
    "Music Festival Lineup Draws Record Ticket Sales",
    "Television Series Finale Breaks Streaming Records",
    "Film Studio Reveals Ambitious Multi-Year Production Slate",
    "Celebrity Memoir Tops Bestseller Lists Worldwide",
    "Gaming Industry Revenue Surpasses Film and Music Combined",
  ],
  science: [
    "Mars Mission Returns Groundbreaking Sample Analysis",
    "Gene Therapy Trial Shows Promising Results for Rare Disease",
    "Climate Research Reveals Accelerating Ice Sheet Loss",
    "Particle Physics Experiment Challenges Standard Model",
    "Deep Sea Exploration Discovers New Species",
    "Renewable Energy Research Achieves Efficiency Milestone",
    "Brain-Computer Interface Demonstrates Medical Potential",
  ],
  health: [
    "New Treatment Protocol Improves Patient Outcomes",
    "Mental Health Awareness Campaign Reaches Millions",
    "Vaccine Development Enters Critical Phase Three Trials",
    "Nutrition Research Challenges Long-Held Dietary Assumptions",
    "Healthcare System Reform Proposal Gains Support",
    "Telemedicine Adoption Transforms Rural Healthcare Access",
    "Fitness Trends Reflect Growing Wellness Focus",
  ],
  business: [
    "Merger Creates Industry Giant Worth Billions",
    "Startup Ecosystem Thrives Despite Funding Slowdown",
    "Remote Work Policies Reshape Corporate Real Estate",
    "Retail Innovation Drives Omnichannel Strategy Adoption",
    "Sustainability Initiatives Become Competitive Advantage",
    "Supply Chain Technology Investment Reaches New Heights",
    "Leadership Changes Signal Strategic Shift at Major Corporation",
  ],
  opinion: [
    "Why This Moment Demands Bold Leadership",
    "The Case for Rethinking Our Approach to Education",
    "What History Teaches Us About Current Challenges",
    "A Path Forward: Finding Common Ground in Divided Times",
    "The Future of Work Requires New Social Contracts",
    "Technology and Democracy: A Complicated Relationship",
    "Economic Policy Must Address Inequality Now",
  ],
};

const tags: Record<Category, string[]> = {
  politics: ["government", "policy", "elections", "legislation", "democracy"],
  economy: ["markets", "finance", "jobs", "inflation", "trade"],
  sports: ["championship", "athletes", "league", "tournament", "records"],
  tech: ["innovation", "ai", "startups", "software", "hardware"],
  world: ["international", "diplomacy", "global", "conflict", "culture"],
  entertainment: ["movies", "music", "streaming", "celebrities", "awards"],
  science: ["research", "discovery", "space", "environment", "biology"],
  health: ["medicine", "wellness", "healthcare", "nutrition", "fitness"],
  business: ["corporate", "startup", "leadership", "strategy", "investment"],
  opinion: ["editorial", "analysis", "perspective", "commentary", "debate"],
};

// Generate 55 articles with uneven category distribution (like real news)
const categoryDistribution: Category[] = [
  "politics",
  "politics",
  "politics",
  "politics",
  "politics",
  "politics",
  "politics",
  "politics",
  "economy",
  "economy",
  "economy",
  "economy",
  "economy",
  "economy",
  "sports",
  "sports",
  "sports",
  "sports",
  "sports",
  "sports",
  "sports",
  "tech",
  "tech",
  "tech",
  "tech",
  "tech",
  "tech",
  "tech",
  "world",
  "world",
  "world",
  "world",
  "world",
  "entertainment",
  "entertainment",
  "entertainment",
  "entertainment",
  "entertainment",
  "science",
  "science",
  "science",
  "science",
  "health",
  "health",
  "health",
  "health",
  "business",
  "business",
  "business",
  "business",
  "business",
  "opinion",
  "opinion",
  "opinion",
  "opinion",
];

const getRandomDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(Math.floor(Math.random() * 24));
  date.setMinutes(Math.floor(Math.random() * 60));
  return date.toISOString();
};

export const articles: Article[] = categoryDistribution.map(
  (category, index) => {
    const categoryTitles = articleTitles[category];
    const titleIndex = index % categoryTitles.length;
    const categoryImgs = categoryImages[category];
    const imageIndex = index % categoryImgs.length;
    const authorIndex = index % authors.length;
    const isPremium = index % 5 === 0; // Every 5th article is premium
    const daysAgo = Math.floor(index / 3); // Spread articles over time

    const categoryTags = tags[category];
    const articleTags = [
      categoryTags[index % categoryTags.length],
      categoryTags[(index + 1) % categoryTags.length],
      category,
    ];

    return {
      article_id: `article-${index + 1}`,
      title: categoryTitles[titleIndex],
      subtitle:
        index % 3 === 0
          ? "An in-depth look at the latest developments and what they mean for the future"
          : undefined,
      excerpt: `Breaking coverage of the latest ${category} news with expert analysis and comprehensive reporting on the developments shaping our world today.`,
      content: generateContent(category, isPremium),
      category,
      tags: articleTags,
      author: authors[authorIndex],
      published_at: getRandomDate(daysAgo),
      updated_at:
        daysAgo > 0 ? getRandomDate(Math.max(0, daysAgo - 1)) : undefined,
      hero_image_url: categoryImgs[imageIndex],
      reading_time_minutes: isPremium
        ? Math.floor(Math.random() * 8) + 8
        : Math.floor(Math.random() * 5) + 3,
      is_premium: isPremium,
    };
  }
);

// Helper functions
export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.article_id === id);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getTopStories(count: number = 5): Article[] {
  return [...articles].sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  ).slice(0, count);
}

export function getLatestArticles(
  page: number = 1,
  pageSize: number = 10
): { articles: Article[]; totalPages: number; hasMore: boolean } {
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const totalPages = Math.ceil(sorted.length / pageSize);

  return {
    articles: sorted.slice(start, end),
    totalPages,
    hasMore: end < sorted.length,
  };
}

export function getMostRead(count: number = 5): Article[] {
  // Simulate "most read" by picking articles with specific indices
  const indices = [2, 7, 12, 18, 24, 31, 38, 45, 50, 54];
  return indices
    .slice(0, count)
    .map((i) => articles[i])
    .filter(Boolean);
}

export function getRelatedArticles(
  articleId: string,
  count: number = 4
): Article[] {
  const article = getArticleById(articleId);
  if (!article) return [];

  return articles
    .filter(
      (a) => a.article_id !== articleId && a.category === article.category
    )
    .slice(0, count);
}

export function searchArticles(
  query: string,
  category?: Category,
  dateRange?: "day" | "week" | "month" | "all"
): Article[] {
  let filtered = [...articles];

  // Filter by query
  if (query) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(lowerQuery) ||
        a.excerpt.toLowerCase().includes(lowerQuery) ||
        a.tags.some((t) => t.toLowerCase().includes(lowerQuery)) ||
        a.category.toLowerCase().includes(lowerQuery)
    );
  }

  // Filter by category
  if (category) {
    filtered = filtered.filter((a) => a.category === category);
  }

  // Filter by date range
  if (dateRange && dateRange !== "all") {
    const now = new Date();
    let cutoff: Date;

    switch (dateRange) {
      case "day":
        cutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        break;
      case "week":
        cutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case "month":
        cutoff = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
    }

    filtered = filtered.filter((a) => new Date(a.published_at) >= cutoff);
  }

  return filtered.sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );
}

export function getNextArticle(currentId: string): Article | undefined {
  const currentIndex = articles.findIndex((a) => a.article_id === currentId);
  if (currentIndex === -1 || currentIndex === articles.length - 1)
    return undefined;
  return articles[currentIndex + 1];
}

export function getPreviousArticle(currentId: string): Article | undefined {
  const currentIndex = articles.findIndex((a) => a.article_id === currentId);
  if (currentIndex <= 0) return undefined;
  return articles[currentIndex - 1];
}

export const categories: Category[] = [
  "politics",
  "economy",
  "sports",
  "tech",
  "world",
  "entertainment",
  "science",
  "health",
  "business",
  "opinion",
];
