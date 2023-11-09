import { Stack } from "expo-router"
import { HomeHeader } from "~/components/modules/home/HomeHeader"

export default function TrainingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="add_training"
        options={{
          title: "Ajouter un entrainement",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="index"
        options={{
          header: () => <HomeHeader />,
        }}
      />
    </Stack>
  )
}
