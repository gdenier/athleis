import { ReactNode, createContext, useState } from "react"

export type SynchronizeWatermelonContext = {
  isSyncing: boolean
  queueSync: ({
    reset,
    broadcast,
  }?: {
    reset?: boolean
    broadcast?: boolean
  }) => void
  reset: () => void
}

const SynchronizeWatermelonContext =
  createContext<SynchronizeWatermelonContext | null>(null)

export function SyncProvider({ children }: { children: ReactNode }) {
  const [isSyncing, setSyncing] = useState(false)

  const reset: SynchronizeWatermelonContext["reset"] = () => {
    throw new Error("Not yet implemented")
  }

  const queueSync: SynchronizeWatermelonContext["queueSync"] = () => {
    throw new Error("Not yet implemented")
  }

  return (
    <SynchronizeWatermelonContext.Provider
      value={{ isSyncing, queueSync, reset }}
    >
      {children}
    </SynchronizeWatermelonContext.Provider>
  )
}
