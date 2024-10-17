export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
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
      call_responses: {
        Row: {
          call_id: string | null
          created_at: string | null
          error: string | null
          id: string
          raw_response: string | null
          response_time: number | null
          text: string | null
          total_tokens: number | null
        }
        Insert: {
          call_id?: string | null
          created_at?: string | null
          error?: string | null
          id?: string
          raw_response?: string | null
          response_time?: number | null
          text?: string | null
          total_tokens?: number | null
        }
        Update: {
          call_id?: string | null
          created_at?: string | null
          error?: string | null
          id?: string
          raw_response?: string | null
          response_time?: number | null
          text?: string | null
          total_tokens?: number | null
        }
      }
      deployments: {
        Row: {
          ai_params: string
          created_at: string | null
          id: string
          prompt_template_text: string
          schema: string
          snapshot_id: string
          template_id: string
        }
        Insert: {
          ai_params: string
          created_at?: string | null
          id?: string
          prompt_template_text: string
          schema: string
          snapshot_id: string
          template_id: string
        }
        Update: {
          ai_params?: string
          created_at?: string | null
          id?: string
          prompt_template_text?: string
          schema?: string
          snapshot_id?: string
          template_id?: string
        }
      }
      endpoint_mod_logs: {
        Row: {
          created_at: string | null
          endpoint_id: string
          id: string
          text: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          endpoint_id: string
          id?: string
          text: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          endpoint_id?: string
          id?: string
          text?: string
          user_id?: string
        }
      }
      endpoints: {
        Row: {
          created_at: string | null
          deployment_id: string | null
          id: string
          org_id: string
        }
        Insert: {
          created_at?: string | null
          deployment_id?: string | null
          id?: string
          org_id: string
        }
        Update: {
          created_at?: string | null
          deployment_id?: string | null
          id?: string
          org_id?: string
        }
      }
      "org-user": {
        Row: {
          created_at: string | null
          id: number
          org_id: string
          readonly: boolean
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          org_id: string
          readonly?: boolean
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          org_id?: string
          readonly?: boolean
          user_id?: string
        }
      }
      organizations: {
        Row: {
          created_at: string | null
          gpt_key: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          gpt_key?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          gpt_key?: string | null
          id?: string
          name?: string
        }
      }
      prompt_templates: {
        Row: {
          created_at: string | null
          data: string
          id: string
          name: string
          owner_id: string
        }
        Insert: {
          created_at?: string | null
          data: string
          id?: string
          name: string
          owner_id: string
        }
        Update: {
          created_at?: string | null
          data?: string
          id?: string
          name?: string
          owner_id?: string
        }
      }
      template_calls: {
        Row: {
          called_from: string
          caller_id: string | null
          context: string
          created_at: string | null
          id: string
          snapshot_id: string
          template_id: string
        }
        Insert: {
          called_from: string
          caller_id?: string | null
          context: string
          created_at?: string | null
          id?: string
          snapshot_id: string
          template_id: string
        }
        Update: {
          called_from?: string
          caller_id?: string | null
          context?: string
          created_at?: string | null
          id?: string
          snapshot_id?: string
          template_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_id_by_email: {
        Args: {
          user_email: string
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
          public?: boolean | null
          updated_at?: string | null
        }
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
          path_tokens: string[] | null
          updated_at: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
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
        Returns: string[]
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

