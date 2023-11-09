import { Link, router } from "expo-router"
import { useState } from "react"
import { Form, FormProvider, useForm } from "react-hook-form"
import { Alert, Button, Text, View } from "react-native"
import { Header } from "~/components/modules/auth/sign_in/Header"
import { ControlledInput } from "~/components/form/ControlledInput"
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
    router.replace("/(app)/trainings/")
  }

  return (
    <View
      style={{
        flexGrow: 1,
        gap: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Header />
      </View>
      <View style={{ flexGrow: 1, gap: 6 }}>
        <View style={{ gap: 5, alignItems: "center" }}>
          <Text>Bienvenue sur Athléis !</Text>
          <Text>Connectez-vous pour commencer votre séance !</Text>
        </View>
        <FormProvider {...form}>
          <ControlledInput
            control={form.control}
            name="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            rules={{ required: true }}
            label="email"
            placeholder="Email"
          />
          <View style={{ alignItems: "flex-end" }}>
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
                  title="show"
                  color="transparent"
                  onPress={() => setSecure((old) => !old)}
                />
              }
            />
            <Button title="Mot de passe oublié ?" />
          </View>
          <Button
            onPress={form.handleSubmit(handleSubmit)}
            title="Se connecter"
          />
        </FormProvider>
      </View>
      <View style={{ gap: 4, alignItems: "center" }}>
        <Text>Pas encore de compte ?</Text>
        <Link asChild href="/(auth)/sign_up">
          <Button title="S'inscrire" />
        </Link>
      </View>
    </View>
  )
}
