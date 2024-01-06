import { styled } from "dripsy"
import { ReactElement } from "react"
import Svg, { SvgProps } from "react-native-svg"

export * from "./sign-in"
export * from "./eye-empty"
export * from "./eye-off"
export * from "./home"
export * from "./exercice"
export * from "./profile"
export * from "./statistique"
export * from "./add-circled-outline"
export * from "./biceps"
export * from "./running"
export * from "./dumbell"
export * from "./play-outline"

export type IconType = (props: SvgProps) => ReactElement

export const StyledSvg = styled(Svg)
