import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import EmailField from "@/components/molecules/email-field";
import PasswordField from "@/components/molecules/password-field";
import { type UseFormReturn } from "react-hook-form";
import { type SignInFormSchema } from "@/core/schemas/sign-in-form-schema";

interface SignInFormProps {
  form: UseFormReturn<SignInFormSchema>;
  onSubmit: () => void;
  isLoading: boolean;
  signInError?: string;
  onGoToSignUp?: () => void;
}

export default function SignInForm({
  form,
  onSubmit,
  isLoading,
  signInError,
  onGoToSignUp,
}: SignInFormProps) {
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

        {signInError && <p className="text-sm text-red-500">{signInError}</p>}

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Carregando..." : "Entrar"}
        </Button>
        {onGoToSignUp && (
          <Button 
            type="button"
            variant="secondary" 
            className="w-full" 
            disabled={isLoading}
            onClick={onGoToSignUp}
          >
            Não tem conta? Criar conta
          </Button>
        )}
      </form>
    </Form>
  );
}