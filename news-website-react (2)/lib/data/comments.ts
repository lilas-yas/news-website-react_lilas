import { Comment } from '../types';

// Generate some initial mock comments for articles
const generateComments = (): Comment[] => {
  const commentTemplates = [
    "Great article! Really insightful analysis of the situation.",
    "I'm not sure I agree with all the points made here, but it's well-written.",
    "This is exactly what I was looking for. Thanks for the coverage!",
    "Could you provide more details on the background? I'd love to learn more.",
    "Interesting perspective. I hadn't considered that angle before.",
    "The data presented here is compelling. Looking forward to updates.",
    "Finally, some balanced reporting on this topic. Well done!",
    "I shared this with my colleagues. Very relevant to our work.",
    "The quote from Dr. Monroe really puts things in perspective.",
    "Can we expect a follow-up piece on this topic soon?",
    "This confirms what many of us have been suspecting for a while.",
    "Excellent journalism. This is why I subscribe to this publication.",
    "Would be great to see some international perspectives included.",
    "The timeline breakdown was especially helpful. Thank you!",
    "I respectfully disagree with the conclusion, but appreciate the thoroughness.",
  ];

  const names = [
    'Alex Johnson', 'Jordan Smith', 'Sam Williams', 'Taylor Brown', 'Casey Davis',
    'Morgan Miller', 'Riley Wilson', 'Quinn Anderson', 'Jamie Taylor', 'Drew Thomas',
    'Avery Martinez', 'Cameron Garcia', 'Reese Robinson', 'Skyler Lee', 'Parker White',
  ];

  const comments: Comment[] = [];
  let commentId = 1;

  // Generate comments for first 30 articles
  for (let articleIndex = 1; articleIndex <= 30; articleIndex++) {
    const numComments = Math.floor(Math.random() * 5) + 1; // 1-5 comments per article
    
    for (let i = 0; i < numComments; i++) {
      const daysAgo = Math.floor(Math.random() * 7);
      const hoursAgo = Math.floor(Math.random() * 24);
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);
      date.setHours(date.getHours() - hoursAgo);

      comments.push({
        id: `comment-${commentId}`,
        article_id: `article-${articleIndex}`,
        author_name: names[Math.floor(Math.random() * names.length)],
        content: commentTemplates[Math.floor(Math.random() * commentTemplates.length)],
        created_at: date.toISOString(),
        likes: Math.floor(Math.random() * 50),
      });

      commentId++;
    }
  }

  return comments;
};

export const comments: Comment[] = generateComments();

export function getCommentsByArticleId(articleId: string): Comment[] {
  return comments
    .filter(c => c.article_id === articleId)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

export function addComment(articleId: string, authorName: string, content: string): Comment {
  const newComment: Comment = {
    id: `comment-${comments.length + 1}`,
    article_id: articleId,
    author_name: authorName,
    content,
    created_at: new Date().toISOString(),
    likes: 0,
  };
  comments.push(newComment);
  return newComment;
}
