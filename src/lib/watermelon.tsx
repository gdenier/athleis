import { Database } from "@nozbe/watermelondb"
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite"
import { setGenerator } from "@nozbe/watermelondb/utils/common/randomId"
import * as Crypto from "expo-crypto"
import Equipment from "~/models/equipment"
import Exercice from "~/models/exercice"
import ExerciceEquipment from "~/models/exercice_equipment"
import ExerciceGroup from "~/models/exercice_group"
import Group from "~/models/group"
import * as FileSystem from "expo-file-system"

// import { migrations } from "~/model/migrations";
import { schema } from "~/models/schema"
import { migrations } from "~/models/migrations"

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  dbName: process.env.EXPO_PUBLIC_DB_NAME,
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  migrations,
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: true /* Platform.OS === 'ios' */,
  onSetUpError: (error) => {
    // Database failed to load -- offer the user to reload the app or log out
    console.error(error)
  },
})

export const database = new Database({
  adapter,
  modelClasses: [Exercice, Group, ExerciceGroup, Equipment, ExerciceEquipment],
})

setGenerator(() => Crypto.randomUUID())
