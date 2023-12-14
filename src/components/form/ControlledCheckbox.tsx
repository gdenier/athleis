import { ReactElement, ReactNode } from "react"
import {
  Controller,
  Control,
  FieldValues,
  ControllerProps,
  FieldPath,
} from "react-hook-form"
import { TextInputProps } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Text, View } from "~/components/ui/design-system"
import BouncyCheckbox, {
  IBouncyCheckboxProps,
} from "react-native-bouncy-checkbox"
import { useDripsyTheme, useSx } from "dripsy"
import { useTw } from "~/theme/tailwind"

export const ControlledCheckbox = <
  T extends FieldValues,
  TName extends FieldPath<T>,
>({
  name,
  control,
  rules,
  label,
  ...inputProps
}: {
  name: TName
  control: Control<T, TName>
  rules?: ControllerProps<T, TName>["rules"]
  label: string | ReactNode
} & IBouncyCheckboxProps): ReactElement | null => {
  const tw = useTw()
  const { theme } = useDripsyTheme()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <BouncyCheckbox
          onPress={(isChecked) => field.onChange(isChecked)}
          iconStyle={tw("rounded-lg")}
          innerIconStyle={tw("rounded-lg")}
          fillColor={(theme.colors.pumpkin as Record<string, string>)["400"]}
          text={typeof label === "string" ? label : undefined}
          textComponent={
            typeof label !== "string" ? (
              <View tw="ml-4">{label}</View>
            ) : undefined
          }
          {...inputProps}
        />
      )}
    />
  )
}
