import { Redirect, Slot } from "expo-router"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { YStack } from "tamagui"
import { useAuth } from "~/hooks/useAuth"

export default function AuthLayout() {
  const { session, user } = useAuth()
  const insets = useSafeAreaInsets()

  if (session && user) return <Redirect href="/(app)" />

  return (
    <YStack fullscreen paddingTop={insets.top} paddingBottom={insets.bottom}>
      <Slot />
    </YStack>
  )
}
