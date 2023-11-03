import { router } from "expo-router"
import { useEffect, useState } from "react"
import { Alert } from "react-native"
import { Button, Stack, Text } from "tamagui"
import { useAuth } from "~/hooks/useAuth"
import { supabase } from "~/lib/supabase"

export default function SignInPage() {
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const handleLogin = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: "test@test.fr",
      password: "foobarbaz",
    })
    if (error) Alert.alert(error.message)
    router.replace("/(app)")
  }

  const handleLogout = async () => {
    const result = await supabase.auth.signOut()
    if (result.error) Alert.alert(result.error.message)
  }

  return (
    <Stack margin={10}>
      <Button onPress={handleLogin}>Login</Button>
      <Text>state : {!loading ? "idle" : "loading"}</Text>
      <Text>user : {user?.email ?? "pas de user"}</Text>
      <Button onPress={handleLogout}>Logout</Button>
    </Stack>
  )
}
