import { useSx } from "dripsy"
import { create } from "twrnc"

const tw = create(require("../../tailwind.config.js"))

const useTw = () => {
  const sx = useSx()

  return (classes: string) => sx(tw.style(classes))
}

export { tw, useTw }
