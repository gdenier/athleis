import { ReactElement } from "react"
import Svg, { Circle, Path } from "react-native-svg"

export const Header = (): ReactElement | null => {
  return (
    <Svg width={160} height={160} fill="none">
      <Circle cx={132} cy={28} r={12} fill="#FFF7ED" />
      <Circle cx={80} cy={80} r={64} fill="#FFEDD5" />
      <Circle cx={80} cy={80} r={42.667} fill="#FED7AA" />
      <Circle cx={80} cy={80} r={21.333} fill="#FB923C" />
      <Path
        stroke="#23272E"
        strokeLinecap="round"
        strokeWidth={4}
        d="M100.443 67.205c-2.909 9.951-4.377 11.952-10.023 19.663"
      />
      <Path
        stroke="#23272E"
        strokeLinecap="round"
        strokeWidth={4}
        d="M36.227 93.853c5.804 23.992 54.882 38.539 67.97 32.955 13.089-5.584 23.904-48.393 17.851-66.253 0 0 0-15.937-2.747-18.537-2.746-2.6-26.224-12.698-29.504-9.342-3.28 3.356-12.29 16.256-6.308 21.405 5.982 5.15 24.333 1.126 24.333 1.126"
      />
      <Path
        stroke="#23272E"
        strokeLinecap="round"
        strokeWidth={4}
        d="M40.608 54.615c12.303-.24 15.87.527 23.595 10.018M58.988 76.19c18.958-1.685 27.631 2.622 38.756 21.975"
      />
      <Circle cx={148} cy={12} r={4} fill="#FED7AA" />
      <Circle cx={16} cy={144} r={8} fill="#FFF7ED" />
      <Circle cx={20} cy={20} r={4} fill="#FED7AA" />
    </Svg>
  )
}
