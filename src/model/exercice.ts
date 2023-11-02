import { Model, Relation, tableSchema } from "@nozbe/watermelondb"
import { TableName } from "./schema"
import {
  date,
  immutableRelation,
  readonly,
} from "@nozbe/watermelondb/decorators"

export const exerciceSchema = tableSchema({
  name: TableName.EXERCICES,
  columns: [
    { name: "name", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class Exercice extends Model {
  static table = TableName.EXERCICES

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.TRAINING_EXERCICES]: {
      type: "has_many" as const,
      foreignKey: "exercice_id",
    },
  }
}
