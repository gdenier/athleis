import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import { config } from "./config";
import { storage } from "./storage";

const authStorage = {
  setItem: (key: string, data: string) => storage.set(key, data),
  getItem: (key: string) => storage.getString(key) ?? "",
  removeItem: (key: string) => storage.delete(key),
};

export const supabase = createClient(
  config.supabaseUrl,
  config.supabaseAnonKey,
  {
    auth: {
      storage: authStorage,
    },
  },
);
