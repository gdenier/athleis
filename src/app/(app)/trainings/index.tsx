import { Link } from "expo-router"
import { StyleSheet, View, Text, Button } from "react-native"
import { TrainingList } from "~/components/modules/trainings/components/TrainingList"

export default function TrainingHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Link href="/(app)/trainings/add_training" asChild>
        <Button title="Ajouter" />
      </Link>
      <TrainingList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
})
