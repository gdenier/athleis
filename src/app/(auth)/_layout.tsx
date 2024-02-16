import { Redirect, Slot } from "expo-router"
import { ReactElement } from "react"
import { useAuth } from "~/src/components/auth/hooks/useAuth"

export default function AuthLayout(): ReactElement | null {
  const { session, user } = useAuth()

  // TODO: rename tabs folder
  if (session && user) return <Redirect href="/(app)" />

  return <Slot />
}
