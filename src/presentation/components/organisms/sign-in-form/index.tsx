import { Form } from "@/presentation/components/ui/form";
import { Button } from "@/presentation/components/ui/button";
import EmailField from "@/presentation/components/molecules/email-field";
import PasswordField from "@/presentation/components/molecules/password-field";
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
}: SignInFormProps): React.JSX.Element {
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

        {signInError && <p className="text-sm text-red-500">{signInError}</p>}

        <Button className="w-full" disabled={isLoading} type="submit">
          {isLoading ? "Carregando..." : "Entrar"}
        </Button>
        {onGoToSignUp && (
          <Button
            className="w-full"
            disabled={isLoading}
            type="button"
            variant="secondary"
            onClick={onGoToSignUp}
          >
            Não tem conta? Criar conta
          </Button>
        )}
      </form>
    </Form>
  );
}
