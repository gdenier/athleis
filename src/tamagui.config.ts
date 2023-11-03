import { shorthands } from "@tamagui/shorthands"
import { themes, tokens } from "@tamagui/themes"
import { createTamagui } from "tamagui"
import { config } from "@tamagui/config/v2-native"

const appConfig = createTamagui(config)

export type AppConfig = typeof appConfig

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
