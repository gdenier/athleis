import { Alert, Button, Text, View } from "react-native"
import { useAuth } from "~/hooks/useAuth"
import { supabase } from "~/lib/supabase"

export default function ProfileScreen() {
  const { session, user } = useAuth()

  const handleLogout = async () => {
    const result = await supabase.auth.signOut()
    if (result.error) Alert.alert(result.error.message)
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
