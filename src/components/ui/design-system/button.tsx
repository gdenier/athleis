import {
  ComponentProps,
  ReactElement,
  ReactNode,
  Ref,
  cloneElement,
  createContext,
  forwardRef,
  useContext,
} from "react"
import { Pressable as DripsyButton, Theme } from "dripsy"
import { tw as tailwind } from "~/theme/tailwind"
import { Text, TextProps, TextVariant } from "./text"
import { theme } from "~/theme"

type ButtonContextValues = {
  variant: ButtonVariant | undefined
}

const ButtonContext = createContext<ButtonContextValues | null>(null)

type ButtonVariant = keyof Theme["buttons"]

type ButtonProps = (
  | {
      tw?: string
      variant?: ButtonVariant
      label: string
      rightAddon?: ReactNode
      leftAddon?: ReactNode
    }
  | {
      tw?: string
      variant?: ButtonVariant
      icon: ReactElement
    }
  | {
      tw?: string
      variant?: ButtonVariant
      children?: ReactNode
    }
) &
  Omit<ComponentProps<typeof DripsyButton>, "variant" | "children">

export const Button = forwardRef(
  ({ tw, sx, variant, ...props }: ButtonProps, ref: Ref<any>) => {
    return (
      <ButtonContext.Provider value={{ variant }}>
        <DripsyButton
          ref={ref}
          sx={{
            ...sx,
            ...tailwind.style(tw),
            flexDirection: "row",
            ...("icon" in props ? { paddingHorizontal: 12 } : {}),
          }}
          variant={variant ? `buttons.${variant}` : undefined}
          {...props}
        >
          {"children" in props ? (
            props.children
          ) : "label" in props ? (
            <>
              <Text
                sx={{
                  ...(variant ? theme.buttons[variant].text : {}),
                }}
              >
                {props.leftAddon}
              </Text>
              <Text
                sx={{
                  ...(variant ? theme.buttons[variant].text : {}),
                }}
              >
                {props.label}
              </Text>
              <Text
                sx={{
                  ...(variant ? theme.buttons[variant].text : {}),
                }}
              >
                {props.rightAddon}
              </Text>
            </>
          ) : "icon" in props ? (
            cloneElement(props.icon, {
              color: variant ? theme.buttons[variant].text.color : undefined,
            })
          ) : null}
        </DripsyButton>
      </ButtonContext.Provider>
    )
  }
)

export const ButtonLabel = ({
  children,
  sx,
  tw,
  ...props
}: { children: ReactNode } & TextProps) => {
  const { variant } = useContext(ButtonContext) as ButtonContextValues

  return (
    <Text
      sx={{ ...(variant ? theme.buttons[variant].text : {}), ...sx }}
      tw={`${variant === "link" ? "underline" : ""} ${tw ?? ""}`}
      {...props}
    >
      {children}
    </Text>
  )
}
export const ButtonIcon = ({
  children,
  ...props
}: {
  children: ReactElement
}) => {
  const { variant } = useContext(ButtonContext) as ButtonContextValues

  return cloneElement(children, {
    color: variant ? theme.buttons[variant].text.color : undefined,
  })
}
