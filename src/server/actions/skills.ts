"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import * as adminDb from "@/lib/db/admin";
import { skillSchema, type SkillFormValues } from "@/lib/validation/schemas";

export async function saveSkill(id: string | null, values: SkillFormValues) {
  await auth.requireAdmin();
  const data = skillSchema.parse(values);
  if (id) {
    await adminDb.updateSkill(id, data);
  } else {
    await adminDb.createSkill(data);
  }
  revalidatePath("/xp");
  revalidatePath("/admin/skills");
}

export async function deleteSkill(id: string) {
  await auth.requireAdmin();
  await adminDb.deleteSkill(id);
  revalidatePath("/xp");
  revalidatePath("/admin/skills");
}
