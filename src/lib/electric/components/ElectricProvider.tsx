// import { insecureAuthToken } from "electric-sql/auth"
import { ReactElement, ReactNode, useEffect, useState } from "react"
import { Electric, schema } from "~/src/lib/electric/client"
import * as SQLite from 'expo-sqlite'
import { electrify } from 'electric-sql/expo'
import { makeElectricContext } from 'electric-sql/react'

const { ElectricProvider, useElectric } = makeElectricContext<Electric>()

export default function ({ children }: {children: ReactNode}): ReactElement | null {
    const [ electric, setElectric ] = useState<Electric>()

    useEffect(() => {
      const init = async () => {
        const config = {
          auth: {
            // anon jwt for fake auth
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbm9uIn0.JdyXzonRqmbxNXNPsuPc_yg3dCulYov_4-Uu64kiB3s"
          },
          debug: true,
          url: process.env.EXPO_PUBLIC_ELECTRIC_URL as string
        }
        const conn = SQLite.openDatabase('electrified-athleis.db')
        const electric = await electrify(conn, schema, config)

          setElectric(electric)
        }

        init()
      }, [])

      if (electric === undefined) {
        return null
      }

      return (
        <ElectricProvider db={electric}>
          { children }
        </ElectricProvider>
      )
}

export {useElectric}
