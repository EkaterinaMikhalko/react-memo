import { createContext, useState } from "react";

export const LightModeContext = createContext(null);
export const LightModeProvider = ({ children }) => {
  const [isEasyMode, setIsEasyMode] = useState(true);
  function updateEasyMode(cards) {
    setIsEasyMode(cards);
  }

  return <LightModeContext.Provider value={{ isEasyMode, updateEasyMode }}>{children}</LightModeContext.Provider>;
};
