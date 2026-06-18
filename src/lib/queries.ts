import { asc, desc } from "drizzle-orm";
import { db } from "./db";
import { projects, skills, work } from "./db/schema";
import type { Project, Skill, WorkExperience } from "@/types";

export async function getProjectsGrouped(): Promise<{
  projects: Project[];
  experiments: Project[];
}> {
  const rows = await db.select().from(projects).orderBy(desc(projects.year));

  const mapped = rows.map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    link: row.link ?? "",
    year: row.year ?? 0,
    type: row.type,
  }));

  return {
    projects: mapped.filter((p) => p.type === "project"),
    experiments: mapped.filter((p) => p.type === "exp"),
  };
}

export async function getSkillsGrouped(): Promise<{
  front: Skill[];
  languages: Skill[];
  other: Skill[];
}> {
  const rows = await db.select().from(skills).orderBy(asc(skills.title));

  const mapped = rows.map((row) => ({
    id: row.id,
    title: row.title,
    start: row.start,
    end: row.end,
    type: row.type,
  }));

  return {
    front: mapped.filter((s) => s.type === "front").reverse(),
    languages: mapped.filter((s) => s.type === "language"),
    other: mapped.filter((s) => s.type === "other"),
  };
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
