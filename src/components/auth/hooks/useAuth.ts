import { useContext } from "react"

import { AuthContext } from "~/src/components/auth/providers/AuthProvider"

export function useAuth() {
  return useContext(AuthContext)
}
