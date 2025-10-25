import React from "react";
import { Layout, Text, Card, Button, useTheme } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";

export const CardPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout title="Card" description="Flexible card component for grouping content with consistent styling">
      
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Basic Usage
        </Text>
        
        <CodeExample
          title="Simple Card"
          code={`<Card>
  <Text size="lg" weight="bold">Card Title</Text>
  <Text>This is a simple card with some content.</Text>
</Card>`}
          preview={
            <Card style={{ height: '120px', overflow: 'hidden' }}>
              <Card>
                <Text size="lg" weight="bold">Card Title</Text>
                <Text>This is a simple card with some content.</Text>
              </Card>
            </Card>
          }
        />

        <CodeExample
          title="Card with Padding"
          code={`<Card padding="lg">
  <Text size="lg" weight="bold">Card with Padding</Text>
  <Text>This card has larger padding for more spacing.</Text>
</Card>`}
          preview={
            <Card style={{ height: '140px', overflow: 'hidden' }}>
              <Card padding="lg">
                <Text size="lg" weight="bold">Card with Padding</Text>
                <Text>This card has larger padding for more spacing.</Text>
              </Card>
            </Card>
          }
        />
      </Layout>

      {/* Card Variants */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Card Variants
        </Text>
        
        <CodeExample
          title="Elevated Card"
          code={`<Card 
  style={{
    boxShadow: variables.shadows.md,
    borderColor: "transparent"
  }}
>
  <Text size="lg" weight="bold">Elevated Card</Text>
  <Text>This card has a shadow for elevation effect.</Text>
</Card>`}
          preview={
            <Card style={{ height: '140px', overflow: 'hidden' }}>
              <Card 
                style={{
                  boxShadow: variables.shadows.md,
                  borderColor: "transparent"
                }}
              >
                <Text size="lg" weight="bold">Elevated Card</Text>
                <Text>This card has a shadow for elevation effect.</Text>
              </Card>
            </Card>
          }
        />

        <CodeExample
          title="Accent Border Card"
          code={`<Card 
  style={{
    borderColor: variables.colors.accent[600],
    borderWidth: "2px"
  }}
>
  <Text size="lg" weight="bold" style={{ color: variables.colors.accent[700] }}>
    Accent Card
  </Text>
  <Text>This card has an accent border.</Text>
</Card>`}
          preview={
            <Card style={{ height: '140px', overflow: 'hidden' }}>
              <Card 
                style={{
                  borderColor: variables.colors.accent[600],
                  borderWidth: "2px"
                }}
              >
                <Text size="lg" weight="bold" style={{ color: variables.colors.accent[700] }}>
                  Accent Card
                </Text>
                <Text>This card has an accent border.</Text>
              </Card>
            </Card>
          }
        />
      </Layout>

      {/* Interactive Card */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Interactive Card
        </Text>
        
        <CodeExample
          title="Card with Actions"
          code={`<Card padding="lg">
  <Layout direction="column" gap="md">
    <Text size="lg" weight="bold">Product Card</Text>
    <Text>A great product with amazing features.</Text>
    <Layout direction="row" gap="sm">
      <Button variant="primary" size="sm">Buy Now</Button>
      <Button variant="secondary" size="sm">Learn More</Button>
    </Layout>
  </Layout>
</Card>`}
          preview={
            <Card padding="lg">
              <Layout direction="column" gap="md">
                <Text size="lg" weight="bold">Product Card</Text>
                <Text>A great product with amazing features.</Text>
                <Layout direction="row" gap="sm">
                  <Button variant="primary" size="sm">Buy Now</Button>
                  <Button variant="secondary" size="sm">Learn More</Button>
                </Layout>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Card Grid */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Card Grid
        </Text>
        
        <CodeExample
          title="Card Grid Layout"
          code={`<Layout direction="row" gap="md" wrap={true}>
  <Card style={{ minWidth: "200px", flex: "1" }}>
    <Text weight="bold">Card 1</Text>
    <Text size="sm">First card content</Text>
  </Card>
  <Card style={{ minWidth: "200px", flex: "1" }}>
    <Text weight="bold">Card 2</Text>
    <Text size="sm">Second card content</Text>
  </Card>
  <Card style={{ minWidth: "200px", flex: "1" }}>
    <Text weight="bold">Card 3</Text>
    <Text size="sm">Third card content</Text>
  </Card>
</Layout>`}
          preview={
            <Layout direction="row" gap="md" wrap={true}>
              <Card style={{ minWidth: "200px", flex: "1" }}>
                <Text weight="bold">Card 1</Text>
                <Text size="sm">First card content</Text>
              </Card>
              <Card style={{ minWidth: "200px", flex: "1" }}>
                <Text weight="bold">Card 2</Text>
                <Text size="sm">Second card content</Text>
              </Card>
              <Card style={{ minWidth: "200px", flex: "1" }}>
                <Text weight="bold">Card 3</Text>
                <Text size="sm">Third card content</Text>
              </Card>
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
            • padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl"<br/>
            • children?: React.ReactNode<br/>
            • style?: React.CSSProperties<br/>
            • className?: string<br/>
            • onClick?: () =&gt; void
          </Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};