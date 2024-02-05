import { Stack } from "expo-router"
import { ReactElement } from "react"

export default function HomeLayout(): ReactElement {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home page" }} />
    </Stack>
  )
}
