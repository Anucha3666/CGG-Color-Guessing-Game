import { FC, ReactNode } from "react";
import { StoreReduxProvider } from "./store-redux";

export type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return <StoreReduxProvider>{children}</StoreReduxProvider>;
};
