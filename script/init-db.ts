import { db } from '../server/db';
import { sql } from 'drizzle-orm';

async function initDb() {
  try {
    console.log('Initializing database...');
    
    // Create tables
    await db.run(sql`
      CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        author TEXT NOT NULL,
        image_url TEXT,
        published_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
      )
    `);

    console.log('Database initialized successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

initDb();
