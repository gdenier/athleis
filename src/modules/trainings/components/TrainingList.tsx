import { ReactElement } from "react"
import { withObservables } from "@nozbe/watermelondb/react"
import Training from "~/model/training"
import { database } from "~/lib/watermelon"
import { TableName } from "~/model/TableName.enum"
import { Text, View } from "react-native"

const TrainingListBase = ({
  trainings,
}: {
  trainings: Training[]
}): ReactElement | null => {
  return (
    <View>
      {trainings.map((training) => (
        <Text key={training.id}>{training.title}</Text>
      ))}
    </View>
  )
}

const enhancedTrainings = withObservables([], () => ({
  trainings: database.collections
    .get<Training>(TableName.TRAINING)
    .query()
    .observe(),
}))

export const TrainingList = enhancedTrainings(TrainingListBase)
