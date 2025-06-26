import type AuthRepository from "@/core/repositories/auth-repository";
import { SignInErrors } from "@/core/repositories/auth-repository";
import useSignInForm from "../forms/useSigninForm";
import { useRouter } from "@tanstack/react-router";
import type { UseFormReturn } from "react-hook-form";
import type { SignInFormSchema } from "@/core/schemas/sign-in-form-schema";
import { toast } from "sonner";

type UseSignInScreenReturn = {
  form: UseFormReturn<SignInFormSchema>;
  isLoading: boolean;
  submitForm: () => void;
  signInError?: string;
  onGoToSignUp: () => void;
};

interface Props {
  authRepository: AuthRepository;
}

export default function useSignInScreen({
  authRepository,
}: Props): UseSignInScreenReturn {
  const { navigate } = useRouter();

  const handleError = (error: SignInErrors) => {
    switch (error) {
      case SignInErrors.INVALID_CREDENTIALS:
        toast.error("Credenciais inválidas", {
          description: "Verifique seu email e senha e tente novamente.",
        });
        break;
      case SignInErrors.USER_NOT_FOUND:
        toast.error("Usuário não encontrado", {
          description: "Não existe uma conta com este email.",
        });
        break;
      case SignInErrors.EMAIL_NOT_CONFIRMED:
        toast.warning("Confirme seu email", {
          description: "Verifique sua caixa de entrada e confirme seu email antes de fazer login.",
        });
        break;
      default:
        toast.error("Erro no login", {
          description: "Ocorreu um erro inesperado. Tente novamente.",
        });
    }
  };

  const { form, isLoading, onSubmit, signInError } = useSignInForm({
    authRepository,
    onSubmit: async () => {
      toast.success("Login realizado com sucesso!", {
        description: "Bem-vindo de volta!",
      });
      console.log("Login bem-sucedido, deveria mostrar o toast");
      navigate({
        to: "/",
      });
    },
    onError: handleError,
  });

  const submitForm = onSubmit;

  const onGoToSignUp = () => {
    navigate({ to: "/auth/sign-up" });
  };

  return {
    form,
    isLoading,
    signInError,
    submitForm,
    onGoToSignUp,
  };
}