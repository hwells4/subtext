import {
  pgTable,
  text,
  timestamp,
  uuid,
  real,
  vector
} from "drizzle-orm/pg-core"
import { postsTable } from "./posts-schema"
import { runsTable } from "./runs-schema"

export const quotesTable = pgTable("quotes", {
  quote_id: uuid("quote_id").primaryKey().defaultRandom(),
  post_id: uuid("post_id").references(() => postsTable.post_id, {
    onDelete: "cascade"
  }),
  run_id: uuid("run_id").references(() => runsTable.run_id, {
    onDelete: "cascade"
  }),
  text: text("text").notNull(),
  category: text("category").notNull(),
  context: text("context"),
  sentiment: text("sentiment"),
  theme: text("theme"),
  relevance_score: real("relevance_score"),
  embedding: vector("embedding", { dimensions: 768 }),
  createdAt: timestamp("inserted_at", { withTimezone: true })
    .defaultNow()
    .notNull(), // Mapped from inserted_at
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertQuote = typeof quotesTable.$inferInsert
export type SelectQuote = typeof quotesTable.$inferSelect
