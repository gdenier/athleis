import { useSx } from "dripsy"
import { IconType } from "."
import { ClipPath, Defs, G, Path, Svg } from "react-native-svg"

export const Dumbell: IconType = ({ color, ...props }) => {
  const sx = useSx()

  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      color={sx({ color: color as string }).color ?? "currentColor"}
      {...props}
    >
      <G
        clipPath="url(#clip0_903_6960)"
        stroke={sx({ color: color as string }).color ?? "currentColor"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7.9 7H5.1a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6zM19.9 7h-2.8a.6.6 0 00-.6.6v8.8a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V7.6a.6.6 0 00-.6-.6zM1.5 14.4V9.6a.6.6 0 01.6-.6h1.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6H2.1a.6.6 0 01-.6-.6z" />
        <Path d="M23.5 14.4V9.6a.6.6 0 00-.6-.6h-1.8a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6h1.8a.6.6 0 00.6-.6zM8.5 12h8" />
      </G>
      <Defs>
        <ClipPath id="clip0_903_6960">
          <Path
            fill={sx({ color: color as string }).color ?? "currentColor"}
            transform="translate(.5)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
