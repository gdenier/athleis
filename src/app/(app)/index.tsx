import { useConnectivityState, useLiveQuery } from "electric-sql/react"
import { useEffect, useState } from "react"
import { Pressable, StyleSheet } from "react-native"

import { useElectric } from "~/src/lib/electric"
import * as Crypto from "expo-crypto"
import { Text, View } from "@gluestack-ui/themed"

export default function TabOneScreen() {
  const { db } = useElectric()!
  const [value, setValue] = useState()
  const [synced, setSynced] = useState("false")

  const generate = async () => {
    await db.Exercice.create({
      data: {
        id: Crypto.randomUUID(),
        name: "ex " + Crypto.randomUUID(),
      },
    })
  }

  const { results } = useLiveQuery(db.Exercice.liveMany())
  useEffect(() => {
    const syncExercices = async () => {
      console.log(
        "Start to sync Exercice",
        process.env.EXPO_PUBLIC_ELECTRIC_URL
      )
      setSynced("pending")
      // const shape = await db.Exercice.sync()
      console.log("Shape acquired")
      // await shape.synced
      console.log("Exercice is Synced")
      setSynced("true")
    }
    syncExercices()
  }, [])

  const { connectivityState, toggleConnectivityState } = useConnectivityState()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <Pressable
        onPress={() => toggleConnectivityState()}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 24,
          backgroundColor: "black",
          borderRadius: 6,
        }}
      >
        <Text style={{ color: "white" }}>Toggle</Text>
      </Pressable>
      <Text>Connectivity : {connectivityState}</Text>
      <Text>Synced : {synced}</Text>
      <Pressable
        onPress={generate}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 24,
          backgroundColor: "black",
          borderRadius: 6,
        }}
      >
        <Text style={{ color: "white" }}>Add</Text>
      </Pressable>
      <View>
        {results?.map((result) => (
          <View key={result.id}>
            <Text>{result.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
})
