import { AuthUser, AuthSession } from "@supabase/supabase-js"
import { ReactNode, createContext, useEffect, useState } from "react"

import { supabase } from "~/lib/supabase"
import { sync } from "~/lib/sync"

export const AuthContext = createContext<{
  session: AuthSession | null
  user: AuthUser | null | undefined
}>({
  session: null,
  user: undefined,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null)
  const [user, setUser] = useState<AuthUser | null | undefined>(undefined)

  async function getUser() {
    const { data, error } = await supabase.auth.getUser()

    if (error) {
      supabase.auth.signOut()
      return null
    }

    return data.user
  }

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.info("AUTH have been updated ! reset cache")
      setSession(session)
      setUser(await getUser())

      sync({ reset: true })
    })
    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
