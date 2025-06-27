import TypographyLead from "@/presentation/components/atoms/typography-lead";
import { Avatar } from "@/presentation/components/ui/avatar";
import { Sidebar, SidebarHeader } from "@/presentation/components/ui/sidebar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import type { UserSchema } from "@/core/schemas/user-schema";

interface DashboardSidebarProps {
  user: UserSchema | null;
}

export function DashboardSidebar({
  user,
}: DashboardSidebarProps): React.JSX.Element {
  return (
    <Sidebar className="overflow-hidden">
      <SidebarHeader className="overflow-ellipsis flex flex-row items-center gap-4">
        <Avatar>
          <AvatarFallback>{user?.name ?? user?.email}</AvatarFallback>
        </Avatar>
        <TypographyLead className="text-ellipsis truncate">
          {user?.name ?? user?.email}
        </TypographyLead>
      </SidebarHeader>
    </Sidebar>
  );
}
