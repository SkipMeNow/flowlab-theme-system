import React from 'react';
import { ThemeProvider, useTheme } from '@flowlab/theme-system';
import { allThemes, oceanTheme, forestTheme } from '@flowlab/theme-system/themes';
import { Theme } from '@flowlab/theme-system';

function ThemeControls() {
  const { theme, config, setMode, setTheme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Current Theme: {theme.name}</h2>
      <h3>Current Mode: {config.mode}</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Mode Controls (Keep Same Theme):</h4>
        <button onClick={() => setMode('light')}>Light Mode</button>
        <button onClick={() => setMode('dark')}>Dark Mode</button>
        <button onClick={toggleTheme}>Toggle Mode</button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Theme Selection:</h4>
        {allThemes.map((themeOption) => (
          <button 
            key={themeOption.name}
            onClick={() => setTheme(themeOption)}
            style={{ 
              margin: '5px',
              backgroundColor: theme.name === themeOption.name ? '#007acc' : undefined,
              color: theme.name === themeOption.name ? 'white' : undefined
            }}
          >
            {themeOption.name}
          </button>
        ))}
      </div>
    </div>
  );
}

// Example 1: Using with a themes collection
export function ExampleWithThemes() {
  const themesMap = allThemes.reduce((acc, theme) => {
    acc[theme.name] = theme;
    return acc;
  }, {} as Record<string, Theme>);

  return (
    <ThemeProvider themes={themesMap}>
      <ThemeControls />
    </ThemeProvider>
  );
}

// Example 2: Using with a single theme that persists across mode changes
export function ExampleWithSingleTheme() {
  return (
    <ThemeProvider theme={oceanTheme}>
      <ThemeControls />
    </ThemeProvider>
  );
}