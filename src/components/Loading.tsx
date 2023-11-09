import { Text } from "react-native"

export function Loading({ message }: { message?: string }) {
  message ??= "Loading"

  return <Text>{message} …</Text>
}
