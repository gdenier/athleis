import { useSx } from "dripsy"
import { IconType } from "."
import { Path, Svg } from "react-native-svg"

export const Running: IconType = ({ color, ...props }) => {
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
        d="M15.5 7a2 2 0 100-4 2 2 0 000 4zM13.113 8.267l-3.308 4.135 4.135 4.135-2.067 4.55"
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.91 9.507L10.297 6.2l2.816 2.068 2.895 3.308h3.721M9.392 15.71l-1.241.828H4.843"
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
