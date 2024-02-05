export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      equipments: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          last_modified_at: string
          name: string
          server_created_at: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          name: string
          server_created_at?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          name?: string
          server_created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      exercices: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          last_modified_at: string
          name: string
          primary_group_id: string | null
          primer: string
          server_created_at: string
          steps: string | null
          tips: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          name: string
          primary_group_id?: string | null
          primer: string
          server_created_at?: string
          steps?: string | null
          tips?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          name?: string
          primary_group_id?: string | null
          primer?: string
          server_created_at?: string
          steps?: string | null
          tips?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercices_primary_group_id_groups_id_fk"
            columns: ["primary_group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          }
        ]
      }
      exercices_equipments: {
        Row: {
          created_at: string
          deleted_at: string | null
          equipment_id: string
          exercice_id: string
          id: string
          last_modified_at: string
          server_created_at: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          equipment_id: string
          exercice_id: string
          id?: string
          last_modified_at?: string
          server_created_at?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          equipment_id?: string
          exercice_id?: string
          id?: string
          last_modified_at?: string
          server_created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercices_equipments_equipment_id_equipments_id_fk"
            columns: ["equipment_id"]
            isOneToOne: false
            referencedRelation: "equipments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercices_equipments_exercice_id_exercices_id_fk"
            columns: ["exercice_id"]
            isOneToOne: false
            referencedRelation: "exercices"
            referencedColumns: ["id"]
          }
        ]
      }
      exercices_groups: {
        Row: {
          created_at: string
          deleted_at: string | null
          exercice_id: string
          group_id: string
          id: string
          last_modified_at: string
          server_created_at: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          exercice_id: string
          group_id: string
          id?: string
          last_modified_at?: string
          server_created_at?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          exercice_id?: string
          group_id?: string
          id?: string
          last_modified_at?: string
          server_created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercices_groups_exercice_id_exercices_id_fk"
            columns: ["exercice_id"]
            isOneToOne: false
            referencedRelation: "exercices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercices_groups_group_id_groups_id_fk"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          }
        ]
      }
      groups: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          last_modified_at: string
          name: string
          server_created_at: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          name: string
          server_created_at?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          name?: string
          server_created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      media_exercices: {
        Row: {
          created_at: string
          deleted_at: string | null
          exercice_id: string
          id: string
          last_modified_at: string
          media_id: string
          server_created_at: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          exercice_id: string
          id?: string
          last_modified_at?: string
          media_id: string
          server_created_at?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          exercice_id?: string
          id?: string
          last_modified_at?: string
          media_id?: string
          server_created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_exercices_exercice_id_exercices_id_fk"
            columns: ["exercice_id"]
            isOneToOne: false
            referencedRelation: "exercices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_exercices_media_id_medias_id_fk"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "medias"
            referencedColumns: ["id"]
          }
        ]
      }
      medias: {
        Row: {
          id: string
          path: string
        }
        Insert: {
          id?: string
          path: string
        }
        Update: {
          id?: string
          path?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          last_modified_at: string
          server_created_at: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          last_modified_at?: string
          server_created_at?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          server_created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      trainings: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          last_modified_at: string
          profile_id: string
          server_created_at: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          profile_id: string
          server_created_at?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          profile_id?: string
          server_created_at?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trainings_profile_id_profiles_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      trainings_exercices: {
        Row: {
          created_at: string
          deleted_at: string | null
          exercice_id: string
          id: string
          last_modified_at: string
          order: number | null
          server_created_at: string
          superset_id: string | null
          training_step_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          exercice_id: string
          id?: string
          last_modified_at?: string
          order?: number | null
          server_created_at?: string
          superset_id?: string | null
          training_step_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          exercice_id?: string
          id?: string
          last_modified_at?: string
          order?: number | null
          server_created_at?: string
          superset_id?: string | null
          training_step_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trainings_exercices_exercice_id_exercices_id_fk"
            columns: ["exercice_id"]
            isOneToOne: false
            referencedRelation: "exercices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trainings_exercices_superset_id_trainings_supersets_id_fk"
            columns: ["superset_id"]
            isOneToOne: false
            referencedRelation: "trainings_supersets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trainings_exercices_training_step_id_trainings_steps_id_fk"
            columns: ["training_step_id"]
            isOneToOne: false
            referencedRelation: "trainings_steps"
            referencedColumns: ["id"]
          }
        ]
      }
      trainings_exercices_series: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          last_modified_at: string
          order: number
          repetition: number | null
          rest: number | null
          server_created_at: string
          time: number | null
          training_exercice_id: string
          updated_at: string
          weight: number | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          order: number
          repetition?: number | null
          rest?: number | null
          server_created_at?: string
          time?: number | null
          training_exercice_id: string
          updated_at?: string
          weight?: number | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          order?: number
          repetition?: number | null
          rest?: number | null
          server_created_at?: string
          time?: number | null
          training_exercice_id?: string
          updated_at?: string
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "trainings_exercices_series_training_exercice_id_trainings_exerc"
            columns: ["training_exercice_id"]
            isOneToOne: false
            referencedRelation: "trainings_exercices"
            referencedColumns: ["id"]
          }
        ]
      }
      trainings_steps: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          last_modified_at: string
          order: number
          server_created_at: string
          training_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          order: number
          server_created_at?: string
          training_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          last_modified_at?: string
          order?: number
          server_created_at?: string
          training_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trainings_steps_training_id_trainings_id_fk"
            columns: ["training_id"]
            isOneToOne: false
            referencedRelation: "trainings"
            referencedColumns: ["id"]
          }
        ]
      }
      trainings_supersets: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          interval_rest: number
          last_modified_at: string
          nb_round: number
          rest: number
          server_created_at: string
          training_step_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          interval_rest: number
          last_modified_at?: string
          nb_round?: number
          rest: number
          server_created_at?: string
          training_step_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          interval_rest?: number
          last_modified_at?: string
          nb_round?: number
          rest?: number
          server_created_at?: string
          training_step_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "trainings_supersets_training_step_id_trainings_steps_id_fk"
            columns: ["training_step_id"]
            isOneToOne: false
            referencedRelation: "trainings_steps"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_exercice:
        | {
            Args: {
              exercice_id: string
              exercice_name: string
              exercice_created_at: string
              exercice_updated_at: string
            }
            Returns: string
          }
        | {
            Args: {
              exercice_id: string
              exercice_name: string
              exercice_group_id: string
              exercice_created_at: string
              exercice_updated_at: string
            }
            Returns: string
          }
      create_training: {
        Args: {
          training_id: string
          training_title: string
          training_profile_id: string
          training_created_at: string
          training_updated_at: string
        }
        Returns: string
      }
      create_training_exercice: {
        Args: {
          training_exercice_id: string
          training_exercice_order: number
          training_exercice_exercice_id: string
          training_exercice_superset_id: string
          training_exercice_training_step_id: string
          training_exercice_created_at: string
          training_exercice_updated_at: string
        }
        Returns: string
      }
      create_training_exercice_serie: {
        Args: {
          training_exercice_serie_id: string
          training_exercice_serie_weight: number
          training_exercice_serie_repetition: number
          training_exercice_serie_time: number
          training_exercice_serie_rest: number
          training_exercice_serie_order: number
          training_exercice_serie_training_exercice_id: string
          training_exercice_serie_created_at: string
          training_exercice_serie_updated_at: string
        }
        Returns: string
      }
      create_training_step: {
        Args: {
          training_step_id: string
          training_step_order: number
          training_step_training_id: string
          training_step_created_at: string
          training_step_updated_at: string
        }
        Returns: string
      }
      create_training_superset: {
        Args: {
          training_superset_id: string
          training_superset_rest: number
          training_superset_interval_rest: number
          training_superset_nb_round: number
          training_superset_training_step_id: string
          training_superset_created_at: string
          training_superset_updated_at: string
        }
        Returns: string
      }
      epoch_to_timestamp: {
        Args: {
          epoch: string
        }
        Returns: string
      }
      pull: {
        Args: {
          last_pulled_at?: number
        }
        Returns: Json
      }
      push: {
        Args: {
          changes: Json
        }
        Returns: undefined
      }
      timestamp_to_epoch: {
        Args: {
          ts: string
        }
        Returns: number
      }
      update_exercice:
        | {
            Args: {
              exercice_id: string
              exercice_name: string
              exercice_group_id: string
              exercice_updated_at: string
            }
            Returns: string
          }
        | {
            Args: {
              exercice_id: string
              exercice_name: string
              exercice_updated_at: string
            }
            Returns: string
          }
      update_training: {
        Args: {
          training_id: string
          training_title: string
          training_updated_at: string
        }
        Returns: string
      }
      update_training_exercice: {
        Args: {
          training_exercice_id: string
          training_exercice_order: number
          training_exercice_updated_at: string
        }
        Returns: string
      }
      update_training_exercice_serie: {
        Args: {
          training_exercice_serie_id: string
          training_exercice_serie_weight: number
          training_exercice_serie_repetition: number
          training_exercice_serie_time: number
          training_exercice_serie_rest: number
          training_exercice_serie_order: number
          training_exercice_serie_updated_at: string
        }
        Returns: string
      }
      update_training_step: {
        Args: {
          training_step_id: string
          training_step_order: number
          training_updated_at: string
        }
        Returns: string
      }
      update_training_superset: {
        Args: {
          training_superset_id: string
          training_superset_rest: number
          training_superset_interval_rest: number
          training_superset_nb_round: number
          training_superset_updated_at: string
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
