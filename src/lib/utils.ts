/**
 * Format the weight with right unit.
 *
 * @param value weight in gramme
 */
export function formatWeight(
  value: number,
  options: { withUnit?: boolean } | undefined = { withUnit: true }
): string | number {
  if (value === 0) return options?.withUnit ? "PDC" : 0
  if (value > 1000) {
    const weight = +(Math.round(+(value / 1000 + "e+2")) + "e-2")
    return options?.withUnit
      ? new Intl.NumberFormat("fr-FR", {
          style: "unit",
          unit: "kilogram",
        }).format(weight)
      : weight
  }
  if (value === 1000) {
    return options?.withUnit
      ? new Intl.NumberFormat("fr-FR", {
          style: "unit",
          unit: "kilogram",
        }).format(1)
      : 1
  }
  return options?.withUnit
    ? new Intl.NumberFormat("fr-FR", {
        style: "unit",
        unit: "gram",
      }).format(value)
    : value
}

/**
 * Format the duration with right unit.
 *
 * @param value time in second
 */
export function formatDuration(value: number): string {
  if (value <= 60) return `${value}s`
  const hour = Math.trunc(value / 3600)
  const minute = Math.trunc((value - hour * 3600) / 60)
  const second = value - minute * 60 - hour * 3600
  return `${hour ? `${hour}h ` : ""}${minute ? `${minute}min ` : ""}${
    second ? `${second}s ` : ""
  }`
}
