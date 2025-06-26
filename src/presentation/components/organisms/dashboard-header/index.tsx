import TypographyLead from "@/presentation/components/atoms/typography-lead";
import { ThemeToggle } from "@/presentation/components/molecules/theme-toggle";
import { Button } from "@/presentation/components/ui/button";
import { SidebarTrigger } from "@/presentation/components/ui/sidebar";

interface DashboardHeaderProps {
  title: string;
  onSignOut: () => void;
}

export function DashboardHeader({ title, onSignOut }: DashboardHeaderProps) {
  return (
    <div className="h-14 w-full shadow-sm flex flex-row items-center justify-between">
      <SidebarTrigger />
      <TypographyLead className="truncate">
        {title}
      </TypographyLead>
      <div className="h-full flex flex-row items-center gap-2 px-2">
        <ThemeToggle />
        <Button variant="link" onClick={onSignOut}>
          Sair
        </Button>
      </div>
    </div>
  );
}