import {
  date,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const projectType = pgEnum("project_type", ["project", "exp"]);
export const skillType = pgEnum("skill_type", ["front", "language", "other"]);

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 200 }).notNull(),
  description: text("description").notNull(),
  link: varchar("link", { length: 500 }),
  year: integer("year"),
  type: projectType("type").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const skills = pgTable("skills", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title", { length: 200 }).notNull(),
  start: date("start").notNull(),
  end: date("end"),
  type: skillType("type").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const work = pgTable("work", {
  id: uuid("id").primaryKey().defaultRandom(),
  company: varchar("company", { length: 200 }).notNull(),
  role: varchar("role", { length: 200 }).notNull(),
  description: text("description").notNull(),
  start: date("start").notNull(),
  end: date("end"),
  location: varchar("location", { length: 200 }),
  techStack: varchar("tech_stack", { length: 500 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});
