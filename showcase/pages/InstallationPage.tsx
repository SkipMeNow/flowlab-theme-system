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
          Get started with FlowLabKit theme system in your React application.
        </p>
      </div>

      {/* Installation Steps */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          Quick Install
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
            1. Install the package
          </h3>
          
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

          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-medium)',
            margin: '0 0 var(--space-md) 0',
            color: 'var(--text-primary)'
          }}>
            2. Basic setup
          </h3>
          
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
{`import React from 'react';
import { ThemeProvider } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark', fontSize: 'medium' }}>
      <YourAppContent />
    </ThemeProvider>
  );
}

export default App;`}
          </pre>

          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-medium)',
            margin: '0 0 var(--space-md) 0',
            color: 'var(--text-primary)'
          }}>
            3. Use components or CSS variables
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
{`// Option 1: Use built-in components
import { Button, Input, Card } from '@flowlabkit/ui';

function MyComponent() {
  return (
    <Card>
      <Input label="Your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}

// Option 2: Use CSS variables in your own components
function MyCustomComponent() {
  return (
    <div style={{
      backgroundColor: 'var(--bg-surface)',
      color: 'var(--text-primary)',
      padding: 'var(--space-lg)',
      borderRadius: 'var(--radius-md)'
    }}>
      Themed content
    </div>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Advanced Setup */}
      <section style={{ marginBottom: 'var(--space-2xl)' }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          margin: '0 0 var(--space-lg) 0',
          color: 'var(--text-primary)'
        }}>
          Custom Theme Setup
        </h2>
        
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)'
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