import { appSchema } from "@nozbe/watermelondb"
import { exerciceSchema } from "./Exercice"
import { trainingExerciceSchema } from "./training_exercice"
import { profileSchema } from "./profile"
import { trainingSchema } from "./training"
import { trainingStepSchema } from "./training_step"
import { trainingExerciceSerieSchema } from "./training_exercice_serie"
import { trainingSupersetSchema } from "./training_superset"

export enum TableName {
  PROFILES = "profiles",
  EXERCICES = "exercices",
  TRAINING = "trainings",
  TRAINING_STEPS = "trainings_steps",
  TRAINING_SUPERSETS = "trainings_supersets",
  TRAINING_EXERCICES = "trainings_exercices",
  TRAINING_EXERCICE_SERIES = "trainings_exercices_series",
}

export const schema = appSchema({
  version: 1,
  tables: [
    profileSchema,
    exerciceSchema,
    trainingSchema,
    trainingStepSchema,
    trainingSupersetSchema,
    trainingExerciceSchema,
    trainingExerciceSerieSchema,
  ],
})
