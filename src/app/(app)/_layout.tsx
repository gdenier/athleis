import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Link, Tabs } from "expo-router"
import { Pressable, useColorScheme } from "react-native"
import { Redirect } from "expo-router"
import Colors from "../../../constants/Colors"
import { useAuth } from "~/hooks/useAuth"
import { Loading } from "~/components/Loading"
import { Text, View, YStack } from "tamagui"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import { Exercice, Home, Profile, Statistique } from "~/components/ui/icons"
import { tokens } from "@tamagui/themes"
import { ReactElement, ReactNode, cloneElement } from "react"
import { HomeHeader } from "~/components/modules/home/HomeHeader"

const activeColor = tokens.color.orange5Light.val

export default function TabLayout() {
  const { session, user } = useAuth()

  if (user === undefined) return <Loading />

  if (!session || !user) return <Redirect href="/sign_in" />

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          header: () => <HomeHeader />,
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color}>
              <Home />
            </TabBarIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="exercices/index"
        options={{
          title: "Exercices",
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color}>
              <Exercice />
            </TabBarIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="stats/index"
        options={{
          title: "Statistiques",
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color}>
              <Statistique />
            </TabBarIcon>
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color}>
              <Profile />
            </TabBarIcon>
          ),
        }}
      />
    </Tabs>
  )
}

const TabBarIcon = ({
  color,
  children,
}: {
  color: string
  children: ReactElement
}) => {
  const isActive = color === activeColor

  return (
    <View
      borderRadius={999}
      backgroundColor={isActive ? color : "transparent"}
      w="$4"
      h="$4"
      alignItems="center"
      justifyContent="center"
    >
      {cloneElement(children, {
        color: isActive
          ? tokens.color.gray12Light.val
          : tokens.color.gray10Light.val,
      })}
    </View>
  )
}
