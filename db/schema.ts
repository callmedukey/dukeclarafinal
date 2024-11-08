import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const confirmationsTable = pgTable("confirmations", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text().notNull(),
  coming: boolean().default(true),
  adults: integer().notNull(),
  children: integer().notNull(),
  email: text().notNull(),
  phone: text().notNull(),
  note: text(),
  createdAt: timestamp().default(sql`now()`),
  updatedAt: timestamp()
    .default(sql`now()`)
    .$onUpdate(() => new Date()),
});

export const presentsTable = pgTable("presents", {
  id: uuid()
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text().notNull(),
  note: text(),
  createdAt: timestamp().default(sql`now()`),
  updatedAt: timestamp()
    .default(sql`now()`)
    .$onUpdate(() => new Date()),
});
