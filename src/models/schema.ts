import { appSchema } from "@nozbe/watermelondb"
import { exerciceSchema } from "./exercice"
import { groupSchema } from "./group"
import { equipmentSchema } from "./equipment"
import { exerciceGroupSchema } from "./exercice_group"
import { exerciceEquipmentSchema } from "./exercice_equipment"

export const schema = appSchema({
  version: 2,
  tables: [
    exerciceSchema,
    groupSchema,
    equipmentSchema,
    exerciceGroupSchema,
    exerciceEquipmentSchema,
  ],
})
