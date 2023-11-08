import { Link } from "expo-router"
import { StyleSheet, View, Text } from "react-native"
import { YStack } from "tamagui"
import { TrainingList } from "~/components/modules/trainings/components/TrainingList"
import { Button } from "~/components/ui/Button"
import { database } from "~/lib/watermelon"
import { TableName } from "~/model/TableName.enum"
import Training from "~/model/training"

export default function TrainingHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link href="/(app)/trainings/add_training" asChild>
        <Button variant="primary">Ajouter</Button>
      </Link>
      <TrainingList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
})
