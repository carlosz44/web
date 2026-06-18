"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import * as adminDb from "@/lib/db/admin";
import {
  projectSchema,
  type ProjectFormValues,
} from "@/lib/validation/schemas";

export async function saveProject(id: string | null, values: ProjectFormValues) {
  await auth.requireAdmin();
  const data = projectSchema.parse(values);
  if (id) {
    await adminDb.updateProject(id, data);
  } else {
    await adminDb.createProject(data);
  }
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}

export async function deleteProject(id: string) {
  await auth.requireAdmin();
  await adminDb.deleteProject(id);
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}
