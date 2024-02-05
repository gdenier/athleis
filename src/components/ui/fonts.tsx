import { SplashScreen } from "expo-router"
import { ReactElement, ReactNode, useEffect } from "react"
import * as asap_fonts from "@expo-google-fonts/asap"

export const Fonts = ({
  children,
}: {
  children: ReactNode
}): ReactElement | null => {
  const { useFonts, __metadata__, ...fronts } = asap_fonts
  const [loaded, error] = useFonts(fronts)

  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  return <>{children}</>
}
