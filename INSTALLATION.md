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

```tsx
import React from 'react';
import { ThemeProvider, useTheme } from '@flowlab/theme-system';
import { lightTheme, darkTheme } from '@flowlab/theme-system/themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <MyComponent />
    </ThemeProvider>
  );
}

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.background.primary,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg 
    }}>
      <h1>Hello from FlowLab Theme System!</h1>
      <button onClick={toggleTheme}>
        Switch to {theme.name === 'light' ? 'dark' : 'light'} theme
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