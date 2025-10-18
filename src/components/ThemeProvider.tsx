import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { Theme, ThemeConfig, ThemeMode, FontSize } from '../types';
import { lightTheme } from '../themes/light';
import { darkTheme } from '../themes/dark';
import { themeToCSSVariables, applyCSSVariables, applyThemeAttributes } from '../utils';

export interface ThemeContextValue {
  theme: Theme;
  config: ThemeConfig;
  setMode: (mode: ThemeMode) => void;
  setFontSize: (fontSize: FontSize) => void;
  setCompactMode: (compact: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  initialConfig?: Partial<ThemeConfig>;
  persistToLocalStorage?: boolean;
  localStorageKey?: string;
}

const defaultConfig: ThemeConfig = {
  mode: 'light',
  fontSize: 'medium',
  compactMode: false,
};

export function ThemeProvider({
  children,
  initialConfig = {},
  persistToLocalStorage = true,
  localStorageKey = 'flowlab-theme-config',
}: ThemeProviderProps) {
  const [config, setConfig] = useState<ThemeConfig>(() => {
    if (persistToLocalStorage && typeof window !== 'undefined') {
      try {
        const savedConfig = localStorage.getItem(localStorageKey);
        if (savedConfig) {
          return { ...defaultConfig, ...JSON.parse(savedConfig), ...initialConfig };
        }
      } catch (error) {
        console.warn('Failed to load theme config from localStorage:', error);
      }
    }
    return { ...defaultConfig, ...initialConfig };
  });

  const theme = config.mode === 'dark' ? darkTheme : lightTheme;

  const setMode = (mode: ThemeMode) => {
    setConfig((prev: ThemeConfig) => ({ ...prev, mode }));
  };

  const setFontSize = (fontSize: FontSize) => {
    setConfig((prev: ThemeConfig) => ({ ...prev, fontSize }));
  };

  const setCompactMode = (compactMode: boolean) => {
    setConfig((prev: ThemeConfig) => ({ ...prev, compactMode }));
  };

  // Apply theme changes to DOM
  useEffect(() => {
    const variables = themeToCSSVariables(theme, config);
    applyCSSVariables(variables);
    applyThemeAttributes(config);
  }, [theme, config]);

  // Persist to localStorage
  useEffect(() => {
    if (persistToLocalStorage && typeof window !== 'undefined') {
      try {
        localStorage.setItem(localStorageKey, JSON.stringify(config));
      } catch (error) {
        console.warn('Failed to save theme config to localStorage:', error);
      }
    }
  }, [config, persistToLocalStorage, localStorageKey]);

  const contextValue: ThemeContextValue = {
    theme,
    config,
    setMode,
    setFontSize,
    setCompactMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}