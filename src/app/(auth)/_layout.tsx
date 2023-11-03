import { Redirect, Slot } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAuth } from "~/hooks/useAuth"

export default function AuthLayout() {
  const { session, user } = useAuth()

  if (session && user) return <Redirect href="/(app)" />

  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  )
}
