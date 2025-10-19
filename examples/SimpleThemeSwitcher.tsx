import React, { useState } from 'react';
import { 
  ThemeProvider, 
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

// Available themes
const themes = {
  light: lightTheme,
  dark: darkTheme,
  ocean: oceanTheme,
  forest: forestTheme,
  sunset: sunsetTheme,
  cyberpunk: cyberpunkTheme,
  lavender: lavenderTheme,
  autumn: autumnTheme,
};

function SimpleThemeSwitcher() {
  const { 
    config, 
    setMode, 
    setLightTheme, 
    setDarkTheme 
  } = useTheme();

  const [currentLightTheme, setCurrentLightTheme] = useState('light');
  const [currentDarkTheme, setCurrentDarkTheme] = useState('dark');

  const handleLightThemeChange = (themeKey: string) => {
    setCurrentLightTheme(themeKey);
    setLightTheme(themes[themeKey as keyof typeof themes]);
  };

  const handleDarkThemeChange = (themeKey: string) => {
    setCurrentDarkTheme(themeKey);
    setDarkTheme(themes[themeKey as keyof typeof themes]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Your App with Theme Switcher</h1>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', margin: '2rem 0' }}>
        {/* Mode Toggle - switches between your chosen themes */}
        <Button 
          variant={config.mode === 'light' ? 'primary' : 'outline'}
          onClick={() => setMode('light')}
        >
          ☀️ Light
        </Button>
        <Button 
          variant={config.mode === 'dark' ? 'primary' : 'outline'}
          onClick={() => setMode('dark')}
        >
          🌙 Dark
        </Button>
        
        {/* Theme Selectors */}
        <Dropdown
          trigger={
            <Button variant="outline">
              Light Theme: {themes[currentLightTheme as keyof typeof themes].name} ▼
            </Button>
          }
        >
          <DropdownLabel>Choose Light Mode Theme</DropdownLabel>
          <DropdownSeparator />
          {Object.entries(themes).map(([key, theme]) => (
            <DropdownItem
              key={key}
              onClick={() => handleLightThemeChange(key)}
            >
              {currentLightTheme === key ? '✓ ' : ''}{theme.name}
            </DropdownItem>
          ))}
        </Dropdown>
        
        <Dropdown
          trigger={
            <Button variant="outline">
              Dark Theme: {themes[currentDarkTheme as keyof typeof themes].name} ▼
            </Button>
          }
        >
          <DropdownLabel>Choose Dark Mode Theme</DropdownLabel>
          <DropdownSeparator />
          {Object.entries(themes).map(([key, theme]) => (
            <DropdownItem
              key={key}
              onClick={() => handleDarkThemeChange(key)}
            >
              {currentDarkTheme === key ? '✓ ' : ''}{theme.name}
            </DropdownItem>
          ))}
        </Dropdown>
      </div>

      <div style={{ 
        padding: '2rem', 
        backgroundColor: 'var(--bg-surface)', 
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)'
      }}>
        <h2>Your App Content</h2>
        <p>
          Current mode: <strong>{config.mode}</strong><br/>
          Light theme: <strong>{themes[currentLightTheme as keyof typeof themes].name}</strong><br/>
          Dark theme: <strong>{themes[currentDarkTheme as keyof typeof themes].name}</strong>
        </p>
        <p>
          Mode toggle switches between your selected themes instantly!
        </p>
      </div>
    </div>
  );
}

export default function SimpleExample() {
  return (
    <ThemeProvider 
      // Start with default themes
      lightTheme={lightTheme}
      darkTheme={darkTheme}
      initialConfig={{ mode: 'light' }}
      persistToLocalStorage={true}
    >
      <SimpleThemeSwitcher />
    </ThemeProvider>
  );
}