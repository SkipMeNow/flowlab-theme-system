# @flowlab/theme-system

A comprehensive, TypeScript-first theme system for React applications with full CSS variable support, dark/light mode switching, and extensive customization options.

## Features

- 🎨 **Complete Color System**: 10-step gray and accent color scales with semantic color mappings
- 🌙 **Dark/Light Mode**: Seamless theme switching with automatic CSS variable updates  
- 📱 **Responsive Typography**: Font size scaling (small/medium/large) with proper line heights
- 🎯 **Compact Mode**: Space-efficient layout option for dense interfaces
- 🔧 **TypeScript First**: Full type safety with comprehensive interfaces
- ⚡ **Performance Optimized**: CSS variables for efficient runtime theme changes
- 💾 **Persistence**: LocalStorage integration for theme preferences
- 🎛️ **Extensive Customization**: Over 100 CSS variables for complete control

## Installation

```bash
npm install @flowlab/theme-system
```

## Quick Start

### Basic Setup

```tsx
import React from 'react';
import { ThemeProvider } from '@flowlab/theme-system';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark', fontSize: 'medium' }}>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### Using the Theme Hook

```tsx
import { useTheme } from '@flowlab/theme-system';

function ThemeToggle() {
  const { config, setMode, setFontSize, setCompactMode } = useTheme();
  
  return (
    <div>
      <button onClick={() => setMode(config.mode === 'light' ? 'dark' : 'light')}>
        Toggle {config.mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      
      <select value={config.fontSize} onChange={(e) => setFontSize(e.target.value)}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      
      <label>
        <input 
          type="checkbox" 
          checked={config.compactMode}
          onChange={(e) => setCompactMode(e.target.checked)}
        />
        Compact Mode
      </label>
    </div>
  );
}
```

### Using CSS Variables

The theme system automatically applies CSS variables to the document root. Use them in your CSS:

```css
.my-component {
  background-color: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  font-size: var(--font-size-base);
}

.primary-button {
  background-color: var(--accent-500);
  color: var(--text-on-accent);
  border-radius: var(--radius-sm);
  padding: var(--space-sm) var(--space-md);
}

.primary-button:hover {
  background-color: var(--accent-600);
}
```

## API Reference

### ThemeProvider Props

```tsx
interface ThemeProviderProps {
  children: ReactNode;
  initialConfig?: Partial<ThemeConfig>;
  persistToLocalStorage?: boolean;
  localStorageKey?: string;
}
```

### useTheme Hook

```tsx
interface UseThemeReturn {
  theme: Theme;
  config: ThemeConfig;
  setMode: (mode: 'light' | 'dark') => void;
  setFontSize: (fontSize: 'small' | 'medium' | 'large') => void;
  setCompactMode: (compact: boolean) => void;
}
```

### Theme Configuration

```tsx
interface ThemeConfig {
  mode: 'light' | 'dark';
  fontSize: 'small' | 'medium' | 'large';
  compactMode: boolean;
}
```

## Available CSS Variables

### Colors

**Gray Scale (50-950)**
- `--gray-50` through `--gray-950`: Complete gray color scale

**Accent Colors (50-950)**  
- `--accent-50` through `--accent-950`: Brand/accent color scale

**Semantic Colors**
- `--success`, `--success-light`: Success states
- `--error`, `--error-light`: Error states  
- `--warning`, `--warning-light`: Warning states
- `--info`, `--info-light`: Info states

**Background Colors**
- `--bg-app`: Main application background
- `--bg-surface`: Card/surface backgrounds
- `--bg-elevated`: Elevated surface backgrounds
- `--bg-navbar`: Navigation bar background
- `--bg-sidebar`: Sidebar background
- `--bg-hover`: Hover state background
- `--bg-active`: Active state background

**Text Colors**
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--text-tertiary`: Tertiary text color
- `--text-disabled`: Disabled text color
- `--text-accent`: Accent text color
- `--text-on-accent`: Text on accent backgrounds

**Button Colors**
- `--btn-bg`, `--btn-bg-hover`, `--btn-bg-active`: Default button states
- `--btn-primary-bg`, `--btn-primary-bg-hover`: Primary button states
- `--btn-disabled-bg`: Disabled button background

### Spacing

- `--space-xs` (4px): Extra small spacing
- `--space-sm` (8px): Small spacing  
- `--space-md` (16px): Medium spacing
- `--space-lg` (24px): Large spacing
- `--space-xl` (32px): Extra large spacing
- `--space-2xl` (48px): 2X large spacing

### Typography

**Font Sizes**
- `--font-size-xs` through `--font-size-3xl`: Complete font size scale
- `--font-weight-normal` through `--font-weight-bold`: Font weight options

### Layout

**Border Radius**
- `--radius-sm` (4px): Small radius
- `--radius-md` (8px): Medium radius  
- `--radius-lg` (12px): Large radius
- `--radius-full` (9999px): Full/pill radius

**Shadows**
- `--shadow-xs` through `--shadow-xl`: Shadow scale for depth

**Z-Index**
- `--z-dropdown` (1000): Dropdown elements
- `--z-sticky` (1020): Sticky elements
- `--z-overlay` (1030): Overlay elements
- `--z-modal` (1040): Modal dialogs
- `--z-toast` (1050): Toast notifications

### Transitions

- `--transition-fast` (150ms): Fast transitions
- `--transition-base` (200ms): Base transition speed
- `--transition-slow` (300ms): Slow transitions

## Advanced Usage

### Manual CSS Variable Application

```tsx
import { themeToCSSVariables, applyCSSVariables } from '@flowlab/theme-system';

// Apply theme variables manually
const variables = themeToCSSVariables(theme, config);
applyCSSVariables(variables);
```

### Custom Theme Creation

```tsx
import { Theme, lightTheme } from '@flowlab/theme-system';

const customTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    accent: {
      ...lightTheme.colors.accent,
      500: '#your-brand-color',
    }
  }
};
```

## Browser Support

- Modern browsers with CSS Custom Properties support
- React 16.8+ (hooks required)
- TypeScript 4.0+ recommended

## Migration from CSS Variables

If you're migrating from a CSS variable-based theme system:

1. Install the package
2. Wrap your app in `ThemeProvider`
3. Replace manual CSS variable definitions with theme system
4. Use the provided CSS variables in your stylesheets
5. Add theme controls using the `useTheme` hook

## Contributing

See the main FlowLab repository for contribution guidelines.

## License

MIT