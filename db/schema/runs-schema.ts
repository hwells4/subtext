import {
  pgTable,
  timestamp,
  uuid,
  text,
  integer,
  pgEnum
} from "drizzle-orm/pg-core"

export const runStatusEnum = pgEnum("run_status", [
  "running",
  "completed",
  "failed"
])

export const runsTable = pgTable("runs", {
  run_id: uuid("run_id").primaryKey().defaultRandom(),
  status: runStatusEnum("status").notNull(),
  start_time: timestamp("start_time", { withTimezone: true })
    .defaultNow()
    .notNull(),
  end_time: timestamp("end_time", { withTimezone: true }),

  user_question: text("user_question"),
  problem_area: text("problem_area"),
  target_audience: text("target_audience"),
  product_type: text("product_type"),
  product_name: text("product_name"),

  subreddits: text("subreddits").array(),

  posts_analyzed_count: integer("posts_analyzed_count").default(0),
  quotes_extracted_count: integer("quotes_extracted_count").default(0),

  error_message: text("error_message"),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertRun = typeof runsTable.$inferInsert
export type SelectRun = typeof runsTable.$inferSelect
