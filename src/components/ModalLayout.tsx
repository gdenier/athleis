import { Link, router } from "expo-router"
import { ReactElement, ReactNode } from "react"
import { View } from "react-native"

export const ModalLayout = ({
  children,
}: {
  children: ReactNode
}): ReactElement | null => {
  const isPresented = router.canGoBack()

  return (
    <View style={{ paddingHorizontal: 2, flex: 1 }}>
      {!isPresented && <Link href="/">Dismiss</Link>}

      {children}
    </View>
  )
}
