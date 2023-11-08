import { Q } from "@nozbe/watermelondb"
import { useDatabase } from "@nozbe/watermelondb/react"
import { Link, router } from "expo-router"
import { FormProvider, useForm } from "react-hook-form"
import { Form, Text, YStack } from "tamagui"
import { ControlledInput } from "~/components/form/ControlledInput"
import { Button } from "~/components/ui/Button"
import { ModalLayout } from "~/components/ui/ModalLayout"
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
    <ModalLayout gap="$6">
      <Text mt="$4" fontStyle="italic" color="$gray12">
        Vous pourrez ensuite ajouter des exercices et modifier les paramètres de
        routines.
      </Text>
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(handleSubmit)}>
          <ControlledInput
            control={form.control}
            name="title"
            textContentType="name"
            rules={{ required: true }}
            label="Nom"
            placeholder="Nom de l'entrainement"
          />
          <Form.Trigger asChild>
            <Button variant="primary" mt="$5">
              <Button.Text>Créer l'entrainement</Button.Text>
            </Button>
          </Form.Trigger>
        </Form>
      </FormProvider>
    </ModalLayout>
  )
}
