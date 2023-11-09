import config from "../../tailwind.config"

export const lightColors = {
  coral: (
    config.theme?.extend?.colors as Record<
      string,
      string | Record<string, string>
    >
  )?.["coral"],
  pumpkin: (
    config.theme?.extend?.colors as Record<
      string,
      string | Record<string, string>
    >
  )?.["pumpkin"],
  lynch: (
    config.theme?.extend?.colors as Record<
      string,
      string | Record<string, string>
    >
  )?.["lynch"],
  royal: (
    config.theme?.extend?.colors as Record<
      string,
      string | Record<string, string>
    >
  )?.["royal"],
}
