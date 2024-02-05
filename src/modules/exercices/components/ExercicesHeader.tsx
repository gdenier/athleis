import { ReactElement } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Logo } from "~/components/Logo"
import { SectionTitle } from "~/components/SectionTitle"
import { Text, View, Image } from "~/components/ui/design-system"
import { useAuth } from "~/modules/auth/hooks/useAuth"

export const ExercicesHeader = (): ReactElement | null => {
  const insets = useSafeAreaInsets()

  const { user } = useAuth()

  return (
    <View style={{ marginTop: insets.top }} tw="mx-2 ">
      <SectionTitle>Mes exercices</SectionTitle>
    </View>
  )
}
