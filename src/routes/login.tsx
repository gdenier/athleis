import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { supabase } from "~/lib/supabase"
import { FileRoute, redirect } from "@tanstack/react-router"

export const Route = new FileRoute("/login").createRoute({
  loader: async () => {
    const result = await supabase.auth.getSession()
    if (result.data.session) {
      throw redirect({
        to: "/",
      })
    }
  },
  component: () => (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      redirectTo="/"
    />
  ),
})
