import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={(darkMode, toggleDarkMode)}>
      {children}
    </DarkModeContext.Provider>
  );
}
export default DarkModeContext;
