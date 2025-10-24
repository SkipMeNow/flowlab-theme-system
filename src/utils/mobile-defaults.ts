import { ThemeBreakpoints, ThemeMobile } from '../types';

/**
 * Standard breakpoints for responsive design
 */
export const defaultBreakpoints: ThemeBreakpoints = {
  xs: '320px',   // Mobile portrait
  sm: '480px',   // Mobile landscape  
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1200px',  // Large desktop
  xxl: '1400px', // Extra large
};

/**
 * Mobile-specific theme properties
 */
export const defaultMobile: ThemeMobile = {
  touchTargetSize: '44px',
  scrollPadding: '16px',
  tapHighlightColor: 'rgba(59, 130, 246, 0.15)',
  userSelect: 'none',
  overscrollBehavior: 'contain',
  safeAreaInsets: {
    top: 'env(safe-area-inset-top, 0px)',
    right: 'env(safe-area-inset-right, 0px)',
    bottom: 'env(safe-area-inset-bottom, 0px)',
    left: 'env(safe-area-inset-left, 0px)',
  },
};

/**
 * Get mobile properties with theme-specific tap highlight color
 */
export function getMobileConfig(accentColor: string): ThemeMobile {
  return {
    ...defaultMobile,
    tapHighlightColor: `${accentColor}15`, // 15 = 8.5% opacity in hex
  };
}