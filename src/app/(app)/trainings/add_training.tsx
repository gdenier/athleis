import { Q } from "@nozbe/watermelondb"
import { useDatabase } from "@nozbe/watermelondb/react"
import { Link, router } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"
import { Button, Text } from "react-native"
import { ControlledInput } from "~/components/form/ControlledInput"
import { ModalLayout } from "~/components/ModalLayout"
import { useAuth } from "~/hooks/useAuth"
import { TableName } from "~/model/TableName.enum"
import Profile from "~/model/profile"
import Training from "~/model/training"

type AddTrainingFormValues = { title: string }

export default function AddTrainingScreen() {
  const { user } = useAuth()
  const isPresented = router.canGoBack()

  const form = useForm<AddTrainingFormValues>({
    defaultValues: {
      title: "",
    },
    mode: "onSubmit",
  })

  const database = useDatabase()
  const handleSubmit = async (values: AddTrainingFormValues) => {
    if (!user) return

    const profile = await database
      .get<Profile>(TableName.PROFILES)
      .find(user.id)
    await profile.addTraining(values.title)

    router.push("/(app)/trainings/")
  }

  return (
    <ModalLayout>
      <Text>
        Vous pourrez ensuite ajouter des exercices et modifier les paramètres de
        routines.
      </Text>
      <FormProvider {...form}>
        <ControlledInput
          control={form.control}
          name="title"
          textContentType="name"
          rules={{ required: true }}
          label="Nom"
          placeholder="Nom de l'entrainement"
        />
        <Button
          onPress={form.handleSubmit(handleSubmit)}
          title="Se connecter"
        />
      </FormProvider>
    </ModalLayout>
  )
}
