import { Theme, ThemeConfig, FontSize, CompactMode } from '../types';

/**
 * Convert theme object to CSS custom properties
 */
export function themeToCSSVariables(theme: Theme, config: ThemeConfig): Record<string, string> {
  const variables: Record<string, string> = {};

  // Colors
  Object.entries(theme.colors.gray).forEach(([key, value]: [string, string]) => {
    variables[`--gray-${key}`] = value;
  });

  Object.entries(theme.colors.accent).forEach(([key, value]: [string, string]) => {
    variables[`--accent-${key}`] = value;
  });

  // Semantic colors
  variables['--success'] = theme.colors.semantic.success;
  variables['--success-light'] = theme.colors.semantic.successLight;
  variables['--error'] = theme.colors.semantic.error;
  variables['--error-light'] = theme.colors.semantic.errorLight;
  variables['--warning'] = theme.colors.semantic.warning;
  variables['--warning-light'] = theme.colors.semantic.warningLight;
  variables['--info'] = theme.colors.semantic.info;
  variables['--info-light'] = theme.colors.semantic.infoLight;

  // Background colors
  variables['--bg-app'] = theme.colors.background.app;
  variables['--bg-surface'] = theme.colors.background.surface;
  variables['--bg-elevated'] = theme.colors.background.elevated;
  variables['--bg-navbar'] = theme.colors.background.navbar;
  variables['--bg-sidebar'] = theme.colors.background.sidebar;
  variables['--bg-hover'] = theme.colors.background.hover;
  variables['--bg-active'] = theme.colors.background.active;
  variables['--bg-blueprint'] = theme.colors.background.blueprint;

  // Legacy background aliases
  variables['--bg-color'] = theme.colors.background.app;
  variables['--card-bg'] = theme.colors.background.surface;
  variables['--hover-bg'] = theme.colors.background.hover;
  variables['--bg-sidemenu'] = theme.colors.background.sidebar;
  variables['--bg-secondary'] = theme.colors.background.elevated;

  // Text colors
  variables['--text-primary'] = theme.colors.text.primary;
  variables['--text-secondary'] = theme.colors.text.secondary;
  variables['--text-tertiary'] = theme.colors.text.tertiary;
  variables['--text-disabled'] = theme.colors.text.disabled;
  variables['--text-inverse'] = theme.colors.text.inverse;
  variables['--text-accent'] = theme.colors.text.accent;
  variables['--text-on-accent'] = theme.colors.text.onAccent;
  variables['--text-muted'] = theme.colors.text.muted;

  // Border colors
  variables['--border-color'] = theme.colors.border.color;
  variables['--border-light'] = theme.colors.border.light;
  variables['--border-medium'] = theme.colors.border.medium;
  variables['--border-width'] = '1px';

  // Button colors
  variables['--btn-bg'] = theme.colors.button.bg;
  variables['--btn-bg-hover'] = theme.colors.button.bgHover;
  variables['--btn-bg-active'] = theme.colors.button.bgActive;
  variables['--btn-text'] = theme.colors.button.text;
  variables['--btn-border'] = theme.colors.button.border;
  variables['--btn-primary-bg'] = theme.colors.button.primary.bg;
  variables['--btn-primary-bg-hover'] = theme.colors.button.primary.bgHover;
  variables['--btn-primary-bg-active'] = theme.colors.button.primary.bgActive;
  variables['--btn-primary-text'] = theme.colors.button.primary.text;
  variables['--btn-disabled-bg'] = theme.colors.button.disabled.bg;
  variables['--btn-disabled-text'] = theme.colors.button.disabled.text;
  variables['--btn-disabled-border'] = theme.colors.button.disabled.border;

  // Input colors
  variables['--input-bg'] = theme.colors.input.bg;
  variables['--input-border'] = theme.colors.input.border;
  variables['--input-border-hover'] = theme.colors.input.borderHover;
  variables['--input-border-focus'] = theme.colors.input.borderFocus;
  variables['--input-text'] = theme.colors.input.text;
  variables['--input-placeholder'] = theme.colors.input.placeholder;

  // Toggle colors
  variables['--toggle-bg'] = theme.colors.toggle.bg;
  variables['--toggle-bg-active'] = theme.colors.toggle.bgActive;
  variables['--toggle-thumb'] = theme.colors.toggle.thumb;

  // Special colors
  variables['--executing-bg'] = theme.colors.executing;
  variables['--focus-ring'] = theme.colors.focus;
  variables['--focus-ring-offset'] = '2px';
  variables['--overlay-light'] = theme.colors.overlay.light;
  variables['--overlay-medium'] = theme.colors.overlay.medium;
  variables['--overlay-heavy'] = theme.colors.overlay.heavy;
  variables['--overlay-white'] = theme.colors.overlay.white;
  variables['--shadow-medium'] = theme.colors.shadow.medium;

  // Legacy accent aliases
  variables['--accent'] = theme.colors.accent[500];
  variables['--accent-hover'] = theme.colors.accent[100];

  // Legacy semantic aliases
  variables['--success-color'] = theme.colors.semantic.success;
  variables['--warning-color'] = theme.colors.semantic.warning;
  variables['--error-color'] = theme.colors.semantic.error;

  // Spacing
  variables['--space-xs'] = theme.spacing.xs;
  variables['--space-sm'] = theme.spacing.sm;
  variables['--space-md'] = theme.spacing.md;
  variables['--space-lg'] = theme.spacing.lg;
  variables['--space-xl'] = theme.spacing.xl;
  variables['--space-2xl'] = theme.spacing.xxl;

  // Legacy spacing
  variables['--spacing-small'] = theme.spacing.small;
  variables['--spacing-medium'] = theme.spacing.medium;
  variables['--spacing-large'] = theme.spacing.large;
  variables['--padding-small'] = theme.spacing.small;
  variables['--padding-medium'] = theme.spacing.medium;
  variables['--padding-large'] = theme.spacing.large;
  variables['--margin-small'] = theme.spacing.small;
  variables['--margin-medium'] = theme.spacing.medium;
  variables['--margin-large'] = theme.spacing.large;

  // Typography
  variables['--font-family'] = theme.typography.fontFamily;
  variables['--font-size-xs'] = theme.typography.fontSize.xs;
  variables['--font-size-sm'] = theme.typography.fontSize.sm;
  variables['--font-size-base'] = theme.typography.fontSize.base;
  variables['--font-size-lg'] = theme.typography.fontSize.lg;
  variables['--font-size-xl'] = theme.typography.fontSize.xl;
  variables['--font-size-2xl'] = theme.typography.fontSize.xxl;
  variables['--font-size-3xl'] = theme.typography.fontSize.xxxl;
  variables['--font-weight-normal'] = theme.typography.fontWeight.normal.toString();
  variables['--font-weight-medium'] = theme.typography.fontWeight.medium.toString();
  variables['--font-weight-semibold'] = theme.typography.fontWeight.semibold.toString();
  variables['--font-weight-bold'] = theme.typography.fontWeight.bold.toString();

  // Legacy typography
  variables['--text-xs'] = theme.typography.text.xs;
  variables['--text-small'] = theme.typography.text.small;
  variables['--text-medium'] = theme.typography.text.medium;

  // Border radius
  variables['--radius-sm'] = theme.borderRadius.sm;
  variables['--radius-md'] = theme.borderRadius.md;
  variables['--radius-lg'] = theme.borderRadius.lg;
  variables['--radius-full'] = theme.borderRadius.full;

  // Legacy border radius
  variables['--border-radius-small'] = theme.borderRadius.small;
  variables['--border-radius-medium'] = theme.borderRadius.medium;
  variables['--border-radius-large'] = theme.borderRadius.lg;

  // Shadows
  variables['--shadow-xs'] = theme.shadows.xs;
  variables['--shadow-sm'] = theme.shadows.sm;
  variables['--shadow-md'] = theme.shadows.md;
  variables['--shadow-lg'] = theme.shadows.lg;
  variables['--shadow-xl'] = theme.shadows.xl;

  // Z-index
  variables['--z-dropdown'] = theme.zIndex.dropdown.toString();
  variables['--z-sticky'] = theme.zIndex.sticky.toString();
  variables['--z-overlay'] = theme.zIndex.overlay.toString();
  variables['--z-modal'] = theme.zIndex.modal.toString();
  variables['--z-toast'] = theme.zIndex.toast.toString();

  // Legacy z-index
  variables['--z-base'] = theme.zIndex.base.toString();
  variables['--z-accent'] = theme.zIndex.accent.toString();
  variables['--z-content'] = theme.zIndex.content.toString();
  variables['--z-floating'] = theme.zIndex.floating.toString();

  // Transitions
  variables['--transition-fast'] = theme.transitions.fast;
  variables['--transition-base'] = theme.transitions.base;
  variables['--transition-slow'] = theme.transitions.slow;

  // Legacy transitions
  variables['--transition-fast'] = theme.transitions.fast;

  // Additional legacy variables
  variables['--navbar-height'] = '50px';
  variables['--blueprint-grid-color'] = theme.colors.gray[300];
  variables['--blueprint-grid-size'] = '20px';
  variables['--info-bg'] = 'rgba(30, 41, 59, 0.9)';
  variables['--info-text'] = theme.colors.text.inverse;

  // Apply font size modifications
  if (config.fontSize !== 'medium') {
    const fontSizeAdjustments = getFontSizeAdjustments(config.fontSize);
    Object.entries(fontSizeAdjustments).forEach(([key, value]: [string, string]) => {
      variables[key] = value;
    });
  }

  // Apply compact mode modifications
  if (config.compactMode) {
    const compactAdjustments = getCompactModeAdjustments();
    Object.entries(compactAdjustments).forEach(([key, value]: [string, string]) => {
      variables[key] = value;
    });
  }

  return variables;
}

/**
 * Get font size adjustments based on config
 */
function getFontSizeAdjustments(fontSize: FontSize): Record<string, string> {
  if (fontSize === 'small') {
    return {
      '--font-size-xs': '11px',
      '--font-size-sm': '12px',
      '--font-size-base': '14px',
      '--font-size-lg': '16px',
      '--font-size-xl': '18px',
      '--font-size-2xl': '20px',
      '--font-size-3xl': '24px',
      '--text-xs': '11px',
      '--text-small': '12px',
      '--text-medium': '14px',
    };
  }

  if (fontSize === 'large') {
    return {
      '--font-size-xs': '14px',
      '--font-size-sm': '16px',
      '--font-size-base': '18px',
      '--font-size-lg': '20px',
      '--font-size-xl': '24px',
      '--font-size-2xl': '28px',
      '--font-size-3xl': '36px',
      '--text-xs': '14px',
      '--text-small': '16px',
      '--text-medium': '18px',
    };
  }

  return {};
}

/**
 * Get compact mode adjustments
 */
function getCompactModeAdjustments(): Record<string, string> {
  return {
    '--space-xs': '2px',
    '--space-sm': '4px',
    '--space-md': '8px',
    '--space-lg': '12px',
    '--space-xl': '16px',
    '--space-2xl': '24px',
    '--spacing-small': '4px',
    '--spacing-medium': '8px',
    '--spacing-large': '12px',
    '--padding-small': '4px',
    '--padding-medium': '8px',
    '--padding-large': '16px',
    '--margin-small': '4px',
    '--margin-medium': '8px',
    '--margin-large': '16px',
  };
}

/**
 * Apply CSS variables to the document root
 */
export function applyCSSVariables(variables: Record<string, string>): void {
  const root = document.documentElement;
  Object.entries(variables).forEach(([property, value]: [string, string]) => {
    root.style.setProperty(property, value);
  });
}

/**
 * Apply theme attributes to document
 */
export function applyThemeAttributes(config: ThemeConfig): void {
  const root = document.documentElement;
  
  // Set theme attribute
  root.setAttribute('data-theme', config.mode);
  
  // Set font size attribute
  root.setAttribute('data-font-size', config.fontSize);
  
  // Set compact mode attribute
  root.setAttribute('data-compact-mode', config.compactMode.toString());
}