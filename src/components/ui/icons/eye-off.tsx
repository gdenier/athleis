import Svg, { Path } from "react-native-svg"
import { IconType } from "."
import { useSx } from "dripsy"

export const EyeOff: IconType = ({ color, ...props }) => {
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
        d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823"
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.362 7.561C5.68 8.74 4.279 10.419 3 12c1.889 2.99 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5"
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
