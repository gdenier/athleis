import { Database } from "@nozbe/watermelondb"
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite"
import { setGenerator } from "@nozbe/watermelondb/utils/common/randomId"
import Exercice from "~/model/exercice"
import Profile from "~/model/profile"
import { v4 as uuidv4 } from "uuid"
// import { migrations } from "~/model/migrations";
import { schema } from "~/model/schema"
import Training from "~/model/training"
import TrainingExercice from "~/model/training_exercice"
import TrainingExerciceSerie from "~/model/training_exercice_serie"
import TrainingStep from "~/model/training_step"
import TrainingSuperset from "~/model/training_superset"

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  // migrations,
  // (optional database name or file system path)
  dbName: "athleis",
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: true /* Platform.OS === 'ios' */,
  // (optional, but you should implement this method)
  onSetUpError: (error) => {
    // Database failed to load -- offer the user to reload the app or log out
    console.error(error)
  },
})

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [
    Profile,
    Exercice,
    Training,
    TrainingStep,
    TrainingSuperset,
    TrainingExercice,
    TrainingExerciceSerie,
  ],
})

setGenerator(() => uuidv4())
