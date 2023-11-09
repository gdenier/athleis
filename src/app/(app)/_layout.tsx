import { Tabs } from "expo-router"
import { Redirect } from "expo-router"
import { useAuth } from "~/modules/auth/hooks/useAuth"
import { Loading } from "~/components/Loading"
import { Exercice, Home, Profile, Statistique } from "~/components/ui/icons"
import { ReactElement, cloneElement } from "react"
import { View } from "react-native"

const activeColor = "orange"

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
        name="trainings"
        options={{
          href: "/(app)/trainings/",
          headerShown: false,
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
      style={{
        borderRadius: 999,
        backgroundColor: isActive ? color : "transparent",
        width: 12,
        height: 12,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {cloneElement(children, {
        color: isActive ? "white" : "black",
      })}
    </View>
  )
}
