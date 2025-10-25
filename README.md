# @flowlabkit/ui

[![npm version](https://badge.fury.io/js/@flowlabkit%2Fui.svg)](https://badge.fury.io/js/@flowlabkit%2Fui)
[![npm downloads](https://img.shields.io/npm/dm/@flowlabkit/ui.svg)](https://www.npmjs.com/package/@flowlabkit/ui)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive, TypeScript-first theme system for React applications with **8 beautiful built-in themes**, **advanced responsive system**, full CSS variable support, and extensive customization options. Part of the FlowLabKit ecosystem for building modern React applications.

**[Live Demo & Documentation →](https://skipmenow.github.io/flowlabkit-ui/)**

## Quick Start

```bash
# Interactive installer - like Vite!  
npm create flowlabkit-app@latest my-app

# Choose your setup:
# React or Vanilla
# TypeScript or JavaScript  
# Full components or themes-only
# Select specific themes

cd my-app && npm install && npm run dev
```

## Features

- **8 Built-in Themes**: Light, Dark, Ocean, Forest, Sunset, Lavender, Cyberpunk, and Autumn themes
- **Advanced Responsive System**: CSS-like responsive behavior with unified layout components, real-time breakpoint detection, and mobile-first design
- **Dark/Light Mode**: Seamless theme switching with automatic CSS variable updates  
- **Responsive Typography**: Font size scaling (small/medium/large) with proper line heights
- **Compact Mode**: Space-efficient layout option for dense interfaces
- **TypeScript First**: Full type safety with comprehensive interfaces
- **Performance Optimized**: CSS variables for efficient runtime theme changes
- **Persistence**: LocalStorage integration for theme preferences
- **Extensive Customization**: Over 100 CSS variables for complete control
- **Resizable Panel System**: Comprehensive panel system with 10+ layout presets, full accessibility, and mobile optimization

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

## Interactive Installer

**The fastest way to get started!** Our interactive installer (`create-flowlabkit-app`) provides a Vite-like experience:

```bash
npm create flowlabkit-app@latest my-project
```

### Available Templates

| Template | Framework | Language | Components | Bundle Size |
|----------|-----------|----------|------------|-------------|
| `react-ts-full` | React | TypeScript | Full Library | ~150KB |
| `react-ts-themes` | React | TypeScript | Themes Only | ~65KB |
| `react-js-full` | React | JavaScript | Full Library | ~150KB |
| `react-js-themes` | React | JavaScript | Themes Only | ~65KB |
| `vanilla-ts` | Vanilla | TypeScript | CSS Variables | ~45KB |
| `vanilla-js` | Vanilla | JavaScript | CSS Variables | ~45KB |

### Theme Selection Features

- **Smart Defaults**: Choose your preferred light and dark themes
- **Multi-Select**: Pick additional themes for variety
- **Configuration Stored**: Theme preferences saved in package.json
- **Live Preview**: See your selections before scaffolding

## Installation

### Interactive Installer (Recommended)

Create a new project with FlowLabKit UI pre-configured using our **Vite-style interactive installer**:

```bash
npm create flowlabkit-app@latest my-app
```

**Enhanced Interactive Flow:**

**1. Choose Framework**
- React (with full component library)
- Vanilla (pure CSS variables + themes)

**2. Select Language**  
- TypeScript (recommended)
- JavaScript

**3. Choose Setup Type**
- **Full Components**: Complete UI library + themes
- **Themes Only**: Just the theme system (lighter bundle)

**4. Default Light Theme**
- Light, Ocean, Forest, Lavender, Autumn, or Sunset

**5. Default Dark Theme**  
- Dark, Cyberpunk, Forest Dark, or Ocean Dark

**6. Additional Themes** (optional)
- Multi-select any remaining themes you want

**What you get:**
- **6 Templates**: React TS/JS (full/themes), Vanilla TS/JS
- **Pre-configured Vite** with optimal settings
- **Working Examples** with theme switching
- **Your Selected Themes** ready to use
- **TypeScript Support** (if chosen)

Then just:
```bash
cd my-app
npm install  
npm run dev
```

**Perfect for:**
- New projects starting from scratch
- Learning FlowLabKit UI features  
- Prototyping with specific themes
- Testing different framework combinations

### Manual Installation

Add to existing project:

```bash
npm install @flowlabkit/ui
```

**That's it!** This installs everything: theme system, all 8 themes, and all UI components.

> **How it works**: You install once, but import only what you need. Modern bundlers (Webpack, Vite, etc.) automatically tree-shake unused code, so you only pay for what you use!

### Requirements

- **React**: 18.0.0 or higher (hooks required)
- **TypeScript**: 4.0+ (recommended for full type safety)
- **Browser Support**: Modern browsers with CSS Custom Properties support

## Quick Start
```tsx
import React from 'react';
import { 
  ThemeProvider, 
  ResponsiveProvider, 
  ResponsiveWrapper, 
  Button, 
  Card, 
  CardBody, 
  PanelGroup, 
  Panel,
  useIsMobile 
} from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark', fontSize: 'medium' }}>
      <ResponsiveProvider>
        <div style={{ minHeight: "100vh", position: 'relative' }}>
          {/* Navigation with responsive behavior */}
          <ResponsiveWrapper behavior="Navigation">
            <Navigation onPageChange={setCurrentPage} />
          </ResponsiveWrapper>

          {/* Header with responsive behavior */}
          <ResponsiveWrapper behavior="Header">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1>FlowLabKit UI</h1>
              <Button variant="primary">Toggle Theme</Button>
            </div>
          </ResponsiveWrapper>

          {/* Content with responsive behavior */}
          <ResponsiveWrapper behavior="Content">
            <PanelGroup direction="horizontal">
              <Panel defaultSize={30} minSize={20}>
                <Card>
                  <CardBody>
                    <h2>Responsive Sidebar</h2>
                    <p>Adapts to mobile, tablet, and desktop automatically!</p>
                  </CardBody>
                </Card>
              </Panel>
              <Panel defaultSize={70}>
                <Card>
                  <CardBody>
                    <h1>Welcome to FlowLabKit UI!</h1>
                    <p>Complete with responsive design and resizable panels!</p>
                    <Button variant="primary">Get Started</Button>
                  </CardBody>
                </Card>
              </Panel>
            </PanelGroup>
          </ResponsiveWrapper>
        </div>
      </ResponsiveProvider>
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
- **Responsive System**: ResponsiveProvider, ResponsiveWrapper, useBreakpoint, useIsMobile, useOrientation, useResponsiveValue

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

## Responsive System

FlowLabKit UI includes a comprehensive responsive system that works like CSS media queries but with React components.

### Three Approaches to Responsive Design

#### 1. ResponsiveWrapper (CSS-Like Override System)
```tsx
import { ResponsiveProvider, ResponsiveWrapper } from '@flowlabkit/ui';

function ResponsiveApp() {
  return (
    <ResponsiveProvider>
      {/* Navigation: Desktop sidebar, tablet drawer, mobile hamburger */}
      <ResponsiveWrapper behavior="Navigation">
        <Navigation />
      </ResponsiveWrapper>

      {/* Content: Responsive margins, spacing, and mobile optimizations */}
      <ResponsiveWrapper behavior="Content">
        <div style={{ maxWidth: '1200px', padding: '2rem' }}>
          {/* ResponsiveWrapper overrides these styles based on screen size */}
        </div>
      </ResponsiveWrapper>

      {/* Header: Responsive positioning and spacing */}
      <ResponsiveWrapper behavior="Header">
        <Header />
      </ResponsiveWrapper>
    </ResponsiveProvider>
  );
}
```

#### 2. Responsive Hooks (Manual Control)
```tsx
import { useBreakpoint, useIsMobile, useOrientation } from '@flowlabkit/ui';

function CustomResponsiveComponent() {
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const orientation = useOrientation();
  
  return (
    <div style={{
      padding: isMobile ? '1rem' : '2rem',
      maxWidth: breakpoint === 'xs' ? '100%' : '1200px',
      flexDirection: orientation === 'portrait' ? 'column' : 'row'
    }}>
      <h1>Breakpoint: {breakpoint}</h1>
      <p>Mobile: {isMobile ? 'Yes' : 'No'}</p>
      <p>Orientation: {orientation}</p>
    </div>
  );
}
```

#### 3. Hardcoded CSS (Static)
```tsx
// Traditional approach - no responsiveness
<div style={{ padding: '2rem', maxWidth: '1200px' }}>
  Static content
</div>
```

### Responsive Features

- **Real-Time Updates**: All hooks update immediately on window resize
- **Mobile-First Design**: Optimized for touch interactions and small screens
- **Unified Layout Components**: NavigationLayout, ContentLayout, HeaderLayout handle all screen sizes internally
- **CSS-Like Override System**: ResponsiveWrapper always takes precedence over wrapped component styles
- **Accessibility**: Full ARIA support, keyboard navigation, screen reader friendly
- **TypeScript Support**: Complete type safety with comprehensive interfaces

### Breakpoints
- **xs**: 0-479px (Mobile portrait)
- **sm**: 480-639px (Mobile landscape)  
- **md**: 640-767px (Small tablet)
- **lg**: 768-1023px (Tablet/small desktop)
- **xl**: 1024-1279px (Desktop)
- **xxl**: 1280px+ (Large desktop)

[Full Responsive Documentation →](./RESPONSIVE_SYSTEM.md)

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

## Import Options (Tree-Shaking)

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

## Live Demo & Documentation

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

- `@flowlabkit/ui` - Theme system with 8 built-in themes
- `@flowlabkit/components` - Complete UI component library (coming soon)
- `@flowlabkit/icons` - Icon library (coming soon)
- `@flowlabkit/animations` - Animation utilities (coming soon)
- `@flowlabkit/forms` - Form handling toolkit (coming soon)

## License

MIT