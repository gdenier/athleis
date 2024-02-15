import { appSchema } from "@nozbe/watermelondb"
import { exerciceSchema } from "./exercice"
import { groupSchema } from "./group"
import { equipmentSchema } from "./equipment"
import { exerciceGroupSchema } from "./exercice_group"
import { exerciceEquipmentSchema } from "./exercice_equipment"

export const schema = appSchema({
  version: 1,
  tables: [
    exerciceSchema,
    groupSchema,
    equipmentSchema,
    exerciceGroupSchema,
    exerciceEquipmentSchema,
  ],
})

export enum TableName {
  PROFILES = "profiles",
  EXERCICES = "exercices",
  GROUPS = "groups",
  EXERCICES_GROUPS = "exercices_groups",
  EQUIPMENTS = "equipments",
  EXERCICES_EQUIPMENTS = "exercices_equipments",
  MEDIAS = "medias",
  EXERCICES_MEDIAS = "exercices_medias",
  TRAINING = "trainings",
  TRAINING_STEPS = "trainings_steps",
  TRAINING_SUPERSETS = "trainings_supersets",
  TRAINING_EXERCICES = "trainings_exercices",
  TRAINING_EXERCICE_SERIES = "trainings_exercices_series",
}
