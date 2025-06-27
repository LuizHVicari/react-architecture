import { createFileRoute, Outlet, useRouter } from "@tanstack/react-router";
import { DashboardLayout } from "@/presentation/components/templates/dashboard-layout";
import { useDependencies } from "@/presentation/providers/dependency-provider";
import { useCallback } from "react";

const DashboardLayoutRoute: React.FC = () => {
  const { authRepository, hooks } = useDependencies();
  const { data: user, isLoading } = hooks.useAuthSession();
  const { navigate } = useRouter();

  const signOutOnClick = useCallback(async () => {
    await authRepository.signOut();
    navigate({ to: "/auth/sign-in" });
  }, [authRepository, navigate]);

  return (
    <DashboardLayout
      isLoading={isLoading}
      title="Teste de Arquitetura no React"
      user={user ?? null}
      onSignOut={signOutOnClick}
    >
      <Outlet />
    </DashboardLayout>
  );
};

export const Route = createFileRoute("/(authenticated)/(dashboard)")({
  component: DashboardLayoutRoute,
});
