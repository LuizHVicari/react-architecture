import { createFileRoute, Outlet } from "@tanstack/react-router";
import AuthGuard from "@/components/guards/AuthGuard";
import SupabaseAuthRepository from "@/data/repositories/supabase-auth-repository";

const authRepository = new SupabaseAuthRepository();

export const Route = createFileRoute("/(authenticated)")({
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  return (
    <AuthGuard authRepository={authRepository}>
      <Outlet />
    </AuthGuard>
  );
}
