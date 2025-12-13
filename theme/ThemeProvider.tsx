import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import { getTheme, ThemeMode } from "./theme";

type ThemeContextType = {
  theme: ReturnType<typeof getTheme>;
  mode: ThemeMode;
  setMode: (mode: ThemeMode | "system") => void;
};

const ThemeContext = createContext<ThemeContextType>(null as any);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = Appearance.getColorScheme();
  const [mode, setModeState] = useState<ThemeMode>(
    // systemScheme === "dark" ? "dark" : "light"
    "light"
  );

  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      setModeState(colorScheme === "dark" ? "dark" : "light");
    });
    return () => sub.remove();
  }, []);

  const setMode = (value: ThemeMode | "system") => {
    if (value === "system") {
      const scheme = Appearance.getColorScheme();
      setModeState(scheme === "dark" ? "dark" : "light");
    } else {
      setModeState(value);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: getTheme(mode), mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
