import React from 'react';
import { Text, Layout, useTheme } from '../../../../src';
import { DocPageLayout } from '../DocPageLayout';
import { CodeExample } from '../CodeExample';

export const OverviewPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout
      title="FlowLabKit"
      description="A modern React component library with TypeScript support and powerful theming capabilities"
    >
      {/* Introduction */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          What is FlowLabKit?
        </Text>
        <Text size="md">
          FlowLabKit is a comprehensive React component library designed to help developers 
          build beautiful, accessible, and consistent user interfaces quickly. It provides 
          a complete set of UI components with built-in theming, TypeScript support, and 
          modern React patterns.
        </Text>
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
              <strong>TypeScript First:</strong> Built with TypeScript for excellent developer experience and type safety
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
              <strong>Powerful Theming:</strong> Organized theme variables system with light/dark mode support
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
              <strong>Accessible:</strong> Built with accessibility best practices and ARIA support
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
              <strong>Flexible:</strong> Customizable components that work with your design system
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
              <strong>Modern:</strong> Uses latest React patterns including hooks and functional components
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
          title="Basic Usage"
          code={`import React from 'react';
import { ThemeProvider, Button, Text, Layout } from 'flowlabkit';
import { lightTheme } from 'flowlabkit/themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout direction="column" gap="md" padding="lg">
        <Text as="h1" size="2xl" weight="bold">
          Welcome to FlowLabKit
        </Text>
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </Layout>
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
        
        <Layout direction="column" gap="sm" layoutWidth="auto">
          <Text size="md" weight="medium" color="secondary">Layout & Structure</Text>
          <Text size="sm" style={{ marginLeft: variables.spacing.md }}>
            Layout, Card, Panels
          </Text>

          <Text size="md" weight="medium" color="secondary">Typography & Content</Text>
          <Text size="sm" style={{ marginLeft: variables.spacing.md }}>
            Text, Link
          </Text>

          <Text size="md" weight="medium" color="secondary">Form Controls</Text>
          <Text size="sm" style={{ marginLeft: variables.spacing.md }}>
            Button, Input, Dropdown
          </Text>

          <Text size="md" weight="medium" color="secondary">Feedback & Status</Text>
          <Text size="sm" style={{ marginLeft: variables.spacing.md }}>
            Badge, Spinner, LoadingIndicator
          </Text>

          <Text size="md" weight="medium" color="secondary">Media</Text>
          <Text size="sm" style={{ marginLeft: variables.spacing.md }}>
            Image, Video
          </Text>
        </Layout>
      </Layout>

      {/* Next Steps */}
      <Layout
        direction="column"
        gap="md"
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
          Check out the Installation guide to add FlowLabKit to your project, 
          or explore individual components to see what's available.
        </Text>
      </Layout>
    </DocPageLayout>
  );
};