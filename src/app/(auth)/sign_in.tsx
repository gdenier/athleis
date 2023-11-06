import { Link, router } from "expo-router"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { Alert } from "react-native"
import { Form, H1, Text, View, YStack } from "tamagui"
import { Header } from "~/components/auth/sign_in/Header"
import { ControlledInput } from "~/components/form/ControlledInput"
import { Button } from "~/components/ui/Button"
import { EyeEmpty, SignIn } from "~/components/ui/icons"
import { supabase } from "~/lib/supabase"

export type SignInFormValues = { email: string; password: string }

export default function SignInPage() {
  const [isSecure, setSecure] = useState<boolean>(true)

  const form = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  })

  const handleSubmit = async (values: SignInFormValues) => {
    const { error } = await supabase.auth.signInWithPassword(values)
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
      <YStack flexGrow={1} gap="$4">
        <YStack gap="$3.5" alignItems="center">
          <H1 size="$9" fontWeight="700">
            Bienvenue sur Athléis !
          </H1>
          <Text fontSize="$5" fontStyle="italic">
            Connectez-vous pour commencer votre séance !
          </Text>
        </YStack>
        <FormProvider {...form}>
          <Form onSubmit={form.handleSubmit(handleSubmit)} width="90%">
            <ControlledInput
              control={form.control}
              name="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              rules={{ required: true }}
              label="email"
              placeholder="Email"
            />
            <YStack alignItems="flex-end">
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
              <Button unstyled>
                <Button.Text
                  textDecorationLine="underline"
                  color="$orange11"
                  fontSize="$4"
                >
                  Mot de passe oublié ?
                </Button.Text>
              </Button>
            </YStack>
            <Form.Trigger asChild>
              <Button variant="primary" mt="$5">
                <Button.Icon>
                  <SignIn />
                </Button.Icon>
                <Button.Text>Se connecter</Button.Text>
              </Button>
            </Form.Trigger>
          </Form>
        </FormProvider>
      </YStack>
      <YStack gap="$2" alignItems="center">
        <Text fontSize="$5" fontStyle="italic">
          Pas encore de compte ?
        </Text>
        <Link asChild href="/(auth)/sign_up">
          <Button unstyled>
            <Button.Text
              textDecorationLine="underline"
              color="$orange11"
              fontSize="$5"
            >
              S'inscrire
            </Button.Text>
          </Button>
        </Link>
      </YStack>
    </YStack>
  )
}
