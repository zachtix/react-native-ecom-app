import { darkColors, lightColors } from "./colors";

export type ThemeMode = "light" | "dark";

export const getTheme = (mode: ThemeMode) => ({
  mode,
  colors: mode === "light" ? lightColors : darkColors,
});
