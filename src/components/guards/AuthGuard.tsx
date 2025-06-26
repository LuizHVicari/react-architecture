import { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import type AuthRepository from "@/core/repositories/auth-repository";
import type { UserSchema } from "@/core/schemas/user-schema";

interface AuthGuardProps {
  children: React.ReactNode;
  authRepository: AuthRepository;
}

export default function AuthGuard({ children, authRepository }: AuthGuardProps) {
  const [user, setUser] = useState<UserSchema | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useRouter();

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        const userData = await authRepository.getAuth();
        
        if (!isMounted) return;
        
        setUser(userData);
        
        if (!userData) {
          toast.warning("Ops, parece que você não está autenticado");
          navigate({ to: "/auth/sign-in" });
        }
      } catch (error) {
        if (!isMounted) return;
        
        console.error("Auth check failed:", error);
        toast.error("Erro ao verificar autenticação");
        navigate({ to: "/auth/sign-in" });
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [authRepository, navigate]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}