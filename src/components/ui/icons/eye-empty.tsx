import Svg, { Path } from "react-native-svg"
import { IconType } from "."
import { useSx } from "dripsy"

export const EyeEmpty: IconType = ({ color, ...props }) => {
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
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <Path
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6Z"
      />
    </Svg>
  )
}
