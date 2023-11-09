import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { useEffect, useRef, useState } from "react"
import { AppState, Text, View, useColorScheme } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider"
import { database } from "~/lib/watermelon"
import { AuthProvider } from "~/providers/AuthProvider"
import { AuthGuard } from "~/components/guards/AuthGuard"
import { SyncProvider } from "~/providers/SyncProvider"
import { DripsyProvider } from "dripsy"
import { theme } from "~/theme"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)
  const colorScheme = useColorScheme()
  const [activeColorScheme, setActiveColorScheme] = useState(colorScheme)

  useEffect(() => {
    if (appStateVisible === "active") {
      setActiveColorScheme(colorScheme)
    }
  }, [appStateVisible, colorScheme])

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      appState.current = nextAppState
      setAppStateVisible(appState.current)
    })

    return () => {
      subscription.remove()
    }
  }, [])

  const [loaded, error] = useFonts({
    ["Asap-Regular"]: require("../../assets/fonts/Asap-Regular.ttf"),
    ["Asap-SemiBold"]: require("../../assets/fonts/Asap-SemiBold.ttf"),
    ["Asap-Bold"]: require("../../assets/fonts/Asap-Bold.ttf"),
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  if (!loaded) {
    return null
  }

  return (
    <DripsyProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <DatabaseProvider database={database}>
            <AuthProvider>
              <AuthGuard>
                <SyncProvider>
                  <Stack>
                    <Stack.Screen
                      name="(app)"
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="(auth)"
                      options={{ headerShown: false }}
                    />
                  </Stack>
                </SyncProvider>
              </AuthGuard>
            </AuthProvider>
          </DatabaseProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </DripsyProvider>
  )
}
