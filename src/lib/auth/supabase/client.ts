import { createBrowserSupabase } from "./browser";

export async function signInWithGitHub() {
  const supabase = createBrowserSupabase();
  await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
}
