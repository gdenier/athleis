import { FileRoute, Outlet, redirect } from "@tanstack/react-router"

export const Route = new FileRoute("/_app").createRoute({
  beforeLoad: ({ context, location }) => {
    console.log(context)
    if (!context.auth.session) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: () => <Outlet />,
})
