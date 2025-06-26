import { DashboardHeader } from "@/presentation/components/organisms/dashboard-header";
import { DashboardSidebar } from "@/presentation/components/organisms/dashboard-sidebar";
import { SidebarProvider } from "@/presentation/components/ui/sidebar";
import type { UserSchema } from "@/core/schemas/user-schema";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  user: UserSchema | null;
  isLoading: boolean;
  onSignOut: () => void;
}

export function DashboardLayout({
  children,
  title,
  user,
  isLoading,
  onSignOut,
}: DashboardLayoutProps) {
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <SidebarProvider className="h-full">
        <DashboardSidebar user={user} />
        <div className="h-full w-full">
          <DashboardHeader title={title} onSignOut={onSignOut} />
          <main className="h-[calc(100%-3.5rem)] w-full">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}
