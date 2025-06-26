import { createFileRoute } from "@tanstack/react-router";
import SignUpScreen from "@/presentation/components/screens/sign-up-screen";
import SupabaseAuthRepository from "@/data/repositories/supabase-auth-repository";
import useSignUpScreen from "@/presentation/view-models/useSignUpScreen";

export const Route = createFileRoute("/auth/sign-up/")({
  component: SignUpPage,
});

function SignUpPage() {
  const authRepository = new SupabaseAuthRepository();
  const signUpScreenProps = useSignUpScreen({
    authRepository,
  });
  
  return <SignUpScreen {...signUpScreenProps} />;
}
