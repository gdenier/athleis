import {TanStackRouterDevtools as InnerDevTool} from "@tanstack/router-devtools"

export const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    :InnerDevTool
