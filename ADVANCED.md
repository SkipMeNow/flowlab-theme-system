# Advanced Usage Examples

## Flexible Theme Provider API

The `ThemeProvider` now supports both traditional light/dark mode switching and custom theme overrides, making it perfect for any application architecture.

## API Reference

### ThemeProvider Props

```tsx
interface ThemeProviderProps {
  children: ReactNode;
  lightTheme?: Theme;           // Initial light theme (can be changed dynamically)
  darkTheme?: Theme;            // Initial dark theme (can be changed dynamically)
  initialConfig?: Partial<ThemeConfig>;
  persistToLocalStorage?: boolean;
  localStorageKey?: string;
  onThemeChange?: (info: ThemeChangeInfo) => void;
}

interface ThemeChangeInfo {
  theme: Theme;        // Current theme object
  mode: 'light' | 'dark';  // Current mode
  themeName: string;   // Theme name (e.g., 'ocean', 'cyberpunk')
  config: ThemeConfig; // Full configuration object
}
```

### useTheme Hook

```tsx
interface ThemeContextValue {
  theme: Theme;                    // Current active theme
  config: ThemeConfig;             // Current configuration
  themeName: string;               // Name of current theme
  setMode: (mode: ThemeMode) => void;
  setFontSize: (fontSize: FontSize) => void;
  setCompactMode: (compact: boolean) => void;
  setLightTheme: (theme: Theme) => void;  // 🆕 Change light theme dynamically
  setDarkTheme: (theme: Theme) => void;   // 🆕 Change dark theme dynamically
  toggleTheme: () => void;         // Toggle between light/dark
}
```

## Usage Patterns

### 1. Default Light/Dark Themes

```tsx
import { ThemeProvider, useTheme } from '@flowlab/theme-system';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark' }}>
      <Dashboard />
    </ThemeProvider>
  );
}

function Dashboard() {
  const { themeName, config, toggleTheme } = useTheme();
  
  return (
    <div>
      <h1>Using: {themeName} theme in {config.mode} mode</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### 2. Custom Theme Pairs

```tsx
import { ThemeProvider } from '@flowlab/theme-system';
import { oceanTheme, cyberpunkTheme } from '@flowlab/theme-system/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}     // Light mode = Ocean theme
      darkTheme={cyberpunkTheme}  // Dark mode = Cyberpunk theme
      onThemeChange={(info) => {
        console.log(`Switched to ${info.themeName} (${info.mode} mode)`);
        // Analytics, state management, etc.
      }}
    >
      <TechApp />
    </ThemeProvider>
  );
}
```

### 3. Single Theme for Both Modes

```tsx
import { forestTheme } from '@flowlab/theme-system/themes';

function NatureApp() {
  return (
    <ThemeProvider 
      lightTheme={forestTheme}
      darkTheme={forestTheme}  // Same theme for both modes
      onThemeChange={(info) => {
        // Theme stays the same, but mode toggles
        document.title = \`Nature App - \${info.mode} mode\`;
      }}
    >
      <WildlifeTracker />
    </ThemeProvider>
  );
}
```

### 4. Dynamic Theme Switching 🆕

**NEW:** You can now change light and dark themes dynamically from anywhere in your app!

```tsx
import { useTheme } from '@flowlab/theme-system';
import { oceanTheme, cyberpunkTheme, forestTheme } from '@flowlab/theme-system/themes';

function ThemeSettings() {
  const { 
    config, 
    themeName, 
    setLightTheme, 
    setDarkTheme, 
    setMode 
  } = useTheme();

  const handleLightThemeChange = (theme: Theme) => {
    setLightTheme(theme);  // Changes light theme immediately
  };

  const handleDarkThemeChange = (theme: Theme) => {
    setDarkTheme(theme);   // Changes dark theme immediately
  };

  return (
    <div>
      <h3>Current: {themeName} ({config.mode} mode)</h3>
      
      <div>
        <h4>Light Mode Theme:</h4>
        <button onClick={() => handleLightThemeChange(oceanTheme)}>
          Ocean
        </button>
        <button onClick={() => handleLightThemeChange(forestTheme)}>
          Forest
        </button>
      </div>
      
      <div>
        <h4>Dark Mode Theme:</h4>
        <button onClick={() => handleDarkThemeChange(cyberpunkTheme)}>
          Cyberpunk
        </button>
        <button onClick={() => handleDarkThemeChange(forestTheme)}>
          Forest
        </button>
      </div>
      
      <button onClick={() => setMode(config.mode === 'light' ? 'dark' : 'light')}>
        Switch to {config.mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
```

### 5. Advanced Dynamic Theme Patterns

```tsx
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '@flowlab/theme-system';
import { 
  lightTheme, 
  darkTheme, 
  oceanTheme, 
  forestTheme, 
  sunsetTheme,
  cyberpunkTheme 
} from '@flowlab/theme-system/themes';

const themeSets = {
  default: { light: lightTheme, dark: darkTheme },
  ocean: { light: oceanTheme, dark: oceanTheme },
  nature: { light: forestTheme, dark: forestTheme },
  creative: { light: sunsetTheme, dark: cyberpunkTheme },
};

function App() {
  const [currentSet, setCurrentSet] = useState('default');
  
  return (
    <ThemeProvider 
      lightTheme={themeSets[currentSet].light}
      darkTheme={themeSets[currentSet].dark}
      onThemeChange={(info) => {
        // Track theme usage
        analytics.track('theme_changed', {
          theme: info.themeName,
          mode: info.mode,
          fontSize: info.config.fontSize,
          compactMode: info.config.compactMode,
        });
      }}
    >
      <ThemeSetSelector 
        currentSet={currentSet}
        onSetChange={setCurrentSet}
        sets={Object.keys(themeSets)}
      />
      <MainApp />
    </ThemeProvider>
  );
}

function ThemeSetSelector({ currentSet, onSetChange, sets }) {
  const { themeName, config, toggleTheme } = useTheme();
  
  return (
    <div>
      <h3>Theme Set: {currentSet}</h3>
      <p>Active: {themeName} ({config.mode})</p>
      
      <select value={currentSet} onChange={(e) => onSetChange(e.target.value)}>
        {sets.map(set => (
          <option key={set} value={set}>{set}</option>
        ))}
      </select>
      
      <button onClick={toggleTheme}>
        Toggle Light/Dark
      </button>
    </div>
  );
}
```

### 6. Multi-App Theme Coordination

```tsx
// Shared theme state across multiple apps
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
  currentThemeSet: string;
  mode: 'light' | 'dark';
  setThemeSet: (set: string) => void;
  setMode: (mode: 'light' | 'dark') => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      currentThemeSet: 'default',
      mode: 'light',
      setThemeSet: (themeSet) => set({ currentThemeSet: themeSet }),
      setMode: (mode) => set({ mode }),
    }),
    { name: 'global-theme-store' }
  )
);

function MicroFrontendApp() {
  const { currentThemeSet, mode, setMode } = useThemeStore();
  const themes = getThemeSetById(currentThemeSet);
  
  return (
    <ThemeProvider 
      lightTheme={themes.light}
      darkTheme={themes.dark}
      initialConfig={{ mode }}
      onThemeChange={(info) => {
        // Sync theme changes across all micro-frontends
        setMode(info.mode);
        window.postMessage({
          type: 'THEME_CHANGED',
          payload: info
        }, '*');
      }}
    >
      <AppContent />
    </ThemeProvider>
  );
}
```

## Real-World Use Cases

### 🎨 User Preferences
```tsx
function UserSettings() {
  const { setLightTheme, setDarkTheme } = useTheme();
  
  const saveThemePreferences = async (lightTheme: string, darkTheme: string) => {
    // Update themes immediately
    setLightTheme(themes[lightTheme]);
    setDarkTheme(themes[darkTheme]);
    
    // Save to user profile
    await updateUserPreferences({ lightTheme, darkTheme });
  };
}
```

### 🏢 Brand Theme Updates
```tsx
function AdminPanel() {
  const { setLightTheme, setDarkTheme } = useTheme();
  
  const applyBrandUpdate = () => {
    // Update all users' themes in real-time
    setLightTheme(newBrandLightTheme);
    setDarkTheme(newBrandDarkTheme);
  };
}
```

### 🎃 Seasonal Themes
```tsx
function useSeasonalThemes() {
  const { setLightTheme, setDarkTheme } = useTheme();
  
  useEffect(() => {
    const season = getCurrentSeason();
    switch (season) {
      case 'spring':
        setLightTheme(forestTheme);
        setDarkTheme(forestTheme);
        break;
      case 'halloween':
        setLightTheme(autumnTheme);
        setDarkTheme(cyberpunkTheme);
        break;
      // ... more seasons
    }
  }, []);
}
```

### 🎮 Game Themes
```tsx
function GameThemeManager() {
  const { setLightTheme, setDarkTheme } = useTheme();
  
  const applyLevelTheme = (level: number) => {
    const themeSet = getLevelThemes(level);
    setLightTheme(themeSet.day);
    setDarkTheme(themeSet.night);
  };
}
```

## Benefits of This Approach

### 🎯 **Unified API**
- Single `ThemeProvider` component for all use cases
- Consistent `useTheme` hook interface
- No need to choose between different providers

### 🔄 **Maximum Flexibility**
- Override light theme, dark theme, or both
- Mix and match any themes from the collection
- Easy dynamic theme switching at runtime

### 📊 **Rich Theme Information**
- `onThemeChange` callback provides comprehensive info
- Easy integration with analytics and state management
- Theme name, mode, and config all accessible

### 🚀 **Future-Proof**
- Easy to add new themes to any mode
- Extensible for seasonal themes, user preferences, etc.
- Compatible with any state management solution

### ⚡ **Performance Optimized**
- Only re-renders when theme actually changes
- CSS variables applied efficiently
- LocalStorage persistence built-in