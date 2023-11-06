import { ReactElement } from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const SignIn = (props: SvgProps): ReactElement | null => {
  return (
    <Svg width={24} height={24} fill="none" color="currentColor" {...props}>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 12h-7m0 0 3 3m-3-3 3-3M19 6V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
      />
    </Svg>
  )
}
