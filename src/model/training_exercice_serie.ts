import { Model, Relation, tableSchema } from "@nozbe/watermelondb"
import { TableName } from "./schema"
import {
  date,
  field,
  immutableRelation,
  readonly,
} from "@nozbe/watermelondb/decorators"

export const trainingExerciceSerieSchema = tableSchema({
  name: TableName.TRAINING_EXERCICE_SERIES,
  columns: [
    { name: "weight", type: "number", isOptional: true },
    { name: "repetition", type: "number", isOptional: true },
    { name: "time", type: "number", isOptional: true },
    { name: "rest", type: "number", isOptional: true },
    { name: "order", type: "number" },
    { name: "training_exercice_id", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class TrainingExerciceSerie extends Model {
  static table = TableName.TRAINING_EXERCICE_SERIES

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.TRAINING_EXERCICES]: {
      type: "belongs_to" as const,
      key: "training_exercice_id",
    },
  }

  @field("weight") weight?: number
  @field("repetition") repetition?: number
  @field("time") time?: number
  @field("rest") rest?: number
  @field("order") order!: number
}
