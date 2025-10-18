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

## Usage Examples

### Basic Usage (Default Light/Dark)

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
  const { theme, themeName, config, toggleTheme } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.background.app,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg 
    }}>
      <h1>Theme: {themeName}</h1>
      <p>Mode: {config.mode}</p>
      <button onClick={toggleTheme}>
        Toggle Light/Dark
      </button>
    </div>
  );
}

export default App;
```

### Custom Theme Override

```tsx
import React from 'react';
import { ThemeProvider, useTheme } from '@flowlab/theme-system';
import { oceanTheme, forestTheme, cyberpunkTheme } from '@flowlab/theme-system/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}
      darkTheme={cyberpunkTheme}
      initialConfig={{ mode: 'light' }}
      onThemeChange={(info) => {
        console.log('Theme changed:', info.themeName, info.mode);
      }}
    >
      <MyComponent />
    </ThemeProvider>
  );
}

function MyComponent() {
  const { theme, themeName, config, toggleTheme } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.background.app,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg 
    }}>
      <h1>Current Theme: {themeName}</h1>
      <p>Mode: {config.mode}</p>
      <button onClick={toggleTheme}>
        Switch between Ocean and Cyberpunk
      </button>
    </div>
  );
}

export default App;
```

### Advanced Theme Management

```tsx
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@flowlab/theme-system';
import { 
  lightTheme, 
  darkTheme, 
  oceanTheme, 
  forestTheme, 
  sunsetTheme,
  lavenderTheme 
} from '@flowlab/theme-system/themes';

const themeOptions = {
  classic: { light: lightTheme, dark: darkTheme },
  nature: { light: forestTheme, dark: forestTheme },
  ocean: { light: oceanTheme, dark: oceanTheme },
  sunset: { light: sunsetTheme, dark: lavenderTheme },
};

function App() {
  const [selectedThemeSet, setSelectedThemeSet] = useState('classic');
  
  return (
    <ThemeProvider 
      lightTheme={themeOptions[selectedThemeSet].light}
      darkTheme={themeOptions[selectedThemeSet].dark}
      onThemeChange={(info) => {
        console.log(`Theme: ${info.themeName}, Mode: ${info.mode}`);
      }}
    >
      <ThemeSelector 
        currentSet={selectedThemeSet}
        onSetChange={setSelectedThemeSet}
      />
      <MyComponent />
    </ThemeProvider>
  );
}
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