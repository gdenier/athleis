import { Model, Relation, tableSchema } from "@nozbe/watermelondb"
import {
  date,
  immutableRelation,
  readonly,
} from "@nozbe/watermelondb/decorators"
import { TableName } from "./TableName.enum"

export const groupSchema = tableSchema({
  name: TableName.EXERCICES,
  columns: [
    { name: "name", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class Group extends Model {
  static table = TableName.GROUPS

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.EXERCICES]: {
      type: "has_many" as const,
      foreignKey: "primary_group_id",
    },
    [TableName.EXERCICES_GROUPS]: {
      type: "has_many" as const,
      foreignKey: "group_id",
    },
  }
}
