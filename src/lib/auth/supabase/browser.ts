import { createBrowserClient } from "@supabase/ssr";
import { publicConfig } from "@/lib/config.public";

export function createBrowserSupabase() {
  return createBrowserClient(
    publicConfig.NEXT_PUBLIC_SUPABASE_URL,
    publicConfig.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
