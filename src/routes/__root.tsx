import { rootRouteWithContext, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "../components/TanStackRouterDevtools"
import { AuthState } from "~/components/providers/AuthProvider"

interface RouterContext {
  auth: AuthState
}

export const Route = rootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
