import { Slot, SplashScreen, Stack } from "expo-router"
import { useEffect, useRef, useState } from "react"
import { AppState, useColorScheme } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider"
import { database } from "~/lib/watermelon"
import { AuthProvider } from "~/modules/auth/components/AuthProvider"
import { AuthGuard } from "~/modules/auth/guards/AuthGuard"
import { SyncProvider } from "~/components/SyncProvider"
import { DripsyProvider } from "dripsy"
import { theme } from "~/theme"
import { Fonts } from "~/theme/fonts"

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

  return (
    <Fonts>
      <DripsyProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <DatabaseProvider database={database}>
              <AuthProvider>
                <AuthGuard>
                  <SyncProvider>
                    <Slot />
                  </SyncProvider>
                </AuthGuard>
              </AuthProvider>
            </DatabaseProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </DripsyProvider>
    </Fonts>
  )
}
