import AuthTemplate from "@/presentation/components/templates/auth-template";
import SignInForm from "@/presentation/components/organisms/sign-in-form";
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
}: SignInScreenProps): React.JSX.Element {
  return (
    <div className="w-screen h-screen justify-center items-center flex">
      <AuthTemplate description="Faça login em sua conta" title="Entrar">
        <SignInForm
          form={form}
          isLoading={isLoading}
          signInError={signInError}
          onGoToSignUp={onGoToSignUp}
          onSubmit={submitForm}
        />
      </AuthTemplate>
    </div>
  );
}
