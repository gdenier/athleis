import { createIcon } from "@gluestack-ui/themed"
import { Path } from "react-native-svg"
import { icon } from "./utils"

export const Biceps = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path
        d="M15.8331 9.60107C15.2876 11.4669 15.0123 11.8421 13.9536 13.2877"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M3.79248 14.5975C4.88059 19.0958 14.0827 21.8235 16.5368 20.7765C18.9909 19.7295 21.0187 11.7027 19.8837 8.35409C19.8837 8.35409 19.8837 5.36579 19.3688 4.87837C18.8539 4.39095 14.4518 2.49742 13.8368 3.12676C13.2219 3.7561 11.5323 6.17467 12.6539 7.14015C13.7756 8.10564 17.2165 7.35138 17.2165 7.35138"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M4.61377 7.24038C6.92055 7.19544 7.58929 7.33923 9.03778 9.11869"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M8.06006 11.2857C11.6146 10.9698 13.241 11.7774 15.3269 15.406"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </>
  ),
})

export const BicepsIcon = icon(Biceps)
