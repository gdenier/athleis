import { ReactElement, ReactNode } from "react"
import {
  useForm,
  Controller,
  useFormContext,
  Control,
  FieldValues,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  ValidationRule,
  ControllerProps,
  FieldPath,
} from "react-hook-form"
import { TextInputProps } from "react-native"
import { Input, InputProps, Label, Text, View, XStack, YStack } from "tamagui"

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
} & InputProps): ReactElement | null => {
  return (
    <YStack
      width="100%"
      borderWidth="$1"
      borderColor="$borderColor"
      gap="0"
      borderRadius="$5"
      paddingVertical="0"
      paddingHorizontal="$2"
      position="relative"
      marginVertical="$3"
    >
      {label ? (
        <Label
          htmlFor={name}
          position="absolute"
          zIndex="$5"
          top="$-2.5"
          left="$2"
          backgroundColor="$background"
          paddingHorizontal="$2"
          lineHeight={0}
          color="$placeholderColor"
        >
          {label}
        </Label>
      ) : null}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <XStack
            paddingVertical={0}
            paddingHorizontal="$2"
            maxWidth="100%"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
          >
            <Input
              id={name}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              autoCapitalize="none"
              borderWidth={0}
              borderRadius={0}
              padding={0}
              flexGrow={1}
              flexShrink={1}
              {...inputProps}
            />
            {addon ? <View>{addon}</View> : null}
          </XStack>
        )}
      />
    </YStack>
  )
}
