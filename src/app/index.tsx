import { Redirect } from "expo-router"
import { ReactElement } from "react"
import { Loading } from "~/components/Loading"
import { Logo } from "~/components/Logo"
import { View } from "~/components/ui/design-system"
import { useAuth } from "~/modules/auth/hooks/useAuth"

export default function SplashPage(): ReactElement | null {
  const { session, user } = useAuth()

  if (!session || user === null) return <Redirect href="/sign_in" />
  if (session && user) return <Redirect href="/trainings/" />

  return (
    <View tw="h-full w-full justify-center items-center">
      <Logo size="large" />
    </View>
  )
}
