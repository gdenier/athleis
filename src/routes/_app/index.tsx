import { FileRoute, useNavigate } from "@tanstack/react-router"
import { useAuth } from "~/components/providers/AuthProvider"
import { supabase } from "~/lib/supabase"

export const Route = new FileRoute("/_app/").createRoute({
  component: DashboardComponent,
})

function DashboardComponent() {
  const navigate = useNavigate({ from: "/dashboard" })
  const auth = useAuth()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate({ to: "/" })
  }

  return (
    <div className="p-2">
      <h3>Dashboard page</h3>
      <p>Hi {auth.session?.user.email}!</p>
      <p>If you can see this, that means you are authenticated.</p>
      <div className="mt-4">
        <button
          type="button"
          onClick={handleLogout}
          className="bg-slate-500 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
