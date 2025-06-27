import AuthTemplate from "@/presentation/components/templates/auth-template";
import SignUpForm from "@/presentation/components/organisms/sign-up-form";
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
}: SignUpScreenProps): React.JSX.Element {
  return (
    <div className="w-screen h-screen justify-center items-center flex">
      <AuthTemplate
        description="Preencha os dados para criar sua conta"
        title="Criar conta"
      >
        <SignUpForm
          form={form}
          isLoading={isLoading}
          signUpError={signUpError}
          onGoToSignIn={onGoToSignIn}
          onSubmit={submitForm}
        />
      </AuthTemplate>
    </div>
  );
}
