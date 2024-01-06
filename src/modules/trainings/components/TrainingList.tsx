import { ReactElement } from "react"
import { withObservables } from "@nozbe/watermelondb/react"
import Training from "~/model/training"
import { database } from "~/lib/watermelon"
import { TableName } from "~/model/TableName.enum"
import { List, Text, View } from "~/components/ui/design-system"
import TrainingListRow from "./TrainingList/TrainingListRow"

const TrainingListBase = ({
  trainings,
}: {
  trainings: Training[]
}): ReactElement | null => {
  return (
    <List
      data={trainings}
      renderItem={({ item: training }) => (
        <TrainingListRow training={training} />
      )}
      keyExtractor={(training) => training.id}
      style={{ overflow: "visible" }}
    />
  )
}

const enhancedTrainings = withObservables([], () => ({
  trainings: database.collections
    .get<Training>(TableName.TRAINING)
    .query()
    .observe(),
}))

export const TrainingList = enhancedTrainings(TrainingListBase)
