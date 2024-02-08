import { Box, Center, Text, VStack } from "@gluestack-ui/themed"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useColorScheme } from "react-native"
import Providers from "~/components/Providers"
import { Assets } from "~/components/ui/assets"

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
    <Assets>
      <Providers>
        <Box flex={1} bg="$white">
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </Box>
      </Providers>
    </Assets>
  )
}
