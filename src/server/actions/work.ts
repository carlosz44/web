"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import * as adminDb from "@/lib/db/admin";
import { workSchema, type WorkFormValues } from "@/lib/validation/schemas";

export async function saveWork(id: string | null, values: WorkFormValues) {
  await auth.requireAdmin();
  const data = workSchema.parse(values);
  if (id) {
    await adminDb.updateWork(id, data);
  } else {
    await adminDb.createWork(data);
  }
  revalidatePath("/work");
  revalidatePath("/admin/work");
}

export async function deleteWork(id: string) {
  await auth.requireAdmin();
  await adminDb.deleteWork(id);
  revalidatePath("/work");
  revalidatePath("/admin/work");
}
