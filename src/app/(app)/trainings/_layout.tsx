import { Stack } from "expo-router"
import { View } from "~/components/ui/design-system"
import { HomeHeader } from "~/modules/trainings/components/home/HomeHeader"

export default function TrainingLayout() {
  return (
    <View tw="h-full bg-white">
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
    </View>
  )
}
