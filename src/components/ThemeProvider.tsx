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
  setTheme: (theme: Theme) => void;
  setLightTheme: (theme: Theme) => void;  // NEW: Set light theme dynamically
  setDarkTheme: (theme: Theme) => void;   // NEW: Set dark theme dynamically
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme; // Single theme that adapts to light/dark mode
  themes?: Record<string, Theme>; // Available themes by name
  lightTheme?: Theme; // Override default light theme (legacy)
  darkTheme?: Theme; // Override default dark theme (legacy)
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
  theme: singleTheme,
  themes = {},
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

  // State for dynamic light/dark themes
  const [dynamicLightTheme, setDynamicLightTheme] = useState<Theme>(customLightTheme);
  const [dynamicDarkTheme, setDynamicDarkTheme] = useState<Theme>(customDarkTheme);

  // Theme selection logic:
  // 1. Use single theme if provided
  // 2. Use theme from themes collection by name if themeName is in config
  // 3. Fallback to light/dark theme switching (now uses dynamic themes)
  const theme = singleTheme || 
    (config.themeName && themes[config.themeName]) ||
    (config.mode === 'dark' ? dynamicDarkTheme : dynamicLightTheme);
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

  const setTheme = (newTheme: Theme) => {
    setConfig((prev: ThemeConfig) => ({ ...prev, themeName: newTheme.name }));
  };

  // NEW: Set light theme dynamically
  const setLightTheme = (newLightTheme: Theme) => {
    setDynamicLightTheme(newLightTheme);
  };

  // NEW: Set dark theme dynamically
  const setDarkTheme = (newDarkTheme: Theme) => {
    setDynamicDarkTheme(newDarkTheme);
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
    setTheme,
    setLightTheme,
    setDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}