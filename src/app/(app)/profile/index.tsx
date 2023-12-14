import { router } from "expo-router"
import { Alert, Button, Text, View } from "react-native"
import { supabase } from "~/lib/supabase"

export default function ProfileScreen() {
  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace("/(auth)/sign_in")
  }

  return (
    <View>
      <View>
        <Text>Danger zone</Text>
      </View>
      <View>
        <Text>Se déconnecter</Text>
        <Button onPress={handleLogout} title="log out" />
      </View>
    </View>
  )
}
