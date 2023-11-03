import { AuthUser, AuthSession } from "@supabase/supabase-js"
import { ReactNode, createContext, useEffect, useState } from "react"

import { supabase } from "~/lib/supabase"

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
      console.error(error)
      supabase.auth.signOut()
      return null
    }

    return data.user
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(await getUser())
    })
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
