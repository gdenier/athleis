import { ReactElement, ReactNode, useEffect } from "react"
import * as asap_fonts from "@expo-google-fonts/asap"
import { SplashScreen } from "expo-router"
import { useAuth } from "./auth/hooks/useAuth"

export default function Assets({
  children,
}: {
  children: ReactNode
}): ReactElement | null {
  const { useFonts, __metadata__, ...fronts } = asap_fonts
  const [loaded, error] = useFonts(fronts)

  const { user } = useAuth()

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded && user !== undefined) {
      SplashScreen.hideAsync()
    }
  }, [loaded, user])

  if (!loaded) return null

  return <>{children}</>
}
