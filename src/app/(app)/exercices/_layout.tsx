import { Stack } from "expo-router"
import { View } from "~/components/ui/design-system"
import { ExercicesHeader } from "~/modules/exercices/components/ExercicesHeader"

export default function ExercicesLayout() {
  return (
    <View tw="h-full bg-white">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <ExercicesHeader />,
          }}
        />
      </Stack>
    </View>
  )
}
