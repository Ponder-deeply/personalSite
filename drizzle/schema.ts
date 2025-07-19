import { pgTable, serial, text, boolean, timestamp} from 'drizzle-orm/pg-core';

export const notes = pgTable('notes', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content'),
    completed: boolean('completed').default(false).notNull()
});




