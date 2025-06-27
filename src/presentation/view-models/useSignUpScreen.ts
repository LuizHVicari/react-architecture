import type AuthRepository from "@/core/repositories/auth-repository";
import useSignUpForm from "../forms/useSignupForm";
import { useRouter } from "@tanstack/react-router";
import type { UseFormReturn } from "react-hook-form";
import type { SignUpFormSchema } from "@/core/schemas/sign-up-form-schema";
import { toast } from "sonner";

type UseSignUpScreenReturn = {
  form: UseFormReturn<SignUpFormSchema>;
  isLoading: boolean;
  submitForm: () => void;
  signUpError?: string;
  onGoToSignIn: () => void;
};

interface Props {
  authRepository: AuthRepository;
}

export default function useSignUpScreen({
  authRepository,
}: Props): UseSignUpScreenReturn {
  const { navigate } = useRouter();

  const { form, isLoading, onSubmit, signUpError } = useSignUpForm({
    authRepository,
    onSubmit: async () => {
      toast(`Email de confirmação enviado para ${form.getValues().email}`, {
        description: "Por favor, confirme seu email para prosseguir",
      });
      console.log("mandou o form de buenas e deveria mostrar o toast");
      navigate({
        to: "/auth/sign-in",
      });
    },
  });

  const submitForm = onSubmit;

  const onGoToSignIn = (): void => {
    navigate({ to: "/auth/sign-in" });
  };

  return {
    form,
    isLoading,
    signUpError,
    submitForm,
    onGoToSignIn,
  };
}
