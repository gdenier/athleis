import { createClient } from "@supabase/supabase-js"
import { Database } from "./database.types"
import { config } from "./config"

export const supabase = createClient<Database>(
  config.supabaseUrl,
  config.supabaseAnonKey
)
