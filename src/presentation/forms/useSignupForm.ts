import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type SignUpFormSchema,
  signUpFormSchema,
} from "@/core/schemas/sign-up-form-schema";
import type AuthRepository from "@/core/repositories/auth-repository";
import { useState } from "react";
import { SignUpErrors } from "@/core/repositories/auth-repository";
import { useMutation } from "@tanstack/react-query";

type UseSignUpFormReturn = {
  form: ReturnType<typeof useForm<SignUpFormSchema>>;
  isLoading: boolean;
  signUpError?: string;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
};

interface Props {
  authRepository: AuthRepository;
  onSubmit: () => Promise<void>;
}

export default function useSignUpForm({
  authRepository,
  onSubmit: onSubmitCallback,
}: Props): UseSignUpFormReturn {
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  const [signUpError, setSignUpError] = useState<string>();

  const mutation = useMutation({
    mutationFn: authRepository.signUpWithEmail,
    onSuccess: async (result) => {
      if (result.success) {
        console.log("Usuário criado:", result.result);
        await onSubmitCallback();
      } else {
        switch (result.reason) {
          case SignUpErrors.USER_ALREADY_EXISTS:
            setSignUpError("Usuário já existe.");
            break;
          case SignUpErrors.INVALID_PASSWORD:
            setSignUpError("Senha inválida.");
            break;
          default:
            setSignUpError("Erro desconhecido. Tente novamente.");
        }
      }
    },
  });

  const onSubmit = async (data: SignUpFormSchema): Promise<void> => {
    setSignUpError(undefined);
    await mutation.mutateAsync(data);
  };

  return {
    form,
    isLoading: mutation.isPending,
    signUpError,
    onSubmit: form.handleSubmit(onSubmit),
  };
}
