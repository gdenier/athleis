import { SplashScreen } from "expo-router"
import { ReactElement, ReactNode, useEffect } from "react"
import { useAuth } from "~/hooks/useAuth"

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()

  useEffect(() => {
    console.log(user)
    if (user !== undefined) {
      SplashScreen.hideAsync()
    }
  }, [user])

  if (user === undefined) return null

  return children
}
