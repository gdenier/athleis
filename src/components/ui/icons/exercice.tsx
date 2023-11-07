import { ReactElement } from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const Exercice = (props: SvgProps): ReactElement | null => {
  return (
    <Svg width={24} height={24} fill="none" color="currentColor" {...props}>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.833 9.601c-.545 1.866-.82 2.241-1.88 3.687"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3.792 14.598c1.089 4.498 10.29 7.225 12.745 6.178 2.454-1.046 4.482-9.073 3.347-12.422 0 0 0-2.988-.515-3.476-.515-.487-4.917-2.38-5.532-1.751-.615.63-2.305 3.048-1.183 4.013 1.122.966 4.563.211 4.563.211"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.614 7.24c2.307-.045 2.975.1 4.424 1.879M8.06 11.286c3.555-.316 5.181.491 7.267 4.12"
      />
    </Svg>
  )
}