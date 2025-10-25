import React from "react";
import { Text, Layout, Card, CardBody, Button } from "../../../../src";
import { DocPageLayout } from "../DocPageLayout";
import { CodeExample } from "../CodeExample";

export const GettingStartedPage: React.FC = () => {
  const basicSetupCode = `import React from 'react';
import { 
  ThemeProvider, 
  ResponsiveProvider, 
  ResponsiveWrapper,
  Button, 
  Card, 
  CardBody 
} from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'light', fontSize: 'medium' }}>
      <ResponsiveProvider>
        <div style={{ minHeight: "100vh", position: 'relative' }}>
          {/* Navigation with responsive behavior */}
          <ResponsiveWrapper behavior="Navigation">
            <Navigation />
          </ResponsiveWrapper>

          {/* Header with responsive behavior */}
          <ResponsiveWrapper behavior="Header">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1>My App</h1>
              <Button variant="primary">Toggle Theme</Button>
            </div>
          </ResponsiveWrapper>

          {/* Content with responsive behavior */}
          <ResponsiveWrapper behavior="Content">
            <Card>
              <CardBody>
                <h2>Welcome to FlowLabKit!</h2>
                <p>Your app is now responsive and themed!</p>
              </CardBody>
            </Card>
          </ResponsiveWrapper>
        </div>
      </ResponsiveProvider>
    </ThemeProvider>
  );
}

export default App;`;

  const quickStartCode = `// Install the package
npm install @flowlabkit/ui

// Basic usage
import { ThemeProvider, Button } from '@flowlabkit/ui';

function MyApp() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello World!</Button>
    </ThemeProvider>
  );
}`;

  const responsiveHooksCode = `import { useBreakpoint, useIsMobile, useOrientation } from '@flowlabkit/ui';

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const orientation = useOrientation();
  
  return (
    <div style={{
      padding: isMobile ? '1rem' : '2rem',
      maxWidth: breakpoint === 'xs' ? '100%' : '1200px',
      flexDirection: orientation === 'portrait' ? 'column' : 'row'
    }}>
      <h1>Breakpoint: {breakpoint}</h1>
      <p>Mobile: {isMobile ? 'Yes' : 'No'}</p>
      <p>Orientation: {orientation}</p>
    </div>
  );
}`;

  const themeToggleCode = `import { useTheme } from '@flowlabkit/ui';

function ThemeToggle() {
  const { theme, themeName, config, toggleTheme } = useTheme();
  
  return (
    <div>
      <h3>Current: {themeName} ({config.mode} mode)</h3>
      <button onClick={toggleTheme}>
        Switch to {config.mode === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
}`;

  return (
    <DocPageLayout
      title="Getting Started"
      description="Learn how to integrate FlowLabKit UI into your React application with comprehensive examples and best practices."
    >
      <Layout direction="column" gap="xl">
        {/* Quick Start */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Quick Start
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            Get up and running with FlowLabKit UI in just a few minutes. Install the package 
            and start building beautiful, responsive interfaces.
          </Text>
          <CodeExample code={quickStartCode} language="bash" />
        </Layout>

        {/* Basic Setup */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Basic Setup with Responsive System
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            Here's a complete example showing how to set up FlowLabKit UI with both theming 
            and responsive behavior. This includes the ResponsiveProvider and ResponsiveWrapper 
            components for automatic responsive layouts.
          </Text>
          <CodeExample code={basicSetupCode} language="tsx" />
        </Layout>

        {/* Key Features */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Key Features Overview
          </Text>
          <Layout direction="column" gap="sm">
            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold" size="lg">🎨 8 Beautiful Themes</Text>
                  <Text size="md" style={{ lineHeight: 1.6 }}>
                    Light, Dark, Ocean, Forest, Sunset, Lavender, Cyberpunk, and Autumn themes 
                    with seamless switching and CSS variable support.
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold" size="lg">📱 Advanced Responsive System</Text>
                  <Text size="md" style={{ lineHeight: 1.6 }}>
                    CSS-like responsive behavior with unified layout components, real-time 
                    breakpoint detection, and mobile-first design principles.
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold" size="lg">⚡ Performance Optimized</Text>
                  <Text size="md" style={{ lineHeight: 1.6 }}>
                    Tree-shakable imports, CSS variables for efficient theme changes, 
                    and minimal bundle size impact.
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold" size="lg">🔧 TypeScript First</Text>
                  <Text size="md" style={{ lineHeight: 1.6 }}>
                    Complete type safety with comprehensive interfaces and 
                    excellent IDE support.
                  </Text>
                </Layout>
              </CardBody>
            </Card>
          </Layout>
        </Layout>

        {/* Responsive Hooks */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Using Responsive Hooks
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            FlowLabKit UI provides several hooks for manual responsive control. These hooks 
            update in real-time when the window is resized, giving you fine-grained control 
            over your component behavior.
          </Text>
          <CodeExample code={responsiveHooksCode} language="tsx" />
        </Layout>

        {/* Theme Management */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Theme Management
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            The useTheme hook provides access to the current theme state and functions 
            to modify it. You can toggle between light/dark modes, change themes, 
            and access theme variables.
          </Text>
          <CodeExample code={themeToggleCode} language="tsx" />
        </Layout>

        {/* Next Steps */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Next Steps
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            Now that you have FlowLabKit UI set up, explore the different sections:
          </Text>
          <Layout direction="column" gap="sm">
            <Text size="md">
              • <strong>Theming</strong> - Learn about customizing themes and creating your own
            </Text>
            <Text size="md">
              • <strong>Components</strong> - Explore all available UI components with examples
            </Text>
            <Text size="md">
              • <strong>Responsive System</strong> - Deep dive into responsive layout patterns
            </Text>
            <Text size="md">
              • <strong>Installation</strong> - Advanced installation options and tree-shaking
            </Text>
          </Layout>
        </Layout>

        {/* Helpful Resources */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Helpful Resources
          </Text>
          <Layout direction="row" gap="md" wrap>
            <Card style={{ flex: 1, minWidth: '250px' }}>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">📖 Documentation</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Complete API reference and guides
                  </Text>
                  <Button variant="outline" size="sm">
                    View Docs
                  </Button>
                </Layout>
              </CardBody>
            </Card>

            <Card style={{ flex: 1, minWidth: '250px' }}>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">🎮 Live Demo</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Interactive component examples
                  </Text>
                  <Button variant="outline" size="sm">
                    Try Demo
                  </Button>
                </Layout>
              </CardBody>
            </Card>

            <Card style={{ flex: 1, minWidth: '250px' }}>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">🐙 GitHub</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Source code and issue tracking
                  </Text>
                  <Button variant="outline" size="sm">
                    View Source
                  </Button>
                </Layout>
              </CardBody>
            </Card>
          </Layout>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};