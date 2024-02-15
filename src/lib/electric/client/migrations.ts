export default [
  {
    "statements": [
      "CREATE TABLE \"Exercice\" (\n  \"id\" TEXT NOT NULL,\n  \"name\" TEXT NOT NULL,\n  CONSTRAINT \"Exercice_pkey\" PRIMARY KEY (\"id\")\n) WITHOUT ROWID;\n",
      "-- Toggles for turning the triggers on and off\nINSERT OR IGNORE INTO _electric_trigger_settings(tablename,flag) VALUES ('main.Exercice', 1);",
      "  /* Triggers for table Exercice */\n\n  -- ensures primary key is immutable\n  DROP TRIGGER IF EXISTS update_ensure_main_Exercice_primarykey;",
      "CREATE TRIGGER update_ensure_main_Exercice_primarykey\n  BEFORE UPDATE ON \"main\".\"Exercice\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "-- Triggers that add INSERT, UPDATE, DELETE operation to the _opslog table\nDROP TRIGGER IF EXISTS insert_main_Exercice_into_oplog;",
      "CREATE TRIGGER insert_main_Exercice_into_oplog\n   AFTER INSERT ON \"main\".\"Exercice\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.Exercice')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'Exercice', 'INSERT', json_object('id', new.\"id\"), json_object('id', new.\"id\", 'name', new.\"name\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_Exercice_into_oplog;",
      "CREATE TRIGGER update_main_Exercice_into_oplog\n   AFTER UPDATE ON \"main\".\"Exercice\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.Exercice')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'Exercice', 'UPDATE', json_object('id', new.\"id\"), json_object('id', new.\"id\", 'name', new.\"name\"), json_object('id', old.\"id\", 'name', old.\"name\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_Exercice_into_oplog;",
      "CREATE TRIGGER delete_main_Exercice_into_oplog\n   AFTER DELETE ON \"main\".\"Exercice\"\n   WHEN 1 == (SELECT flag from _electric_trigger_settings WHERE tablename == 'main.Exercice')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'Exercice', 'DELETE', json_object('id', old.\"id\"), NULL, json_object('id', old.\"id\", 'name', old.\"name\"), NULL);\nEND;"
    ],
    "version": "20240214133750"
  }
]