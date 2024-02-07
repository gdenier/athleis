import { appSchema } from "@nozbe/watermelondb"
import { exerciceSchema } from "./exercice"
import { groupSchema } from "./group"
import { equipmentSchema } from "./equipment"
import { exerciceGroupSchema } from "./exercice_group"
import { exerciceEquipmentSchema } from "./exercice_equipment"

export const schema = appSchema({
  version: +(process.env.EXPO_PUBLIC_DB_VERSION as string),
  tables: [
    exerciceSchema,
    groupSchema,
    equipmentSchema,
    exerciceGroupSchema,
    exerciceEquipmentSchema,
  ],
  unsafeSql: (sql, kind) => {
    switch (kind) {
      case "setup":
        // TODO: Create seeder to generate this data
        return `--sql
          ${sql};
          INSERT INTO exercices (id, _status, name, primer, created_at, updated_at) VALUES
            ('9a98d7c2-f355-4111-b0e5-deaf54029c84', 'created', 'premier exercice', 'ceci est le premier exercice généré.', DATETIME('now'), DATETIME('now'));
          INSERT OR REPLACE INTO exercices (id, _status, name, primer, created_at, updated_at) VALUES
              ('5689ee5a-4c0f-41ea-84d3-167f9bb7d5d4', 'created', 'deuxieme exercice', 'ceci est le deuxieme exercice généré.', DATETIME('now'), DATETIME('now'));
          INSERT OR REPLACE INTO exercices (id, _status, name, primer, created_at, updated_at) VALUES
              ('690a5ddc-0731-4bf4-ba29-c9a289205571', 'created', 'troisieme exercice', 'ceci est le troisieme exercice généré.', DATETIME('now'), DATETIME('now'));
          INSERT OR REPLACE INTO exercices (id, _status, name, primer, created_at, updated_at) VALUES
              ('63a647ec-5891-493e-96e1-92147ef88795', 'created', 'quatrieme exercice', 'ceci est le quatrieme exercice généré.', DATETIME('now'), DATETIME('now'));
        `
      default:
        throw new Error("unexpected unsafeSql kind")
    }
  },
})
