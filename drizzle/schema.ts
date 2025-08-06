import { pgTable, serial, text, boolean } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const notes = pgTable("notes", {
	id: serial().primaryKey().notNull(),
	title: text().notNull(),
	content: text(),
	completed: boolean().default(false).notNull(),
});
