import * as fs from "fs"
import { CreateDExercice, DExercice, KExercice } from "./types/Exercice.type"
import { createClient } from "@supabase/supabase-js"
import { Database } from "../../src/lib/database.types"
import { config } from "../../src/lib/config"
import { DGroup, KGroup } from "./types/Group.type"
import { DEquipment, KEquipment } from "./types/Equipment.type"

// This scripts only run in local computer
// require("dotenv").config({ path: "../../.env.local" })

const exercices = JSON.parse(
  fs.readFileSync("./scripts/everkinetic/data/exercises.json", "utf8")
) as KExercice[]

export const supabase = createClient<Database>(
  config.supabaseUrl,
  process.env.PRIVATE_SUPABASE_SERVICE_ROLE as string
)

let errors = { exercices: 0, groups: 0, equipments: 0 }
let success = { exercices: 0, groups: 0, equipments: 0 }
let loaded = { exercices: 0, groups: 0, equipments: 0 }

const [groups, equipments] = exercices.reduce<[KGroup[], KEquipment[]]>(
  ([groups, equipments], exercice) => {
    const newGroups = new Set(groups)
    if (exercice.primary) newGroups.add(exercice.primary)
    exercice.secondary?.forEach((grp) => newGroups.add(grp))

    const newEquipments = new Set(equipments)
    exercice.equipment?.forEach((eqpt) => newEquipments.add(eqpt))

    return [Array.from(newGroups.values()), Array.from(newEquipments.values())]
  },
  [[], []]
)
console.log("✅ File parsed")
console.log("🏋️  exercices found :", exercices.length)
console.log("💪  groups found :", groups.length)
console.log("🛠️  equipments found :", equipments.length)

Promise.all([upsertGroups(groups), upsertEquipments(equipments)]).then(
  async ([savedGroups, savedEquipments]) => {
    const normalizedData = exercices.map((exercice) =>
      normalizeExercice(
        exercice,
        savedGroups as DGroup[],
        savedEquipments as DEquipment[]
      )
    )
    await upsertExercices(normalizedData)

    if (errors.exercices || errors.equipments || errors.groups) {
      console.log("🔴 THERE IS SOME ERRORS")
    } else {
      console.log("✅ ALL SEEMS GOOD !")
    }
  }
)

async function upsertGroups(groups: KGroup[]) {
  const { data, error } = await supabase
    .from("groups")
    .upsert(
      groups.map((group) => ({ name: group })),
      { onConflict: "name" }
    )
    .select()

  if (error) {
    errors.groups = 1
    console.error(error)
  } else {
    success.groups = 1
  }

  return data
}
async function upsertEquipments(equipments: KGroup[]) {
  const { data, error } = await supabase
    .from("equipments")
    .upsert(
      equipments.map((equipment) => ({ name: equipment })),
      { onConflict: "name" }
    )
    .select()

  if (error) {
    errors.equipments = 1
    console.error(error)
  } else {
    success.equipments = 1
  }

  return data
}

function normalizeExercice(
  exercice: KExercice,
  existingGroups: DGroup[],
  existingEquipments: DEquipment[]
): CreateDExercice {
  return {
    name: exercice.title,
    primer: exercice.primer,
    equipments:
      exercice.equipment
        ?.map(
          (equipment) =>
            existingEquipments?.find((existing) => existing.name === equipment)
        )
        .filter((equipment): equipment is DEquipment => !!equipment) ?? [],
    primary_group: existingGroups?.find(
      (group) => group.name === exercice.primary
    ),
    secondary_groups:
      exercice.secondary
        ?.map(
          (group) => existingGroups?.find((existing) => existing.name === group)
        )
        .filter((group): group is DGroup => !!group) ?? [],
    steps: exercice.steps?.join(";"),
    tips: exercice.tips?.join(";"),
  }
}

async function upsertExercices(exercices: CreateDExercice[]) {
  const { data: savedExercices, error: exerciceErrors } = await supabase
    .from("exercices")
    .upsert(
      exercices.map(
        ({ equipments, primary_group, secondary_groups, ...exercice }) => ({
          ...exercice,
          primary_group_id: primary_group?.id,
        })
      )
    )
    .select()
  if (exerciceErrors) {
    errors.exercices = 1
    console.error(exerciceErrors)
  } else {
    success.exercices = 1
  }

  const exercice_groups = exercices
    .filter((exercice) => exercice.secondary_groups?.length)
    .map((exercice) => {
      const savedExercice = savedExercices?.find(
        (saved) => saved.name === exercice.name
      )
      if (savedExercice)
        return exercice.secondary_groups?.map((group) => ({
          group_id: group.id,
          exercice_id: savedExercice.id,
        }))
    })
    .flat()
    .filter(
      (
        exercice_group
      ): exercice_group is {
        group_id: string
        exercice_id: string
      } => !!exercice_group
    )

  const { data: savedExercicesGroups, error: exerciceGroupsErrors } =
    await supabase
      .from("exercices_groups")
      .upsert(exercice_groups, {
        onConflict: "group_id, exercice_id",
        ignoreDuplicates: true,
      })
      .select()
  if (exerciceGroupsErrors) {
    errors.exercices = 1
    console.error(exerciceGroupsErrors)
  } else {
    success.exercices = 1
  }

  const exercice_equipments = exercices
    .filter((exercice) => exercice.equipments?.length)
    .map((exercice) => {
      const savedExercice = savedExercices?.find(
        (saved) => saved.name === exercice.name
      )
      if (savedExercice)
        return exercice.equipments?.map((equipment) => ({
          equipment_id: equipment.id,
          exercice_id: savedExercice.id,
        }))
    })
    .flat()
    .filter(
      (
        exercice_equipment
      ): exercice_equipment is {
        equipment_id: string
        exercice_id: string
      } => !!exercice_equipment
    )
  const { data: savedExercicesEquipments, error: exerciceEquipmentErrors } =
    await supabase
      .from("exercices_equipments")
      .upsert(exercice_equipments, {
        onConflict: "equipment_id, exercice_id",
        ignoreDuplicates: true,
      })
      .select()
  if (exerciceEquipmentErrors) {
    errors.exercices = 1
    console.error(exerciceEquipmentErrors)
  } else {
    success.exercices = 1
  }
}
