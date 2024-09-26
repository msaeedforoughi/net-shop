import { createContext, useContext, useState } from "react";
import { IToggleProvider, IToggleContext } from "../types/toggleContext";

export const ToggleContext = createContext({} as IToggleContext);

export const useToggleContext = () => {
  return useContext(ToggleContext);
};

export function ToggleProvider({ children }: IToggleProvider) {
  const [show, setShow] = useState(false);

  return (
    <ToggleContext.Provider
      value={{
        show,
        setShow,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}
