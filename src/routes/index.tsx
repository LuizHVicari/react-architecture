import { createFileRoute, Navigate } from "@tanstack/react-router";
import type React from "react";

const App: React.FC = () => {
  return <Navigate to="/home" />;
};

export const Route = createFileRoute("/")({
  component: App,
});
