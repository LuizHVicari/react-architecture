import type AuthRepository from "@/core/repositories/auth-repository";
import type AppointmentsRepository from "@/core/repositories/appointments-repository";
import SupabaseAuthRepository from "@/data/repositories/supabase-auth-repository";
import SupabaseAppointmentsRepository from "@/data/repositories/supabase-appointments-repository";
import useSignInScreen from "@/presentation/view-models/useSignInScreen";
import useSignUpScreen from "@/presentation/view-models/useSignUpScreen";
import useAuthSession from "@/presentation/hooks/useAuthSession";

type UseSignInScreenReturn = ReturnType<typeof useSignInScreen>;
type UseSignUpScreenReturn = ReturnType<typeof useSignUpScreen>;
type UseAuthSessionReturn = ReturnType<typeof useAuthSession>;

export interface DependencyContainer {
  authRepository: AuthRepository;
  appointmentsRepository: AppointmentsRepository;
  viewModels: {
    useSignInScreen: () => UseSignInScreenReturn;
    useSignUpScreen: () => UseSignUpScreenReturn;
  };
  hooks: {
    useAuthSession: () => UseAuthSessionReturn;
  };
}

export function createDependencyContainer(): DependencyContainer {
  const authRepository = new SupabaseAuthRepository();
  const appointmentsRepository = new SupabaseAppointmentsRepository();

  return {
    authRepository,
    appointmentsRepository,
    viewModels: {
      useSignInScreen: () => useSignInScreen({ authRepository }),
      useSignUpScreen: () => useSignUpScreen({ authRepository }),
    },
    hooks: {
      useAuthSession: () => useAuthSession({ authRepository }),
    },
  };
}
