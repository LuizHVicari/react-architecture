import AuthTemplate from "@/components/templates/auth-template";
import SignUpForm from "@/components/organisms/sign-up-form";
import { type UseFormReturn } from "react-hook-form";
import { type SignUpFormSchema } from "@/core/schemas/sign-up-form-schema";

interface SignUpScreenProps {
  form: UseFormReturn<SignUpFormSchema>;
  submitForm: () => void;
  isLoading: boolean;
  signUpError?: string;
  onGoToSignIn?: () => void;
}

export default function SignUpScreen({
  form,
  submitForm,
  isLoading,
  signUpError,
  onGoToSignIn,
}: SignUpScreenProps) {
  return (
    <div className="w-screen h-screen justify-center items-center flex">
      <AuthTemplate
        title="Criar conta"
        description="Preencha os dados para criar sua conta"
      >
        <SignUpForm
          form={form}
          onSubmit={submitForm}
          isLoading={isLoading}
          signUpError={signUpError}
          onGoToSignIn={onGoToSignIn}
        />
      </AuthTemplate>
    </div>
  );
}
