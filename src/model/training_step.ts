import { Model, tableSchema } from "@nozbe/watermelondb"
import { TableName } from "./TableName.enum"
import { children, date, field, readonly } from "@nozbe/watermelondb/decorators"
import TrainingSuperset from "./training_superset"
import TrainingExercice from "./training_exercice"

export const trainingStepSchema = tableSchema({
  name: TableName.TRAINING_STEPS,
  columns: [
    { name: "order", type: "number" },
    { name: "training_id", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class TrainingStep extends Model {
  static table = TableName.TRAINING_STEPS

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.TRAINING]: { type: "belongs_to" as const, key: "training_id" },
    [TableName.TRAINING_SUPERSETS]: {
      type: "has_many" as const,
      foreignKey: "training_step_id",
    },
    [TableName.TRAINING_EXERCICES]: {
      type: "has_many" as const,
      foreignKey: "training_step_id",
    },
  }

  @children(TableName.TRAINING_SUPERSETS) supersets!: TrainingSuperset[]
  @children(TableName.TRAINING_EXERCICES) exercices!: TrainingExercice[]

  @field("order") order!: number
}
