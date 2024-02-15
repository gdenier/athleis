export const config = {
  dev: import.meta.env.DEV,
  supabaseUrl: import.meta.env.VITE_PUBLIC_SUPABASE_URL as string,
  supabaseAnonKey: import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY as string,
  privateSupabaseServiceRole: import.meta.env.PRIVATE_SUPABASE_SERVICE_ROLE as
    | string
    | undefined,
}
