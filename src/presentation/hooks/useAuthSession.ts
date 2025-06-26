import type AuthRepository from "@/core/repositories/auth-repository";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getAuthQueryKey } from "../tanstack-keys/auth-keys";
import type { UserSchema } from "@/core/schemas/user-schema";

interface Props {
  authRepository: AuthRepository;
}

export default function useAuthSession({
  authRepository,
}: Props): UseQueryResult<UserSchema | null> {
  return useQuery({
    queryFn: () => authRepository.getAuth(),
    queryKey: getAuthQueryKey,
    staleTime: 2 * 60 * 1000,
  });
}
