import React from 'react';
import { Text, Layout, useTheme, Card, CardBody, Button } from '../../../../src';
import { DocPageLayout } from '../DocPageLayout';
import { CodeExample } from '../CodeExample';

export const OverviewPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout
      title="FlowLabKit UI"
      description="A comprehensive React component library with 8 beautiful themes, advanced responsive system, and TypeScript-first design"
    >
      {/* Introduction */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          What is FlowLabKit UI?
        </Text>
        <Text size="md">
          FlowLabKit UI is a comprehensive React component library designed to help developers 
          build beautiful, responsive, and accessible user interfaces quickly. It provides 
          a complete set of UI components with 8 built-in themes, an advanced responsive system, 
          TypeScript-first design, and modern React patterns.
        </Text>
      </Layout>

      {/* Quick Links */}
      <Layout direction="row" gap="md" wrap>
        <Card style={{ flex: 1, minWidth: '250px' }}>
          <CardBody>
            <Layout direction="column" gap="sm">
              <Text weight="semibold" size="lg">🚀 Getting Started</Text>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Quick setup guide with examples and best practices
              </Text>
              <Button variant="outline" size="sm">
                View Guide
              </Button>
            </Layout>
          </CardBody>
        </Card>

        <Card style={{ flex: 1, minWidth: '250px' }}>
          <CardBody>
            <Layout direction="column" gap="sm">
              <Text weight="semibold" size="lg">🎨 8 Beautiful Themes</Text>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                Light, Dark, Ocean, Forest, Sunset, Lavender, Cyberpunk, Autumn
              </Text>
              <Button variant="outline" size="sm">
                Explore Themes
              </Button>
            </Layout>
          </CardBody>
        </Card>

        <Card style={{ flex: 1, minWidth: '250px' }}>
          <CardBody>
            <Layout direction="column" gap="sm">
              <Text weight="semibold" size="lg">📱 Responsive System</Text>
              <Text size="sm" style={{ lineHeight: 1.5 }}>
                CSS-like responsive behavior with mobile-first design
              </Text>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </Layout>
          </CardBody>
        </Card>
      </Layout>

      {/* Key Features */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Key Features
        </Text>
        
        <Layout direction="column" gap="sm" layoutWidth="auto">
          <Layout direction="row" gap="sm" align="start" layoutWidth="auto">
            <span style={{ 
              color: variables.colors.semantic.success,
              fontSize: variables.typography.fontSize.lg,
              lineHeight: '1.5'
            }}>
              ✓
            </span>
            <Text size="md">
              <strong>8 Beautiful Themes:</strong> Light, Dark, Ocean, Forest, Sunset, Lavender, Cyberpunk, and Autumn themes with seamless switching
            </Text>
          </Layout>

          <Layout direction="row" gap="sm" align="start">
            <span style={{ 
              color: variables.colors.semantic.success,
              fontSize: variables.typography.fontSize.lg,
              lineHeight: '1.5'
            }}>
              ✓
            </span>
            <Text size="md">
              <strong>Advanced Responsive System:</strong> CSS-like responsive behavior with unified layout components and real-time breakpoint detection
            </Text>
          </Layout>

          <Layout direction="row" gap="sm" align="start" layoutWidth="auto">
            <span style={{ 
              color: variables.colors.semantic.success,
              fontSize: variables.typography.fontSize.lg,
              lineHeight: '1.5'
            }}>
              ✓
            </span>
            <Text size="md">
              <strong>TypeScript First:</strong> Built with TypeScript for excellent developer experience and complete type safety
            </Text>
          </Layout>

          <Layout direction="row" gap="sm" align="start" layoutWidth="auto">
            <span style={{ 
              color: variables.colors.semantic.success,
              fontSize: variables.typography.fontSize.lg,
              lineHeight: '1.5'
            }}>
              ✓
            </span>
            <Text size="md">
              <strong>Mobile-First Design:</strong> Touch-friendly interactions, proper spacing, and optimized mobile experiences
            </Text>
          </Layout>

          <Layout direction="row" gap="sm" align="start" layoutWidth="auto">
            <span style={{ 
              color: variables.colors.semantic.success,
              fontSize: variables.typography.fontSize.lg,
              lineHeight: '1.5'
            }}>
              ✓
            </span>
            <Text size="md">
              <strong>Performance Optimized:</strong> Tree-shakable imports, CSS variables for efficient theme changes, and minimal bundle size
            </Text>
          </Layout>

          <Layout direction="row" gap="sm" align="start" layoutWidth="auto">
            <span style={{ 
              color: variables.colors.semantic.success,
              fontSize: variables.typography.fontSize.lg,
              lineHeight: '1.5'
            }}>
              ✓
            </span>
            <Text size="md">
              <strong>Accessible:</strong> Built with accessibility best practices, ARIA support, and keyboard navigation
            </Text>
          </Layout>
        </Layout>
      </Layout>

      {/* Quick Example */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Quick Example
        </Text>
        
        <CodeExample
          title="Basic Usage with Responsive System"
          code={`import React from 'react';
import { 
  ThemeProvider, 
  ResponsiveProvider, 
  ResponsiveWrapper,
  Button, 
  Text, 
  Layout 
} from '@flowlabkit/ui';

function App() {
  return (
    <ThemeProvider initialConfig={{ mode: 'dark' }}>
      <ResponsiveProvider>
        <div style={{ minHeight: "100vh", position: 'relative' }}>
          {/* Navigation with responsive behavior */}
          <ResponsiveWrapper behavior="Navigation">
            <Navigation />
          </ResponsiveWrapper>

          {/* Content with responsive behavior */}
          <ResponsiveWrapper behavior="Content">
            <Layout direction="column" gap="md" padding="lg">
              <Text as="h1" size="2xl" weight="bold">
                Welcome to FlowLabKit UI
              </Text>
              <Button variant="primary" size="md">
                Get Started
              </Button>
            </Layout>
          </ResponsiveWrapper>
        </div>
      </ResponsiveProvider>
    </ThemeProvider>
  );
}`}
        />
      </Layout>

      {/* Available Components */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Available Components
        </Text>
        
        <Layout direction="row" gap="md" wrap>
          <Card style={{ flex: 1, minWidth: '300px' }}>
            <CardBody>
              <Layout direction="column" gap="sm">
                <Text weight="semibold" size="lg">📐 Layout & Structure</Text>
                <Text size="sm" style={{ lineHeight: 1.5 }}>
                  <strong>Layout:</strong> Flexible container with direction, gap, padding<br/>
                  <strong>Card:</strong> Surface container with header, body, footer<br/>
                  <strong>Panels:</strong> Resizable panel system with 10+ presets
                </Text>
              </Layout>
            </CardBody>
          </Card>

          <Card style={{ flex: 1, minWidth: '300px' }}>
            <CardBody>
              <Layout direction="column" gap="sm">
                <Text weight="semibold" size="lg">📝 Typography & Content</Text>
                <Text size="sm" style={{ lineHeight: 1.5 }}>
                  <strong>Text:</strong> Comprehensive typography with sizes, weights<br/>
                  <strong>Link:</strong> Accessible links with hover states<br/>
                  <strong>Badge:</strong> Status indicators and labels
                </Text>
              </Layout>
            </CardBody>
          </Card>

          <Card style={{ flex: 1, minWidth: '300px' }}>
            <CardBody>
              <Layout direction="column" gap="sm">
                <Text weight="semibold" size="lg">🎛️ Form Controls</Text>
                <Text size="sm" style={{ lineHeight: 1.5 }}>
                  <strong>Button:</strong> Primary, secondary, outline, ghost variants<br/>
                  <strong>Input:</strong> Text inputs with validation states<br/>
                  <strong>Dropdown:</strong> Select menus with search and multi-select
                </Text>
              </Layout>
            </CardBody>
          </Card>

          <Card style={{ flex: 1, minWidth: '300px' }}>
            <CardBody>
              <Layout direction="column" gap="sm">
                <Text weight="semibold" size="lg">🔄 Feedback & Status</Text>
                <Text size="sm" style={{ lineHeight: 1.5 }}>
                  <strong>Spinner:</strong> Loading indicators with multiple styles<br/>
                  <strong>LoadingIndicator:</strong> Full-page loading states<br/>
                  <strong>Badge:</strong> Status indicators and notification counts
                </Text>
              </Layout>
            </CardBody>
          </Card>

          <Card style={{ flex: 1, minWidth: '300px' }}>
            <CardBody>
              <Layout direction="column" gap="sm">
                <Text weight="semibold" size="lg">📱 Responsive System</Text>
                <Text size="sm" style={{ lineHeight: 1.5 }}>
                  <strong>ResponsiveWrapper:</strong> CSS-like responsive behavior<br/>
                  <strong>Hooks:</strong> useBreakpoint, useIsMobile, useOrientation<br/>
                  <strong>Layouts:</strong> Unified components for all screen sizes
                </Text>
              </Layout>
            </CardBody>
          </Card>

          <Card style={{ flex: 1, minWidth: '300px' }}>
            <CardBody>
              <Layout direction="column" gap="sm">
                <Text weight="semibold" size="lg">🎨 Media & Assets</Text>
                <Text size="sm" style={{ lineHeight: 1.5 }}>
                  <strong>Image:</strong> Responsive images with loading states<br/>
                  <strong>Video:</strong> Video players with controls<br/>
                  <strong>Icons:</strong> Icon system integration ready
                </Text>
              </Layout>
            </CardBody>
          </Card>
        </Layout>
      </Layout>

      {/* Installation Preview */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Installation
        </Text>
        <CodeExample
          title="npm install"
          code={`# Install FlowLabKit UI
npm install @flowlabkit/ui

# Or use the interactive installer (like Vite!)
npm create flowlabkit-app@latest my-app`}
        />
      </Layout>

      {/* Next Steps */}
      <Layout
        direction="column"
        gap="lg"
        padding="lg"
        layoutWidth="auto"
        style={{
          backgroundColor: variables.colors.background.surface,
          borderRadius: variables.borderRadius.lg,
          border: `1px solid ${variables.colors.border}`,
        }}
      >
        <Text as="h3" size="lg" weight="semibold">
          Ready to get started?
        </Text>
        <Text size="md">
          Explore the comprehensive documentation and examples to learn how to integrate 
          FlowLabKit UI into your React applications.
        </Text>
        
        <Layout direction="row" gap="md" wrap>
          <Button variant="primary" size="md">
            Getting Started Guide
          </Button>
          <Button variant="outline" size="md">
            Browse Components
          </Button>
          <Button variant="outline" size="md">
            View Themes
          </Button>
        </Layout>

        <Layout direction="column" gap="sm">
          <Text size="sm" weight="medium" style={{ color: variables.colors.text.secondary }}>
            What you'll learn:
          </Text>
          <Text size="sm">• How to set up themes and responsive behavior</Text>
          <Text size="sm">• Component usage patterns and best practices</Text>
          <Text size="sm">• Creating custom themes and responsive layouts</Text>
          <Text size="sm">• TypeScript integration and optimization techniques</Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};