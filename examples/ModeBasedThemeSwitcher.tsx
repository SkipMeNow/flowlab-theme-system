import React, { useState } from 'react';
import { 
  ThemeProvider, 
  useTheme, 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  Text,
  Badge,
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

// All available themes for selection
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

function ThemeSwitcherApp() {
  const { 
    config, 
    themeName, 
    setMode, 
    setLightTheme, 
    setDarkTheme 
  } = useTheme();

  // Track which themes are selected for light/dark modes
  const [selectedLightTheme, setSelectedLightTheme] = useState('light');
  const [selectedDarkTheme, setSelectedDarkTheme] = useState('dark');

  const handleLightThemeChange = (themeKey: string) => {
    const theme = availableThemes[themeKey as keyof typeof availableThemes];
    setSelectedLightTheme(themeKey);
    setLightTheme(theme);
  };

  const handleDarkThemeChange = (themeKey: string) => {
    const theme = availableThemes[themeKey as keyof typeof availableThemes];
    setSelectedDarkTheme(themeKey);
    setDarkTheme(theme);
  };

  const getCurrentThemeInfo = () => {
    if (config.mode === 'light') {
      return `${availableThemes[selectedLightTheme as keyof typeof availableThemes].name} (Light Mode)`;
    } else {
      return `${availableThemes[selectedDarkTheme as keyof typeof availableThemes].name} (Dark Mode)`;
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <Card>
        <CardHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Text as="h1" size="2xl" weight="bold">
                Dynamic Theme Switcher
              </Text>
              <Text color="muted">
                Set your light and dark themes, then switch between them with mode
              </Text>
            </div>
            <Badge variant="primary" size="lg">
              {getCurrentThemeInfo()}
            </Badge>
          </div>
        </CardHeader>
        
        <CardBody>
          <div style={{ display: 'grid', gap: '2rem' }}>
            
            {/* Mode Toggle - Switches between your chosen themes */}
            <Card variant="outlined">
              <CardBody>
                <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                  🌓 Mode Toggle
                </Text>
                <Text size="sm" color="muted" style={{ marginBottom: '1rem' }}>
                  Switch between your selected light and dark themes
                </Text>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Button 
                    variant={config.mode === 'light' ? 'primary' : 'outline'}
                    onClick={() => setMode('light')}
                  >
                    ☀️ Light Mode
                  </Button>
                  <Button 
                    variant={config.mode === 'dark' ? 'primary' : 'outline'}
                    onClick={() => setMode('dark')}
                  >
                    🌙 Dark Mode
                  </Button>
                  <Text color="muted">
                    Currently using: <strong>{getCurrentThemeInfo()}</strong>
                  </Text>
                </div>
              </CardBody>
            </Card>

            {/* Light Theme Selector */}
            <Card variant="outlined">
              <CardBody>
                <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                  ☀️ Light Mode Theme
                </Text>
                <Text size="sm" color="muted" style={{ marginBottom: '1rem' }}>
                  Choose which theme to use when in light mode. Currently: <strong>{availableThemes[selectedLightTheme as keyof typeof availableThemes].name}</strong>
                </Text>
                <Dropdown
                  trigger={
                    <Button variant="outline">
                      {availableThemes[selectedLightTheme as keyof typeof availableThemes].name} ▼
                    </Button>
                  }
                  align="start"
                >
                  <DropdownLabel>Select Light Mode Theme</DropdownLabel>
                  <DropdownSeparator />
                  {Object.entries(availableThemes).map(([key, theme]) => (
                    <DropdownItem
                      key={`light-${key}`}
                      onClick={() => handleLightThemeChange(key)}
                      style={{ 
                        backgroundColor: selectedLightTheme === key ? 'var(--accent-100)' : undefined 
                      }}
                    >
                      {selectedLightTheme === key ? '✓ ' : ''}{theme.name}
                    </DropdownItem>
                  ))}
                </Dropdown>
              </CardBody>
            </Card>

            {/* Dark Theme Selector */}
            <Card variant="outlined">
              <CardBody>
                <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                  🌙 Dark Mode Theme
                </Text>
                <Text size="sm" color="muted" style={{ marginBottom: '1rem' }}>
                  Choose which theme to use when in dark mode. Currently: <strong>{availableThemes[selectedDarkTheme as keyof typeof availableThemes].name}</strong>
                </Text>
                <Dropdown
                  trigger={
                    <Button variant="outline">
                      {availableThemes[selectedDarkTheme as keyof typeof availableThemes].name} ▼
                    </Button>
                  }
                  align="start"
                >
                  <DropdownLabel>Select Dark Mode Theme</DropdownLabel>
                  <DropdownSeparator />
                  {Object.entries(availableThemes).map(([key, theme]) => (
                    <DropdownItem
                      key={`dark-${key}`}
                      onClick={() => handleDarkThemeChange(key)}
                      style={{ 
                        backgroundColor: selectedDarkTheme === key ? 'var(--accent-100)' : undefined 
                      }}
                    >
                      {selectedDarkTheme === key ? '✓ ' : ''}{theme.name}
                    </DropdownItem>
                  ))}
                </Dropdown>
              </CardBody>
            </Card>

            {/* Quick Preset Combinations */}
            <Card variant="outlined">
              <CardBody>
                <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                  🎨 Quick Theme Combinations
                </Text>
                <Text size="sm" color="muted" style={{ marginBottom: '1rem' }}>
                  Set both light and dark themes with one click
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
              </CardBody>
            </Card>

            {/* Demo Content */}
            <Card variant="outlined">
              <CardBody>
                <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                  🎭 Theme Preview
                </Text>
                <Text size="sm" color="muted" style={{ marginBottom: '1rem' }}>
                  See how your current theme selection looks
                </Text>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <Badge variant="default">Default</Badge>
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="error">Error</Badge>
                    <Badge variant="info">Info</Badge>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="primary" size="sm">Primary</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="outline" size="sm">Outline</Button>
                    <Button variant="ghost" size="sm">Ghost</Button>
                  </div>
                  <Text>
                    This is <Text as="span" color="accent">sample text</Text> showing how the current theme affects typography and colors. 
                    The <Text as="span" color="muted">muted text</Text> adapts to the theme as well.
                  </Text>
                </div>
              </CardBody>
            </Card>

          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default function ModeBasedThemeSwitcher() {
  return (
    <ThemeProvider 
      // Initial themes (can be changed dynamically)
      lightTheme={lightTheme}   // Default light theme
      darkTheme={darkTheme}     // Default dark theme
      
      // Initial configuration
      initialConfig={{ 
        mode: 'light',          // Start in light mode
        fontSize: 'medium' 
      }}
      
      // Persist user's theme choices
      persistToLocalStorage={true}
      localStorageKey="mode-based-theme-demo"
      
      // Track theme changes
      onThemeChange={(info) => {
        console.log('Theme changed:', {
          currentTheme: info.themeName,
          mode: info.mode,
          isLightMode: info.mode === 'light',
          isDarkMode: info.mode === 'dark'
        });
      }}
    >
      <ThemeSwitcherApp />
    </ThemeProvider>
  );
}

// Usage in your app:
export function UserThemeSettings() {
  const { 
    config, 
    setMode, 
    setLightTheme, 
    setDarkTheme 
  } = useTheme();

  return (
    <div>
      <h3>Theme Settings</h3>
      
      {/* Mode toggle always switches between user's chosen themes */}
      <button onClick={() => setMode(config.mode === 'light' ? 'dark' : 'light')}>
        Switch to {config.mode === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      
      {/* User can change what themes mode switches between */}
      <Dropdown trigger={<button>Change Light Theme</button>}>
        <DropdownItem onClick={() => setLightTheme(oceanTheme)}>
          Ocean
        </DropdownItem>
        <DropdownItem onClick={() => setLightTheme(forestTheme)}>
          Forest
        </DropdownItem>
        {/* ... more options */}
      </Dropdown>
      
      <Dropdown trigger={<button>Change Dark Theme</button>}>
        <DropdownItem onClick={() => setDarkTheme(cyberpunkTheme)}>
          Cyberpunk
        </DropdownItem>
        <DropdownItem onClick={() => setDarkTheme(autumnTheme)}>
          Autumn
        </DropdownItem>
        {/* ... more options */}
      </Dropdown>
    </div>
  );
}