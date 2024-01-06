import { ComponentProps } from "react"
import { View as DripsyView, Theme } from "dripsy"
import { tw as tailwind } from "~/theme/tailwind"

type ViewProps = { tw?: string } & Omit<
  ComponentProps<typeof DripsyView>,
  "variant"
>

function View({ tw, sx, ...props }: ViewProps) {
  return <DripsyView sx={{ ...sx, ...tailwind.style(tw) }} {...props} />
}

export { View, ViewProps }
