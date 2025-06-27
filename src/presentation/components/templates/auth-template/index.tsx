import TypographyH3 from "@/presentation/components/atoms/typography-h3";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/presentation/components/ui/card";

interface AuthTemplateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function AuthTemplate({
  children,
  title,
  description,
}: AuthTemplateProps): React.JSX.Element {
  return (
    <>
      <Card className="sm:w-xl w-full hidden sm:flex">
        {title && (
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent>{children}</CardContent>
      </Card>
      <div className="flex sm:hidden flex-col justify-center h-full w-full items-start px-6 gap-2">
        <TypographyH3>{title}</TypographyH3>
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
