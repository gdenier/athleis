import { ReactElement } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Logo } from "~/components/Logo"
import { Text, View, Image } from "~/components/ui/design-system"
import { useAuth } from "~/modules/auth/hooks/useAuth"

export const HomeHeader = (): ReactElement | null => {
  const insets = useSafeAreaInsets()

  const { user } = useAuth()

  return (
    <View
      style={{ marginTop: insets.top }}
      tw="flex flex-row p-4 bg-lynch-50 rounded-lg justify-between mx-2 items-center gap-4"
    >
      <Image
        tw="aspect-square w-12 rounded-full"
        source={{
          uri: "http://placekitten.com/200/300",
        }}
      />
      <View tw="flex flex-col justify-start flex-1 gap-2">
        <Text>Bonjour</Text>
        <Text variant="text-lg" tw="font-bold">
          {user?.user_metadata.pseudo}
        </Text>
      </View>
      <Logo tw="opacity-60" colored={false} />
    </View>
  )
}
