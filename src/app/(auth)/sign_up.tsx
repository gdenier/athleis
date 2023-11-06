import { Link, router } from "expo-router"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { Alert } from "react-native"
import { Form, H1, Text, View, YStack } from "tamagui"
import { Header } from "~/components/modules/auth/sign_in/Header"
import { ControlledInput } from "~/components/form/ControlledInput"
import { Button } from "~/components/ui/Button"
import { EyeEmpty, SignIn } from "~/components/ui/icons"
import { supabase } from "~/lib/supabase"

export type SignUpFormValues = {
  email: string
  password: string
  pseudo: string
}

export default function SignUpPage() {
  const [isSecure, setSecure] = useState<boolean>(true)

  const form = useForm<SignUpFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  })

  const handleSubmit = async (values: SignUpFormValues) => {
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          pseudo: values.pseudo,
        },
      },
    })
    if (error) Alert.alert(error.message)
    router.replace("/(app)/")
  }

  return (
    <YStack
      flexGrow={1}
      gap="$10"
      alignItems="center"
      justifyContent="space-between"
    >
      <View>
        <Header />
      </View>
      <YStack flexGrow={1} gap="$4" alignItems="center">
        <YStack gap="$3.5" alignItems="center">
          <H1 size="$9" fontWeight="700">
            Bienvenue sur Athléis !
          </H1>
          <Text fontSize="$5" fontStyle="italic">
            Créez votre compte pour commencer votre séance !
          </Text>
        </YStack>
        <FormProvider {...form}>
          <Form onSubmit={form.handleSubmit(handleSubmit)} width="90%">
            <ControlledInput
              control={form.control}
              name="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              rules={{ required: true, minLength: 2 }}
              label="email"
              placeholder="Email"
            />
            <ControlledInput
              control={form.control}
              name="pseudo"
              textContentType="name"
              rules={{ required: true }}
              label="Nom de compte"
              placeholder="Nom de compte"
            />
            <ControlledInput
              control={form.control}
              name="password"
              textContentType="password"
              secureTextEntry={isSecure}
              rules={{ required: true }}
              label="Mot de passe"
              placeholder="Mot de passe"
              width="100%"
              addon={
                <Button
                  variant="icon"
                  backgroundColor="transparent"
                  onPress={() => setSecure((old) => !old)}
                >
                  <Button.Icon>
                    <EyeEmpty />
                  </Button.Icon>
                </Button>
              }
            />
            <Form.Trigger asChild>
              <Button variant="primary" mt="$5">
                <Button.Icon>
                  <SignIn />
                </Button.Icon>
                <Button.Text>Créez le compte</Button.Text>
              </Button>
            </Form.Trigger>
          </Form>
        </FormProvider>
      </YStack>
      <YStack gap="$2" alignItems="center">
        <Text fontSize="$5" fontStyle="italic">
          Déjà inscrit ?
        </Text>
        <Link asChild href="/(auth)/sign_in">
          <Button unstyled>
            <Button.Text
              textDecorationLine="underline"
              color="$orange11"
              fontSize="$5"
            >
              Se connecter
            </Button.Text>
          </Button>
        </Link>
      </YStack>
    </YStack>
  )
}
