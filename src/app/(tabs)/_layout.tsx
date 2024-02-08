import React from "react"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Link, Tabs } from "expo-router"
import { Pressable } from "react-native"

import { useClientOnlyValue } from "~/components/useClientOnlyValue"
import { BicepsIcon, HomeIcon } from "~/components/ui/icons"
import { Box, Text } from "@gluestack-ui/themed"

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: { borderTopWidth: 0, height: 96 },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Box rounded="$full" bg={focused ? "$orange100" : "$white"} p="$3">
              <HomeIcon
                color={focused ? "$trueGray900" : "$trueGray600"}
                w="$7"
                h="$7"
              />
            </Box>
          ),
        }}
      />
      <Tabs.Screen
        name="exercices"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Box rounded="$full" bg={focused ? "$orange100" : "$white"} p="$3">
              <BicepsIcon
                color={focused ? "$trueGray900" : "$trueGray600"}
                w="$7"
                h="$7"
              />
            </Box>
          ),
        }}
      />
    </Tabs>
  )
}
