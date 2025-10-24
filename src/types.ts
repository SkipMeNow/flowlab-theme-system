// Theme System Types
export interface ThemeColors {
  // Base neutrals
  gray: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  // Accent colors
  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };

  // Semantic colors
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

  // Background colors
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

  // Text colors
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

  // Border colors
  border: {
    color: string;
    light: string;
    medium: string;
  };

  // Button colors
  button: {
    bg: string;
    bgHover: string;
    bgActive: string;
    text: string;
    border: string;
    primary: {
      bg: string;
      bgHover: string;
      bgActive: string;
      text: string;
    };
    disabled: {
      bg: string;
      text: string;
      border: string;
    };
  };

  // Input colors
  input: {
    bg: string;
    border: string;
    borderHover: string;
    borderFocus: string;
    text: string;
    placeholder: string;
  };

  // Toggle colors
  toggle: {
    bg: string;
    bgActive: string;
    thumb: string;
  };

  // Special colors
  executing: string;
  focus: string;
  overlay: {
    light: string;
    medium: string;
    heavy: string;
    white: string;
  };
  shadow: {
    medium: string;
  };
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  
  // Legacy spacing
  small: string;
  medium: string;
  large: string;
}

export interface ThemeTypography {
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
  
  // Legacy text sizes
  text: {
    xs: string;
    small: string;
    medium: string;
  };
}

export interface ThemeBorderRadius {
  sm: string;
  md: string;
  lg: string;
  full: string;
  
  // Legacy border radius
  small: string;
  medium: string;
}

export interface ThemeShadows {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ThemeZIndex {
  dropdown: number;
  sticky: number;
  overlay: number;
  modal: number;
  toast: number;
  
  // Legacy z-index
  base: number;
  accent: number;
  content: number;
  floating: number;
}

export interface ThemeTransitions {
  fast: string;
  base: string;
  slow: string;
}

export interface ThemeBreakpoints {
  xs: string;    // Mobile portrait (320px+)
  sm: string;    // Mobile landscape (480px+)
  md: string;    // Tablet (768px+)
  lg: string;    // Desktop (1024px+)
  xl: string;    // Large desktop (1200px+)
  xxl: string;   // Extra large (1400px+)
}

export interface ThemeMobile {
  touchTargetSize: string;      // Minimum touch target size (44px)
  scrollPadding: string;        // Safe area for scroll containers
  tapHighlightColor: string;    // Touch highlight color
  userSelect: string;           // Text selection behavior
  overscrollBehavior: string;   // Scroll boundary behavior
  safeAreaInsets: {
    top: string;
    right: string;
    bottom: string;
    left: string;
  };
}

export interface Theme {
  name: string;
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  zIndex: ThemeZIndex;
  transitions: ThemeTransitions;
  breakpoints: ThemeBreakpoints;
  mobile: ThemeMobile;
}

export type ThemeMode = 'light' | 'dark';
export type FontSize = 'small' | 'medium' | 'large';
export type CompactMode = boolean;

export interface ThemeConfig {
  mode: ThemeMode;
  fontSize: FontSize;
  compactMode: CompactMode;
  themeName?: string; // Name of the selected theme
  customTheme?: Partial<Theme>;
}

// Context types
export interface ThemeContextValue {
  theme: Theme;
  config: ThemeConfig;
  setMode: (mode: ThemeMode) => void;
  setFontSize: (size: FontSize) => void;
  setCompactMode: (compact: CompactMode) => void;
  toggleMode: () => void;
  applyTheme: () => void;
}