import { Author } from '../types';

export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'Sarah Mitchell',
    avatar_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    bio: 'Senior Political Correspondent with 15 years of experience covering Washington.',
  },
  {
    id: 'author-2',
    name: 'James Chen',
    avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    bio: 'Technology Editor specializing in AI and emerging tech trends.',
  },
  {
    id: 'author-3',
    name: 'Maria Rodriguez',
    avatar_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    bio: 'Business and Economy reporter focusing on global markets.',
  },
  {
    id: 'author-4',
    name: 'David Thompson',
    avatar_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    bio: 'Sports columnist and former professional athlete.',
  },
  {
    id: 'author-5',
    name: 'Emily Watson',
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    bio: 'Health and Science correspondent with a background in medical research.',
  },
  {
    id: 'author-6',
    name: 'Michael Foster',
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    bio: 'World News Editor covering international affairs and diplomacy.',
  },
  {
    id: 'author-7',
    name: 'Lisa Park',
    avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    bio: 'Entertainment critic and cultural commentator.',
  },
  {
    id: 'author-8',
    name: 'Robert Williams',
    avatar_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    bio: 'Opinion writer and political analyst.',
  },
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find(a => a.id === id);
}
