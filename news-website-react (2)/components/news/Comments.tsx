"use client";

import React from "react"

import { useState } from "react";
import { Comment } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, MessageCircle } from "lucide-react";

interface CommentsProps {
  articleId: string;
  initialComments: Comment[];
}

export function Comments({ articleId, initialComments }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState<{ name?: string; content?: string }>({});
  const [showAll, setShowAll] = useState(false);

  const displayedComments = showAll ? comments : comments.slice(0, 5);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "Yesterday";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; content?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!content.trim()) {
      newErrors.content = "Comment cannot be empty";
    }
    if (content.trim().length > 1000) {
      newErrors.content = "Comment must be less than 1000 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add comment locally
    const newComment: Comment = {
      id: `comment-local-${Date.now()}`,
      article_id: articleId,
      author_name: name.trim(),
      content: content.trim(),
      created_at: new Date().toISOString(),
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setName("");
    setContent("");
    setErrors({});
  };

  const handleLike = (commentId: string) => {
    setComments(
      comments.map((c) =>
        c.id === commentId ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  return (
    <section className="border-t pt-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <MessageCircle className="w-6 h-6" />
        Comments ({comments.length})
      </h2>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="bg-muted/50 rounded-lg p-4 mb-8">
        <h3 className="font-semibold mb-4">Leave a comment</h3>
        <div className="space-y-4">
          <div>
            <Input
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-xs text-destructive mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="Write your comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className={`w-full min-h-[100px] rounded-md border px-3 py-2 text-sm bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                errors.content ? "border-destructive" : "border-input"
              }`}
            />
            {errors.content && (
              <p className="text-xs text-destructive mt-1">{errors.content}</p>
            )}
          </div>
          <Button type="submit">Post Comment</Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {displayedComments.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          displayedComments.map((comment) => (
            <div
              key={comment.id}
              data-comment-id={comment.id}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                <span className="text-lg font-semibold text-muted-foreground">
                  {comment.author_name[0].toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{comment.author_name}</span>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(comment.created_at)}
                  </span>
                </div>
                <p className="text-foreground/90 mb-2">{comment.content}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(comment.id)}
                  className="text-muted-foreground hover:text-foreground -ml-2"
                >
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  {comment.likes > 0 && comment.likes}
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Show More */}
      {comments.length > 5 && !showAll && (
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={() => setShowAll(true)}>
            Show all {comments.length} comments
          </Button>
        </div>
      )}
    </section>
  );
}
