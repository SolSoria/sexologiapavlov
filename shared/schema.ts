import { pgTable, text, serial, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  imageUrl: text("image_url"),
  publishedAt: timestamp("published_at").defaultNow(),
});

// === BASE SCHEMAS ===
export const insertPostSchema = createInsertSchema(posts).omit({ id: true, publishedAt: true });

// === EXPLICIT API CONTRACT TYPES ===
export type Post = typeof posts.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;

// Request types
export type CreatePostRequest = InsertPost;
export type UpdatePostRequest = Partial<InsertPost>;

// Response types
export type PostResponse = Post;
export type PostsListResponse = Post[];
