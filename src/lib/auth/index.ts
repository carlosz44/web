import { supabaseAuth } from "./supabase/provider";
import type { AuthProvider } from "./types";

export const auth: AuthProvider = supabaseAuth;

export type { AdminUser, AuthProvider } from "./types";
