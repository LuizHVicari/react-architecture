import { createFileRoute, Outlet } from "@tanstack/react-router";
import AuthGuard from "@/presentation/components/guards/AuthGuard";
import { useDependencies } from "@/presentation/providers/dependency-provider";

const AuthenticatedLayout: React.FC = () => {
  const { authRepository } = useDependencies();

  return (
    <AuthGuard authRepository={authRepository}>
      <Outlet />
    </AuthGuard>
  );
};

export const Route = createFileRoute("/(authenticated)")({
  component: AuthenticatedLayout,
});
