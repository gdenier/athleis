import { ReactElement } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Avatar, AvatarFallback, Text, View, XStack, YStack } from "tamagui"
import { Logo } from "~/components/ui/Logo"
import { useAuth } from "~/hooks/useAuth"

export const HomeHeader = (): ReactElement | null => {
  const insets = useSafeAreaInsets()

  const { user } = useAuth()

  return (
    <View mt={insets.top} alignItems="center">
      <XStack
        width="90%"
        p="$4"
        bc="$gray4"
        justifyContent="space-between"
        alignItems="center"
        gap="$4"
        borderRadius="$7"
      >
        <Avatar circular size="$4">
          <Avatar.Image src="http://placekitten.com/200/300" />
          <Avatar.Fallback delayMs={150} bc="$orange4" />
        </Avatar>
        <YStack flexGrow={1}>
          <Text fontSize="$5">Bonjour</Text>
          <Text fontWeight="bold" fontSize="$6">
            {user?.user_metadata.pseudo}
          </Text>
        </YStack>
        <Logo colored={false} />
      </XStack>
    </View>
  )
}
