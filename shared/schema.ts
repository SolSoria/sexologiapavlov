import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { z } from "zod";

// Simple users table for authentication
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().defaultNow(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().defaultNow(),
});

// Simple categories table
export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
});

// Simple tags table
export const tags = sqliteTable("tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
  slug: text("slug").notNull().unique(),
});

// Simple posts table for the blog
export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull().default('Admin'),
  imageUrl: text("image_url"),
  publishedAt: integer("published_at", { mode: 'timestamp' }).notNull().defaultNow(),
});

// Simple comments table for user comments
export const comments = sqliteTable("comments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  content: text("content").notNull(),
  postId: integer("post_id").notNull().references(() => posts.id),
  author: text("author").default('Anonymous'),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().defaultNow(),
});

// Simple Zod schema for creating users
export const insertUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(50),
  hashedPassword: z.string().min(8),
  emailVerified: z.boolean().optional(),
});

// Simple Zod schema for creating posts
export const insertPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  author: z.string().default('Admin'),
  imageUrl: z.string().optional(),
});

// Simple Zod schema for creating comments
export const insertCommentSchema = z.object({
  content: z.string().min(10).max(1000),
  postId: z.number(),
  author: z.string().default('Anonymous'),
});

// Simple Zod schema for creating categories
export const insertCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().optional(),
});

// Simple Zod schema for creating tags
export const insertTagSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
});

// Export types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Post = typeof posts.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;

export type Comment = typeof comments.$inferSelect;
export type InsertComment = z.infer<typeof insertCommentSchema>;

export type Category = typeof categories.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;

export type Tag = typeof tags.$inferSelect;
export type InsertTag = z.infer<typeof insertTagSchema>;

export type RegisterRequest = InsertUser & {
  password: string;
  confirmPassword: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  page: number;
  limit: number;
  totalPages: number;
};

export type ArticleListParams = {
  page?: number;
  limit?: number;
  category?: string;
  tag?: string;
  author?: string;
  search?: string;
  sortBy?: 'newest' | 'popular' | 'featured';
};

// Category types
export type CategoryResponse = Category;
export type CategoryListResponse = Category[];

// Tag types
export type TagResponse = Tag;
export type TagListResponse = Tag[];

// Comment types
export type CommentResponse = Comment;
export type CommentListResponse = Comment[];
