import { GluestackUIProvider } from "@gluestack-ui/themed"
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider"
import { ReactElement, ReactNode } from "react"
import { useColorScheme } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { database } from "~/lib/watermelon"
import { config } from "~/config/gluestack-ui.config"

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
      <DatabaseProvider database={database}>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </DatabaseProvider>
    </GluestackUIProvider>
  )
}
