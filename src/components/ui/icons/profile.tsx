import { ReactElement } from "react"
import Svg, { Path, SvgProps, Circle } from "react-native-svg"

export const Profile = (props: SvgProps): ReactElement | null => {
  return (
    <Svg width={24} height={24} fill="none" color="currentColor" {...props}>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 18v-1a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v1"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
      <Circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </Svg>
  )
}
