import React, { useState } from 'react';
import { 
  useTheme, 
  Button, 
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel
} from '../src';
import { 
  lightTheme, 
  darkTheme, 
  oceanTheme, 
  forestTheme, 
  sunsetTheme, 
  cyberpunkTheme,
  lavenderTheme,
  autumnTheme 
} from '../src/themes';

const availableThemes = {
  light: lightTheme,
  dark: darkTheme,
  ocean: oceanTheme,
  forest: forestTheme,
  sunset: sunsetTheme,
  cyberpunk: cyberpunkTheme,
  lavender: lavenderTheme,
  autumn: autumnTheme,
};

/**
 * Navbar Component with Mode Toggle and Theme Selectors
 * This is exactly what you described - dropdowns to change themes + mode toggle
 */
export function Navbar() {
  const { 
    config, 
    setMode, 
    setLightTheme, 
    setDarkTheme 
  } = useTheme();

  // Track current selections (you could also get this from localStorage)
  const [lightThemeKey, setLightThemeKey] = useState('light');
  const [darkThemeKey, setDarkThemeKey] = useState('dark');

  const handleLightThemeChange = (themeKey: string) => {
    setLightThemeKey(themeKey);
    setLightTheme(availableThemes[themeKey as keyof typeof availableThemes]);
  };

  const handleDarkThemeChange = (themeKey: string) => {
    setDarkThemeKey(themeKey);
    setDarkTheme(availableThemes[themeKey as keyof typeof availableThemes]);
  };

  const toggleMode = () => {
    setMode(config.mode === 'light' ? 'dark' : 'light');
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-color)'
    }}>
      <div>
        <h1 style={{ margin: 0, color: 'var(--text-primary)' }}>Your App</h1>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        
        {/* Light Theme Selector */}
        <Dropdown
          trigger={
            <Button variant="ghost" size="sm">
              Light: {availableThemes[lightThemeKey as keyof typeof availableThemes].name} ▼
            </Button>
          }
          align="end"
        >
          <DropdownLabel>Light Mode Theme</DropdownLabel>
          <DropdownSeparator />
          {Object.entries(availableThemes).map(([key, theme]) => (
            <DropdownItem
              key={`light-${key}`}
              onClick={() => handleLightThemeChange(key)}
              style={{ 
                fontWeight: lightThemeKey === key ? 'bold' : 'normal' 
              }}
            >
              {lightThemeKey === key ? '✓ ' : '  '}{theme.name}
            </DropdownItem>
          ))}
        </Dropdown>
        
        {/* Dark Theme Selector */}
        <Dropdown
          trigger={
            <Button variant="ghost" size="sm">
              Dark: {availableThemes[darkThemeKey as keyof typeof availableThemes].name} ▼
            </Button>
          }
          align="end"
        >
          <DropdownLabel>Dark Mode Theme</DropdownLabel>
          <DropdownSeparator />
          {Object.entries(availableThemes).map(([key, theme]) => (
            <DropdownItem
              key={`dark-${key}`}
              onClick={() => handleDarkThemeChange(key)}
              style={{ 
                fontWeight: darkThemeKey === key ? 'bold' : 'normal' 
              }}
            >
              {darkThemeKey === key ? '✓ ' : '  '}{theme.name}
            </DropdownItem>
          ))}
        </Dropdown>
        
        {/* Mode Toggle Button */}
        <Button 
          variant={config.mode === 'dark' ? 'primary' : 'outline'}
          size="sm"
          onClick={toggleMode}
        >
          {config.mode === 'light' ? '🌙' : '☀️'}
        </Button>
        
      </div>
    </nav>
  );
}

/**
 * Settings Panel Component
 * Alternative approach with a dedicated settings area
 */
export function ThemeSettings() {
  const { 
    config, 
    setMode, 
    setLightTheme, 
    setDarkTheme 
  } = useTheme();

  const [lightSelection, setLightSelection] = useState('light');
  const [darkSelection, setDarkSelection] = useState('dark');

  return (
    <div style={{ 
      padding: '2rem',
      backgroundColor: 'var(--bg-surface)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-color)'
    }}>
      <h3>Theme Settings</h3>
      
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        
        {/* Current Mode Display */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Current Mode: {config.mode}
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button
              variant={config.mode === 'light' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setMode('light')}
            >
              Light Mode
            </Button>
            <Button
              variant={config.mode === 'dark' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setMode('dark')}
            >
              Dark Mode
            </Button>
          </div>
        </div>
        
        {/* Light Theme Selection */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Light Mode Theme:
          </label>
          <Dropdown
            trigger={
              <Button variant="outline">
                {availableThemes[lightSelection as keyof typeof availableThemes].name} ▼
              </Button>
            }
          >
            {Object.entries(availableThemes).map(([key, theme]) => (
              <DropdownItem
                key={key}
                onClick={() => {
                  setLightSelection(key);
                  setLightTheme(theme);
                }}
              >
                {theme.name}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
        
        {/* Dark Theme Selection */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Dark Mode Theme:
          </label>
          <Dropdown
            trigger={
              <Button variant="outline">
                {availableThemes[darkSelection as keyof typeof availableThemes].name} ▼
              </Button>
            }
          >
            {Object.entries(availableThemes).map(([key, theme]) => (
              <DropdownItem
                key={key}
                onClick={() => {
                  setDarkSelection(key);
                  setDarkTheme(theme);
                }}
              >
                {theme.name}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
        
      </div>
    </div>
  );
}

/**
 * Quick Theme Toggle Button
 * Simple button for mode switching (most common use case)
 */
export function QuickModeToggle() {
  const { config, setMode } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setMode(config.mode === 'light' ? 'dark' : 'light')}
      style={{ 
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: 1000
      }}
    >
      {config.mode === 'light' ? '🌙' : '☀️'} Toggle Theme
    </Button>
  );
}

/**
 * Example usage in your app:
 */
export function YourApp() {
  return (
    <div>
      <Navbar />
      
      <main style={{ padding: '2rem' }}>
        <h1>Your App Content</h1>
        <p>
          Use the navbar dropdowns to change your light and dark themes,
          then use the mode toggle to switch between them!
        </p>
        
        <div style={{ marginTop: '2rem' }}>
          <ThemeSettings />
        </div>
      </main>
      
      <QuickModeToggle />
    </div>
  );
}