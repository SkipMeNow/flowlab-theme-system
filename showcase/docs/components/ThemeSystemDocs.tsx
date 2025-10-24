import React from "react";
import { Text, Card, CardBody, Badge } from "../../../src/index";

const CodeBlock: React.FC<{ children: string; language?: string }> = ({ children, language = "bash" }) => (
  <pre
    style={{
      backgroundColor: "var(--bg-elevated)",
      color: "var(--text-primary)",
      padding: "var(--space-lg)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-color)",
      overflow: "auto",
      fontSize: "var(--font-size-sm)",
      fontFamily: "Consolas, Monaco, 'Courier New', monospace",
      margin: "var(--space-md) 0",
      lineHeight: "1.5",
    }}
  >
    <code>{children}</code>
  </pre>
);

export const ThemeSystemDocs: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-sm)" }}>
          Theme System
        </Text>
        <Text as="p" size="lg" color="secondary">
          Comprehensive theming with CSS variables, 8 built-in themes, and full customization
        </Text>
      </div>

      {/* Overview */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Overview
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-lg)", lineHeight: "1.6" }}>
            FlowLabKit UI features a powerful theme system built on CSS custom properties (variables) that enables 
            runtime theme switching, comprehensive customization, and consistent design tokens across your application.
          </Text>
          
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Badge variant="primary">8 Built-in Themes</Badge>
            <Badge variant="success">Runtime Switching</Badge>
            <Badge variant="info">CSS Variables</Badge>
            <Badge variant="secondary">100+ Tokens</Badge>
            <Badge variant="warning">LocalStorage Persistence</Badge>
          </div>
        </CardBody>
      </Card>

      {/* Available Themes */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Available Themes
          </Text>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-md)" }}>
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                🌅 Light
              </Text>
              <Text as="p" size="sm" color="secondary">
                Clean, professional default theme for general applications
              </Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                🌙 Dark
              </Text>
              <Text as="p" size="sm" color="secondary">
                Modern dark theme for reduced eye strain and focus
              </Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                🌊 Ocean
              </Text>
              <Text as="p" size="sm" color="secondary">
                Calming blues and cyans for data-focused applications
              </Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                🌲 Forest
              </Text>
              <Text as="p" size="sm" color="secondary">
                Natural greens for wellness and environmental apps
              </Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                🌅 Sunset
              </Text>
              <Text as="p" size="sm" color="secondary">
                Warm oranges and pinks for creative applications
              </Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                💜 Lavender
              </Text>
              <Text as="p" size="sm" color="secondary">
                Soft purples for elegant, dreamy interfaces
              </Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                🤖 Cyberpunk
              </Text>
              <Text as="p" size="sm" color="secondary">
                Neon highlights on dark backgrounds for tech/gaming
              </Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                🍂 Autumn
              </Text>
              <Text as="p" size="sm" color="secondary">
                Cozy browns and golds for seasonal warmth
              </Text>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Basic Usage */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Basic Usage
          </Text>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            ThemeProvider Setup
          </Text>
          
          <CodeBlock language="tsx">{`import React from 'react';
import { ThemeProvider } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider 
      initialConfig={{ 
        mode: 'dark', 
        fontSize: 'medium',
        compactMode: false 
      }}
      persistToLocalStorage={true}
      localStorageKey="my-app-theme"
    >
      <YourAppContent />
    </ThemeProvider>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Using Custom Themes
          </Text>
          
          <CodeBlock language="tsx">{`import { ThemeProvider } from '@flowlabkit/ui';
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}
      darkTheme={cyberpunkTheme}
      onThemeChange={(info) => {
        console.log(\`Switched to \${info.themeName} in \${info.mode} mode\`);
      }}
    >
      <YourAppContent />
    </ThemeProvider>
  );
}`}</CodeBlock>
        </CardBody>
      </Card>

      {/* useTheme Hook */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            useTheme Hook
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-md)", lineHeight: "1.6" }}>
            Access and control theme state throughout your application:
          </Text>
          
          <CodeBlock language="tsx">{`import { useTheme } from '@flowlabkit/ui';

function ThemedComponent() {
  const { 
    theme,           // Current theme object
    themeName,       // Current theme name
    config,          // Theme configuration
    toggleTheme,     // Toggle light/dark mode
    setMode,         // Set specific mode
    setFontSize,     // Change font scaling
    setCompactMode   // Toggle compact layout
  } = useTheme();
  
  return (
    <div style={{
      backgroundColor: theme.colors.background.app,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg,
    }}>
      <h1>Theme: {themeName}</h1>
      <p>Mode: {config.mode}</p>
      <p>Font Size: {config.fontSize}</p>
      <p>Compact: {config.compactMode ? 'Yes' : 'No'}</p>
      
      <button onClick={toggleTheme}>
        Toggle Light/Dark
      </button>
      <button onClick={() => setFontSize('large')}>
        Large Font
      </button>
      <button onClick={() => setCompactMode(!config.compactMode)}>
        Toggle Compact
      </button>
    </div>
  );
}`}</CodeBlock>
        </CardBody>
      </Card>

      {/* CSS Variables */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            CSS Variables
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-md)", lineHeight: "1.6" }}>
            All theme values are automatically available as CSS variables for use in your stylesheets:
          </Text>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Color Variables
          </Text>
          
          <CodeBlock language="css">{`.my-component {
  /* Background colors */
  background-color: var(--bg-app);
  border: 1px solid var(--border-color);
  
  /* Text colors */
  color: var(--text-primary);
  
  /* Accent colors */
  background: var(--accent-500);
  color: var(--text-on-accent);
  
  /* Semantic colors */
  border-color: var(--success);
  color: var(--error);
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Spacing & Layout
          </Text>
          
          <CodeBlock language="css">{`.layout {
  /* Spacing scale */
  padding: var(--space-md);
  margin: var(--space-lg);
  gap: var(--space-sm);
  
  /* Border radius */
  border-radius: var(--radius-md);
  
  /* Shadows */
  box-shadow: var(--shadow-md);
  
  /* Typography */
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-base);
}`}</CodeBlock>
        </CardBody>
      </Card>

      {/* Configuration Options */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Configuration Options
          </Text>
          
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
              ThemeProvider Props
            </Text>
            
            <div style={{ backgroundColor: "var(--bg-elevated)", padding: "var(--space-md)", borderRadius: "var(--radius-md)" }}>
              <CodeBlock language="tsx">{`interface ThemeProviderProps {
  children: ReactNode;
  
  // Theme configuration
  lightTheme?: Theme;                    // Custom light theme
  darkTheme?: Theme;                     // Custom dark theme
  initialConfig?: Partial<ThemeConfig>;  // Initial settings
  
  // Persistence
  persistToLocalStorage?: boolean;       // Save to localStorage
  localStorageKey?: string;              // Storage key
  
  // Callbacks
  onThemeChange?: (info: ThemeChangeInfo) => void;
}`}</CodeBlock>
            </div>
          </div>
          
          <div style={{ marginBottom: "var(--space-lg)" }}>
            <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
              Theme Configuration
            </Text>
            
            <div style={{ backgroundColor: "var(--bg-elevated)", padding: "var(--space-md)", borderRadius: "var(--radius-md)" }}>
              <CodeBlock language="tsx">{`interface ThemeConfig {
  mode: 'light' | 'dark';           // Light or dark mode
  fontSize: 'small' | 'medium' | 'large';  // Font scaling
  compactMode: boolean;             // Compact spacing
}`}</CodeBlock>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Advanced Usage */}
      <Card>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Advanced Usage
          </Text>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Custom Theme Creation
          </Text>
          
          <CodeBlock language="tsx">{`import { Theme, lightTheme } from '@flowlabkit/ui';

const customTheme: Theme = {
  ...lightTheme,
  name: 'Custom Brand',
  colors: {
    ...lightTheme.colors,
    accent: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      // ... your brand colors
      500: '#0ea5e9',  // Primary brand color
      900: '#0c4a6e',
    },
    background: {
      ...lightTheme.colors.background,
      app: '#fafafa',
    }
  }
};`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Manual Variable Application
          </Text>
          
          <CodeBlock language="tsx">{`import { themeToCSSVariables, applyCSSVariables } from '@flowlabkit/ui';

// Convert theme to CSS variables
const variables = themeToCSSVariables(theme, config);

// Apply manually
applyCSSVariables(variables);

// Or access individual variables
console.log(variables['--accent-500']); // Theme's accent color`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Theme Switching Component
          </Text>
          
          <CodeBlock language="tsx">{`import { useTheme } from '@flowlabkit/ui';
import { themes, allThemes } from '@flowlabkit/ui/themes';

function ThemeSelector() {
  const { themeName, setTheme } = useTheme();
  
  return (
    <select 
      value={themeName} 
      onChange={(e) => setTheme(themes[e.target.value])}
    >
      {allThemes.map(name => (
        <option key={name} value={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </option>
      ))}
    </select>
  );
}`}</CodeBlock>
        </CardBody>
      </Card>

      {/* API Reference */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            API Reference
          </Text>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            ThemeProvider Props
          </Text>

          <div style={{ overflowX: "auto", marginBottom: "var(--space-xl)" }}>
            <table style={{ 
              width: "100%", 
              borderCollapse: "collapse",
              backgroundColor: "var(--bg-elevated)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden"
            }}>
              <thead>
                <tr style={{ backgroundColor: "var(--bg-surface)" }}>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Prop
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Type
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Default
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>lightTheme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>Theme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>themes.default</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Theme configuration for light mode
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>darkTheme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>Theme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>themes.dark</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Theme configuration for dark mode
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>defaultMode</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'light' | 'dark'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'light'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Initial color mode when no preference is stored
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>storageKey</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'flowlabkit-theme'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    localStorage key for persisting theme preferences
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>children</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>ReactNode</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>-</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    React components to be wrapped with theme context
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            useTheme Hook Returns
          </Text>

          <div style={{ overflowX: "auto", marginBottom: "var(--space-xl)" }}>
            <table style={{ 
              width: "100%", 
              borderCollapse: "collapse",
              backgroundColor: "var(--bg-elevated)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden"
            }}>
              <thead>
                <tr style={{ backgroundColor: "var(--bg-surface)" }}>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Property
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Type
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>lightTheme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>Theme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Current light mode theme configuration
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>darkTheme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>Theme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Current dark mode theme configuration
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>currentTheme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>Theme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Active theme based on current mode
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>themeName</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Name identifier of the current theme
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>mode</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'light' | 'dark'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Current color mode
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>config</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>ThemeConfig</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Complete theme configuration object
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>setLightTheme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>(theme: Theme) =&gt; void</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Updates the light mode theme
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>setDarkTheme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>(theme: Theme) =&gt; void</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Updates the dark mode theme
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>setTheme</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>(theme: Theme) =&gt; void</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Updates theme for current mode
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>setMode</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>(mode: 'light' | 'dark') =&gt; void</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    Switches between light and dark modes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Theme Object Structure
          </Text>

          <div style={{ overflowX: "auto" }}>
            <table style={{ 
              width: "100%", 
              borderCollapse: "collapse",
              backgroundColor: "var(--bg-elevated)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden"
            }}>
              <thead>
                <tr style={{ backgroundColor: "var(--bg-surface)" }}>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Property
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Type
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>name</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Unique identifier for the theme
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>colors</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>ColorPalette</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Color definitions for all theme tokens
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>spacing</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>SpacingScale</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Spacing values and sizing tokens
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>typography</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>TypographyScale</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Font sizes, weights, and typography settings
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>effects</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>EffectsScale</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Shadows, borders, and visual effects
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>animation</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>AnimationScale</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    Transition durations and easing functions
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};