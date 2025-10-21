import React from 'react';
import { themes } from '../../src/themes/index';

interface ThemeShowcaseProps {
  onThemeSelect: (themeName: string) => void;
}

const ThemeShowcase: React.FC<ThemeShowcaseProps> = ({ onThemeSelect }) => {
  const themeNames = Object.keys(themes) as Array<keyof typeof themes>;

  const getThemeDescription = (themeName: string) => {
    const descriptions = {
      light: 'Clean, professional default theme with bright backgrounds',
      dark: 'Modern dark theme for reduced eye strain',
      ocean: 'Calming blues and cyans for data-focused applications',
      forest: 'Natural greens for wellness and environmental apps',
      sunset: 'Warm oranges and pinks for creative applications',
      lavender: 'Soft purples for elegant, dreamy interfaces',
      cyberpunk: 'Neon highlights on dark backgrounds for tech/gaming',
      autumn: 'Cozy browns and golds for seasonal warmth'
    };
    return descriptions[themeName as keyof typeof descriptions] || 'Beautiful theme';
  };

  const getThemeColors = (themeName: keyof typeof themes) => {
    const theme = themes[themeName];
    return {
      primary: theme.colors.accent[500],
      background: theme.colors.background.app,
      surface: theme.colors.background.surface,
      text: theme.colors.text.primary
    };
  };

  return (
    <div>
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <h1 style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: 'var(--font-weight-bold)',
          margin: '0 0 var(--space-md) 0',
          color: 'var(--text-primary)'
        }}>
          Theme Gallery
        </h1>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--text-secondary)',
          margin: '0 0 var(--space-lg) 0',
          lineHeight: 1.6
        }}>
          FlowLabKit comes with 8 beautiful built-in themes. Each theme includes both light and dark variants
          with carefully crafted color palettes for different use cases.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'var(--space-lg)',
        marginBottom: 'var(--space-2xl)'
      }}>
        {themeNames.map((themeName) => {
          const colors = getThemeColors(themeName);
          
          return (
            <div
              key={themeName}
              style={{
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-lg)',
                cursor: 'pointer',
                transition: 'var(--transition-base)',
                boxShadow: 'var(--shadow-sm)'
              }}
              onClick={() => onThemeSelect(themeName)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Theme Preview */}
              <div style={{
                height: '120px',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-md)',
                background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.surface} 50%, ${colors.primary}20 100%)`,
                border: `2px solid ${colors.primary}20`,
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Color Palette */}
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-sm)',
                  right: 'var(--space-sm)',
                  display: 'flex',
                  gap: '4px'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: colors.primary,
                    border: '2px solid white',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
                  }} />
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: colors.surface,
                    border: '2px solid white',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
                  }} />
                </div>

                {/* Mini UI Preview */}
                <div style={{
                  position: 'absolute',
                  bottom: 'var(--space-sm)',
                  left: 'var(--space-sm)',
                  right: 'var(--space-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}>
                  <div style={{
                    height: '8px',
                    backgroundColor: colors.primary,
                    borderRadius: '4px',
                    width: '60%'
                  }} />
                  <div style={{
                    height: '6px',
                    backgroundColor: `${colors.text}60`,
                    borderRadius: '3px',
                    width: '80%'
                  }} />
                  <div style={{
                    height: '6px',
                    backgroundColor: `${colors.text}40`,
                    borderRadius: '3px',
                    width: '40%'
                  }} />
                </div>
              </div>

              {/* Theme Info */}
              <div>
                <h3 style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  margin: '0 0 var(--space-xs) 0',
                  color: 'var(--text-primary)',
                  textTransform: 'capitalize'
                }}>
                  {themeName}
                </h3>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text-secondary)',
                  margin: '0 0 var(--space-md) 0',
                  lineHeight: 1.4
                }}>
                  {getThemeDescription(themeName)}
                </p>
                
                <button style={{
                  backgroundColor: colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  padding: 'var(--space-sm) var(--space-md)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}>
                  Try {themeName}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Usage Example */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-xl)'
      }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          Quick Start
        </h2>
        
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
{`import { ThemeProvider } from '@flowlabkit/ui';
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}
      darkTheme={cyberpunkTheme}
    >
      <YourApp />
    </ThemeProvider>
  );
}`}
        </pre>
      </div>
    </div>
  );
};

export default ThemeShowcase;