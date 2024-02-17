import { createIcon } from "@gluestack-ui/themed"
import { Path } from "react-native-svg"
import { icon } from "./utils"

export const Home = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path
        d="M3 9.5L12 4L21 9.5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 16H14"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
})

export const HomeIcon = icon(Home)
