// Types
export * from './types';

// Themes
export * from './themes';

// Components
export { ThemeProvider } from './components';

// UI Components
export * from './ui';

// Layouts (Responsive System)
export * from './layouts';

// Hooks
export { useTheme } from './hooks';
export { 
  useBreakpoint, 
  useIsMobile, 
  useOrientation, 
  useResponsiveValue, 
  useHoverSupport,
  useResponsiveLayout,
  useAutoResponsive 
} from './hooks/useResponsive';

// Utils
export * from './utils';

// Re-export commonly used items
export { lightTheme, darkTheme } from './themes';
export { themeToCSSVariables, applyCSSVariables, applyThemeAttributes } from './utils';