import { Tables } from "~/lib/database.types"
import { DEquipment, KEquipment } from "./Equipment.type"
import { DGroup, KGroup } from "./Group.type"

export type KExercice = {
  id: number
  id_num: string
  id_hex: string
  name?: string
  title: string
  url?: string
  primer: string
  type?: string
  primary?: KGroup
  secondary?: KGroup[]
  equipment?: KEquipment[]
  images?: string[]
  img?: string[]
  steps?: string[]
  tips?: string[]
  reference?: string[]
}

export type DExercice = Tables<"exercices">

export type CreateDExercice = Partial<Pick<DExercice, "id">> &
  Omit<DExercice, "id">
