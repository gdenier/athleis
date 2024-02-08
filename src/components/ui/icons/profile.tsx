import { useSx } from "dripsy"
import Svg, { Path, Circle } from "react-native-svg"
import { IconType } from "."

export const Profile: IconType = ({ color, ...props }) => {
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
        strokeWidth={1.5}
        d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1"
      />
      <Path
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeWidth={1.5}
      />
    </Svg>
  )
}
