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

export const ControlledInput = <
  T extends FieldValues,
  TName extends FieldPath<T>,
>({
  name,
  control,
  rules,
  label,
  addon,
  ...inputProps
}: {
  name: TName
  control: Control<T, TName>
  rules?: ControllerProps<T, TName>["rules"]
  label?: string
  addon?: ReactNode
} & TextInputProps): ReactElement | null => {
  return (
    <View tw="w-full border border-lynch-100 rounded-lg py-3 relative">
      {label ? (
        <Text
          variant="text-xs"
          tw="absolute z-10 bg-white px-2 text-lynch-400 -top-1 mx-2"
        >
          {label}
        </Text>
      ) : null}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <View tw="flex-row px-4 w-full max-w-full items-center justify-between">
            <TextInput
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              autoCapitalize="none"
              style={{
                borderWidth: 0,
                padding: 0,
                flexGrow: 1,
                flexShrink: 1,
              }}
              {...inputProps}
            />
            {addon ? <View>{addon}</View> : null}
          </View>
        )}
      />
    </View>
  )
}
