import { useSx } from "dripsy"
import { IconType } from "."
import { Path, Svg } from "react-native-svg"

export const PlayOutline: IconType = ({ color, ...props }) => {
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
        d="M6.906 4.537A.6.6 0 006 5.053v13.894a.6.6 0 00.906.516l11.723-6.947a.6.6 0 000-1.032L6.906 4.537z"
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
