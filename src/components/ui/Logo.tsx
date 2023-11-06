import { ReactElement } from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { Text, XStack } from "tamagui"

const LogoColored = (): ReactElement | null => {
  return (
    <Svg width={24} height={24} fill="none">
      <Circle cx={12} cy={12} r={12} fill="#FFEDD5" />
      <Circle cx={12} cy={12} r={8} fill="#FED7AA" />
      <Circle cx={12} cy={12} r={4} fill="#FB923C" />
      <Path
        stroke="#23272E"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.833 9.601c-.545 1.866-.82 2.241-1.88 3.687"
      />
      <Path
        stroke="#23272E"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3.793 14.598c1.088 4.498 10.29 7.225 12.744 6.178 2.454-1.046 4.482-9.073 3.347-12.422 0 0 0-2.988-.515-3.476-.515-.487-4.917-2.38-5.532-1.751-.615.63-2.304 3.048-1.183 4.013 1.122.966 4.563.211 4.563.211"
      />
      <Path
        stroke="#23272E"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.614 7.24c2.307-.045 2.976.1 4.424 1.879M8.06 11.286c3.555-.316 5.181.491 7.267 4.12"
      />
    </Svg>
  )
}

const LogoMono = (): ReactElement | null => {
  return (
    <Svg width={24} height={24} fill="none">
      <Circle cx={12} cy={12} r={12} fill="#ECEEF2" />
      <Circle cx={12} cy={12} r={8} fill="#D5D9E2" />
      <Circle cx={12} cy={12} r={4} fill="#8695AA" />
      <Path
        stroke="#526077"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.833 9.601c-.545 1.866-.82 2.241-1.88 3.687"
      />
      <Path
        stroke="#526077"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M3.793 14.598c1.088 4.498 10.29 7.225 12.744 6.178 2.454-1.046 4.482-9.073 3.347-12.422 0 0 0-2.988-.515-3.476-.515-.487-4.917-2.38-5.532-1.751-.615.63-2.304 3.048-1.183 4.013 1.122.966 4.563.211 4.563.211"
      />
      <Path
        stroke="#526077"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4.614 7.24c2.307-.045 2.976.1 4.424 1.879M8.06 11.286c3.555-.316 5.181.491 7.267 4.12"
      />
    </Svg>
  )
}

export const LogoIcon = ({ colored = false }: { colored?: boolean }) => {
  if (colored) return <LogoColored />
  return <LogoMono />
}

export const Logo = ({ colored = false }: { colored?: boolean }) => {
  return (
    <XStack gap="$2">
      <LogoIcon colored={colored} />
      <Text
        fontSize="$6"
        fontWeight="bold"
        color={colored ? "$gray12" : "$gray10"}
      >
        Athléis
      </Text>
    </XStack>
  )
}
