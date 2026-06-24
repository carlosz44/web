import { redirect } from "next/navigation";
import { config } from "@/lib/config";
import type { AdminUser, AuthProvider } from "../types";
import { createServerSupabase } from "./server";

async function getCurrentUser(): Promise<AdminUser | null> {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const githubId = Number(user.user_metadata?.provider_id);
  if (!Number.isFinite(githubId)) {
    return null;
  }

  return {
    id: user.id,
    githubId,
    username: user.user_metadata?.user_name ?? null,
  };
}

async function requireAdmin(): Promise<AdminUser> {
  const user = await getCurrentUser();

  if (!user || user.githubId !== config.ALLOWED_GH_ID) {
    redirect("/login");
  }

  return user;
}

async function signOut(): Promise<void> {
  const supabase = await createServerSupabase();
  await supabase.auth.signOut();
}

async function exchangeCode(code: string): Promise<boolean> {
  const supabase = await createServerSupabase();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  return !error;
}

export const supabaseAuth: AuthProvider = {
  getCurrentUser,
  requireAdmin,
  signOut,
  exchangeCode,
};
