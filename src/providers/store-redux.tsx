import { store } from "@/store/store.store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export const StoreReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
