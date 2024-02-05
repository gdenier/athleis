import { Stack } from "expo-router"
import { ReactElement } from "react"

export default function ExerciceLayout(): ReactElement {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Exercice page" }} />
    </Stack>
  )
}
