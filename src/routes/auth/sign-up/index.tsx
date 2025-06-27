import { createFileRoute } from "@tanstack/react-router";
import SignUpScreen from "@/presentation/components/screens/sign-up-screen";
import { useDependencies } from "@/presentation/providers/dependency-provider";
import type React from "react";

const SignUpPage: React.FC = () => {
  const { viewModels } = useDependencies();
  const signUpScreenProps = viewModels.useSignUpScreen();

  return <SignUpScreen {...signUpScreenProps} />;
};

export const Route = createFileRoute("/auth/sign-up/")({
  component: SignUpPage,
});
