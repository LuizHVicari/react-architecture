import { createContext, useContext, type ReactNode } from "react";
import {
  createDependencyContainer,
  type DependencyContainer,
} from "@/core/container/dependency-container";

const DependencyContext = createContext<DependencyContainer | null>(null);

interface DependencyProviderProps {
  children: ReactNode;
  container?: DependencyContainer;
}

export function DependencyProvider({
  children,
  container = createDependencyContainer(),
}: DependencyProviderProps): React.JSX.Element {
  return (
    <DependencyContext.Provider value={container}>
      {children}
    </DependencyContext.Provider>
  );
}

export function useDependencies(): DependencyContainer {
  const context = useContext(DependencyContext);
  if (!context) {
    throw new Error("useDependencies must be used within a DependencyProvider");
  }
  return context;
}
