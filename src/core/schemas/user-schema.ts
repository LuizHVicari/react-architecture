import { z } from "zod";

export const userSchema = z.object({
  email: z.string().trim().email().toLowerCase(),
  name: z.string().trim().optional(),
});

export type UserSchema = z.infer<typeof userSchema>;
