import { createClient } from "@supabase/supabase-js";

export const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL ?? "";
export const supabaseKey: string = import.meta.env.VITE_SUPABASE_KEY ?? "";

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Missing Supabase environment variables. Please check VITE_SUPABASE_URL and VITE_SUPABASE_KEY in your .env file"
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
