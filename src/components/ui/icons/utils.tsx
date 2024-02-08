import { Icon, Text } from "@gluestack-ui/themed"
import { ComponentProps, ReactElement, ReactNode } from "react"

export type IconComponent = ({
  color,
  ...props
}: ComponentProps<typeof Icon> & {
  color?: ComponentProps<typeof Text>["color"]
}) => ReactElement

export const icon =
  (icon: any): IconComponent =>
  ({ color, ...props }) => {
    return <Icon as={icon} sx={{ color }} {...props} />
  }
