import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type SignInFormSchema,
  signInFormSchema,
} from "@/core/schemas/sign-in-form-schema";
import type AuthRepository from "@/core/repositories/auth-repository";
import { useState } from "react";
import { SignInErrors } from "@/core/repositories/auth-repository";
import { useMutation } from "@tanstack/react-query";

type UseSignInFormReturn = {
  form: ReturnType<typeof useForm<SignInFormSchema>>;
  isLoading: boolean;
  signInError?: string;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
};

interface Props {
  authRepository: AuthRepository;
  onSubmit: () => Promise<void>;
  onError: (error: SignInErrors) => void;
}

export default function useSignInForm({
  authRepository,
  onSubmit: onSubmitCallback,
  onError,
}: Props): UseSignInFormReturn {
  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });

  const [signInError, setSignInError] = useState<string>();

  const mutation = useMutation({
    mutationFn: authRepository.signInWithEmail,
    onSuccess: async (result) => {
      if (result.success) {
        console.log("Usuário logado:", result.result);
        await onSubmitCallback();
      } else {
        onError(result.reason);
        switch (result.reason) {
          case SignInErrors.INVALID_CREDENTIALS:
            setSignInError("Email ou senha incorretos.");
            break;
          case SignInErrors.USER_NOT_FOUND:
            setSignInError("Usuário não encontrado.");
            break;
          case SignInErrors.EMAIL_NOT_CONFIRMED:
            setSignInError("Email não confirmado.");
            break;
          default:
            setSignInError("Erro desconhecido. Tente novamente.");
        }
      }
    },
  });

  const onSubmit = async (data: SignInFormSchema): Promise<void> => {
    setSignInError(undefined);
    await mutation.mutateAsync(data);
  };

  return {
    form,
    isLoading: mutation.isPending,
    signInError,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
