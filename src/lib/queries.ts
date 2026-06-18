import { asc, desc, eq } from "drizzle-orm";
import { db } from "./db";
import { projects, skills, work } from "./db/schema";
import type { Project, Skill, WorkExperience } from "@/types";

async function getProjectsByType(type: "project" | "exp"): Promise<Project[]> {
  const rows = await db
    .select()
    .from(projects)
    .where(eq(projects.type, type))
    .orderBy(desc(projects.year));

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    link: row.link ?? "",
    year: row.year ?? 0,
  }));
}

export function getProjects() {
  return getProjectsByType("project");
}

export function getExperiments() {
  return getProjectsByType("exp");
}

async function getSkillsByType(
  type: "front" | "language" | "other",
  order: "asc" | "desc",
): Promise<Skill[]> {
  const rows = await db
    .select()
    .from(skills)
    .where(eq(skills.type, type))
    .orderBy(order === "asc" ? asc(skills.title) : desc(skills.title));

  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    start: row.start,
    end: row.end,
  }));
}

export function getFrontSkills() {
  return getSkillsByType("front", "desc");
}

export function getLangSkills() {
  return getSkillsByType("language", "asc");
}

export function getOtherSkills() {
  return getSkillsByType("other", "asc");
}

export async function getWorkExperience(): Promise<WorkExperience[]> {
  const rows = await db.select().from(work).orderBy(desc(work.start));

  return rows.map((row) => ({
    id: row.id,
    company: row.company,
    role: row.role,
    description: row.description,
    start: row.start,
    end: row.end,
    location: row.location ?? "",
    techStack: row.techStack ?? "",
  }));
}
