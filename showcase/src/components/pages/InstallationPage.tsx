import React from 'react';
import { Text, Layout, useTheme } from '../../../../src';
import { DocPageLayout } from '../DocPageLayout';
import { CodeExample } from '../CodeExample';

export const InstallationPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout
      title="Installation"
      description="Get FlowLabKit up and running in your React project"
    >
      {/* NPM Installation */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Install via NPM
        </Text>
        <Text size="md">
          Install FlowLabKit using your preferred package manager:
        </Text>
        
        <CodeExample
          title="NPM"
          code="npm install flowlabkit"
          language="bash"
        />
        
        <CodeExample
          title="Yarn"
          code="yarn add flowlabkit"
          language="bash"
        />
        
        <CodeExample
          title="PNPM"
          code="pnpm add flowlabkit"
          language="bash"
        />
      </Layout>

      {/* Peer Dependencies */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Peer Dependencies
        </Text>
        <Text size="md">
          FlowLabKit requires React 16.8+ for hooks support:
        </Text>
        
        <CodeExample
          code={`{
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
}`}
          language="json"
        />
      </Layout>

      {/* Setup ThemeProvider */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Setup ThemeProvider
        </Text>
        <Text size="md">
          Wrap your app with the ThemeProvider to enable theming:
        </Text>
        
        <CodeExample
          title="App.tsx"
          code={`import React from 'react';
import { ThemeProvider } from 'flowlabkit';
import { lightTheme } from 'flowlabkit/themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* Your app content */}
    </ThemeProvider>
  );
}

export default App;`}
        />
      </Layout>

      {/* Import Components */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Import Components
        </Text>
        <Text size="md">
          Import components as needed in your application:
        </Text>
        
        <CodeExample
          title="Individual Imports"
          code={`import { Button, Text, Layout, Card } from 'flowlabkit';`}
        />
        
        <CodeExample
          title="Theme Imports"
          code={`import { lightTheme, darkTheme } from 'flowlabkit/themes';`}
        />
        
        <CodeExample
          title="Hook Imports"
          code={`import { useTheme } from 'flowlabkit';`}
        />
      </Layout>

      {/* TypeScript */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          TypeScript Support
        </Text>
        <Text size="md">
          FlowLabKit is built with TypeScript and includes type definitions out of the box. 
          No additional @types packages needed!
        </Text>
        
        <CodeExample
          title="TypeScript Example"
          code={`import React from 'react';
import { Button, ButtonProps } from 'flowlabkit';

interface MyButtonProps extends ButtonProps {
  customProp?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props} />;
};`}
        />
      </Layout>

      {/* Bundle Size */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Bundle Size
        </Text>
        <Text size="md">
          FlowLabKit is designed to be lightweight and tree-shakable. Only import what you need:
        </Text>
        
        <Layout
          direction="row"
          gap="md"
          wrap
          layoutWidth="auto"
          style={{ marginTop: variables.spacing.md }}
        >
          <Layout
            direction="column"
            gap="xs"
            padding="md"
            layoutWidth="auto"
            style={{
              backgroundColor: variables.colors.background.surface,
              borderRadius: variables.borderRadius.md,
              border: `1px solid ${variables.colors.border}`,
              minWidth: '150px',
            }}
          >
            <Text size="sm" weight="semibold" color="secondary">Core</Text>
            <Text size="lg" weight="bold">~12KB</Text>
            <Text size="xs" color="secondary">gzipped</Text>
          </Layout>
          
          <Layout
            direction="column"
            gap="xs"
            padding="md"
            layoutWidth="auto"
            style={{
              backgroundColor: variables.colors.background.surface,
              borderRadius: variables.borderRadius.md,
              border: `1px solid ${variables.colors.border}`,
              minWidth: '150px',
            }}
          >
            <Text size="sm" weight="semibold" color="secondary">All Components</Text>
            <Text size="lg" weight="bold">~35KB</Text>
            <Text size="xs" color="secondary">gzipped</Text>
          </Layout>
        </Layout>
      </Layout>

      {/* Next Steps */}
      <Layout
        direction="column"
        gap="md"
        padding="lg"
        layoutWidth="auto"
        style={{
          backgroundColor: variables.colors.semantic.successLight,
          borderRadius: variables.borderRadius.lg,
          border: `1px solid ${variables.colors.semantic.success}`,
        }}
      >
        <Text as="h3" size="lg" weight="semibold" style={{ color: variables.colors.semantic.success }}>
          🎉 You're all set!
        </Text>
        <Text size="md">
          FlowLabKit is now installed and ready to use. Check out the Getting Started guide 
          to learn how to build your first component, or explore individual component documentation.
        </Text>
      </Layout>
    </DocPageLayout>
  );
};