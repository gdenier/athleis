import { Model, Relation, tableSchema } from "@nozbe/watermelondb"
import { TableName } from "./schema"
import { children, date, readonly } from "@nozbe/watermelondb/decorators"
import Training from "./training"

export const profileSchema = tableSchema({
  name: TableName.PROFILES,
  columns: [
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class Profile extends Model {
  static table = TableName.PROFILES

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.TRAINING]: {
      type: "has_many" as const,
      foreignKey: "profile_id",
    },
  }

  @children(TableName.TRAINING) trainings!: Training[]
}
