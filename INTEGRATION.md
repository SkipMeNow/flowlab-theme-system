# FlowLab Theme System Integration Guide

This guide shows how to integrate the new `@flowlab/theme-system` package back into the main FlowLab application.

## Installation

Since this is a local package, you can install it using a local path:

```bash
cd /path/to/dataforge
npm install ../flowlab-theme-system
```

Or build and publish to npm registry:

```bash
cd /path/to/flowlab-theme-system
npm run build
npm publish
```

Then install in FlowLab:

```bash
cd /path/to/dataforge  
npm install @flowlab/theme-system
```

## Integration Steps

### 1. Update App.tsx

Replace the existing Supabase provider wrapper with the theme provider:

```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@flowlab/theme-system';
import { SupabaseProvider } from './contexts/SupabaseProvider';
// ... other imports

function App() {
  return (
    <ThemeProvider 
      initialConfig={{ 
        mode: 'light', 
        fontSize: 'medium',
        compactMode: false 
      }}
      persistToLocalStorage={true}
      localStorageKey="flowlab-theme-config"
    >
      <SupabaseProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Your existing routes */}
            </Routes>
          </div>
        </Router>
      </SupabaseProvider>
    </ThemeProvider>
  );
}

export default App;
```

### 2. Remove Old Theme Files

You can now remove these files since they're replaced by the theme system:

- `src/styles/theme.css` (variables now come from theme system)
- `src/styles/variables.css` (integrated into theme system)

Keep these files:
- `src/styles/layout.css` (layout-specific styles)
- `src/styles/button.css` (component styles using theme variables)
- `src/styles/form.css` (form styles using theme variables)

### 3. Create Theme Controls Component

Add a theme controls component for users to switch themes:

```tsx
// src/components/ThemeControls/ThemeControls.tsx
import React from 'react';
import { useTheme } from '@flowlab/theme-system';
import styles from './ThemeControls.module.css';

export function ThemeControls() {
  const { config, setMode, setFontSize, setCompactMode } = useTheme();

  return (
    <div className={styles.themeControls}>
      <div className={styles.control}>
        <label>Theme:</label>
        <select 
          value={config.mode} 
          onChange={(e) => setMode(e.target.value as 'light' | 'dark')}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className={styles.control}>
        <label>Font Size:</label>
        <select 
          value={config.fontSize} 
          onChange={(e) => setFontSize(e.target.value as 'small' | 'medium' | 'large')}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className={styles.control}>
        <label>
          <input 
            type="checkbox" 
            checked={config.compactMode}
            onChange={(e) => setCompactMode(e.target.checked)}
          />
          Compact Mode
        </label>
      </div>
    </div>
  );
}
```

### 4. Update Existing CSS Files

Update your existing CSS files to remove CSS variable definitions and rely on the theme system:

**src/styles/button.css** (example):
```css
/* Remove this section - now provided by theme system:
:root {
  --btn-bg: #f8f9fa;
  --btn-text: #495057;
  etc...
}
*/

/* Keep these styles - they use theme variables */
.button {
  background-color: var(--btn-bg);
  color: var(--btn-text);
  border: 1px solid var(--btn-border);
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-base);
  transition: var(--transition-base);
}

.button:hover {
  background-color: var(--btn-bg-hover);
}

.button.primary {
  background-color: var(--btn-primary-bg);
  color: var(--btn-primary-text);
}
```

### 5. Add Theme Controls to Navigation

Add the theme controls to your navigation or settings area:

```tsx
// In your navigation component
import { ThemeControls } from '../ThemeControls/ThemeControls';

function Navigation() {
  return (
    <nav>
      {/* Your existing navigation */}
      <div className="settings-dropdown">
        <ThemeControls />
      </div>
    </nav>
  );
}
```

### 6. TypeScript Integration

If you need to access theme values in TypeScript:

```tsx
import { useTheme } from '@flowlab/theme-system';

function MyComponent() {
  const { theme, config } = useTheme();
  
  // Access theme colors
  const accentColor = theme.colors.accent[500];
  const backgroundColor = theme.colors.background.surface;
  
  // Check current mode
  if (config.mode === 'dark') {
    // Dark mode specific logic
  }
  
  return <div style={{ backgroundColor }}>Content</div>;
}
```

## Benefits of Migration

1. **Centralized Theme Management**: All theme logic in one package
2. **Type Safety**: Full TypeScript support for theme values
3. **Reusability**: Use across multiple FlowLab applications
4. **Maintainability**: Updates to theme system benefit all apps
5. **Performance**: CSS variables updated efficiently
6. **Persistence**: Theme preferences automatically saved
7. **Consistency**: Ensures consistent theming across all components

## Testing the Integration

1. Verify theme switching works correctly
2. Check that all components still look correct
3. Test localStorage persistence (preferences saved on reload)
4. Verify compact mode affects spacing appropriately
5. Test font size scaling affects all text elements

## Rollback Plan

If issues arise, you can temporarily revert by:

1. Removing the ThemeProvider from App.tsx
2. Restoring the old theme.css and variables.css files
3. Removing the @flowlab/theme-system dependency

The CSS variable names are designed to be compatible, so most styles should work unchanged.