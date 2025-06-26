import { createFileRoute, Outlet, useRouter } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/templates/dashboard-layout";
import SupabaseAuthRepository from "@/data/repositories/supabase-auth-repository";
import useAuthSession from "@/presentation/hooks/useAuthSession";
import { useCallback, useMemo } from "react";

export const Route = createFileRoute("/(authenticated)/(dashboard)")({
  component: DashboardLayoutRoute,
});

function DashboardLayoutRoute() {
  const authRepository = useMemo(() => new SupabaseAuthRepository(), []);
  const { data: user, isLoading } = useAuthSession({ authRepository });
  const { navigate } = useRouter();

  const signOutOnClick = useCallback(async () => {
    await authRepository.signOut();
    navigate({ to: "/auth/sign-in" });
  }, [authRepository, navigate]);

  return (
    <DashboardLayout
      title="Teste de Arquitetura no React"
      user={user ?? null}
      isLoading={isLoading}
      onSignOut={signOutOnClick}
    >
      <Outlet />
    </DashboardLayout>
  );
}