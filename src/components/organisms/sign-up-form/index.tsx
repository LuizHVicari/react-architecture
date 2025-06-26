import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import EmailField from "@/components/molecules/email-field";
import PasswordField from "@/components/molecules/password-field";
import { type UseFormReturn } from "react-hook-form";
import { type SignUpFormSchema } from "@/core/schemas/sign-up-form-schema";

interface SignUpFormProps {
  form: UseFormReturn<SignUpFormSchema>;
  onSubmit: () => void;
  isLoading: boolean;
  signUpError?: string;
  onGoToSignIn?: () => void;
}

export default function SignUpForm({
  form,
  onSubmit,
  isLoading,
  signUpError,
  onGoToSignIn,
}: SignUpFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4">
        <EmailField
          control={form.control}
          name="email"
          label="E-mail"
          disabled={isLoading}
        />

        <PasswordField
          control={form.control}
          name="password"
          label="Senha"
          disabled={isLoading}
        />

        <PasswordField
          control={form.control}
          name="confirmPassword"
          label="Confirmar senha"
          disabled={isLoading}
        />

        {signUpError && <p className="text-sm text-red-500">{signUpError}</p>}

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Carregando..." : "Cadastrar"}
        </Button>
        {onGoToSignIn && (
          <Button 
            type="button"
            variant="secondary" 
            className="w-full" 
            disabled={isLoading}
            onClick={onGoToSignIn}
          >
            Já tem conta? Fazer login
          </Button>
        )}
      </form>
    </Form>
  );
}
