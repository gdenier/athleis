import {
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { Session } from "@supabase/supabase-js"
import { supabase } from "~/lib/supabase"
import { router } from "~/main"

export type AuthState = {
  session: Session | null | undefined
}

export const AuthContext = createContext<AuthState>({
  session: null,
})

export default function AuthProvider({
  children,
}: {
  children: ReactNode
}): ReactElement | null {
  const [session, setSession] = useState<Session | null | undefined>(undefined)
  // const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session && _event === "SIGNED_IN") {
        console.log("SIGNED_IN detecteds")
        router.navigate({
          to: "/",
        })
      }
      if (!session && _event === "SIGNED_OUT") {
        console.log("SIGNED_OUT detecteds")
        router.navigate({
          to: "/login",
        })
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
