import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/(dashboard)/home/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <h1>Página inicial</h1>
      <p>Essa página usa a dashboard page automaticamente.</p>
    </div>
  );
}
