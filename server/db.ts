import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from 'better-sqlite3';
import * as schema from "@shared/schema";

// Use file-based SQLite database
const dbPath = process.env.DATABASE_URL || './data/dev.db';
const sqlite = new Database(dbPath);

// Enable foreign key constraints
sqlite.pragma('foreign_keys = ON');

export const db = drizzle(sqlite, { schema });
