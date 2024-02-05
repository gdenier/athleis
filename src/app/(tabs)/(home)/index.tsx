import { Box, Center, Heading } from "@gluestack-ui/themed"
import { ReactElement } from "react"
import { Text } from "react-native"

export default function HomeScreen(): ReactElement | null {
  return (
    <Center
      flex={1}
      $dark-bg="$backgroundDark900"
      $light-bg="$backgroundLight50"
    >
      <Heading>HomeScreen</Heading>
    </Center>
  )
}
