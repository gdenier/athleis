import { Redirect, Slot } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { View } from "~/components/ui/design-system"
import { useAuth } from "~/modules/auth/hooks/useAuth"

export default function AuthLayout() {
  const { session, user } = useAuth()
  const insets = useSafeAreaInsets()

  if (session && user) return <Redirect href="/(app)/trainings/" />

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      tw="px-2 bg-white"
    >
      <Slot />
    </View>
  )
}
