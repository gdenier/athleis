import { ReactElement } from "react"
import { Image, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Logo } from "~/components/Logo"
import { useAuth } from "~/hooks/useAuth"

export const HomeHeader = (): ReactElement | null => {
  const insets = useSafeAreaInsets()

  const { user } = useAuth()

  return (
    <View style={{ marginTop: insets.top, alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          padding: 4,
          justifyContent: "space-between",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Image
          style={{ width: 24, height: 24 }}
          source={{
            uri: "http://placekitten.com/200/300",
          }}
        />
        <View style={{ flexGrow: 1 }}>
          <Text>Bonjour</Text>
          <Text>{user?.user_metadata.pseudo}</Text>
        </View>
        <Logo colored={false} />
      </View>
    </View>
  )
}
