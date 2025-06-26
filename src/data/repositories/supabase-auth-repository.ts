import {
  SignUpErrors,
  SignInErrors,
} from "@/core/repositories/auth-repository";
import type AuthRepository from "@/core/repositories/auth-repository";
import type { SignUpFormSchema } from "@/core/schemas/sign-up-form-schema";
import type { SignInFormSchema } from "@/core/schemas/sign-in-form-schema";
import type { UserSchema } from "@/core/schemas/user-schema";
import type { Result } from "@/core/types/result";
import { supabase } from "@/shared/clients/supabase-client";

export default class SupabaseAuthRepository implements AuthRepository {
  async signInWithEmail({
    email,
    password,
  }: SignInFormSchema): Promise<Result<UserSchema, SignInErrors>> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          return { success: false, reason: SignInErrors.INVALID_CREDENTIALS };
        }
        if (error.message.includes("not found")) {
          return { success: false, reason: SignInErrors.USER_NOT_FOUND };
        }
        if (error.message.includes("Email not confirmed")) {
          console.log("aqui");
          return { success: false, reason: SignInErrors.EMAIL_NOT_CONFIRMED };
        }
        return { success: false, reason: SignInErrors.API_ERROR };
      }

      const user = data?.user;

      if (!user) {
        console.log("N tem usuário");
        return { success: false, reason: SignInErrors.API_ERROR };
      }

      const userSchema: UserSchema = {
        email: user.email ?? "",
      };

      return { success: true, result: userSchema };
    } catch (e) {
      console.log(e);
      return { success: false, reason: SignInErrors.API_ERROR };
    }
  }

  async signUpWithEmail({
    email,
    password,
  }: SignUpFormSchema): Promise<Result<UserSchema, SignUpErrors>> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error(error);
        if (error.message.includes("already registered")) {
          return { success: false, reason: SignUpErrors.USER_ALREADY_EXISTS };
        }
        if (error.message.includes("password")) {
          return { success: false, reason: SignUpErrors.INVALID_PASSWORD };
        }
        return { success: false, reason: SignUpErrors.API_ERROR };
      }

      const user = data?.user;

      if (!user) {
        console.log("N tem usuário");
        return { success: false, reason: SignUpErrors.API_ERROR };
      }

      const userSchema: UserSchema = {
        email: user.email ?? "",
      };

      return { success: true, result: userSchema };
    } catch (e) {
      console.log(e);
      return { success: false, reason: SignUpErrors.API_ERROR };
    }
  }

  async getAuth(): Promise<UserSchema | null> {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        return null;
      }

      return {
        email: session.user.email ?? "",
      };
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  }
}
