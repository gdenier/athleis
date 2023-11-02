import { Model, Relation, tableSchema } from "@nozbe/watermelondb"
import { TableName } from "./schema"
import {
  date,
  field,
  immutableRelation,
  readonly,
} from "@nozbe/watermelondb/decorators"

export const trainingSupersetSchema = tableSchema({
  name: TableName.TRAINING_SUPERSETS,
  columns: [
    { name: "rest", type: "number" },
    { name: "interval_rest", type: "number" },
    { name: "nb_round", type: "number" },
    { name: "training_step_id", type: "string" },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class TrainingSuperset extends Model {
  static table = TableName.TRAINING_SUPERSETS

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.TRAINING_STEPS]: {
      type: "belongs_to" as const,
      key: "training_step_id",
    },
  }

  @field("rest") rest!: number
  @field("interval_rest") intervalRest!: number
  @field("nb_round") nbRound!: number
}
