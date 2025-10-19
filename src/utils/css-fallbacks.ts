/**
 * CSS Variable Fallbacks for Input Component
 * Provides default values when theme system is not available
 */

export const cssVar = (variableName: string, fallback: string) => {
  return `var(${variableName}, ${fallback})`;
};

export const inputFallbacks = {
  // Typography
  fontFamily: cssVar('--font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'),
  fontSizeXs: cssVar('--font-size-xs', '0.75rem'),
  fontSizeSm: cssVar('--font-size-sm', '0.875rem'),
  fontSizeBase: cssVar('--font-size-base', '1rem'),
  fontSizeLg: cssVar('--font-size-lg', '1.125rem'),
  fontWeightMedium: cssVar('--font-weight-medium', '500'),
  
  // Spacing
  spaceXs: cssVar('--space-xs', '0.5rem'),
  spaceSm: cssVar('--space-sm', '0.75rem'),
  spaceMd: cssVar('--space-md', '1rem'),
  spaceLg: cssVar('--space-lg', '1.5rem'),
  spaceXl: cssVar('--space-xl', '2rem'),
  
  // Input specific
  inputBorder: cssVar('--input-border', '#d1d5db'),
  inputBorderHover: cssVar('--input-border-hover', '#9ca3af'),
  inputBorderFocus: cssVar('--input-border-focus', '#3b82f6'),
  inputBg: cssVar('--input-bg', '#ffffff'),
  inputText: cssVar('--input-text', '#111827'),
  bgElevated: cssVar('--bg-elevated', '#f9fafb'),
  
  // Colors
  errorColor: cssVar('--error-color', '#ef4444'),
  errorLight: cssVar('--error-light', 'rgba(239, 68, 68, 0.1)'),
  successColor: cssVar('--success-color', '#10b981'),
  warningColor: cssVar('--warning-color', '#f59e0b'),
  info: cssVar('--info', '#3b82f6'),
  
  // UI
  focusRing: cssVar('--focus-ring', 'rgba(59, 130, 246, 0.5)'),
  textMuted: cssVar('--text-muted', '#6b7280'),
  textPrimary: cssVar('--text-primary', '#111827'),
  textSecondary: cssVar('--text-secondary', '#6b7280'),
  gray200: cssVar('--gray-200', '#e5e7eb'),
  gray50: cssVar('--gray-50', '#f9fafb'),
  
  // Border radius
  radiusSm: cssVar('--radius-sm', '0.25rem'),
  radiusMd: cssVar('--radius-md', '0.375rem'),
  
  // Transitions
  transitionBase: cssVar('--transition-base', 'all 0.2s ease-in-out'),
};