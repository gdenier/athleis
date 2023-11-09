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
import { Text, TextInputProps, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

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
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: "black",
        gap: 0,
        borderRadius: 8,
        paddingVertical: 0,
        paddingHorizontal: 4,
        position: "relative",
        marginVertical: 6,
      }}
    >
      {label ? (
        <Text
          style={{
            position: "absolute",
            zIndex: 10,
            top: -5,
            left: 4,
            backgroundColor: "white",
            paddingHorizontal: 4,
            lineHeight: 0,
            color: "black",
          }}
        >
          {label}
        </Text>
      ) : null}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 0,
              paddingHorizontal: 4,
              maxWidth: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              id={name}
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
