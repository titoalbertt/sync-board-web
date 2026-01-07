import { pgTable, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const tasks = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  status: text("status", { enum: ["todo", "done"] })
    .notNull()
    .default("todo"),
  priority: integer("priority").default(3),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Generate Zod schemas automatically from the DB table!
export const insertTaskSchema = createInsertSchema(tasks);
export const selectTaskSchema = createSelectSchema(tasks);
