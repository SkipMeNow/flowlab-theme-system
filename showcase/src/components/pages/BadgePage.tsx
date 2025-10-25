import React from "react";
import { Layout, Text, Badge, Card, useTheme } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";

export const BadgePage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout title="Badge" description="Small status and label component for highlighting information">
      
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Basic Usage
        </Text>
        
        <CodeExample
          title="Simple Badge"
          code={`<Badge>New</Badge>`}
          preview={
            <Card style={{ height: '60px', overflow: 'hidden' }}>
              <Badge>New</Badge>
            </Card>
          }
        />

        <CodeExample
          title="Badge with Text"
          code={`<Layout direction="row" align="center" gap="sm">
  <Text>Status:</Text>
  <Badge>Active</Badge>
</Layout>`}
          preview={
            <Layout direction="row" align="center" gap="sm">
              <Text>Status:</Text>
              <Badge>Active</Badge>
            </Layout>
          }
        />
      </Layout>

      {/* Badge Variants */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Badge Variants
        </Text>
        
        <CodeExample
          title="Success Badge"
          code={`<Badge variant="success">Success</Badge>`}
          preview={<Badge variant="success">Success</Badge>}
        />

        <CodeExample
          title="Warning Badge"
          code={`<Badge variant="warning">Warning</Badge>`}
          preview={<Badge variant="warning">Warning</Badge>}
        />

        <CodeExample
          title="Error Badge"
          code={`<Badge variant="error">Error</Badge>`}
          preview={<Badge variant="error">Error</Badge>}
        />
      </Layout>

      {/* Badge Sizes */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Badge Sizes
        </Text>
        
        <CodeExample
          title="Different Sizes"
          code={`<Layout direction="row" align="center" gap="md">
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</Layout>`}
          preview={
            <Layout direction="row" align="center" gap="md">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </Layout>
          }
        />
      </Layout>

      {/* Badge with Numbers */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Notification Badges
        </Text>
        
        <CodeExample
          title="Number Badges"
          code={`<Layout direction="row" align="center" gap="lg">
  <Layout direction="row" align="center" gap="xs">
    <Text>Messages</Text>
    <Badge variant="primary" shape="pill" size="sm">3</Badge>
  </Layout>
  
  <Layout direction="row" align="center" gap="xs">
    <Text>Notifications</Text>
    <Badge variant="error" shape="pill" size="sm">12</Badge>
  </Layout>
</Layout>`}
          preview={
            <Layout direction="row" align="center" gap="lg">
              <Layout direction="row" align="center" gap="xs">
                <Text>Messages</Text>
                <Badge variant="primary" shape="pill" size="sm">3</Badge>
              </Layout>
              
              <Layout direction="row" align="center" gap="xs">
                <Text>Notifications</Text>
                <Badge variant="error" shape="pill" size="sm">12</Badge>
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
            • variant?: "default" | "primary" | "secondary" | "success" | "warning" | "error" | "info"<br/>
            • size?: "sm" | "md" | "lg"<br/>
            • shape?: "rounded" | "pill" | "square"<br/>
            • dot?: boolean<br/>
            • children?: React.ReactNode<br/>
            • className?: string
          </Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};