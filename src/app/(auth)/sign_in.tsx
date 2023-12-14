import { Link, router } from "expo-router"
import { useState } from "react"
import { Form, FormProvider, useForm } from "react-hook-form"
import { Header } from "~/modules/auth/components/sign_in/Header"
import { ControlledInput } from "~/components/form/ControlledInput"
import { EyeEmpty, EyeOff, SignIn } from "~/components/ui/icons"
import { supabase } from "~/lib/supabase"
import {
  Button,
  ButtonIcon,
  ButtonLabel,
  Text,
  View,
  Alert,
} from "~/components/ui/design-system"
import FormErrorAlert from "~/components/form/FormErrorAlert"

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
    if (error) {
      form.setError("root", { message: error.message })
      return
    }
    router.replace("/(app)/trainings/")
  }

  return (
    <View tw="h-full justify-between gap-16">
      <View tw="items-center justify-center">
        <Header />
      </View>
      <FormProvider {...form}>
        <View tw="flex-1 gap-10 justify-between">
          <View tw="w-full items-center gap-6">
            <Text variant="text-3xl" tw="font-bold">
              Bienvenue sur Athléis !
            </Text>
            <Text tw="italic">
              Connectez-vous pour commencer votre séance !
            </Text>
          </View>
          <View tw="gap-6 flex-1">
            <ControlledInput
              control={form.control}
              name="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              rules={{ required: true }}
              label="email"
              placeholder="Email"
            />
            <View tw="items-end gap-4">
              <ControlledInput
                control={form.control}
                name="password"
                textContentType="password"
                secureTextEntry={isSecure}
                rules={{ required: true }}
                label="Mot de passe"
                placeholder="Mot de passe"
                addon={
                  <Button
                    variant="ghost"
                    onPress={() => setSecure((old) => !old)}
                    icon={isSecure ? <EyeEmpty /> : <EyeOff />}
                  />
                }
              />
              <Button variant="link">
                <ButtonLabel>Mot de passe oublié ?</ButtonLabel>
              </Button>
            </View>
          </View>
          <View tw="gap-4">
            <FormErrorAlert name="root" />
            <Button variant="primary" onPress={form.handleSubmit(handleSubmit)}>
              <ButtonIcon>
                <SignIn />
              </ButtonIcon>
              <ButtonLabel>Se connecter</ButtonLabel>
            </Button>
          </View>
        </View>
      </FormProvider>
      <View tw="items-center gap-4">
        <Text tw="italic">Pas encore de compte ?</Text>
        <Link asChild href="/(auth)/sign_up">
          <Button variant="link">
            <ButtonLabel>S'inscrire</ButtonLabel>
          </Button>
        </Link>
      </View>
    </View>
  )
}
