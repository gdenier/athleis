import { ReactElement } from "react"
import { useFormState } from "react-hook-form"
import { Alert } from "../ui/design-system"

export default function FormErrorAlert({
  name,
}: {
  name: string
}): ReactElement | null {
  const formState = useFormState()

  if (!formState.errors[name]?.message) return null

  return (
    <Alert severity="error" title={formState.errors[name]?.message as string} />
  )
}
