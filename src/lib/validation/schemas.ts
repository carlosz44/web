import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1),
  link: z.string().max(500).optional().or(z.literal("")),
  year: z.number().int().min(1900).max(2100),
  type: z.enum(["project", "exp"]),
});
export type ProjectFormValues = z.infer<typeof projectSchema>;

export const skillSchema = z.object({
  title: z.string().min(1).max(200),
  start: z.string().min(1),
  end: z.string().optional().or(z.literal("")),
  type: z.enum(["front", "language", "other"]),
});
export type SkillFormValues = z.infer<typeof skillSchema>;

export const workSchema = z.object({
  company: z.string().min(1).max(200),
  role: z.string().min(1).max(200),
  description: z.string().min(1),
  start: z.string().min(1),
  end: z.string().optional().or(z.literal("")),
  location: z.string().max(200).optional().or(z.literal("")),
  techStack: z.string().max(500).optional().or(z.literal("")),
});
export type WorkFormValues = z.infer<typeof workSchema>;
