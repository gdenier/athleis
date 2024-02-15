import { Database } from "@nozbe/watermelondb"
import LokiJSAdapter from "@nozbe/watermelondb/adapters/lokijs"
import { SyncDatabaseChangeSet, synchronize } from "@nozbe/watermelondb/sync"
import SyncLogger from "@nozbe/watermelondb/sync/SyncLogger"
import Equipment from "~/models/equipment"
import Exercice from "~/models/exercice"
import ExerciceEquipment from "~/models/exercice_equipment"
import ExerciceGroup from "~/models/exercice_group"
import Group from "~/models/group"

import { schema } from "~/models/schema"
import { config } from "./config"
import { supabase } from "./supabase"

const adapter = new LokiJSAdapter({
  schema,
  dbName: "athleis",
  useWebWorker: false,
  useIncrementalIndexedDB: true,

  onSetUpError: (error) => {
    console.error(error)
  },
})

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [Exercice, Group, Equipment, ExerciceGroup, ExerciceEquipment],
})

const logger = new SyncLogger(10)

export async function syncDatabase() {
  await sync()
}

export async function resetDatabase() {
  await database.write(async () => {
    await database.unsafeResetDatabase()
    console.log("✅ DB reset")
  })

  await sync({ reset: true })
}

async function sync({ reset }: { reset?: boolean } = { reset: false }) {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt }) => pullChanges(lastPulledAt, reset),
    pushChanges: async ({ changes }) => pushChanges(changes),
    log: logger.newLog(),
    sendCreatedAsUpdated: true,
  })
  if (config.dev) {
    console.log(logger.formattedLogs)
  }
}

async function pullChanges(
  lastPulledAt: number | undefined,
  reset?: boolean
): Promise<{
  changes: SyncDatabaseChangeSet
  timestamp: number
}> {
  console.log("🍉 ⬇️ Pulling changes ...", { lastPulledAt })

  lastPulledAt = reset ?? !lastPulledAt ? undefined : lastPulledAt

  const { data, error } = await supabase.rpc("pull", {
    last_pulled_at: lastPulledAt,
  })
  if (error) {
    throw new Error("🍉".concat(error.message))
  }

  // TODO: validate the format received
  const { changes, timestamp } = data as {
    changes: SyncDatabaseChangeSet
    timestamp: number
  }

  console.log(`🍉 Changes pulled at ${new Date(timestamp).toISOString()}`)

  return { changes, timestamp }
}

async function pushChanges(changes: SyncDatabaseChangeSet) {
  console.log("🍉 ⬆️ Pushing changes ...")

  const { error } = await supabase.rpc("push", { changes })

  if (error) {
    throw new Error("🍉".concat(error.message))
  }

  console.log(`🍉 Changes pushed at ${new Date().toISOString()} UTC`)
}
