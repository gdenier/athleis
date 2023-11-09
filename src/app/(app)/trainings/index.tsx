import { Link } from "expo-router"
import { StyleSheet } from "react-native"
import { TrainingList } from "~/components/modules/trainings/components/TrainingList"
import { Button, Text, View } from "~/components/ui/design-system"

export default function TrainingHomeScreen() {
  return (
    <View tw="flex-1 items-center justify-center">
      <Text style={styles.title}>Home</Text>
      <Link href="/(app)/trainings/add_training" asChild>
        <Button variant="primary" label="Ajouter" />
      </Link>
      <Text variant="text-2xl" tw="py-6 text-lynch-600">
        test couleurs
      </Text>
      <TrainingList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
})
