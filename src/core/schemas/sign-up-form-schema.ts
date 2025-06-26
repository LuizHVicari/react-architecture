import { z } from "zod";

export const signUpFormSchema = z
  .object({
    email: z
      .string({ message: "Informe um email" })
      .trim()
      .toLowerCase()
      .email({ message: "O e-mail não é válido" }),
    password: z
      .string({ message: "Informe uma senha" })
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .max(32, "A senha deve ter no máximo 32 caracteres")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*-])[A-Za-z\d!@#$%&*-]{8,}$/
      ),
    confirmPassword: z.string({ message: "Confirme a sua senha" }),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  });

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
