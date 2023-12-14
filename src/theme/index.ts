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
  fontSizes: [],
  fonts: {
    root: "Asap",
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
      borderRadius: 999,
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
      paddingVertical: 12,
      text: {
        color: "white",
      },
    },
    link: {
      bg: "transparent",
      text: {
        color: "pumpkin.900",
      },
    },
    ghost: {
      bg: "transparent",
      text: {
        color: "lynch.950",
      },
    },
  },
  text: {
    "text-xs": {
      fontWeight: "default",
      color: "lynch.950",
      ...textSizes["text-xs"],
    },
    "text-sm": {
      fontWeight: "default",
      color: "lynch.950",
      ...textSizes["text-sm"],
    },
    // `body` is the default text variant in Dripsy
    body: {
      fontWeight: "default",
      color: "lynch.950",
      ...textSizes["text-base"],
    },
    "text-base": {
      fontWeight: "default",
      color: "lynch.950",
      ...textSizes["text-base"],
    },
    "text-lg": {
      fontWeight: "default",
      color: "lynch.950",
      ...textSizes["text-lg"],
    },
    "text-xl": {
      fontWeight: "default",
      color: "lynch.950",
      ...textSizes["text-xl"],
    },
    "text-2xl": {
      fontWeight: "default",
      color: "lynch.950",
      ...textSizes["text-2xl"],
    },
    "text-3xl": {
      fontWeight: "default",
      color: "lynch.950",
      ...textSizes["text-3xl"],
    },
    "text-4xl": {
      fontWeight: "default",
      color: "lynch.950",
      ...textSizes["text-4xl"],
    },
  },
})

type MyTheme = typeof theme

declare module "dripsy" {
  interface DripsyCustomTheme extends MyTheme {}
}
