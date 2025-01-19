import { FC, ReactNode } from "react";

export type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <>{children}</>;
};
