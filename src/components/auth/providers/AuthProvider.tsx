import { AuthUser, AuthSession } from "@supabase/supabase-js"
import { ReactNode, createContext, useEffect, useState } from "react"
import { AppState } from "react-native"

import { supabase } from "~/src/lib/supabase"

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

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

      // TODO: Reset the local db (use the expo-sqlite lib, don't use electric ,it doesn't provide reset yet)
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
