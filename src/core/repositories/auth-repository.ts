import type { SignUpFormSchema } from "../schemas/sign-up-form-schema";
import type { SignInFormSchema } from "../schemas/sign-in-form-schema";
import type { UserSchema } from "../schemas/user-schema";
import type { Result } from "../types/result";

export enum SignUpErrors {
  USER_ALREADY_EXISTS,
  INVALID_PASSWORD,
  API_ERROR,
}

export enum SignInErrors {
  INVALID_CREDENTIALS,
  USER_NOT_FOUND,
  API_ERROR,
  EMAIL_NOT_CONFIRMED,
}

export default interface AuthRepository {
  signInWithEmail(
    formData: SignInFormSchema
  ): Promise<Result<UserSchema, SignInErrors>>;
  signUpWithEmail(
    formData: SignUpFormSchema
  ): Promise<Result<UserSchema, SignUpErrors>>;
}
