import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Theme } from '../types';
import { lightTheme } from '../themes/light';
import { darkTheme } from '../themes/dark';
import { applyCSSVariables } from '../utils';

export interface SimpleThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const SimpleThemeContext = createContext<SimpleThemeContextValue | undefined>(undefined);

export interface SimpleThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
  fallbackTheme?: Theme;
  onThemeChange?: (theme: Theme) => void;
}

export function SimpleThemeProvider({
  children,
  theme: initialTheme = lightTheme,
  fallbackTheme = darkTheme,
  onThemeChange,
}: SimpleThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(initialTheme);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    onThemeChange?.(theme);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme.name === lightTheme.name ? fallbackTheme : lightTheme;
    setTheme(newTheme);
  };

  // Apply theme changes to DOM
  useEffect(() => {
    // Apply CSS variables for the current theme
    const variables: Record<string, string> = {};
    
    // Background colors
    variables['--bg-app'] = currentTheme.colors.background.app;
    variables['--bg-surface'] = currentTheme.colors.background.surface;
    variables['--bg-elevated'] = currentTheme.colors.background.elevated;
    variables['--bg-navbar'] = currentTheme.colors.background.navbar;
    variables['--bg-sidebar'] = currentTheme.colors.background.sidebar;
    variables['--bg-hover'] = currentTheme.colors.background.hover;
    variables['--bg-active'] = currentTheme.colors.background.active;

    // Text colors
    variables['--text-primary'] = currentTheme.colors.text.primary;
    variables['--text-secondary'] = currentTheme.colors.text.secondary;
    variables['--text-tertiary'] = currentTheme.colors.text.tertiary;
    variables['--text-disabled'] = currentTheme.colors.text.disabled;
    variables['--text-inverse'] = currentTheme.colors.text.inverse;
    variables['--text-accent'] = currentTheme.colors.text.accent;
    variables['--text-on-accent'] = currentTheme.colors.text.onAccent;
    variables['--text-muted'] = currentTheme.colors.text.muted;

    // Border colors
    variables['--border-color'] = currentTheme.colors.border.color;
    variables['--border-light'] = currentTheme.colors.border.light;
    variables['--border-medium'] = currentTheme.colors.border.medium;

    // Spacing
    variables['--space-xs'] = currentTheme.spacing.xs;
    variables['--space-sm'] = currentTheme.spacing.sm;
    variables['--space-md'] = currentTheme.spacing.md;
    variables['--space-lg'] = currentTheme.spacing.lg;
    variables['--space-xl'] = currentTheme.spacing.xl;
    variables['--space-xxl'] = currentTheme.spacing.xxl;

    // Typography
    variables['--font-family'] = currentTheme.typography.fontFamily;
    variables['--font-size-xs'] = currentTheme.typography.fontSize.xs;
    variables['--font-size-sm'] = currentTheme.typography.fontSize.sm;
    variables['--font-size-base'] = currentTheme.typography.fontSize.base;
    variables['--font-size-lg'] = currentTheme.typography.fontSize.lg;
    variables['--font-size-xl'] = currentTheme.typography.fontSize.xl;
    variables['--font-size-xxl'] = currentTheme.typography.fontSize.xxl;
    variables['--font-size-xxxl'] = currentTheme.typography.fontSize.xxxl;

    // Border radius
    variables['--radius-sm'] = currentTheme.borderRadius.sm;
    variables['--radius-md'] = currentTheme.borderRadius.md;
    variables['--radius-lg'] = currentTheme.borderRadius.lg;
    variables['--radius-full'] = currentTheme.borderRadius.full;

    // Shadows
    variables['--shadow-xs'] = currentTheme.shadows.xs;
    variables['--shadow-sm'] = currentTheme.shadows.sm;
    variables['--shadow-md'] = currentTheme.shadows.md;
    variables['--shadow-lg'] = currentTheme.shadows.lg;
    variables['--shadow-xl'] = currentTheme.shadows.xl;

    // Accent colors
    Object.entries(currentTheme.colors.accent).forEach(([shade, color]) => {
      variables[`--accent-${shade}`] = color;
    });

    // Gray colors
    Object.entries(currentTheme.colors.gray).forEach(([shade, color]) => {
      variables[`--gray-${shade}`] = color;
    });

    // Semantic colors
    variables['--success'] = currentTheme.colors.semantic.success;
    variables['--success-light'] = currentTheme.colors.semantic.successLight;
    variables['--error'] = currentTheme.colors.semantic.error;
    variables['--error-light'] = currentTheme.colors.semantic.errorLight;
    variables['--warning'] = currentTheme.colors.semantic.warning;
    variables['--warning-light'] = currentTheme.colors.semantic.warningLight;
    variables['--info'] = currentTheme.colors.semantic.info;
    variables['--info-light'] = currentTheme.colors.semantic.infoLight;

    applyCSSVariables(variables);
  }, [currentTheme]);

  const contextValue: SimpleThemeContextValue = {
    theme: currentTheme,
    setTheme,
    toggleTheme,
  };

  return (
    <SimpleThemeContext.Provider value={contextValue}>
      {children}
    </SimpleThemeContext.Provider>
  );
}

export function useSimpleTheme() {
  const context = useContext(SimpleThemeContext);
  if (context === undefined) {
    throw new Error('useSimpleTheme must be used within a SimpleThemeProvider');
  }
  return context;
}