import { config } from "@gluestack-ui/config"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider"
import { ReactElement, ReactNode } from "react"
import { useColorScheme } from "react-native"
import { database } from "~/lib/watermelon"

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
      <DatabaseProvider database={database}>{children}</DatabaseProvider>
    </GluestackUIProvider>
  )
}
