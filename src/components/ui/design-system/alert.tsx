import { ReactElement } from "react"
import { View } from "./view"
import { CheckCircledOutline } from "../icons/check-circled-outline"
import { Text } from "./text"
import { useSx } from "dripsy"

export type Severity = "info" | "warning" | "error" | "success"

export type AlertProps = {
  severity?: Severity
  title: string
  description?: string
}

const colors = {
  info: "royal",
  warning: "pumpkin",
  error: "coral",
  success: "meadow",
}

export function Alert({
  title,
  description,
  severity = "info",
}: AlertProps): ReactElement | null {
  return (
    <View
      tw={`flex flex-row items-center gap-2 bg-${colors[severity]}-100 p-2 border-l-4 border-${colors[severity]}-600`}
    >
      <AlertIcon severity={severity} />
      <View>
        <Text>{title}</Text>
        {description ? <Text>{description}</Text> : null}
      </View>
    </View>
  )
}

const AlertIcon = ({ severity }: Pick<AlertProps, "severity">) => {
  switch (severity) {
    case "success":
      return <CheckCircledOutline color={`${colors[severity]}.600`} />
    case "error":
      return <CheckCircledOutline color={`${colors[severity]}.600`} />
    case "info":
      return <CheckCircledOutline color={`${colors[severity]}.600`} />
    case "warning":
      return <CheckCircledOutline color={`${colors[severity]}.600`} />
    default:
      return null
  }
}
