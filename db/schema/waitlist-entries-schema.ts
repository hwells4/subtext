import { pgTable, text, timestamp, uuid, boolean } from "drizzle-orm/pg-core"

export const waitlistEntriesTable = pgTable("waitlist_entries", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  howHeard: text("how_heard"),
  howHeardOtherDetail: text("how_heard_other_detail"),
  applyForBeta: boolean("apply_for_beta").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
})

export type InsertWaitlistEntry = typeof waitlistEntriesTable.$inferInsert
export type SelectWaitlistEntry = typeof waitlistEntriesTable.$inferSelect
