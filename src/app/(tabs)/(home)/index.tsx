import { Box, Center, Heading, Icon } from "@gluestack-ui/themed"
import { ReactElement } from "react"
import { Text } from "react-native"
import { HomeIcon } from "~/components/ui/icons"

export default function HomeScreen(): ReactElement | null {
  return (
    <Center
      flex={1}
      $dark-bg="$backgroundDark900"
      $light-bg="$backgroundLight50"
    >
      <Heading>HomeScreen</Heading>
      <HomeIcon width="$12" height="$12" />
    </Center>
  )
}
