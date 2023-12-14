import { useFonts } from "expo-font"
import { ReactElement, ReactNode, useEffect } from "react"

export const Fonts = ({
  children,
}: {
  children: ReactNode
}): ReactElement | null => {
  const [loaded, error] = useFonts({
    ["Asap-Regular"]: require("../../assets/fonts/Asap-Regular.ttf"),
    ["Asap-RegularItalic"]: require("../../assets/fonts/Asap-Regular_Italic.ttf"),
    ["Asap-SemiBold"]: require("../../assets/fonts/Asap-SemiBold.ttf"),
    ["Asap-SemiBoldItalic"]: require("../../assets/fonts/Asap-SemiBold_Italic.ttf"),
    ["Asap-Bold"]: require("../../assets/fonts/Asap-Bold.ttf"),
    ["Asap-BoldItalic"]: require("../../assets/fonts/Asap-Bold_Italic.ttf"),
  })

  useEffect(() => {
    if (error) throw error
  }, [error])

  if (!loaded) return null

  return <>{children}</>
}
