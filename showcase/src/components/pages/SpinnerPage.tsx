import React from "react";
import { Layout, Text, Spinner, Button, Card, useTheme } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";

export const SpinnerPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout title="Spinner" description="Loading spinner component for indicating ongoing operations">
      
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Basic Usage
        </Text>
        
        <CodeExample
          title="Simple Spinner"
          code={`<Card style={{ height: "80px", overflow: "hidden", padding: "16px" }}>
  <Spinner />
</Card>`}
          preview={
            <Card style={{ height: "80px", overflow: "hidden", padding: "16px" }}>
              <Spinner />
            </Card>
          }
        />

        <CodeExample
          title="Spinner with Text"
          code={`<Card style={{ height: "100px", overflow: "hidden", padding: "16px" }}>
  <Layout direction="row" align="center" gap="md">
    <Spinner />
    <Text>Loading...</Text>
  </Layout>
</Card>`}
          preview={
            <Card style={{ height: "100px", overflow: "hidden", padding: "16px" }}>
              <Layout direction="row" align="center" gap="md">
                <Spinner />
                <Text>Loading...</Text>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Spinner Sizes */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Spinner Sizes
        </Text>
        
        <CodeExample
          title="Different Sizes"
          code={`<Card style={{ height: "120px", overflow: "hidden", padding: "16px" }}>
  <Layout direction="row" align="center" gap="lg">
    <Layout direction="column" align="center" gap="sm">
      <Spinner size="sm" />
      <Text size="sm">Small</Text>
    </Layout>
    
    <Layout direction="column" align="center" gap="sm">
      <Spinner size="md" />
      <Text size="sm">Medium</Text>
    </Layout>
    
    <Layout direction="column" align="center" gap="sm">
      <Spinner size="lg" />
      <Text size="sm">Large</Text>
    </Layout>
  </Layout>
</Card>`}
          preview={
            <Card style={{ height: "120px", overflow: "hidden", padding: "16px" }}>
              <Layout direction="row" align="center" gap="lg">
                <Layout direction="column" align="center" gap="sm">
                  <Spinner size="sm" />
                  <Text size="sm">Small</Text>
                </Layout>
                
                <Layout direction="column" align="center" gap="sm">
                  <Spinner size="md" />
                  <Text size="sm">Medium</Text>
                </Layout>
                
                <Layout direction="column" align="center" gap="sm">
                  <Spinner size="lg" />
                  <Text size="sm">Large</Text>
                </Layout>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Spinner Colors */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Spinner Colors
        </Text>
        
        <CodeExample
          title="Custom Colors"
          code={`<Layout direction="row" align="center" gap="lg">
  <Layout direction="column" align="center" gap="sm">
    <Spinner color="primary" />
    <Text size="sm">Primary</Text>
  </Layout>
  
  <Layout direction="column" align="center" gap="sm">
    <Spinner color="secondary" />
    <Text size="sm">Secondary</Text>
  </Layout>
  
  <Layout direction="column" align="center" gap="sm">
    <Spinner 
      style={{ 
        borderTopColor: variables.colors.accent[600] 
      }} 
    />
    <Text size="sm">Custom</Text>
  </Layout>
</Layout>`}
          preview={
            <Layout direction="row" align="center" gap="lg">
              <Layout direction="column" align="center" gap="sm">
                <Spinner color="primary" />
                <Text size="sm">Primary</Text>
              </Layout>
              
              <Layout direction="column" align="center" gap="sm">
                <Spinner color="secondary" />
                <Text size="sm">Secondary</Text>
              </Layout>
              
              <Layout direction="column" align="center" gap="sm">
                <Spinner 
                  style={{ 
                    borderTopColor: variables.colors.accent[600] 
                  }} 
                />
                <Text size="sm">Custom</Text>
              </Layout>
            </Layout>
          }
        />
      </Layout>

      {/* Loading States */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Loading States
        </Text>
        
        <CodeExample
          title="Button Loading State"
          code={`<Layout direction="row" gap="md">
  <Button variant="primary">
    <Layout direction="row" align="center" gap="sm">
      <Spinner size="sm" color="white" />
      <Text>Loading...</Text>
    </Layout>
  </Button>
  
  <Button variant="secondary" disabled>
    <Layout direction="row" align="center" gap="sm">
      <Spinner size="sm" />
      <Text>Processing...</Text>
    </Layout>
  </Button>
</Layout>`}
          preview={
            <Layout direction="row" gap="md">
              <Button variant="primary">
                <Layout direction="row" align="center" gap="sm">
                  <Spinner size="sm" color="white" />
                  <Text>Loading...</Text>
                </Layout>
              </Button>
              
              <Button variant="secondary" disabled>
                <Layout direction="row" align="center" gap="sm">
                  <Spinner size="sm" />
                  <Text>Processing...</Text>
                </Layout>
              </Button>
            </Layout>
          }
        />

        <CodeExample
          title="Centered Loading"
          code={`<Layout 
  justify="center" 
  align="center" 
  style={{ 
    height: "200px", 
    backgroundColor: variables.colors.background.surface,
    border: \`1px solid \${variables.colors.border}\`,
    borderRadius: variables.borderRadius.md
  }}
>
  <Layout direction="column" align="center" gap="md">
    <Spinner size="lg" />
    <Text>Loading content...</Text>
  </Layout>
</Layout>`}
          preview={
            <Layout 
              justify="center" 
              align="center" 
              style={{ 
                height: "200px", 
                backgroundColor: variables.colors.background.surface,
                border: `1px solid ${variables.colors.border}`,
                borderRadius: variables.borderRadius.md
              }}
            >
              <Layout direction="column" align="center" gap="md">
                <Spinner size="lg" />
                <Text>Loading content...</Text>
              </Layout>
            </Layout>
          }
        />
      </Layout>

      {/* API Reference */}
      <Layout direction="column" gap="md">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          API Reference
        </Text>
        
        <Layout direction="column" gap="sm" style={{ backgroundColor: variables.colors.background.surface, padding: variables.spacing.lg, borderRadius: variables.borderRadius.md }}>
          <Text weight="semibold" style={{ color: variables.colors.text.primary }}>Props</Text>
          <Text size="sm" style={{ color: variables.colors.text.secondary, fontFamily: "monospace" }}>
            • size?: "sm" | "md" | "lg" | number<br/>
            • color?: "primary" | "secondary" | "white" | string<br/>
            • style?: React.CSSProperties<br/>
            • className?: string
          </Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};