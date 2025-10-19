import React, { useState } from 'react';
import { 
  ThemeProvider, 
  useTheme, 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  Text,
  Badge
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

// All available themes
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

function ThemeSelector() {
  const { 
    config, 
    themeName, 
    setMode, 
    setLightTheme, 
    setDarkTheme, 
    toggleTheme 
  } = useTheme();

  const [lightThemeSelection, setLightThemeSelection] = useState('light');
  const [darkThemeSelection, setDarkThemeSelection] = useState('dark');

  const handleLightThemeChange = (themeKey: string) => {
    setLightThemeSelection(themeKey);
    setLightTheme(availableThemes[themeKey as keyof typeof availableThemes]);
  };

  const handleDarkThemeChange = (themeKey: string) => {
    setDarkThemeSelection(themeKey);
    setDarkTheme(availableThemes[themeKey as keyof typeof availableThemes]);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <CardHeader>
          <Text as="h2" size="xl" weight="bold">
            Dynamic Theme Switching Demo
          </Text>
          <Badge variant="info">
            Current: {themeName} ({config.mode} mode)
          </Badge>
        </CardHeader>
        
        <CardBody>
          <div style={{ display: 'grid', gap: '2rem' }}>
            
            {/* Current Mode Toggle */}
            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Current Mode
              </Text>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Button 
                  variant={config.mode === 'light' ? 'primary' : 'outline'}
                  onClick={() => setMode('light')}
                >
                  Light Mode
                </Button>
                <Button 
                  variant={config.mode === 'dark' ? 'primary' : 'outline'}
                  onClick={() => setMode('dark')}
                >
                  Dark Mode
                </Button>
                <Button variant="secondary" onClick={toggleTheme}>
                  Toggle Mode
                </Button>
              </div>
            </div>

            {/* Light Theme Selection */}
            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Light Mode Theme
              </Text>
              <Text size="sm" color="muted" style={{ marginBottom: '1rem' }}>
                Choose which theme to use when in light mode:
              </Text>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.5rem' }}>
                {Object.entries(availableThemes).map(([key, theme]) => (
                  <Button
                    key={`light-${key}`}
                    variant={lightThemeSelection === key ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => handleLightThemeChange(key)}
                  >
                    {theme.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Dark Theme Selection */}
            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Dark Mode Theme
              </Text>
              <Text size="sm" color="muted" style={{ marginBottom: '1rem' }}>
                Choose which theme to use when in dark mode:
              </Text>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.5rem' }}>
                {Object.entries(availableThemes).map(([key, theme]) => (
                  <Button
                    key={`dark-${key}`}
                    variant={darkThemeSelection === key ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => handleDarkThemeChange(key)}
                  >
                    {theme.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Combinations */}
            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Quick Theme Combinations
              </Text>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    handleLightThemeChange('light');
                    handleDarkThemeChange('dark');
                  }}
                >
                  Default (Light/Dark)
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    handleLightThemeChange('ocean');
                    handleDarkThemeChange('cyberpunk');
                  }}
                >
                  Tech (Ocean/Cyberpunk)
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    handleLightThemeChange('forest');
                    handleDarkThemeChange('autumn');
                  }}
                >
                  Nature (Forest/Autumn)
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    handleLightThemeChange('lavender');
                    handleDarkThemeChange('sunset');
                  }}
                >
                  Creative (Lavender/Sunset)
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    handleLightThemeChange('ocean');
                    handleDarkThemeChange('ocean');
                  }}
                >
                  Ocean Only
                </Button>
              </div>
            </div>

            {/* Demo Content */}
            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Theme Preview
              </Text>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <Card variant="outlined">
                  <CardBody>
                    <Text weight="semibold">Sample Content</Text>
                    <Text color="muted">
                      This content shows how the current theme affects colors, spacing, and typography.
                    </Text>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="error">Error</Badge>
                      <Badge variant="info">Info</Badge>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default function DynamicThemeExample() {
  return (
    <ThemeProvider 
      persistToLocalStorage={true}
      localStorageKey="dynamic-theme-demo"
      onThemeChange={(info) => {
        console.log('Theme changed:', {
          theme: info.themeName,
          mode: info.mode,
          colors: info.theme.colors.accent[500]
        });
      }}
    >
      <ThemeSelector />
    </ThemeProvider>
  );
}

// Usage patterns in real applications:

export function UserSettingsExample() {
  const { 
    setLightTheme, 
    setDarkTheme, 
    config, 
    themeName 
  } = useTheme();

  // Example: User selects theme preferences in settings
  const saveUserThemePreferences = (lightTheme: string, darkTheme: string) => {
    setLightTheme(availableThemes[lightTheme as keyof typeof availableThemes]);
    setDarkTheme(availableThemes[darkTheme as keyof typeof availableThemes]);
    
    // Save to user profile/API
    fetch('/api/user/theme-preferences', {
      method: 'POST',
      body: JSON.stringify({
        lightTheme,
        darkTheme,
        currentMode: config.mode
      })
    });
  };

  return (
    <div>
      <Text as="h3">Theme Preferences</Text>
      <Text>Current theme: {themeName} ({config.mode} mode)</Text>
      {/* Theme selection UI */}
    </div>
  );
}

export function AdminThemeSwitcher() {
  const { setLightTheme, setDarkTheme } = useTheme();
  
  // Example: Admin can change themes for all users in real-time
  const applyBrandThemes = () => {
    setLightTheme(oceanTheme);    // Company brand light theme
    setDarkTheme(cyberpunkTheme); // Company brand dark theme
  };

  const applySeasonalThemes = () => {
    const season = getCurrentSeason();
    switch (season) {
      case 'spring':
        setLightTheme(forestTheme);
        setDarkTheme(forestTheme);
        break;
      case 'summer':
        setLightTheme(oceanTheme);
        setDarkTheme(oceanTheme);
        break;
      case 'autumn':
        setLightTheme(autumnTheme);
        setDarkTheme(autumnTheme);
        break;
      case 'winter':
        setLightTheme(lavenderTheme);
        setDarkTheme(cyberpunkTheme);
        break;
    }
  };

  return (
    <div>
      <Button onClick={applyBrandThemes}>Apply Brand Theme</Button>
      <Button onClick={applySeasonalThemes}>Apply Seasonal Theme</Button>
    </div>
  );
}

function getCurrentSeason(): string {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
}