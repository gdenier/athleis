import { Model, Relation, tableSchema } from "@nozbe/watermelondb"
import {
  date,
  immutableRelation,
  readonly,
} from "@nozbe/watermelondb/decorators"
import Exercice from "./exercice"
import { TableName } from "./schema"
import Equipment from "./equipment"

export const exerciceEquipmentSchema = tableSchema({
  name: TableName.EXERCICES_EQUIPMENTS,
  columns: [
    { name: "exercice_id", type: "string" },
    { name: "equipment_id", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class ExerciceEquipment extends Model {
  static table = TableName.EXERCICES_EQUIPMENTS

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.EXERCICES]: {
      type: "belongs_to" as const,
      key: "exercice_id",
    },
    [TableName.EQUIPMENTS]: {
      type: "belongs_to" as const,
      key: "equipment_id",
    },
  }

  @immutableRelation(TableName.EXERCICES, "exercice_id")
  exercice!: Relation<Exercice>
  @immutableRelation(TableName.EQUIPMENTS, "equipment_id")
  equipment!: Relation<Equipment>
}
