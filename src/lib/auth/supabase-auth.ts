import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { AdminUser, AuthProvider } from "./types";

async function getSupabaseClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {}
        },
      },
    },
  );
}

async function getCurrentUser(): Promise<AdminUser | null> {
  const supabase = await getSupabaseClient();
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
  const allowedId = Number(process.env.ALLOWED_GH_ID);

  if (!user || user.githubId !== allowedId) {
    redirect("/");
  }

  return user;
}

export const supabaseAuth: AuthProvider = {
  getCurrentUser,
  requireAdmin,
};
