import { ReactElement } from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
import { IconType } from "."

export const Home: IconType = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      color={props.color ?? "currentColor"}
      {...props}
    >
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9.5 12 4l9 5.5M19 13v6.4a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V13M10 16h4"
      />
    </Svg>
  )
}
