import React, { useState } from "react";
import { 
  Text, 
  Layout, 
  Card, 
  CardBody, 
  Button, 
  Dropdown, 
  DropdownContent, 
  DropdownItem 
} from "../../../../src";
import { useTheme } from "../../../../src/hooks";
import { DocPageLayout } from "../DocPageLayout";
import { CodeExample } from "../CodeExample";
import { 
  lightTheme, 
  darkTheme, 
  oceanTheme, 
  forestTheme, 
  sunsetTheme, 
  lavenderTheme, 
  cyberpunkTheme, 
  autumnTheme
} from "../../../../src/themes";

export const ThemingPage: React.FC = () => {
  const { config, setCompactMode, setLightTheme, setDarkTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState('light');
  const [selectedLightTheme, setSelectedLightTheme] = useState('light');
  const [selectedDarkTheme, setSelectedDarkTheme] = useState('dark');
  
  const allThemes = ['light', 'dark', 'ocean', 'forest', 'sunset', 'lavender', 'cyberpunk', 'autumn'];
  
  const themeMap: Record<string, any> = {
    light: lightTheme,
    dark: darkTheme,
    ocean: oceanTheme,
    forest: forestTheme,
    sunset: sunsetTheme,
    lavender: lavenderTheme,
    cyberpunk: cyberpunkTheme,
    autumn: autumnTheme
  };

  const handleLightThemeChange = (themeName: string) => {
    setSelectedLightTheme(themeName);
    setLightTheme(themeMap[themeName]);
  };

  const handleDarkThemeChange = (themeName: string) => {
    setSelectedDarkTheme(themeName);
    setDarkTheme(themeMap[themeName]);
  };

  const basicThemingCode = `import { ThemeProvider } from '@flowlabkit/ui';
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}
      darkTheme={cyberpunkTheme}
      initialConfig={{ mode: 'dark' }}
    >
      <YourAppContent />
    </ThemeProvider>
  );
}`;

  const themeHookCode = `import { useTheme } from '@flowlabkit/ui';

function ThemedComponent() {
  const { theme, themeName, config, toggleTheme, setMode } = useTheme();
  
  return (
    <div style={{
      backgroundColor: theme.colors.background.app,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg,
    }}>
      <h1>Theme: {themeName}</h1>
      <p>Mode: {config.mode}</p>
      <button onClick={toggleTheme}>
        Toggle Light/Dark
      </button>
      <button onClick={() => setMode('light')}>
        Light Mode
      </button>
    </div>
  );
}`;

  const customThemeCode = `import { Theme, lightTheme } from '@flowlabkit/ui';

const customTheme: Theme = {
  ...lightTheme,
  name: 'Custom Brand',
  colors: {
    ...lightTheme.colors,
    accent: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9', // Your brand color
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49'
    }
  }
};

// Use your custom theme
<ThemeProvider theme={customTheme}>;`;

  const cssVariablesCode = `.my-component {
  background-color: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  font-size: var(--font-size-base);
}

.primary-button {
  background-color: var(--accent-500);
  color: var(--text-on-accent);
  border-radius: var(--radius-sm);
  padding: var(--space-sm) var(--space-md);
}

.primary-button:hover {
  background-color: var(--accent-600);
}`;

  const themeSelectionCode = `import { 
  lightTheme, 
  darkTheme, 
  oceanTheme, 
  forestTheme 
} from '@flowlabkit/ui/themes';

function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [themeName, setThemeName] = useState('light');
  
  const themes = [
    { name: 'light', theme: lightTheme },
    { name: 'dark', theme: darkTheme },
    { name: 'ocean', theme: oceanTheme },
    { name: 'forest', theme: forestTheme }
  ];
  
  return (
    <div>
      {themes.map(({ name, theme }) => (
        <button
          key={name}
          onClick={() => {
            setCurrentTheme(theme);
            setThemeName(name);
          }}
          className={themeName === name ? 'active' : ''}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </button>
      ))}
    </div>
  );
}`;

  const selectedThemeObj = themeMap[selectedTheme] || lightTheme;

  return (
    <DocPageLayout
      title="Theming System"
      description="Learn how to customize themes, create your own, and integrate the theming system into your application."
    >
      <Layout direction="column" gap="xl">
        {/* Interactive Theme Controls */}
        <Card style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}>
          <CardBody>
            <Layout direction="column" gap="md">
              <Text weight="semibold" size="lg" style={{ color: '#1e293b' }}>
                🎨 Interactive Theme Controls
              </Text>
              <Text size="md" style={{ lineHeight: 1.6 }}>
                Try out the theme system features below. Changes apply instantly to the entire page!
              </Text>
              
              <Layout direction="row" gap="lg" wrap>
                {/* Compact Mode Toggle */}
                <Layout direction="column" gap="sm">
                  <Text weight="medium" size="sm">Compact Mode</Text>
                  <Button
                    variant={config.compactMode ? "primary" : "outline"}
                    size="sm"
                    onClick={() => setCompactMode(!config.compactMode)}
                  >
                    {config.compactMode ? '📦 Compact ON' : '📦 Compact OFF'}
                  </Button>
                  <Text size="xs" style={{ color: '#64748b', maxWidth: '200px' }}>
                    Reduces spacing and component sizes for dense layouts
                  </Text>
                </Layout>

                {/* Light Theme Selector */}
                <Layout direction="column" gap="sm">
                  <Text weight="medium" size="sm">Light Theme</Text>
                  <Dropdown
                    trigger={
                      <Button variant="outline" size="sm">
                        ☀️ {selectedLightTheme.charAt(0).toUpperCase() + selectedLightTheme.slice(1)} ▼
                      </Button>
                    }
                  >
                    <DropdownContent>
                      {allThemes.map((themeName) => (
                        <DropdownItem
                          key={`light-${themeName}`}
                          onClick={() => handleLightThemeChange(themeName)}
                        >
                          {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                          {selectedLightTheme === themeName && ' ✓'}
                        </DropdownItem>
                      ))}
                    </DropdownContent>
                  </Dropdown>
                  <Text size="xs" style={{ color: '#64748b', maxWidth: '200px' }}>
                    Choose the theme for light mode
                  </Text>
                </Layout>

                {/* Dark Theme Selector */}
                <Layout direction="column" gap="sm">
                  <Text weight="medium" size="sm">Dark Theme</Text>
                  <Dropdown
                    trigger={
                      <Button variant="outline" size="sm">
                        🌙 {selectedDarkTheme.charAt(0).toUpperCase() + selectedDarkTheme.slice(1)} ▼
                      </Button>
                    }
                  >
                    <DropdownContent>
                      {allThemes.map((themeName) => (
                        <DropdownItem
                          key={`dark-${themeName}`}
                          onClick={() => handleDarkThemeChange(themeName)}
                        >
                          {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                          {selectedDarkTheme === themeName && ' ✓'}
                        </DropdownItem>
                      ))}
                    </DropdownContent>
                  </Dropdown>
                  <Text size="xs" style={{ color: '#64748b', maxWidth: '200px' }}>
                    Choose the theme for dark mode
                  </Text>
                </Layout>
              </Layout>
              
              <Text size="sm" style={{ 
                fontStyle: 'italic', 
                color: '#475569',
                backgroundColor: '#f1f5f9',
                padding: '12px',
                borderRadius: '8px',
                borderLeft: '4px solid #3b82f6'
              }}>
                💡 <strong>Tip:</strong> Switch between light and dark mode using the theme toggle in the top navigation to see your selected themes in action!
              </Text>
            </Layout>
          </CardBody>
        </Card>

        {/* Available Themes */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Available Themes
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            FlowLabKit UI comes with 8 beautiful built-in themes. Each theme includes 
            both light and dark variants with carefully crafted color palettes.
          </Text>
          
          {/* Theme Selector */}
          <Layout direction="row" gap="sm" wrap>
            {allThemes.map((themeName) => (
              <Button
                key={themeName}
                variant={selectedTheme === themeName ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedTheme(themeName)}
              >
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </Button>
            ))}
          </Layout>

          {/* Theme Preview */}
          <Card>
            <CardBody>
              <Layout direction="column" gap="md">
                <Text weight="semibold" size="lg">
                  {selectedThemeObj.name} Theme Preview
                </Text>
                <Layout direction="row" gap="md" wrap>
                  {/* Color Swatches */}
                  <Layout direction="column" gap="sm">
                    <Text weight="medium">Accent Colors</Text>
                    <Layout direction="row" gap="xs">
                      {[100, 300, 500, 700, 900].map((shade) => (
                        <div
                          key={shade}
                          style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: selectedThemeObj.colors.accent[shade],
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            color: shade > 500 ? 'white' : 'black'
                          }}
                        >
                          {shade}
                        </div>
                      ))}
                    </Layout>
                  </Layout>

                  <Layout direction="column" gap="sm">
                    <Text weight="medium">Gray Scale</Text>
                    <Layout direction="row" gap="xs">
                      {[100, 300, 500, 700, 900].map((shade) => (
                        <div
                          key={shade}
                          style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: selectedThemeObj.colors.gray[shade],
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            color: shade > 500 ? 'white' : 'black'
                          }}
                        >
                          {shade}
                        </div>
                      ))}
                    </Layout>
                  </Layout>
                </Layout>

                <Text size="sm" style={{ 
                  color: selectedThemeObj.colors.text.secondary,
                  fontStyle: 'italic' 
                }}>
                  {selectedThemeObj.description || `Beautiful ${selectedTheme} theme with carefully crafted colors.`}
                </Text>
              </Layout>
            </CardBody>
          </Card>
        </Layout>

        {/* Basic Theme Setup */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Basic Theme Setup
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            Set up custom light and dark themes for your application. You can mix and match 
            any of the built-in themes or create your own.
          </Text>
          <CodeExample code={basicThemingCode} language="tsx" />
        </Layout>

        {/* Using the Theme Hook */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Using the Theme Hook
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            The useTheme hook provides access to the current theme state and methods to modify it. 
            Use it to create theme-aware components and controls.
          </Text>
          <CodeExample code={themeHookCode} language="tsx" />
        </Layout>

        {/* Creating Custom Themes */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Creating Custom Themes
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            Create your own custom themes by extending existing ones or building from scratch. 
            Custom themes follow the same structure as built-in themes.
          </Text>
          <CodeExample code={customThemeCode} language="tsx" />
        </Layout>

        {/* CSS Variables */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Using CSS Variables
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            FlowLabKit UI automatically applies CSS variables to the document root. 
            Use them in your stylesheets for consistent theming.
          </Text>
          <CodeExample code={cssVariablesCode} language="css" />
        </Layout>

        {/* Theme Selection Component */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Building a Theme Selector
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            Create a theme selection component that lets users choose from all available themes.
          </Text>
          <CodeExample code={themeSelectionCode} language="tsx" />
        </Layout>

        {/* Available CSS Variables */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Available CSS Variables
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            FlowLabKit UI provides over 100 CSS variables for complete customization. 
            Here are the main categories:
          </Text>
          
          <Layout direction="row" gap="md" wrap>
            <Card style={{ flex: 1, minWidth: '300px' }}>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">🎨 Colors</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    <code>--gray-50</code> through <code>--gray-950</code><br/>
                    <code>--accent-50</code> through <code>--accent-950</code><br/>
                    <code>--bg-app</code>, <code>--bg-surface</code>, <code>--bg-elevated</code><br/>
                    <code>--text-primary</code>, <code>--text-secondary</code><br/>
                    <code>--success</code>, <code>--error</code>, <code>--warning</code>
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card style={{ flex: 1, minWidth: '300px' }}>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">📐 Spacing</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    <code>--space-xs</code> (4px)<br/>
                    <code>--space-sm</code> (8px)<br/>
                    <code>--space-md</code> (16px)<br/>
                    <code>--space-lg</code> (24px)<br/>
                    <code>--space-xl</code> (32px)<br/>
                    <code>--space-2xl</code> (48px)
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card style={{ flex: 1, minWidth: '300px' }}>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">📝 Typography</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    <code>--font-size-xs</code> through <code>--font-size-3xl</code><br/>
                    <code>--font-weight-normal</code><br/>
                    <code>--font-weight-medium</code><br/>
                    <code>--font-weight-semibold</code><br/>
                    <code>--font-weight-bold</code>
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card style={{ flex: 1, minWidth: '300px' }}>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">🎯 Layout</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    <code>--radius-sm</code> (4px)<br/>
                    <code>--radius-md</code> (8px)<br/>
                    <code>--radius-lg</code> (12px)<br/>
                    <code>--shadow-xs</code> through <code>--shadow-xl</code><br/>
                    <code>--transition-fast</code>, <code>--transition-base</code>
                  </Text>
                </Layout>
              </CardBody>
            </Card>
          </Layout>
        </Layout>

        {/* Best Practices */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Theming Best Practices
          </Text>
          <Layout direction="column" gap="sm">
            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">✅ Do: Use CSS Variables</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Prefer CSS variables over direct theme object access for better performance 
                    and automatic theme updates.
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">✅ Do: Test Both Light and Dark</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Always test your components in both light and dark modes to ensure 
                    proper contrast and readability.
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">✅ Do: Extend Existing Themes</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    When creating custom themes, extend existing ones rather than starting 
                    from scratch to maintain consistency.
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">⚠️ Avoid: Hardcoded Colors</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Avoid hardcoding colors in your components. Use theme variables or 
                    CSS variables for proper theme support.
                  </Text>
                </Layout>
              </CardBody>
            </Card>
          </Layout>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};