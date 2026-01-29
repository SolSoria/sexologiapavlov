import { db } from "./db";
import { posts, type Post, type InsertPost } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getPosts(): Promise<Post[]>;
  getPost(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
}

export class DatabaseStorage implements IStorage {
  async getPosts(): Promise<Post[]> {
    return await db.select().from(posts).orderBy(desc(posts.publishedAt));
  }

  async getPost(slug: string): Promise<Post | undefined> {
    const result = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);
    return result[0];
  }

  async createPost(post: InsertPost): Promise<Post> {
    const result = await db.insert(posts).values(post).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
