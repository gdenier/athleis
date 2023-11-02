import { Model, Relation, tableSchema } from "@nozbe/watermelondb"
import { TableName } from "./TableName.enum"
import {
  children,
  date,
  immutableRelation,
  readonly,
  text,
} from "@nozbe/watermelondb/decorators"
import Profile from "./profile"
import TrainingStep from "./training_step"

export const trainingSchema = tableSchema({
  name: TableName.TRAINING,
  columns: [
    { name: "title", type: "string" },
    { name: "profile_id", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class Training extends Model {
  static table = TableName.TRAINING

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.TRAINING_STEPS]: {
      type: "has_many" as const,
      foreignKey: "training_id",
    },
    [TableName.PROFILES]: { type: "belongs_to" as const, key: "profile_id" },
  }

  @children(TableName.TRAINING_STEPS) steps!: TrainingStep[]

  @text("title") title!: string
}
