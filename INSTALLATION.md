# Installation Guide

## Installing the FlowLab Theme System

### Option 1: Install from Local Path (Development)

When developing locally, you can install the package directly from the file system:

```bash
npm install file:../flowlab-theme-system
```

### Option 2: Install from Git Repository

```bash
npm install git+https://github.com/SkipMeNow/flowlab-theme-system.git
```

### Option 3: Install from npm (once published)

```bash
npm install @flowlab/theme-system
```

## Important: Peer Dependencies

This package requires React as a peer dependency. Make sure your project has React installed:

```bash
npm install react react-dom
```

## Usage Example

### Option 1: Simple Theme Provider (Recommended for Custom Themes)

```tsx
import React from 'react';
import { SimpleThemeProvider, useSimpleTheme } from '@flowlab/theme-system';
import { lightTheme, darkTheme, oceanTheme } from '@flowlab/theme-system/themes';

function App() {
  return (
    <SimpleThemeProvider theme={oceanTheme}>
      <MyComponent />
    </SimpleThemeProvider>
  );
}

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useSimpleTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.background.app,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg 
    }}>
      <h1>Hello from FlowLab Theme System!</h1>
      <p>Current theme: {theme.name}</p>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button onClick={() => setTheme(oceanTheme)}>
        Use Ocean Theme
      </button>
    </div>
  );
}

export default App;
```

### Option 2: Original Theme Provider (For Light/Dark Mode)

```tsx
import React from 'react';
import { ThemeProvider, useTheme } from '@flowlab/theme-system';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark' }}>
      <MyComponent />
    </ThemeProvider>
  );
}

function MyComponent() {
  const { theme, setMode, config } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.background.app,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg 
    }}>
      <h1>Hello from FlowLab Theme System!</h1>
      <button onClick={() => setMode(config.mode === 'light' ? 'dark' : 'light')}>
        Switch to {config.mode === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
}

export default App;
```

## Troubleshooting

### React Duplicate Error

If you encounter errors like "Cannot read properties of undefined (reading 'ReactCurrentDispatcher')", this usually means there are duplicate React instances. 

**Solution 1: Check your package.json**
Make sure you don't have React listed in both `dependencies` and `peerDependencies`.

**Solution 2: Use npm link for local development**
Instead of `npm install ../flowlab-theme-system`, use:

```bash
# In the theme system directory
npm link

# In your project directory
npm link @flowlab/theme-system
```

**Solution 3: Clear node_modules and reinstall**
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Issues

Make sure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "moduleResolution": "node"
  }
}
```