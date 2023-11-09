import { Link, router } from "expo-router"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { Alert, Button, Text, View } from "react-native"
import { Header } from "~/modules/auth/components/sign_in/Header"
import { ControlledInput } from "~/components/form/ControlledInput"
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
          <Text>Créez votre compte pour commencer votre séance !</Text>
        </View>
        <FormProvider {...form}>
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
                title="show"
                color="transparent"
                onPress={() => setSecure((old) => !old)}
              />
            }
          />
          <Button
            onPress={form.handleSubmit(handleSubmit)}
            title="Se connecter"
          />
        </FormProvider>
      </View>
      <View style={{ gap: 4, alignItems: "center" }}>
        <Text>Déjà inscrit ?</Text>
        <Link asChild href="/(auth)/sign_in">
          <Link asChild href="/(auth)/sign_up">
            <Button title="Se connecter" />
          </Link>
        </Link>
      </View>
    </View>
  )
}
