import React from "react"
import ReactDOM from "react-dom/client"
import { routeTree } from "./routeTree.gen"
import { RouterProvider, Router } from "@tanstack/react-router"
import AuthProvider, { useAuth } from "./components/providers/AuthProvider"
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider"
import { database } from "./lib/watermelon"

// Create a new router instance
export const router = new Router({
  routeTree,
  context: {
    auth: undefined!,
  },
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <DatabaseProvider database={database}>
          <InnerApp />
        </DatabaseProvider>
      </AuthProvider>
    </React.StrictMode>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
function InnerApp() {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ auth }} />
}
