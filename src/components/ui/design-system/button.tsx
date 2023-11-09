import { ComponentProps, ReactNode, Ref, forwardRef } from "react"
import { Pressable as DripsyButton, Theme } from "dripsy"
import { tw as tailwind } from "~/theme/tailwind"
import { Text, TextProps } from "./text"
import { theme } from "~/theme"

type Variant = keyof Theme["buttons"]

type ButtonProps = (
  | {
      tw?: string
      variant?: Variant
      label: string
      rightAddon?: ReactNode
      leftAddon?: ReactNode
    }
  | {
      tw?: string
      variant?: Variant
      children?: ReactNode
    }
) &
  Omit<ComponentProps<typeof DripsyButton>, "variant" | "children">

export const Button = forwardRef(
  ({ tw, sx, variant, ...props }: ButtonProps, ref: Ref<any>) => {
    return (
      <DripsyButton
        ref={ref}
        sx={{ ...sx, ...tailwind.style(tw) }}
        variant={variant ? `buttons.${variant}` : undefined}
        {...props}
      >
        {"children" in props ? (
          props.children
        ) : "label" in props ? (
          <>
            {props.rightAddon}
            <Text
              sx={{ color: variant ? theme.buttons[variant].color : undefined }}
            >
              {props.label}
            </Text>
            {props.leftAddon}
          </>
        ) : null}
      </DripsyButton>
    )
  }
)
