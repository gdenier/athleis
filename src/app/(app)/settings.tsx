import { Alert } from "react-native"
import { Button, Stack, Text, XStack, YStack } from "tamagui"
import { useAuth } from "~/hooks/useAuth"
import { supabase } from "~/lib/supabase"

export default function SettingsScreen() {
  const { session, user } = useAuth()

  const handleLogout = async () => {
    const result = await supabase.auth.signOut()
    if (result.error) Alert.alert(result.error.message)
  }

  return (
    <Stack>
      <YStack>
        <Text>Danger zone</Text>
      </YStack>
      <XStack>
        <Text>Se déconnecter</Text>
        <Button onPress={handleLogout}>log out</Button>
      </XStack>
    </Stack>
  )
}
