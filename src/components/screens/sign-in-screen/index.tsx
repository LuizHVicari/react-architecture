import AuthTemplate from "@/components/templates/auth-template";
import SignInForm from "@/components/organisms/sign-in-form";
import { type UseFormReturn } from "react-hook-form";
import { type SignInFormSchema } from "@/core/schemas/sign-in-form-schema";

interface SignInScreenProps {
  form: UseFormReturn<SignInFormSchema>;
  submitForm: () => void;
  isLoading: boolean;
  signInError?: string;
  onGoToSignUp?: () => void;
}

export default function SignInScreen({
  form,
  submitForm,
  isLoading,
  signInError,
  onGoToSignUp,
}: SignInScreenProps) {
  return (
    <div className="w-screen h-screen justify-center items-center flex">
      <AuthTemplate
        title="Entrar"
        description="Faça login em sua conta"
      >
        <SignInForm
          form={form}
          onSubmit={submitForm}
          isLoading={isLoading}
          signInError={signInError}
          onGoToSignUp={onGoToSignUp}
        />
      </AuthTemplate>
    </div>
  );
}