import { useDatabase } from "@nozbe/watermelondb/react"
import { useEffect, useState } from "react"
import { TableName } from "~/model/TableName.enum"
import Training from "~/model/training"

interface useTrainingsReturnValue {
  trainings: Training[] | null
}

export const useTrainings = (): useTrainingsReturnValue => {
  const database = useDatabase()
  const [trainings, setTrainings] = useState<Training[] | null>(null)

  const trainingsCollection = database.collections.get<Training>(
    TableName.TRAINING
  )

  useEffect(() => {
    const subscription = trainingsCollection
      .query()
      .observe()
      .subscribe((data) => {
        console.log("inside useTrainings", data)
        setTrainings((data[0] as any) ?? null)
      })

    return () => subscription.unsubscribe()
  }, [])

  return { trainings }
}
