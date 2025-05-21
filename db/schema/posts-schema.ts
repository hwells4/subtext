import { pgTable, text, timestamp, uuid, real } from "drizzle-orm/pg-core"
import { runsTable } from "./runs-schema"

export const postsTable = pgTable("posts", {
  post_id: uuid("post_id").primaryKey(),
  subreddit: text("subreddit").notNull(),
  url: text("url").notNull(),
  title: text("title"),
  body: text("body"),
  comments: text("comments"),
  created_utc: timestamp("created_utc", { withTimezone: true }),
  relevance_score: real("relevance_score"),
  classification_justification: text("classification_justification"),
  run_id: uuid("run_id").references(() => runsTable.run_id, {
    onDelete: "cascade"
  }),
  createdAt: timestamp("inserted_at", { withTimezone: true })
    .defaultNow()
    .notNull(), // Mapped from inserted_at
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertPost = typeof postsTable.$inferInsert
export type SelectPost = typeof postsTable.$inferSelect
