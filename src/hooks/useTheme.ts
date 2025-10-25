import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeProvider';
import { Theme, ThemeConfig } from '../types';

export interface ThemeVariables {
  // Colors organized by category
  colors: {
    // Neutrals
    gray: Theme['colors']['gray'];
    accent: Theme['colors']['accent'];
    
    // Backgrounds
    background: {
      app: string;
      surface: string;
      elevated: string;
      navbar: string;
      sidebar: string;
      hover: string;
      active: string;
      blueprint: string;
    };
    
    // Text
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      inverse: string;
      accent: string;
      onAccent: string;
      muted: string;
    };
    
    // Semantic
    semantic: {
      success: string;
      successLight: string;
      error: string;
      errorLight: string;
      warning: string;
      warningLight: string;
      info: string;
      infoLight: string;
    };
    
    // Interactive elements
    button: Theme['colors']['button'];
    input: Theme['colors']['input'];
    toggle: Theme['colors']['toggle'];
    border: Theme['colors']['border'];
    
    // Special
    focus: string;
    executing: string;
    overlay: Theme['colors']['overlay'];
    shadow: Theme['colors']['shadow'];
  };
  
  // Layout & Spacing
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  
  // Typography
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  
  // Visual Design
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  
  shadows: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  // Animation & Transitions
  transitions: {
    fast: string;
    base: string;
    slow: string;
  };
  
  // Z-Index
  zIndex: {
    dropdown: number;
    sticky: number;
    overlay: number;
    modal: number;
    toast: number;
  };
}

export interface UseThemeReturn {
  theme: Theme;
  variables: ThemeVariables;
  config: ThemeConfig;
  themeName: string;
  setMode: (mode: 'light' | 'dark') => void;
  setFontSize: (fontSize: 'small' | 'medium' | 'large') => void;
  setCompactMode: (compact: boolean) => void;
  setTheme: (theme: Theme) => void;
  setLightTheme: (theme: Theme) => void;  // NEW: Set light theme dynamically
  setDarkTheme: (theme: Theme) => void;   // NEW: Set dark theme dynamically
  toggleTheme: () => void;
}

export function useTheme(): UseThemeReturn {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  // Create organized variables object from the theme
  const variables: ThemeVariables = {
    colors: {
      gray: context.theme.colors.gray,
      accent: context.theme.colors.accent,
      background: context.theme.colors.background,
      text: context.theme.colors.text,
      semantic: context.theme.colors.semantic,
      button: context.theme.colors.button,
      input: context.theme.colors.input,
      toggle: context.theme.colors.toggle,
      border: context.theme.colors.border,
      focus: context.theme.colors.focus,
      executing: context.theme.colors.executing,
      overlay: context.theme.colors.overlay,
      shadow: context.theme.colors.shadow,
    },
    spacing: {
      xs: context.theme.spacing.xs,
      sm: context.theme.spacing.sm,
      md: context.theme.spacing.md,
      lg: context.theme.spacing.lg,
      xl: context.theme.spacing.xl,
      xxl: context.theme.spacing.xxl,
    },
    typography: {
      fontFamily: context.theme.typography.fontFamily,
      fontSize: context.theme.typography.fontSize,
      fontWeight: context.theme.typography.fontWeight,
    },
    borderRadius: {
      sm: context.theme.borderRadius.sm,
      md: context.theme.borderRadius.md,
      lg: context.theme.borderRadius.lg,
      full: context.theme.borderRadius.full,
    },
    shadows: context.theme.shadows,
    transitions: context.theme.transitions,
    zIndex: {
      dropdown: context.theme.zIndex.dropdown,
      sticky: context.theme.zIndex.sticky,
      overlay: context.theme.zIndex.overlay,
      modal: context.theme.zIndex.modal,
      toast: context.theme.zIndex.toast,
    },
  };
  
  return {
    ...context,
    variables,
  };
}