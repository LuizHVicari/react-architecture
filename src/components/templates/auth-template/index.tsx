import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthTemplateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function AuthTemplate({
  children,
  title,
  description,
}: AuthTemplateProps) {
  return (
    <Card className="w-xl">
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}
