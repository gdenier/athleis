import { ReactElement, ReactNode, useEffect, useState } from "react"
import { Electric, schema } from "~/src/lib/electric/client"
import * as SQLite from "expo-sqlite"
import { electrify } from "electric-sql/expo"
import { makeElectricContext } from "electric-sql/react"
import { config } from "~/src/lib/config"
import { supabase } from "~/src/lib/supabase"

const { ElectricProvider, useElectric } = makeElectricContext<Electric>()

export default function ({
  children,
}: {
  children: ReactNode
}): ReactElement | null {
  const [electric, setElectric] = useState<Electric>()

  useEffect(() => {
    const init = async () => {
      const conn = SQLite.openDatabase("electrified-athleis.db")
      const { data } = await supabase.auth.getSession()
      if (!data.session?.access_token) {
        setElectric(undefined)
        return
      }
      console.log(config)
      const electric = await electrify(conn, schema, {
        auth: {
          // token: "",
          token: data.session.access_token,
        },
        debug: true,
        url: config.electricUrl,
      })

      setElectric(electric)
    }

    init()

    // const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
    //   init()
    // })
    // return () => {
    //   data.subscription.unsubscribe()
    // }
  }, [])

  if (electric === undefined) {
    return null
  }

  return <ElectricProvider db={electric}>{children}</ElectricProvider>
}

export { useElectric }
