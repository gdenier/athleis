import { SplashScreen } from "expo-router"
import { ReactElement, ReactNode, useEffect } from "react"
import { useAuth } from "~/src/components/auth/hooks/useAuth"

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()

  useEffect(() => {
    if (user !== undefined) {
      SplashScreen.hideAsync()
    }
  }, [user])

  if (user === undefined) return null

  return children
}
