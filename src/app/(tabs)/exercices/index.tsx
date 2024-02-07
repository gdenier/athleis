import {
  Box,
  Button,
  ButtonText,
  FlatList,
  Text,
  VStack,
} from "@gluestack-ui/themed"
import { ReactElement } from "react"
import { database } from "~/lib/watermelon"
import Exercice from "~/models/exercice"
import { TableName } from "~/models/tables.enum"
import { withObservables } from "@nozbe/watermelondb/react"
import { ListRenderItem } from "react-native"

export default function ExercicesScreen(): ReactElement | null {
  const handleAdd = async () => {
    await database.write(async () => {
      await database.get<Exercice>(TableName.EXERCICES).create((exercice) => {
        exercice.name = "first"
        exercice.primer = "premier exercice"
      })
    })
  }
  return (
    <VStack>
      <Text>ExercicesScreen</Text>
      <Button onPress={handleAdd}>
        <ButtonText>Ajouer</ButtonText>
      </Button>
      <ExerciceList />
    </VStack>
  )
}

const ExerciceListBase = ({
  exercices,
}: {
  exercices: Exercice[]
}): ReactElement | null => {
  return (
    <FlatList
      data={exercices}
      renderItem={({ item }) => (
        <Box>
          <Text>{(item as Exercice).name}</Text>
        </Box>
      )}
      keyExtractor={(item) => (item as Exercice).id}
    />
  )
}

const enhancedExercices = withObservables([], () => ({
  exercices: database.collections
    .get<Exercice>(TableName.EXERCICES)
    .query()
    .observe(),
}))

export const ExerciceList = enhancedExercices(ExerciceListBase)
