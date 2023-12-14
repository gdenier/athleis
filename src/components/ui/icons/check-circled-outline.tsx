import { useSx } from "dripsy"
import { IconType } from "."
import { Path, Svg } from "react-native-svg"

export const CheckCircledOutline: IconType = ({ color, ...props }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.47 11.97a.75.75 0 011.06 0L10 14.44l6.47-6.47a.75.75 0 111.06 1.06l-7 7a.75.75 0 01-1.06 0l-3-3a.75.75 0 010-1.06z"
        fill={sx({ color: color as string }).color ?? "currentColor"}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12z"
        fill={sx({ color: color as string }).color ?? "currentColor"}
      />
    </Svg>
  )
}
