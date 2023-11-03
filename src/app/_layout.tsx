import FontAwesome from "@expo/vector-icons/FontAwesome"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { useEffect, useRef, useState } from "react"
import { AppState, Text, View, useColorScheme } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { TamaguiProvider, Theme } from "tamagui"
import { NavigationThemeProvider } from "~/providers/NavigationThemeProvider"
import tamaguiConfig from "~/tamagui.config"
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider"
import { database } from "~/lib/watermelon"
import { AuthProvider } from "~/providers/AuthProvider"

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
    Asap: require("../../assets/fonts/Asap-Regular.ttf"),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={activeColorScheme}>
        <NavigationThemeProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
              <DatabaseProvider database={database}>
                <AuthProvider>
                  <Stack>
                    <Stack.Screen
                      name="(tabs)"
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="modal"
                      options={{ presentation: "modal" }}
                    />
                  </Stack>
                </AuthProvider>
              </DatabaseProvider>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </NavigationThemeProvider>
      </Theme>
    </TamaguiProvider>
  )
}
