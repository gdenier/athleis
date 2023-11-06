import { ReactElement } from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const Statistique = (props: SvgProps): ReactElement | null => {
  return (
    <Svg width={24} height={24} fill="none" color="currentColor" {...props}>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 20H4V4"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16.5 12 9l3 3 4.5-4.5"
      />
    </Svg>
  )
}
