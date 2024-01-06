import { ReactElement, ReactNode } from "react"
import { Text, View } from "./ui/design-system"

export type SectionTitleProps = {
  children: ReactNode
  addon?: ReactElement
}

export function SectionTitle({
  children,
  addon,
}: SectionTitleProps): ReactElement | null {
  return (
    <View tw="w-full flex flex-row justify-between gap-2 items-center">
      <Text variant="text-3xl" tw="font-bold">
        {children}
      </Text>
      {addon}
    </View>
  )
}
