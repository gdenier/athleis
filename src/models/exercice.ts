import { Model, tableSchema } from "@nozbe/watermelondb"
import {
  date,
  readonly,
  text,
  json,
  children,
  relation,
} from "@nozbe/watermelondb/decorators"
import { TableName } from "./schema"
import Group from "./group"
import Equipment from "./equipment"

export const exerciceSchema = tableSchema({
  name: TableName.EXERCICES,
  columns: [
    { name: "name", type: "string" },
    { name: "primer", type: "string" },
    { name: "steps", type: "string", isOptional: true },
    { name: "tips", type: "string", isOptional: true },
    { name: "primary_group_id", type: "string", isOptional: true },
    { name: "created_at", type: "number" },
    { name: "updated_at", type: "number" },
  ],
})

export default class Exercice extends Model {
  static table = TableName.EXERCICES

  @text("name") name!: string
  @text("primer") primer!: string
  @json("steps", (rawSteps) =>
    Array.isArray(rawSteps) ? rawSteps.map(String) : []
  )
  steps?: string[]
  @json("tips", (rawTips) =>
    Array.isArray(rawTips) ? rawTips.map(String) : []
  )
  tips?: string[]

  @readonly @date("created_at") createdAt!: Date
  @readonly @date("updated_at") updatedAt!: Date

  static associations = {
    // [TableName.TRAINING_EXERCICES]: {
    //   type: "has_many" as const,
    //   foreignKey: "exercice_id",
    // },
    [TableName.GROUPS]: {
      type: "belongs_to" as const,
      key: "primary_group_id",
    },
    [TableName.EXERCICES_GROUPS]: {
      type: "has_many" as const,
      foreignKey: "exercice_id",
    },
    [TableName.EXERCICES_EQUIPMENTS]: {
      type: "has_many" as const,
      foreignKey: "exercice_id",
    },
  }

  @relation(TableName.GROUPS, "primary_group_id") primaryGroup?: Group
  @children(TableName.EXERCICES_GROUPS) groups!: Group[]
  @children(TableName.EXERCICES_EQUIPMENTS) equipments!: Equipment[]
}
