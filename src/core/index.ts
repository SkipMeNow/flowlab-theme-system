/**
 * @flowlabkit/design-system/core
 * 
 * Core theme system with essential functionality
 * Includes: ThemeProvider, core hooks, light/dark themes, CSS variables
 * Always installed - minimal bundle for theme system only
 */

// Core Theme System
export { ThemeProvider } from '../components/ThemeProvider';
export { useTheme } from '../hooks/useTheme';

// Built-in Essential Themes (light + dark only)
export { lightTheme } from '../themes/light';
export { darkTheme } from '../themes/dark';

// Theme Types and Interfaces
export type { 
  Theme, 
  ThemeConfig, 
  ThemeColors, 
  ThemeSpacing, 
  ThemeTypography,
  ThemeBorderRadius,
  ThemeShadows,
  ThemeTransitions,
  ThemeZIndex
} from '../types';

// CSS Variable Utilities
export { 
  themeToCSSVariables, 
  applyCSSVariables 
} from '../utils/css-variables';

// CSS Fallback Utilities  
export {
  cssVar,
  inputFallbacks
} from '../utils/css-fallbacks';