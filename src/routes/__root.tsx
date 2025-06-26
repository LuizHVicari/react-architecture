import { Toaster } from "@/components/ui/sonner";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AuthProvider } from "@/presentation/providers/auth-provider";
import { ThemeProvider } from "@/presentation/providers/theme-provider";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <AuthProvider>
        <Toaster />
        <Outlet />
        <TanStackRouterDevtools />
      </AuthProvider>
    </ThemeProvider>
  ),
});
