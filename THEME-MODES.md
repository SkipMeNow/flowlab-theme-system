# Theme System - Mode vs Theme Switching

## The Problem
When you toggle between light/dark modes, you want to keep the **same theme** (e.g., Ocean theme) but just change the **mode** property. Previously, the ThemeProvider was switching between completely different themes.

## The Solution
The updated ThemeProvider now supports several ways to handle themes:

### Option 1: Single Theme with Mode Toggle (Recommended)
Use a single theme that persists across mode changes:

```tsx
import { ThemeProvider } from '@flowlab/theme-system';
import { allThemes } from '@flowlab/theme-system/themes';

// Find the Ocean theme
const oceanTheme = allThemes.find(t => t.name === 'Ocean');

function App() {
  return (
    <ThemeProvider theme={oceanTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Option 2: Theme Collection with Persistence
Provide a collection of themes and let users switch between them:

```tsx
import { ThemeProvider } from '@flowlab/theme-system';
import { allThemes } from '@flowlab/theme-system/themes';

function App() {
  // Convert themes array to object
  const themesMap = allThemes.reduce((acc, theme) => {
    acc[theme.name] = theme;
    return acc;
  }, {});

  return (
    <ThemeProvider themes={themesMap}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Using the Theme Hook
```tsx
import { useTheme } from '@flowlab/theme-system';

function ThemeControls() {
  const { theme, config, setMode, setTheme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme.name}</p>
      <p>Current Mode: {config.mode}</p>
      
      {/* Mode controls - keeps same theme */}
      <button onClick={() => setMode('light')}>Light Mode</button>
      <button onClick={() => setMode('dark')}>Dark Mode</button>
      <button onClick={toggleTheme}>Toggle Mode</button>
      
      {/* Theme switching */}
      <button onClick={() => setTheme(oceanTheme)}>Ocean Theme</button>
      <button onClick={() => setTheme(forestTheme)}>Forest Theme</button>
    </div>
  );
}
```

## What Changed

1. **Added `theme` prop**: You can now pass a single theme that persists across mode changes
2. **Added `themes` prop**: You can provide a collection of available themes
3. **Added `setTheme` function**: Allows switching between different themes
4. **Enhanced persistence**: Theme selection is now saved to localStorage with the mode
5. **Backward compatibility**: Still supports `lightTheme`/`darkTheme` props

## Theme Selection Priority
1. Single `theme` prop (highest priority)
2. Theme from `themes` collection by saved `themeName`
3. Light/dark theme switching (legacy behavior)

This way, when you use a single theme, toggling the mode will keep the same theme but just change the mode property!