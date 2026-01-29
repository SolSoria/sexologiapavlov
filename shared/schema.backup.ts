import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Helper function to create unique indexes
const createUniqueIndex = (name: string, ...columns: any[]) => {
  return index(`${name}_idx`).on(...columns);
};

// === TABLE DEFINITIONS ===

// Users table
const userRoles = ['user', 'author', 'admin'] as const;

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  role: text("role", { enum: userRoles }).notNull().default('user'),
  bio: text("bio"),
  avatarUrl: text("avatar_url"),
  emailVerified: integer("email_verified", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().defaultNow(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().defaultNow(),
}, (table) => ({
  emailIdx: createUniqueIndex("email", table.email),
  usernameIdx: createUniqueIndex("username", table.username),
}));

// Categories table
export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().defaultNow(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: createUniqueIndex("category_slug", table.slug),
}));

// Articles table
export const articles = sqliteTable("articles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  authorId: text("author_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  categoryId: integer("category_id").references(() => categories.id, { onDelete: "set null" }),
  imageUrl: text("image_url"),
  isPublished: integer("is_published", { mode: "boolean" }).notNull().default(false),
  publishedAt: integer("published_at", { mode: 'timestamp' }),
  readingTime: integer("reading_time"), // in minutes
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  viewCount: integer("view_count").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().defaultNow(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: createUniqueIndex("article_slug", table.slug),
  authorIdx: index("article_author").on(table.authorId),
  categoryIdx: index("article_category").on(table.categoryId),
  publishedIdx: index("article_published").on(table.isPublished, table.publishedAt),
}));

// Tags table
export const tags = sqliteTable("tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: createUniqueIndex("tag_slug", table.slug),
}));

// ArticleTags junction table
export const articleTags = sqliteTable("article_tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  articleId: integer("article_id").notNull().references(() => articles.id, { onDelete: "cascade" }),
  tagId: integer("tag_id").notNull().references(() => tags.id, { onDelete: "cascade" }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().defaultNow(),
}, (table) => ({
  articleTagIdx: createUniqueIndex("article_tag", table.articleId, table.tagId),
}));

// Comments table
export const comments = sqliteTable("comments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  content: text("content").notNull(),
  articleId: integer("article_id").notNull().references(() => articles.id, { onDelete: "cascade" }),
  authorId: text("author_id").references(() => users.id, { onDelete: "set null" }),
  parentId: integer("parent_id").references(() => comments.id, { onDelete: "cascade" }),
  isApproved: integer("is_approved", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().defaultNow(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull().defaultNow(),
}, (table) => ({
  articleIdx: index("comment_article").on(table.articleId),
  authorIdx: index("comment_author").on(table.authorId),
  parentIdx: index("comment_parent").on(table.parentId),
}));

// User favorites
export const userFavorites = sqliteTable("user_favorites", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  articleId: integer("article_id").notNull().references(() => articles.id, { onDelete: "cascade" }),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().defaultNow(),
}, (table) => ({
  userFavoriteIdx: createUniqueIndex("user_favorite", table.userId, table.articleId),
}));

// === RELATIONSHIPS ===

export const usersRelations = relations(users, ({ many }) => ({
  articles: many(articles),
  comments: many(comments),
  favorites: many(userFavorites),
}));

export const articlesRelations = relations(articles, ({ one, many }) => ({
  author: one(users, {
    fields: [articles.authorId],
    references: [users.id],
  }),
  category: one(categories, {
    fields: [articles.categoryId],
    references: [categories.id],
  }),
  tags: many(articleTags),
  comments: many(comments),
  favorites: many(userFavorites),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  articles: many(articles),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  articles: many(articleTags),
}));

export const articleTagsRelations = relations(articleTags, ({ one }) => ({
  article: one(articles, {
    fields: [articleTags.articleId],
    references: [articles.id],
  }),
  tag: one(tags, {
    fields: [articleTags.tagId],
    references: [tags.id],
  }),
}));

export const commentsRelations = relations(comments, ({ one, many }) => ({
  article: one(articles, {
    fields: [comments.articleId],
    references: [articles.id],
  }),
  author: one(users, {
    fields: [comments.authorId],
    references: [users.id],
  }),
  parent: one(comments, {
    fields: [comments.parentId],
    references: [comments.id],
  }),
  replies: many(comments, { relationName: "commentReplies" }),
}));

export const userFavoritesRelations = relations(userFavorites, ({ one }) => ({
  user: one(users, {
    fields: [userFavorites.userId],
    references: [users.id],
  }),
  article: one(articles, {
    fields: [userFavorites.articleId],
    references: [articles.id],
  }),
}));

// === ZOD SCHEMAS ===

export const userRoleSchema = z.enum(userRoles);

const userSchema = {
  email: z.string().email(),
  role: userRoleSchema,
};

export const insertUserSchema = z.object({
  ...userSchema,
  username: z.string().min(3).max(50),
  hashedPassword: z.string().min(8),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  bio: z.string().optional(),
  avatarUrl: z.string().url().optional(),
  emailVerified: z.boolean().optional(),
}).omit({ id: true, createdAt: true, updatedAt: true });

export const updateUserSchema = insertUserSchema.partial();

export const insertCategorySchema = z.object({
  name: z.string().min(2).max(100),
  slug: z.string().min(2).max(100).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().optional(),
}).omit({ id: true, createdAt: true, updatedAt: true });

export const insertArticleSchema = z.object({
  title: z.string().min(5).max(200),
  slug: z.string().min(2).max(200).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  excerpt: z.string().min(50).max(300),
  content: z.string().min(100),
  categoryId: z.number().optional(),
  imageUrl: z.string().url().optional(),
  publishedAt: z.date().optional(),
  readingTime: z.number().min(1).max(60).optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
}).omit({ id: true, authorId: true, isPublished: true, viewCount: true, createdAt: true, updatedAt: true });

export const insertTagSchema = z.object({
  name: z.string().min(2).max(50),
  slug: z.string().min(2).max(50).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().optional(),
}).omit({ id: true, createdAt: true });

export const insertCommentSchema = z.object({
  content: z.string().min(10).max(1000),
  articleId: z.number(),
  parentId: z.number().optional(),
}).omit({ id: true, authorId: true, isApproved: true, createdAt: true, updatedAt: true });

// === TYPES ===

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type UpdateUser = z.infer<typeof updateUserSchema>;

export type Category = typeof categories.$inferSelect;
export type InsertCategory = z.infer<typeof insertCategorySchema>;

export type Article = typeof articles.$inferSelect & {
  author?: User;
  category?: Category;
  tags?: Tag[];
};
export type InsertArticle = z.infer<typeof insertArticleSchema>;

export type Tag = typeof tags.$inferSelect;
export type InsertTag = z.infer<typeof insertTagSchema>;

export type Comment = typeof comments.$inferSelect & {
  author?: User;
  replies?: Comment[];
};
export type InsertComment = z.infer<typeof insertCommentSchema>;

export type UserFavorite = typeof userFavorites.$inferSelect;

// === API TYPES ===

// User types
export type UserResponse = Omit<User, 'hashedPassword'>;
export type UserListResponse = UserResponse[];

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = InsertUser & {
  password: string;
  confirmPassword: string;
};

// Article types
export type ArticleResponse = Article;
export type ArticleListResponse = {
  data: Article[];
  total: number;
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
