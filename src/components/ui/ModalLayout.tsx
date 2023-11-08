import { Link, router } from "expo-router"
import { ReactElement, ReactNode } from "react"
import { View, YStack, YStackProps } from "tamagui"

export const ModalLayout = ({
  children,
  ...props
}: {
  children: ReactNode
} & YStackProps): ReactElement | null => {
  const isPresented = router.canGoBack()

  return (
    <YStack paddingHorizontal="$2" {...props} flex={1}>
      {!isPresented && <Link href="/">Dismiss</Link>}

      {children}
    </YStack>
  )
}
