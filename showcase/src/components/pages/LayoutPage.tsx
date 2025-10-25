import React from "react";
import { Layout, Text, Button, Card, useTheme } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";

export const LayoutPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout title="Layout" description="Flexible layout component with auto-arrangement capabilities and comprehensive styling options">
      
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Basic Usage
        </Text>
        
        <CodeExample
          title="Simple Layout"
          code={`<Layout direction="column" gap="md">
  <Text>First item</Text>
  <Text>Second item</Text>
  <Text>Third item</Text>
</Layout>`}
          preview={
            <Layout direction="column" gap="md">
              <Text>First item</Text>
              <Text>Second item</Text>
              <Text>Third item</Text>
            </Layout>
          }
        />

        <CodeExample
          title="Row Layout"
          code={`<Layout direction="row" gap="md" align="center">
  <Button variant="primary">Button 1</Button>
  <Button variant="secondary">Button 2</Button>
  <Button variant="outline">Button 3</Button>
</Layout>`}
          preview={
            <Layout direction="row" gap="md" align="center">
              <Button variant="primary">Button 1</Button>
              <Button variant="secondary">Button 2</Button>
              <Button variant="outline">Button 3</Button>
            </Layout>
          }
        />
      </Layout>

      {/* Direction & Alignment */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Direction & Alignment
        </Text>
        
        <CodeExample
          title="Justify Content"
          code={`<Layout direction="row" justify="between" align="center" gap="md">
  <Text>Left</Text>
  <Text>Center</Text>
  <Text>Right</Text>
</Layout>`}
          preview={
            <Layout direction="row" justify="between" align="center" gap="md" style={{ border: `1px dashed ${variables.colors.border}`, padding: variables.spacing.md }}>
              <Text>Left</Text>
              <Text>Center</Text>
              <Text>Right</Text>
            </Layout>
          }
        />

        <CodeExample
          title="Center Everything"
          code={`<Layout 
  direction="column" 
  justify="center" 
  align="center" 
  style={{ height: "200px", border: "1px dashed gray" }}
>
  <Text>Perfectly Centered</Text>
  <Button variant="primary">Click Me</Button>
</Layout>`}
          preview={
            <Layout 
              direction="column" 
              justify="center" 
              align="center" 
              style={{ height: "200px", border: `1px dashed ${variables.colors.border}` }}
            >
              <Text>Perfectly Centered</Text>
              <Button variant="primary">Click Me</Button>
            </Layout>
          }
        />
      </Layout>

      {/* Spacing & Sizing */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Spacing & Sizing
        </Text>
        
        <CodeExample
          title="Different Gaps"
          code={`<Layout direction="column" gap="sm">
  <Layout direction="row" gap="xs">
    <Button size="sm">XS Gap</Button>
    <Button size="sm">Between</Button>
    <Button size="sm">Items</Button>
  </Layout>
  <Layout direction="row" gap="lg">
    <Button size="sm">LG Gap</Button>
    <Button size="sm">Between</Button>
    <Button size="sm">Items</Button>
  </Layout>
</Layout>`}
          preview={
            <Layout direction="column" gap="sm">
              <Layout direction="row" gap="xs">
                <Button size="sm">XS Gap</Button>
                <Button size="sm">Between</Button>
                <Button size="sm">Items</Button>
              </Layout>
              <Layout direction="row" gap="lg">
                <Button size="sm">LG Gap</Button>
                <Button size="sm">Between</Button>
                <Button size="sm">Items</Button>
              </Layout>
            </Layout>
          }
        />

        <CodeExample
          title="Width & Height"
          code={`<Layout direction="row" gap="md">
  <Layout 
    width={200} 
    height={100}
    justify="center" 
    align="center"
    style={{ backgroundColor: variables.colors.accent[100] }}
  >
    <Text>200x100</Text>
  </Layout>
  <Layout 
    width="300px" 
    height="100px"
    justify="center" 
    align="center"
    style={{ backgroundColor: variables.colors.accent[200] }}
  >
    <Text>300x100</Text>
  </Layout>
</Layout>`}
          preview={
            <Layout direction="row" gap="md">
              <Layout 
                width={200} 
                height={100}
                justify="center" 
                align="center"
                style={{ backgroundColor: variables.colors.accent[100] }}
              >
                <Text>200x100</Text>
              </Layout>
              <Layout 
                width="300px" 
                height="100px"
                justify="center" 
                align="center"
                style={{ backgroundColor: variables.colors.accent[200] }}
              >
                <Text>300x100</Text>
              </Layout>
            </Layout>
          }
        />
      </Layout>

      {/* Auto Arrangement */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Auto Arrangement
        </Text>
        
        <CodeExample
          title="Auto Arrangement Feature"
          code={`// Auto-arrangement automatically handles:
// 1. Z-index layering based on component order
// 2. Spacing for fixed/positioned elements
// 3. Smart positioning to prevent overlaps

<Layout autoArrange={true}>
  {/* Navigation gets z-index: 1000 */}
  <Navigation data-layout="layout" />
  
  {/* Main content gets marginLeft: "250px" */}
  <Layout>
    {/* Fixed header gets z-index: 1100 and left: "250px" */}
    <Layout position="fixed">Header</Layout>
    <Layout>Content</Layout>
  </Layout>
</Layout>`}
          preview={
            <Layout 
              style={{ 
                backgroundColor: variables.colors.background.surface, 
                padding: variables.spacing.lg,
                border: `1px solid ${variables.colors.border}`,
                borderRadius: variables.borderRadius.md
              }}
            >
              <Text size="sm" style={{ color: variables.colors.text.secondary }}>
                Auto-arrangement is demonstrated in the main application layout.
                It automatically manages z-index layering and positioning for complex layouts.
              </Text>
            </Layout>
          }
        />
      </Layout>

      {/* Positioning */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Positioning
        </Text>
        
        <CodeExample
          title="Positioned Elements"
          code={`<Layout 
  position="relative" 
  style={{ height: "150px", border: "1px solid gray" }}
>
  <Layout 
    position="absolute"
    style={{ top: "10px", right: "10px" }}
  >
    <Text size="sm">Top Right</Text>
  </Layout>
  <Layout 
    position="absolute"
    style={{ bottom: "10px", left: "10px" }}
  >
    <Text size="sm">Bottom Left</Text>
  </Layout>
</Layout>`}
          preview={
            <Layout 
              position="relative" 
              style={{ height: "150px", border: `1px solid ${variables.colors.border}` }}
            >
              <Layout 
                position="absolute"
                style={{ top: "10px", right: "10px" }}
              >
                <Text size="sm">Top Right</Text>
              </Layout>
              <Layout 
                position="absolute"
                style={{ bottom: "10px", left: "10px" }}
              >
                <Text size="sm">Bottom Left</Text>
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
            • direction?: "row" | "column"<br/>
            • gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl"<br/>
            • padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl"<br/>
            • width?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto" | number | string<br/>
            • height?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "auto" | number | string<br/>
            • position?: "static" | "relative" | "absolute" | "fixed" | "sticky"<br/>
            • align?: "start" | "center" | "end" | "stretch"<br/>
            • justify?: "start" | "center" | "end" | "between" | "around" | "evenly"<br/>
            • wrap?: boolean<br/>
            • centered?: boolean<br/>
            • autoArrange?: boolean<br/>
            • children?: React.ReactNode<br/>
            • style?: React.CSSProperties<br/>
            • className?: string
          </Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};