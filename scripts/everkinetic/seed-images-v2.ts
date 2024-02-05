import * as fs from "fs"
import { DExercice, KExercice } from "./types/Exercice.type"
import { createClient } from "@supabase/supabase-js"
import { Database } from "../../src/lib/database.types"
import { config } from "../../src/lib/config"

const kineticExercices = JSON.parse(
  fs.readFileSync("./scripts/everkinetic/data/exercises.json", "utf8")
) as KExercice[]

export const supabase = createClient<Database>(
  config.supabaseUrl,
  process.env.PRIVATE_SUPABASE_SERVICE_ROLE as string
)

console.log(
  "✅ Image to upload :",
  kineticExercices.reduce((tt, ex) => tt + (ex.img?.length ?? 0), 0),
  "for ",
  kineticExercices.length,
  "exercices"
)

supabase
  .from("exercices")
  .select("*")
  // .limit(1)
  .then(async ({ data: savedExercices }) => {
    // MAIN THREAD
    console.log("MAIN THREAD STARTING", savedExercices?.length)
    if (!savedExercices) return

    const images: { exerciceId: string; path: string; blob?: Blob }[] = []
    const existingImagePaths =
      (await supabase.storage.from("exercice-images").list()).data?.map(
        (img) => img.name
      ) ?? []

    console.log("Existing images", existingImagePaths.length)
    console.log("Loading blobs...")

    /**
     * 1. For each exercice we extract x images and check if the images already exist in the storage
     * 2. Then we save all unsaved image in the storage
     * 3. Then we batch upsert all medias and media_exerices to prevent too many connection
     */
    let kineticExercicesLength = 0
    for (const savedExercice of savedExercices) {
      const kineticExercice = kineticExercices.find(
        (ex) => ex.title === savedExercice.name
      )

      // Maybe a manual addition to exercice, maybe I can handel that case later
      if (!kineticExercice || !kineticExercice.img) break
      kineticExercicesLength++

      for (const kineticImagePath of kineticExercice.img) {
        const imagePath = buildPath(
          savedExercice,
          kineticImagePath.split("-").slice(-1)[0].split(".")[0]
        )

        if (
          !existingImagePaths.some(
            (existingImagePath) => existingImagePath === imagePath
          )
        ) {
          const blob = await fetch(
            `https://github.com/everkinetic/data/blob/main/src/images-web/${
              kineticImagePath.split("/").slice(-1)[0]
            }?raw=true`
          ).then(async (res: any) => await res.blob())
          if (blob.type !== "image/png") {
            console.log(blob)
            throw new Error()
          }
          images.push({ exerciceId: savedExercice.id, path: imagePath, blob })
        } else {
          images.push({ exerciceId: savedExercice.id, path: imagePath })
        }
      }
    }
    console.log("kinetic exercice found", kineticExercicesLength)

    // Upload only image with a blob inside
    const imgWithBlob = images.filter(
      (img): img is { exerciceId: string; path: string; blob: Blob } =>
        !!img.blob
    )
    console.log("Image to upload", imgWithBlob.length)
    for (const image of imgWithBlob) {
      const result = await supabase.storage
        .from("exercice-images")
        .upload(image.path, image.blob)
      if (result.error) console.log(image, result)
    }

    const { data: medias } = await supabase
      .from("medias")
      .upsert(
        images.map(({ path }) => ({ path })),
        { onConflict: "path" }
      )
      .select()

    if (!medias) throw new Error("Any media is returned")
    await supabase.from("media_exercices").upsert(
      images.map(({ exerciceId, path }) => ({
        exercice_id: exerciceId,
        media_id: medias!.find((media) => media.path === path)!.id,
      }))
    )
  })

function buildPath(exercice: DExercice, index: string | number): string {
  return `${exercice.name.split(" ").join("_")}_00${index}.png`
}
