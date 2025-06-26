import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string({ message: "Informe seu email" }).email("Email inválido"),
  password: z
    .string({ message: "Informe sua senha" })
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
