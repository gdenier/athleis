import { ComponentProps } from "react"
import { Text as DripsyText, Theme } from "dripsy"
import { tw as tailwind } from "~/theme/tailwind"
import { italic } from "~/theme/typography"

export type TextVariant = keyof Theme["text"]

export type TextProps = { tw?: string; variant?: TextVariant } & Omit<
  ComponentProps<typeof DripsyText>,
  "variant"
>

// Note: You can wrap <DripsyText> in a <View> with a background color
// to verify if the text is rendered correctly and if Capsize is working well.

function Text({ tw, sx, variant, style, ...props }: TextProps) {
  return (
    <DripsyText
      sx={{ ...tailwind.style(tw), ...sx }}
      variant={variant}
      style={{
        ...(tw?.includes("italic")
          ? italic(tw.includes("font-bold") ? "bold" : "default")
          : {}),
        ...((style as object) ?? {}),
      }}
      {...props}
    />
  )
}

export { Text }
