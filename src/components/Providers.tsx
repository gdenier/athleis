import { GluestackUIProvider } from "@gluestack-ui/themed"
import { ReactElement, ReactNode } from "react"
import { useColorScheme } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { config } from "~/theme/gluestack-ui.config"
import { AuthProvider } from "./auth/providers/AuthProvider"

export default function Providers({
  children,
}: {
  children: ReactNode
}): ReactElement | null {
  let colorScheme = useColorScheme()

  return (
    <GluestackUIProvider
      colorMode={colorScheme === "light" ? "light" : "dark"}
      config={config}
    >
      <SafeAreaProvider>
        <AuthProvider>{children}</AuthProvider>
      </SafeAreaProvider>
    </GluestackUIProvider>
  )
}
