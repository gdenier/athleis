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

export type DExercice = {
  id: string
  name: string
  primer: string
  primary_group?: DGroup
  secondary_groups?: DGroup[]
  equipments?: DEquipment[]
  // formatted text array with `;` separator
  steps?: string
  // formatted text array with `;` separator
  tips?: string
}

export type CreateDExercice = Partial<Pick<DExercice, "id">> &
  Omit<DExercice, "id">
