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

export const InstallationDocs: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-sm)" }}>
          Installation
        </Text>
        <Text as="p" size="lg" color="secondary">
          Get started with FlowLabKit UI in your React application
        </Text>
      </div>

      {/* Package Overview */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Package Overview
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-lg)", lineHeight: "1.6" }}>
            FlowLabKit UI is a comprehensive React UI library that includes a powerful theme system, 
            essential components, and modular architecture. Choose the installation method that best fits your needs.
          </Text>
          
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Badge variant="primary">React 18+ Required</Badge>
            <Badge variant="success">TypeScript Ready</Badge>
            <Badge variant="info">Tree-Shakable</Badge>
            <Badge variant="secondary">8 Built-in Themes</Badge>
          </div>
        </CardBody>
      </Card>

      {/* Complete Installation */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", marginBottom: "var(--space-md)" }}>
            <Text as="h2" size="xl" weight="semibold" style={{ margin: 0 }}>
              Complete Package
            </Text>
            <Badge variant="success">Recommended</Badge>
          </div>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-md)", lineHeight: "1.6" }}>
            Install everything in one package - theme system, all themes, and UI components (~150KB):
          </Text>
          
          <CodeBlock>npm install @flowlabkit/ui</CodeBlock>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Quick Start
          </Text>
          
          <CodeBlock language="tsx">{`import React from 'react';
import { ThemeProvider, Button, Card, CardBody } from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark', fontSize: 'medium' }}>
      <Card>
        <CardBody>
          <h1>Welcome to FlowLabKit UI!</h1>
          <Button variant="primary">Get Started</Button>
        </CardBody>
      </Card>
    </ThemeProvider>
  );
}`}</CodeBlock>
        </CardBody>
      </Card>

      {/* Modular Installation */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", marginBottom: "var(--space-md)" }}>
            <Text as="h2" size="xl" weight="semibold" style={{ margin: 0 }}>
              Modular Installation
            </Text>
            <Badge variant="info">Smaller Bundle</Badge>
          </div>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-md)", lineHeight: "1.6" }}>
            Install only what you need for optimal bundle sizes:
          </Text>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Core Only (45KB)
          </Text>
          <Text as="p" size="sm" color="secondary" style={{ marginBottom: "var(--space-sm)" }}>
            Theme system + Light/Dark themes only
          </Text>
          <CodeBlock>npm install @flowlabkit/ui</CodeBlock>
          <CodeBlock language="tsx">{`import { ThemeProvider, useTheme, lightTheme, darkTheme } from '@flowlabkit/ui/core';`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Core + Additional Themes (65KB)
          </Text>
          <Text as="p" size="sm" color="secondary" style={{ marginBottom: "var(--space-sm)" }}>
            Add beautiful themes as needed
          </Text>
          <CodeBlock language="tsx">{`import { ThemeProvider } from '@flowlabkit/ui/core';
import { oceanTheme, cyberpunkTheme, forestTheme } from '@flowlabkit/ui/themes';`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Core + UI Components (95KB)
          </Text>
          <Text as="p" size="sm" color="secondary" style={{ marginBottom: "var(--space-sm)" }}>
            Theme system + essential components
          </Text>
          <CodeBlock language="tsx">{`import { ThemeProvider, lightTheme } from '@flowlabkit/ui/core';
import { Button, Input, Card, Badge } from '@flowlabkit/ui/components';`}</CodeBlock>
        </CardBody>
      </Card>

      {/* Requirements */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Requirements
          </Text>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-md)" }}>
            <div>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                React Version
              </Text>
              <Badge variant="primary">React 18.0.0+</Badge>
              <Text as="p" size="sm" color="secondary" style={{ marginTop: "var(--space-xs)" }}>
                Hooks and concurrent features required
              </Text>
            </div>
            
            <div>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                TypeScript
              </Text>
              <Badge variant="info">TypeScript 4.0+</Badge>
              <Text as="p" size="sm" color="secondary" style={{ marginTop: "var(--space-xs)" }}>
                Recommended for full type safety
              </Text>
            </div>
            
            <div>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                Browser Support
              </Text>
              <Badge variant="secondary">Modern Browsers</Badge>
              <Text as="p" size="sm" color="secondary" style={{ marginTop: "var(--space-xs)" }}>
                CSS Custom Properties support required
              </Text>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Bundle Size Comparison */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Bundle Size Comparison
          </Text>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-md)" }}>
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                Full Package
              </Text>
              <Text as="p" size="lg" weight="bold" color="primary">~150KB</Text>
              <Text as="p" size="sm" color="secondary">Everything included</Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                Core Only
              </Text>
              <Text as="p" size="lg" weight="bold" color="success">~45KB</Text>
              <Text as="p" size="sm" color="secondary">Theme system + light/dark</Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                Core + 2 Themes
              </Text>
              <Text as="p" size="lg" weight="bold" color="info">~65KB</Text>
              <Text as="p" size="sm" color="secondary">Core + additional themes</Text>
            </div>
            
            <div style={{ padding: "var(--space-md)", backgroundColor: "var(--bg-elevated)", borderRadius: "var(--radius-md)" }}>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                Core + Components
              </Text>
              <Text as="p" size="lg" weight="bold" color="warning">~95KB</Text>
              <Text as="p" size="sm" color="secondary">Core + all UI components</Text>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Next Steps */}
      <Card>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Next Steps
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-md)", lineHeight: "1.6" }}>
            After installation, explore these key areas:
          </Text>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-md)" }}>
            <div>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                📚 Theme System
              </Text>
              <Text as="p" size="sm" color="secondary">
                Learn about theme configuration, CSS variables, and customization
              </Text>
            </div>
            
            <div>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                🧩 Components
              </Text>
              <Text as="p" size="sm" color="secondary">
                Explore all available components with examples and API documentation
              </Text>
            </div>
            
            <div>
              <Text as="h3" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
                🎨 Themes
              </Text>
              <Text as="p" size="sm" color="secondary">
                Discover 8 built-in themes and learn how to create custom themes
              </Text>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Package Reference */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Package Reference
          </Text>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Available Packages
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
                    Package
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Import Path
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
                    <code>@flowlabkit/ui</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>@flowlabkit/ui</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Main package with all components, themes, and utilities
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>Components</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>@flowlabkit/ui/components</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Individual component imports for tree-shaking
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>Themes</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>@flowlabkit/ui/themes</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Built-in themes and theme utilities
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>Core</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>@flowlabkit/ui/core</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    Core utilities and theme system only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Installation Methods
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
                    Method
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Command
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Use Case
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>npm</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>npm install @flowlabkit/ui</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Standard npm installation for most projects
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>yarn</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>yarn add @flowlabkit/ui</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Yarn package manager installation
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>pnpm</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>pnpm add @flowlabkit/ui</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    PNPM package manager for monorepos
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>CDN</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>&lt;script src="..."&gt;</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    Direct browser usage without build tools
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Requirements & Compatibility
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
                    Requirement
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Version
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>React</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>18.0.0+</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Required for all components and hooks
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>React DOM</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>18.0.0+</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Required for DOM rendering
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>TypeScript</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>4.0.0+</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Optional, but recommended for type safety
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>CSS Custom Properties</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>Modern browsers</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Required for theme system functionality
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>Bundle Size</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>~45KB gzipped</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    Full library size with tree-shaking support
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