import { useContext } from "react"

import { AuthContext } from "~/modules/auth/components/AuthProvider"

export function useAuth() {
  return useContext(AuthContext)
}
