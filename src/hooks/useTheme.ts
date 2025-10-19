import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeProvider';
import { Theme, ThemeConfig } from '../types';

export interface UseThemeReturn {
  theme: Theme;
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
  
  return context;
}