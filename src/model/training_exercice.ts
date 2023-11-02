import { Model, Relation, tableSchema } from "@nozbe/watermelondb"
import { TableName } from "./TableName.enum"
import {
  children,
  date,
  immutableRelation,
  readonly,
} from "@nozbe/watermelondb/decorators"
import Exercice from "./exercice"
import TrainingExerciceSerie from "./training_exercice_serie"

export const trainingExerciceSchema = tableSchema({
  name: TableName.TRAINING_EXERCICES,
  columns: [
    { name: "order", type: "number" },
    { name: "exercice_id", type: "string" },
    { name: "superset_id", type: "string", isOptional: true },
    { name: "training_step_id", type: "string", isOptional: true },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class TrainingExercice extends Model {
  static table = TableName.TRAINING_EXERCICES

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    [TableName.TRAINING_STEPS]: {
      type: "belongs_to" as const,
      key: "training_step_id",
    },
    [TableName.TRAINING_SUPERSETS]: {
      type: "belongs_to" as const,
      key: "superset_id",
    },
    [TableName.TRAINING_EXERCICE_SERIES]: {
      type: "has_many" as const,
      foreignKey: "training_exercice_id",
    },
  }

  @immutableRelation(TableName.EXERCICES, "exercice_id")
  exercice!: Relation<Exercice>

  @children(TableName.TRAINING_EXERCICE_SERIES) series!: TrainingExerciceSerie[]
}
