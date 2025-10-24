# @flowlabkit/ui

[![npm version](https://badge.fury.io/js/@flowlabkit%2Fui.svg)](https://badge.fury.io/js/@flowlabkit%2Fui)
[![npm downloads](https://img.shields.io/npm/dm/@flowlabkit/ui.svg)](https://www.npmjs.com/package/@flowlabkit/ui)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🎨 A comprehensive, TypeScript-first theme system for React applications with **8 beautiful built-in themes**, full CSS variable support, and extensive customization options. Part of the FlowLabKit ecosystem for building modern React applications.

**[🚀 Live Demo & Documentation →](https://skipmenow.github.io/flowlabkit-ui/)**

## ⚡ Quick Start

```bash
# Interactive installer - like Vite!  
npm create flowlabkit-app@latest my-app

# Choose your setup:
# ✅ React or Vanilla
# ✅ TypeScript or JavaScript  
# ✅ Full components or themes-only
# ✅ Select specific themes

cd my-app && npm install && npm run dev
```

## Features

- 🎨 **8 Built-in Themes**: Light, Dark, Ocean, Forest, Sunset, Lavender, Cyberpunk, and Autumn themes
- 🌙 **Dark/Light Mode**: Seamless theme switching with automatic CSS variable updates  
- 📱 **Responsive Typography**: Font size scaling (small/medium/large) with proper line heights
- 🎯 **Compact Mode**: Space-efficient layout option for dense interfaces
- 🔧 **TypeScript First**: Full type safety with comprehensive interfaces
- ⚡ **Performance Optimized**: CSS variables for efficient runtime theme changes
- 💾 **Persistence**: LocalStorage integration for theme preferences
- 🎛️ **Extensive Customization**: Over 100 CSS variables for complete control
- 📐 **Resizable Panel System**: Comprehensive panel system with 10+ layout presets, full accessibility, and mobile optimization

## Available Themes

- **Light** - Clean, professional default theme
- **Dark** - Modern dark theme for reduced eye strain
- **Ocean** - Calming blues and cyans for data-focused apps
- **Forest** - Natural greens for wellness and environmental apps
- **Sunset** - Warm oranges and pinks for creative applications
- **Lavender** - Soft purples for elegant, dreamy interfaces
- **Cyberpunk** - Neon highlights on dark backgrounds for tech/gaming
- **Autumn** - Cozy browns and golds for seasonal warmth

[View Theme Gallery →](./THEMES.md)

## 📦 Installation

### 🚀 Interactive Installer (Recommended)

Create a new project with FlowLabKit UI pre-configured:

```bash
npm create flowlabkit-app@latest my-app
```

The installer will ask you to choose:
- **Framework**: React or Vanilla  
- **Language**: TypeScript or JavaScript
- **Setup**: Full components or themes-only
- **Themes**: Specific themes or all 8 themes

Then just:
```bash
cd my-app
npm install  
npm run dev
```

### 📚 Manual Installation

Add to existing project:

```bash
npm install @flowlabkit/ui
```

**That's it!** This installs everything: theme system, all 8 themes, and all UI components.

> 💡 **How it works**: You install once, but import only what you need. Modern bundlers (Webpack, Vite, etc.) automatically tree-shake unused code, so you only pay for what you use!

### Requirements

- **React**: 18.0.0 or higher (hooks required)
- **TypeScript**: 4.0+ (recommended for full type safety)
- **Browser Support**: Modern browsers with CSS Custom Properties support

## 🚀 Quick Start
```tsx
import React from 'react';
import { ThemeProvider, Button, Card, CardBody, PanelGroup, Panel } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark', fontSize: 'medium' }}>
      <PanelGroup direction="horizontal">
        <Panel defaultSize={30} minSize={20}>
          <Card>
            <CardBody>
              <h2>Sidebar</h2>
              <Button variant="primary">Navigation</Button>
            </CardBody>
          </Card>
        </Panel>
        <Panel defaultSize={70}>
          <Card>
            <CardBody>
              <h1>Welcome to FlowLabKit UI!</h1>
              <p>Complete with resizable panels!</p>
              <Button variant="primary">Get Started</Button>
            </CardBody>
          </Card>
        </Panel>
      </PanelGroup>
    </ThemeProvider>
  );
}
```

### Tree-Shakable Imports
After installing the package, you can import only what you need for optimal bundle sizes:

#### Option 1: Import Everything (~150KB)
```tsx
import { ThemeProvider, Button, Card, oceanTheme } from '@flowlabkit/ui';
```

#### Option 2: Import Core Only (~45KB)
```tsx
import { ThemeProvider, useTheme, lightTheme, darkTheme } from '@flowlabkit/ui/core';
```

#### Option 3: Mix and Match
```tsx
// Core theme system
import { ThemeProvider } from '@flowlabkit/ui/core';
// Specific themes
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';
// Specific components
import { Button, Card } from '@flowlabkit/ui/components';
```

### Bundle Size by Import Strategy

| Import Strategy | Final Bundle Size | What You Get |
|---------|------|-----------------|
| `from '@flowlabkit/ui'` | ~150KB | Everything: theme system, 8 themes, all components |
| `from '@flowlabkit/ui/core'` | ~45KB | Theme system + light/dark themes only |
| `from '@flowlabkit/ui/{core,themes}'` | ~65KB | Core + additional themes of your choice |
| `from '@flowlabkit/ui/{core,components}'` | ~95KB | Core + all UI components + panel system |
| **Custom Mix** | Varies | Pick exactly what you need |

#### Available Components

- **Form Components**: Button, Input
- **Display Components**: Text, Badge, Image
- **Navigation Components**: Link
- **Feedback Components**: Spinner, LoadingIndicator
- **Layout Components**: Card, CardHeader, CardBody, CardFooter
- **Panel System**: PanelGroup, Panel, PanelResizeHandle, PanelPresets (10+ layouts)

## Panel System

FlowLabKit UI includes a comprehensive resizable panel system similar to `react-resizable-panels`, enhanced with responsive behavior, touch support, and accessibility features.

### Quick Panel Example

```tsx
import { PanelGroup, Panel, PanelResizeHandle } from '@flowlabkit/ui';

function MyApp() {
  return (
    <PanelGroup direction="horizontal" className="h-screen">
      <Panel defaultSize={30} minSize={20} collapsible>
        <div>Sidebar Content</div>
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={70}>
        <div>Main Content</div>
      </Panel>
    </PanelGroup>
  );
}
```

### Pre-built Layout Presets

Choose from 10+ professionally designed layouts:

```tsx
import { SidebarLeftLayout, DashboardLayout, EmailLayout } from '@flowlabkit/ui';

// Sidebar layout with collapsible navigation
<SidebarLeftLayout 
  sidebar={<Navigation />}
  main={<Content />}
  sidebarProps={{ minSize: 250, defaultSize: 300 }}
/>

// Dashboard with header and multiple panels
<DashboardLayout
  header={<DashboardHeader />}
  sidebar={<Sidebar />}
  main={<MainDashboard />}
  rightPanel={<ActivityFeed />}
/>

// Email-style three-panel layout
<EmailLayout
  mailList={<MailList />}
  mailContent={<MailContent />}
  mailDetails={<MailDetails />}
/>
```

### Features

- **Resizable Panels**: Drag to resize, keyboard navigation, touch support
- **Responsive Behavior**: Automatic mobile optimizations and direction switching
- **Persistence**: Save panel sizes to localStorage automatically
- **Accessibility**: Full ARIA support, keyboard navigation, screen reader friendly
- **Mobile Optimized**: Touch-friendly handles, safe area support, auto-collapse
- **TypeScript**: Complete type safety with extensive interfaces

[Full Panel Documentation →](./docs/PANELS.md)

## Quick Start

### Basic Setup

#### Default Light/Dark Mode

```tsx
import React from 'react';
import { ThemeProvider } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark', fontSize: 'medium' }}>
      <YourAppContent />
    </ThemeProvider>
  );
}
```

#### Custom Theme Override

```tsx
import React from 'react';
import { ThemeProvider } from '@flowlabkit/ui';
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}
      darkTheme={cyberpunkTheme}
      onThemeChange={(info) => {
        console.log(`Switched to ${info.themeName} in ${info.mode} mode`);
      }}
    >
      <YourAppContent />
    </ThemeProvider>
  );
}
```

### Theme Switching

```tsx
import { themes, allThemes } from '@flowlabkit/ui/themes';

function ThemeSelector({ onThemeChange }) {
  return (
    <div>
      {allThemes.map(themeName => (
        <button
          key={themeName}
          onClick={() => onThemeChange(themes[themeName])}
        >
          {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
        </button>
      ))}
    </div>
  );
}
```

### Using the Theme Hook

```tsx
import { useTheme } from '@flowlabkit/ui';

function ThemedComponent() {
  const { theme, themeName, config, toggleTheme, setMode } = useTheme();
  
  return (
    <div style={{
      backgroundColor: theme.colors.background.app,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg,
    }}>
      <h1>Theme: {themeName}</h1>
      <p>Mode: {config.mode}</p>
      <button onClick={toggleTheme}>
        Toggle Light/Dark
      </button>
      <button onClick={() => setMode('light')}>
        Light Mode
      </button>
      <button onClick={() => setMode('dark')}>
        Dark Mode
      </button>
    </div>
  );
}
```

### Theme Selection Component

```tsx
import { useTheme } from '@flowlabkit/ui';
import { themes } from '@flowlabkit/ui/themes';

function ThemeSelector() {
  const { themeName, config, toggleTheme } = useTheme();
  
  return (
    <div>
      <h3>Current: {themeName} ({config.mode} mode)</h3>
      <button onClick={toggleTheme}>
        Switch to {config.mode === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
}
```

## 📦 Import Options (Tree-Shaking)

After running `npm install @flowlabkit/ui`, choose your import strategy:

### Full Import (Easiest)
```tsx
import { ThemeProvider, Button, Card, oceanTheme } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark' }}>
      <Card>
        <Button>Hello World</Button>
      </Card>
    </ThemeProvider>
  );
}
```

### Minimal Import (Smallest Bundle)
```tsx
import { ThemeProvider, lightTheme, darkTheme } from '@flowlabkit/ui/core';

function MinimalApp() {
  return (
    <ThemeProvider lightTheme={lightTheme} darkTheme={darkTheme}>
      <div style={{ 
        backgroundColor: 'var(--bg-app)', 
        color: 'var(--text-primary)' 
      }}>
        <h1>Just themes, no components</h1>
      </div>
    </ThemeProvider>
  );
}
```

### Custom Mix
```tsx
// Core + specific themes + select components
import { ThemeProvider } from '@flowlabkit/ui/core';
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';
import { Button, Card } from '@flowlabkit/ui/components';

function CustomApp() {
  return (
    <ThemeProvider lightTheme={oceanTheme} darkTheme={cyberpunkTheme}>
      <Card>
        <Button>Perfect bundle optimization!</Button>
      </Card>
    </ThemeProvider>
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
import { themeToCSSVariables, applyCSSVariables } from '@flowlabkit/ui';

// Apply theme variables manually
const variables = themeToCSSVariables(theme, config);
applyCSSVariables(variables);
```

### Custom Theme Creation

```tsx
import { Theme, lightTheme } from '@flowlabkit/ui';

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

## 🎨 Live Demo & Documentation

**[View Interactive Showcase →](https://skipmenow.github.io/flowlabkit-ui/)**

Experience all themes, components, and features with live examples and complete documentation.

## Development

```bash
# Run the interactive showcase locally
npm run showcase

# Build showcase for production
npm run showcase:build

# Build the package
npm run build
```

## Migration from CSS Variables

If you're migrating from a CSS variable-based theme system:

1. Install the package
2. Wrap your app in `ThemeProvider`
3. Replace manual CSS variable definitions with theme system
4. Use the provided CSS variables in your stylesheets
5. Add theme controls using the `useTheme` hook

## Contributing

See the main FlowLabKit repository for contribution guidelines.

## Repository

**[Source Code →](https://github.com/SkipMeNow/flowlabkit-ui)**

## FlowLabKit Ecosystem

This package is part of FlowLabKit - a comprehensive toolkit for building modern React applications:

- `@flowlabkit/ui` - Theme system with 8 built-in themes ✅
- `@flowlabkit/components` - Complete UI component library (coming soon)
- `@flowlabkit/icons` - Icon library (coming soon)
- `@flowlabkit/animations` - Animation utilities (coming soon)
- `@flowlabkit/forms` - Form handling toolkit (coming soon)

## License

MIT