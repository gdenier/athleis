import { Model, tableSchema } from "@nozbe/watermelondb"
import { date, readonly } from "@nozbe/watermelondb/decorators"
import { TableName } from "./schema"

export const equipmentSchema = tableSchema({
  name: TableName.EQUIPMENTS,
  columns: [
    { name: "name", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class Equipment extends Model {
  static table = TableName.EQUIPMENTS

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.EXERCICES_EQUIPMENTS]: {
      type: "has_many" as const,
      foreignKey: "equipment_id",
    },
  }
}
