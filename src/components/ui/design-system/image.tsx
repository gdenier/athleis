import { ComponentProps } from "react"
import { Image as DripsyImage } from "dripsy"
import { tw as tailwind } from "~/theme/tailwind"

type ImageProps = { tw?: string } & Omit<
  ComponentProps<typeof DripsyImage>,
  "variant"
>

function Image({ tw, sx, ...props }: ImageProps) {
  return <DripsyImage sx={{ ...sx, ...tailwind.style(tw) }} {...props} />
}

export { Image }
