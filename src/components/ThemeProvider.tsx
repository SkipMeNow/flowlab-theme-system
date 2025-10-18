import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { Theme, ThemeConfig, ThemeMode, FontSize } from '../types';
import { lightTheme } from '../themes/light';
import { darkTheme } from '../themes/dark';
import { themeToCSSVariables, applyCSSVariables, applyThemeAttributes } from '../utils';

export interface ThemeChangeInfo {
  theme: Theme;
  mode: ThemeMode;
  themeName: string;
  config: ThemeConfig;
}

export interface ThemeContextValue {
  theme: Theme;
  config: ThemeConfig;
  themeName: string;
  setMode: (mode: ThemeMode) => void;
  setFontSize: (fontSize: FontSize) => void;
  setCompactMode: (compact: boolean) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  lightTheme?: Theme; // Override default light theme
  darkTheme?: Theme; // Override default dark theme
  initialConfig?: Partial<ThemeConfig>;
  persistToLocalStorage?: boolean;
  localStorageKey?: string;
  onThemeChange?: (info: ThemeChangeInfo) => void;
}

const defaultConfig: ThemeConfig = {
  mode: 'light',
  fontSize: 'medium',
  compactMode: false,
};

export function ThemeProvider({
  children,
  lightTheme: customLightTheme = lightTheme,
  darkTheme: customDarkTheme = darkTheme,
  initialConfig = {},
  persistToLocalStorage = true,
  localStorageKey = 'flowlab-theme-config',
  onThemeChange,
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

  // Use custom themes based on mode
  const theme = config.mode === 'dark' ? customDarkTheme : customLightTheme;
  const themeName = theme.name;

  const setMode = (mode: ThemeMode) => {
    setConfig((prev: ThemeConfig) => ({ ...prev, mode }));
  };

  const setFontSize = (fontSize: FontSize) => {
    setConfig((prev: ThemeConfig) => ({ ...prev, fontSize }));
  };

  const setCompactMode = (compactMode: boolean) => {
    setConfig((prev: ThemeConfig) => ({ ...prev, compactMode }));
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setMode(config.mode === 'light' ? 'dark' : 'light');
  };

  // Apply theme changes to DOM
  useEffect(() => {
    const variables = themeToCSSVariables(theme, config);
    applyCSSVariables(variables);
    applyThemeAttributes(config);
  }, [theme, config]);

  // Call onThemeChange when theme or config changes
  useEffect(() => {
    if (onThemeChange) {
      const changeInfo: ThemeChangeInfo = {
        theme,
        mode: config.mode,
        themeName,
        config,
      };
      onThemeChange(changeInfo);
    }
  }, [theme, config, themeName, onThemeChange]);

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
    themeName,
    setMode,
    setFontSize,
    setCompactMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}