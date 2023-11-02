import { appSchema } from "@nozbe/watermelondb"
import { exerciceSchema } from "./exercice"
import { trainingExerciceSchema } from "./training_exercice"
import { profileSchema } from "./profile"
import { trainingSchema } from "./training"
import { trainingStepSchema } from "./training_step"
import { trainingExerciceSerieSchema } from "./training_exercice_serie"
import { trainingSupersetSchema } from "./training_superset"

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
