import { Link, router } from "expo-router"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
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
} from "~/components/ui/design-system"
import { ControlledCheckbox } from "~/components/form/ControlledCheckbox"
import FormErrorAlert from "~/components/form/FormErrorAlert"

export type SignUpFormValues = {
  email: string
  password: string
  pseudo: string
  isTermAccepted: boolean
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
    try {
      const signUpRes = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            pseudo: values.pseudo,
            isTermAccepted: true,
          },
        },
      })

      if (signUpRes?.error) {
        form.setError("root", { message: signUpRes?.error.message })
        return
      }
      router.replace("/(app)/trainings/")
    } catch (e) {
      console.error(e)
    } finally {
    }
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
              Créez votre compte pour commencer votre séance !
            </Text>
          </View>
          <View tw="gap-6 flex-1">
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
              addon={
                <Button
                  variant="ghost"
                  onPress={() => setSecure((old) => !old)}
                  icon={isSecure ? <EyeEmpty /> : <EyeOff />}
                />
              }
            />
            <ControlledCheckbox
              control={form.control}
              name="isTermAccepted"
              rules={{ required: true }}
              label={
                <Text>
                  Accepter les{" "}
                  <Text tw="underline">conditions d'utilisation</Text>
                </Text>
              }
            />
          </View>
          <View>
            <FormErrorAlert name="root" />
            <Button variant="primary" onPress={form.handleSubmit(handleSubmit)}>
              <ButtonIcon>
                <SignIn />
              </ButtonIcon>
              <ButtonLabel>S'inscrire</ButtonLabel>
            </Button>
          </View>
        </View>
      </FormProvider>
      <View tw="items-center gap-4">
        <Text tw="italic">Déjà inscrit ?</Text>
        <Link asChild href="/(auth)/sign_in">
          <Button variant="link">
            <ButtonLabel>Se connecter</ButtonLabel>
          </Button>
        </Link>
      </View>
    </View>
  )
}
