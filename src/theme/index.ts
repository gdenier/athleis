import { makeTheme } from "dripsy"
import { Platform } from "react-native"

import { fontFamily, textSizes } from "./typography"
import { lightColors } from "./colors"

const webFont = (font: string) => {
  return Platform.select({
    web: `"${fontFamily(
      font
    )}", Arial, Helvetica Neue, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    default: font,
  })
}

export const theme = makeTheme({
  space: [],
  fontSizes: [],
  fonts: {
    root: "Asap",
    asap: "Asap",
  },
  customFonts: {
    Asap: {
      default: webFont("Asap-Regular"),
      normal: webFont("Asap-Regular"),
      regular: webFont("Asap-Regular"),
      400: webFont("Asap-Regular"),
      semibold: webFont("Asap-SemiBold"),
      500: webFont("Asap-SemiBold"),
      bold: webFont("Asap-Bold"),
      600: webFont("Asap-Bold"),
      700: webFont("Asap-Bold"),
    },
  },
  colors: {
    ...lightColors,
    modes: {
      light: lightColors,
    },
  },
  buttons: {
    primary: {
      bg: "black",
      color: "coral.700",
    },
  },
  text: {
    "text-xs": {
      fontWeight: "default",
      ...textSizes["text-xs"],
    },
    "text-sm": {
      fontWeight: "default",
      ...textSizes["text-sm"],
    },
    // `body` is the default text variant in Dripsy
    body: {
      fontWeight: "default",
      ...textSizes["text-base"],
    },
    "text-base": {
      fontWeight: "default",
      ...textSizes["text-base"],
    },
    "text-lg": {
      fontWeight: "default",
      ...textSizes["text-lg"],
    },
    "text-xl": {
      fontWeight: "default",
      ...textSizes["text-xl"],
    },
    "text-2xl": {
      fontWeight: "default",
      ...textSizes["text-2xl"],
    },
    "text-3xl": {
      fontWeight: "default",
      ...textSizes["text-3xl"],
    },
    "text-4xl": {
      fontWeight: "default",
      ...textSizes["text-4xl"],
    },
  },
})

type MyTheme = typeof theme

declare module "dripsy" {
  interface DripsyCustomTheme extends MyTheme {}
}
