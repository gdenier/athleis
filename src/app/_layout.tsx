import FontAwesome from "@expo/vector-icons/FontAwesome"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { Appearance, useColorScheme } from "react-native"
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider"
import { database } from "~/lib/watermelon"
import { Fonts } from "~/components/ui/fonts"
import { config } from "~/components/ui/theme"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  let colorScheme = useColorScheme()

  return (
    <Fonts>
      <GluestackUIProvider
        colorMode={colorScheme === "light" ? "light" : "dark"}
        config={config}
      >
        <DatabaseProvider database={database}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </DatabaseProvider>
      </GluestackUIProvider>
    </Fonts>
  )
}
