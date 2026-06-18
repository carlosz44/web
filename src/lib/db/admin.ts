import { desc, eq } from "drizzle-orm";
import { db } from "./index";
import { projects, skills, work } from "./schema";
import type {
  ProjectFormValues,
  SkillFormValues,
  WorkFormValues,
} from "@/lib/validation/schemas";

const nullable = (v?: string) => (v && v.length > 0 ? v : null);

export const listProjects = () =>
  db.select().from(projects).orderBy(desc(projects.year));

export const getProject = async (id: string) =>
  (await db.select().from(projects).where(eq(projects.id, id)))[0] ?? null;

export const createProject = (v: ProjectFormValues) =>
  db.insert(projects).values({
    title: v.title,
    description: v.description,
    link: nullable(v.link),
    year: v.year,
    type: v.type,
  });

export const updateProject = (id: string, v: ProjectFormValues) =>
  db
    .update(projects)
    .set({
      title: v.title,
      description: v.description,
      link: nullable(v.link),
      year: v.year,
      type: v.type,
    })
    .where(eq(projects.id, id));

export const deleteProject = (id: string) =>
  db.delete(projects).where(eq(projects.id, id));

export const listSkills = () =>
  db.select().from(skills).orderBy(desc(skills.start));

export const getSkill = async (id: string) =>
  (await db.select().from(skills).where(eq(skills.id, id)))[0] ?? null;

export const createSkill = (v: SkillFormValues) =>
  db.insert(skills).values({
    title: v.title,
    start: v.start,
    end: nullable(v.end),
    type: v.type,
  });

export const updateSkill = (id: string, v: SkillFormValues) =>
  db
    .update(skills)
    .set({
      title: v.title,
      start: v.start,
      end: nullable(v.end),
      type: v.type,
    })
    .where(eq(skills.id, id));

export const deleteSkill = (id: string) =>
  db.delete(skills).where(eq(skills.id, id));

export const listWork = () => db.select().from(work).orderBy(desc(work.start));

export const getWork = async (id: string) =>
  (await db.select().from(work).where(eq(work.id, id)))[0] ?? null;

export const createWork = (v: WorkFormValues) =>
  db.insert(work).values({
    company: v.company,
    role: v.role,
    description: v.description,
    start: v.start,
    end: nullable(v.end),
    location: nullable(v.location),
    techStack: nullable(v.techStack),
  });

export const updateWork = (id: string, v: WorkFormValues) =>
  db
    .update(work)
    .set({
      company: v.company,
      role: v.role,
      description: v.description,
      start: v.start,
      end: nullable(v.end),
      location: nullable(v.location),
      techStack: nullable(v.techStack),
    })
    .where(eq(work.id, id));

export const deleteWork = (id: string) =>
  db.delete(work).where(eq(work.id, id));
