"use client";
import { createContext, useContext, useState } from "react";
import { themes, Theme } from "@/lib/themes";

type ThemeContextType = {
  theme: Theme;
  setTheme: (id: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeId, setThemeId] = useState("neutral");
  const theme = themes.find(t => t.id === themeId) || themes[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeId }}>
      <div className={`min-h-screen bg-gradient-to-b ${theme.bgStart} ${theme.bgEnd} ${theme.textColor}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
