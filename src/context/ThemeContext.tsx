"use client";

import React, { useEffect, useState } from "react";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme,
  type ThemeProviderProps,
} from "next-themes";

export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  resolvedTheme?: string;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
}

/**
 * Standard NextThemes wrapper configured for strict SSR hydration safety.
 * Defaults to 'dark' theme without flashing, uses custom storageKey,
 * and applies the class attribute directly to the <html> element.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="gr_portfolio_theme"
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

/**
 * Custom hook providing a typed interface for theme operations.
 * Safely handles server-side rendering by defaulting to 'dark' until mounted.
 */
export const useTheme = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = (mounted ? (resolvedTheme || theme || "dark") : "dark") as Theme;

  const toggleTheme = React.useCallback(() => {
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }, [currentTheme, setTheme]);

  const handleSetTheme = React.useCallback(
    (newTheme: Theme) => {
      setTheme(newTheme);
    },
    [setTheme]
  );

  return {
    theme: currentTheme,
    resolvedTheme,
    toggleTheme,
    setTheme: handleSetTheme,
    mounted,
  };
};
