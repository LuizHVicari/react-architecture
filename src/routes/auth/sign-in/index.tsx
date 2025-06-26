import { createFileRoute } from "@tanstack/react-router";
import SignInScreen from "@/components/screens/sign-in-screen";
import SupabaseAuthRepository from "@/data/repositories/supabase-auth-repository";
import useSignInScreen from "@/presentation/view-models/useSignInScreen";

export const Route = createFileRoute("/auth/sign-in/")({
  component: SignInPage,
});

function SignInPage() {
  const authRepository = new SupabaseAuthRepository();
  const signInScreenProps = useSignInScreen({
    authRepository,
  });

  return <SignInScreen {...signInScreenProps} />;
}
