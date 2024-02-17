import * as SplashScreen from "expo-splash-screen"
import { Slot } from "expo-router"
import Providers from "../components/Providers"
import Assets from "../components/Assets"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(app)",
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return (
    <Providers>
      <Assets>
        <Slot />
      </Assets>
    </Providers>
  )
}
