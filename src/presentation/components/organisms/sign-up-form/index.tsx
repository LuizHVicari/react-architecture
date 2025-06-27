import { Form } from "@/presentation/components/ui/form";
import { Button } from "@/presentation/components/ui/button";
import EmailField from "@/presentation/components/molecules/email-field";
import PasswordField from "@/presentation/components/molecules/password-field";
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
}: SignUpFormProps): React.JSX.Element {
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={onSubmit}>
        <EmailField
          control={form.control}
          disabled={isLoading}
          label="E-mail"
          name="email"
        />

        <PasswordField
          control={form.control}
          disabled={isLoading}
          label="Senha"
          name="password"
        />

        <PasswordField
          control={form.control}
          disabled={isLoading}
          label="Confirmar senha"
          name="confirmPassword"
        />

        {signUpError && <p className="text-sm text-red-500">{signUpError}</p>}

        <Button className="w-full" disabled={isLoading} type="submit">
          {isLoading ? "Carregando..." : "Cadastrar"}
        </Button>
        {onGoToSignIn && (
          <Button
            className="w-full"
            disabled={isLoading}
            type="button"
            variant="secondary"
            onClick={onGoToSignIn}
          >
            Já tem conta? Fazer login
          </Button>
        )}
      </form>
    </Form>
  );
}
