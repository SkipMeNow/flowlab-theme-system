import React from 'react';

const InstallationPage: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <h1 style={{
          fontSize: 'var(--font-size-3xl)',
          fontWeight: 'var(--font-weight-bold)',
          margin: '0 0 var(--space-md) 0',
          color: 'var(--text-primary)'
        }}>
          Installation
        </h1>
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--text-secondary)',
          margin: '0 0 var(--space-lg) 0',
          lineHeight: 1.6
        }}>
          Get started with FlowLabKit theme system using our interactive installer or add it to existing projects.
        </p>
      </div>

      {/* Interactive Installer */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          🚀 Interactive Installer (Recommended)
        </h2>
        
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)',
          marginBottom: 'var(--space-lg)'
        }}>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--text-secondary)',
            margin: '0 0 var(--space-lg) 0',
            lineHeight: 1.6
          }}>
            Create a new project with FlowLabKit UI pre-configured using our <strong>Vite-style interactive installer:</strong>
          </p>

          <pre style={{
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-lg)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-primary)',
            overflow: 'auto',
            fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            margin: '0 0 var(--space-lg) 0'
          }}>
npm create flowlabkit-app@latest my-app
          </pre>

          <div style={{
            backgroundColor: 'var(--accent-50)',
            border: '1px solid var(--accent-200)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-lg)',
            marginBottom: 'var(--space-lg)'
          }}>
            <h4 style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-semibold)',
              margin: '0 0 var(--space-sm) 0',
              color: 'var(--accent-700)'
            }}>
              ✨ Enhanced Interactive Flow:
            </h4>
            <ul style={{
              color: 'var(--accent-700)',
              fontSize: 'var(--font-size-sm)',
              lineHeight: 1.6,
              margin: 0,
              paddingLeft: 'var(--space-lg)'
            }}>
              <li style={{ marginBottom: 'var(--space-xs)' }}>🖼️ <strong>Choose Framework:</strong> React or Vanilla</li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>⚙️ <strong>Select Language:</strong> TypeScript or JavaScript</li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>📦 <strong>Choose Setup:</strong> Full Components or Themes Only</li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>🎨 <strong>Default Light Theme:</strong> Light, Ocean, Forest, Lavender, Autumn, or Sunset</li>
              <li style={{ marginBottom: 'var(--space-xs)' }}>🌙 <strong>Default Dark Theme:</strong> Dark, Cyberpunk, Forest Dark, or Ocean Dark</li>
              <li>🎪 <strong>Additional Themes:</strong> Multi-select any remaining themes</li>
            </ul>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-lg)'
          }}>
            <div style={{
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--space-md)'
            }}>
              <h5 style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                margin: '0 0 var(--space-xs) 0',
                color: 'var(--text-primary)'
              }}>react-ts-full</h5>
              <p style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)',
                margin: 0
              }}>React + TypeScript + All Components (~150KB)</p>
            </div>
            <div style={{
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--space-md)'
            }}>
              <h5 style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                margin: '0 0 var(--space-xs) 0',
                color: 'var(--text-primary)'
              }}>react-ts-themes</h5>
              <p style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)',
                margin: 0
              }}>React + TypeScript + Themes Only (~65KB)</p>
            </div>
            <div style={{
              backgroundColor: 'var(--bg-elevated)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              padding: 'var(--space-md)'
            }}>
              <h5 style={{
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                margin: '0 0 var(--space-xs) 0',
                color: 'var(--text-primary)'
              }}>vanilla-ts</h5>
              <p style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--text-secondary)',
                margin: 0
              }}>Vanilla + TypeScript + CSS Variables (~45KB)</p>
            </div>
          </div>

          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-secondary)',
            margin: '0 0 var(--space-md) 0',
            lineHeight: 1.6
          }}>
            Then just:
          </p>

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
cd my-app
npm install
npm run dev
          </pre>
        </div>
      </section>

      {/* Manual Installation */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          📚 Manual Installation
        </h2>
        
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)',
          marginBottom: 'var(--space-lg)'
        }}>
          <p style={{
            fontSize: 'var(--font-size-base)',
            color: 'var(--text-secondary)',
            margin: '0 0 var(--space-lg) 0',
            lineHeight: 1.6
          }}>
            Add FlowLabKit UI to an existing project:
          </p>
          
          <pre style={{
            backgroundColor: 'var(--bg-elevated)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-lg)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-primary)',
            overflow: 'auto',
            fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            margin: '0 0 var(--space-lg) 0'
          }}>
npm install @flowlabkit/ui
          </pre>

          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-secondary)',
            margin: '0',
            lineHeight: 1.6
          }}>
            Then wrap your app in <code style={{
              backgroundColor: 'var(--bg-elevated)',
              padding: '0.2em 0.4em',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.9em'
            }}>ThemeProvider</code> and start using components or CSS variables. 
            See the examples below for complete setup details.
          </p>
        </div>
      </section>

      {/* Setup Examples */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          ⚙️ Setup Examples
        </h2>
        
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)',
          marginBottom: 'var(--space-lg)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-medium)',
            margin: '0 0 var(--space-md) 0',
            color: 'var(--text-primary)'
          }}>
            Basic Setup
          </h3>
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
{`import React from 'react';
import { ThemeProvider, Button, Card } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark', fontSize: 'medium' }}>
      <Card>
        <h1>Welcome to FlowLabKit UI!</h1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </ThemeProvider>
  );
}

export default App;`}
          </pre>
        </div>

        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)'
        }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-medium)',
            margin: '0 0 var(--space-md) 0',
            color: 'var(--text-primary)'
          }}>
            Custom Themes & Advanced Configuration
          </h3>
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
{`import React from 'react';
import { ThemeProvider } from '@flowlabkit/ui';
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes';

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme}
      darkTheme={cyberpunkTheme}
      initialConfig={{
        mode: 'dark',
        fontSize: 'large',
        compactMode: false
      }}
      persistToLocalStorage={true}
      onThemeChange={(info) => {
        console.log(\`Switched to \${info.themeName} in \${info.mode} mode\`);
      }}
    >
      <YourApp />
    </ThemeProvider>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Requirements */}
      <section>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          Requirements
        </h2>
        
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)'
        }}>
          <ul style={{
            color: 'var(--text-primary)',
            fontSize: 'var(--font-size-base)',
            lineHeight: 1.6,
            margin: 0,
            paddingLeft: 'var(--space-lg)'
          }}>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>React 18.0+</strong> - Hooks support required
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>TypeScript 4.0+</strong> - Recommended for full type safety
            </li>
            <li style={{ marginBottom: 'var(--space-sm)' }}>
              <strong>Modern Browser</strong> - CSS Custom Properties support
            </li>
            <li>
              <strong>Node.js 16+</strong> - For development and build processes
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default InstallationPage;