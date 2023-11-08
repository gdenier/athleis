import { ReactElement } from "react"
import { withObservables } from "@nozbe/watermelondb/react"
import Training from "~/model/training"
import { useTrainings } from "../hooks/useTrainings"
import { Text, YStack } from "tamagui"
import { database } from "~/lib/watermelon"
import { TableName } from "~/model/TableName.enum"

const TrainingListBase = ({
  trainings,
}: {
  trainings: Training[]
}): ReactElement | null => {
  return (
    <YStack>
      {trainings.map((training) => (
        <Text key={training.id}>{training.title}</Text>
      ))}
    </YStack>
  )
}

const enhancedTrainings = withObservables([], () => ({
  trainings: database.collections
    .get<Training>(TableName.TRAINING)
    .query()
    .observe(),
}))

export const TrainingList = enhancedTrainings(TrainingListBase)
