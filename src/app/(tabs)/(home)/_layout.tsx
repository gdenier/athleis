import {
  Avatar,
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  View,
} from "@gluestack-ui/themed"
import { Stack } from "expo-router"
import { ReactElement } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function HomeLayout(): ReactElement {
  const insets = useSafeAreaInsets()

  return (
    <Box flex={1} bg="$white">
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => {
              return (
                <HStack
                  mt={insets.top}
                  mx="$4"
                  p="$4"
                  bg="$trueGray100"
                  rounded="$xl"
                  gap="$6"
                >
                  <Avatar />
                  <VStack>
                    <Text level="h1">Bonjour</Text>
                  </VStack>
                  {/* <Logo /> */}
                </HStack>
              )
            },
          }}
        />
      </Stack>
    </Box>
  )
}
