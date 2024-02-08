import { ReactElement } from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
import { IconType } from "."
import { useSx } from "dripsy"

export const Statistique: IconType = ({ color, ...props }) => {
  const sx = useSx()

  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      color={sx({ color: color as string }).color ?? "currentColor"}
      {...props}
    >
      <Path
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 20H4V4"
      />
      <Path
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16.5 12 9l3 3 4.5-4.5"
      />
    </Svg>
  )
}
