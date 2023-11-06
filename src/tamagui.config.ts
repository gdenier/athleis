import { shorthands } from "@tamagui/shorthands"
import { themes, tokens } from "@tamagui/themes"
import { createFont, createTamagui } from "tamagui"
import { config } from "@tamagui/config/v2"

const AsapFont = createFont({
  family: "Asap, Helvetica, Arial, sans-serif",
  size: { ...config.fonts.body.size },
})

const appConfig = createTamagui({
  ...config,
  fonts: {
    heading: AsapFont,
    body: AsapFont,
  },
})

export type AppConfig = typeof appConfig

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
