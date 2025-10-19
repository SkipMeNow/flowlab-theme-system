import React from 'react';

const DocumentationPage: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <h1 style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: 'var(--font-weight-bold)',
          margin: '0 0 var(--space-md) 0',
          color: 'var(--text-primary)'
        }}>
          Documentation
        </h1>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--text-secondary)',
          margin: '0 0 var(--space-lg) 0',
          lineHeight: 1.6
        }}>
          Complete API reference and usage guides for FlowLabKit theme system.
        </p>
      </div>

      {/* Theme Provider API */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          ThemeProvider API
        </h2>
        
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)',
          marginBottom: 'var(--space-lg)'
        }}>
          <pre style={{
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-lg)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-primary)',
            overflow: 'auto',
            fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
          }}>
{`interface ThemeProviderProps {
  children: ReactNode;
  lightTheme?: Theme;           // Theme for light mode
  darkTheme?: Theme;            // Theme for dark mode  
  initialConfig?: Partial<ThemeConfig>;
  persistToLocalStorage?: boolean;
  localStorageKey?: string;
  onThemeChange?: (info: ThemeChangeInfo) => void;
}`}
          </pre>
        </div>
      </section>

      {/* useTheme Hook */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          useTheme Hook
        </h2>
        
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)',
          marginBottom: 'var(--space-lg)'
        }}>
          <pre style={{
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-lg)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-primary)',
            overflow: 'auto',
            fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            marginBottom: 'var(--space-lg)'
          }}>
{`import { useTheme } from '@flowlabkit/themesystem';

function MyComponent() {
  const { 
    theme,           // Current theme object
    themeName,       // Current theme name
    config,          // Current config (mode, fontSize, etc.)
    setMode,         // Set light/dark mode
    setFontSize,     // Set font size
    setCompactMode,  // Toggle compact mode
    toggleTheme      // Toggle between light/dark
  } = useTheme();

  return (
    <div style={{ backgroundColor: theme.colors.background.app }}>
      <h1>Current theme: {themeName}</h1>
      <button onClick={() => setMode('dark')}>Dark Mode</button>
      <button onClick={toggleTheme}>Toggle Mode</button>
    </div>
  );
}`}
          </pre>
        </div>
      </section>

      {/* CSS Variables */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          CSS Variables Reference
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-lg)'
        }}>
          {/* Colors */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-medium)',
              margin: '0 0 var(--space-md) 0',
              color: 'var(--text-primary)'
            }}>
              Colors
            </h3>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)',
              fontFamily: 'Monaco, Consolas, monospace'
            }}>
              <div>--accent-50 through --accent-950</div>
              <div>--gray-50 through --gray-950</div>
              <div>--bg-app, --bg-surface, --bg-elevated</div>
              <div>--text-primary, --text-secondary</div>
              <div>--border-color</div>
              <div>--success, --error, --warning, --info</div>
            </div>
          </div>

          {/* Spacing */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-medium)',
              margin: '0 0 var(--space-md) 0',
              color: 'var(--text-primary)'
            }}>
              Spacing
            </h3>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)',
              fontFamily: 'Monaco, Consolas, monospace'
            }}>
              <div>--space-xs (4px)</div>
              <div>--space-sm (8px)</div>
              <div>--space-md (16px)</div>
              <div>--space-lg (24px)</div>
              <div>--space-xl (32px)</div>
              <div>--space-2xl (48px)</div>
            </div>
          </div>

          {/* Typography */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-medium)',
              margin: '0 0 var(--space-md) 0',
              color: 'var(--text-primary)'
            }}>
              Typography
            </h3>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)',
              fontFamily: 'Monaco, Consolas, monospace'
            }}>
              <div>--font-size-xs through --font-size-3xl</div>
              <div>--font-weight-normal</div>
              <div>--font-weight-medium</div>
              <div>--font-weight-semibold</div>
              <div>--font-weight-bold</div>
            </div>
          </div>

          {/* Layout */}
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg)'
          }}>
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 'var(--font-weight-medium)',
              margin: '0 0 var(--space-md) 0',
              color: 'var(--text-primary)'
            }}>
              Layout
            </h3>
            <div style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)',
              fontFamily: 'Monaco, Consolas, monospace'
            }}>
              <div>--radius-sm, --radius-md, --radius-lg</div>
              <div>--shadow-xs through --shadow-xl</div>
              <div>--transition-fast, --transition-base</div>
              <div>--z-dropdown, --z-modal, --z-toast</div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Themes */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          Available Themes
        </h2>
        
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-md)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-primary)'
          }}>
            <div><strong>light</strong> - Clean, professional default</div>
            <div><strong>dark</strong> - Modern dark theme</div>
            <div><strong>ocean</strong> - Calming blues and cyans</div>
            <div><strong>forest</strong> - Natural greens</div>
            <div><strong>sunset</strong> - Warm oranges and pinks</div>
            <div><strong>lavender</strong> - Soft purples</div>
            <div><strong>cyberpunk</strong> - Neon highlights</div>
            <div><strong>autumn</strong> - Cozy browns and golds</div>
          </div>
          
          <pre style={{
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-lg)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-primary)',
            overflow: 'auto',
            fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            marginTop: 'var(--space-lg)'
          }}>
{`import { 
  lightTheme, 
  darkTheme, 
  oceanTheme, 
  forestTheme,
  sunsetTheme, 
  lavenderTheme, 
  cyberpunkTheme, 
  autumnTheme 
} from '@flowlabkit/themesystem/themes';`}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default DocumentationPage;