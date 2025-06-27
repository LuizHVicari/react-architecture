import { createFileRoute } from "@tanstack/react-router";
import SignInScreen from "@/presentation/components/screens/sign-in-screen";
import { useDependencies } from "@/presentation/providers/dependency-provider";

const SignInPage: React.FC = () => {
  const { viewModels } = useDependencies();
  const signInScreenProps = viewModels.useSignInScreen();

  return <SignInScreen {...signInScreenProps} />;
};

export const Route = createFileRoute("/auth/sign-in/")({
  component: SignInPage,
});
