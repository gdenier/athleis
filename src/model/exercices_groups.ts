import { Model, Relation, tableSchema } from "@nozbe/watermelondb"
import {
  date,
  immutableRelation,
  readonly,
} from "@nozbe/watermelondb/decorators"
import { TableName } from "./TableName.enum"
import Exercice from "./exercice"
import Group from "./group"

export const exerciceGroupSchema = tableSchema({
  name: TableName.EXERCICES_GROUPS,
  columns: [
    { name: "exercice_id", type: "string" },
    { name: "group_id", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class ExerciceGroup extends Model {
  static table = TableName.EXERCICES_GROUPS

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.EXERCICES]: {
      type: "belongs_to" as const,
      key: "exercice_id",
    },
    [TableName.GROUPS]: {
      type: "belongs_to" as const,
      key: "group_id",
    },
  }

  @immutableRelation(TableName.EXERCICES, "exercice_id")
  exercice!: Relation<Exercice>
  @immutableRelation(TableName.GROUPS, "group_id") group!: Relation<Group>
}
