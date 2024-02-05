import { createConfig } from "@gluestack-ui/themed"
import { config as defaultConfig } from "@gluestack-ui/config"
import { FontResolver } from "@gluestack-style/react"
import { Platform } from "react-native"

const WEIGHTS = {
  "100": "100Thin",
  "200": "200ExtraLight",
  "300": "300Light",
  "400": "400Regular",
  "500": "500Medium",
  "600": "600SemiBold",
  "700": "700Bold",
  "800": "800ExtraBold",
  "900": "900Black",
}

const weightParse = (weight: keyof typeof WEIGHTS) => {
  return WEIGHTS[weight]
}

export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    fonts: {
      heading: "Asap",
      body: "Asap",
      mono: "Asap",
    },
  },
  plugins: [
    new FontResolver({
      mapFonts: (style) => {
        if (Platform.OS !== "web") {
          style.fontFamily = `${style.fontFamily}${
            style.fontWeight ? `_${weightParse(style.fontWeight)}` : ""
          }${style.fontStyle ? `_${style.fontStyle}` : ""}`
          style.fontWeight = undefined
          style.fontStyle = undefined
        }
      },
    }),
  ],
})
