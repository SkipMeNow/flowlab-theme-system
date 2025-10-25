import React from "react";
import { Layout, Text, Link, Card, useTheme } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";

export const LinkPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout title="Link" description="Accessible link component with consistent styling and hover states">
      
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Basic Usage
        </Text>
        
        <CodeExample
          title="Simple Link"
          code={`<Link href="https://example.com">Visit Example</Link>`}
          preview={
            <Card style={{ height: '60px', overflow: 'hidden' }}>
              <Link href="https://example.com">Visit Example</Link>
            </Card>
          }
        />

        <CodeExample
          title="Link in Text"
          code={`<Text>
  Visit our <Link href="https://example.com">documentation</Link> for more information.
</Text>`}
          preview={
            <Text>
              Visit our <Link href="https://example.com">documentation</Link> for more information.
            </Text>
          }
        />
      </Layout>

      {/* Link Types */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Link Types
        </Text>
        
        <CodeExample
          title="External Link"
          code={`<Link href="https://github.com" external>
  GitHub (opens in new tab)
</Link>`}
          preview={
            <Link href="https://github.com" external>
              GitHub (opens in new tab)
            </Link>
          }
        />

        <CodeExample
          title="Email Link"
          code={`<Link href="mailto:hello@example.com">
  Send us an email
</Link>`}
          preview={
            <Link href="mailto:hello@example.com">
              Send us an email
            </Link>
          }
        />

        <CodeExample
          title="Phone Link"
          code={`<Link href="tel:+1234567890">
  Call us: +1 (234) 567-890
</Link>`}
          preview={
            <Link href="tel:+1234567890">
              Call us: +1 (234) 567-890
            </Link>
          }
        />
      </Layout>

      {/* Link Styles */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Link Styles
        </Text>
        
        <CodeExample
          title="Custom Styled Links"
          code={`<Layout direction="column" gap="sm">
  <Link 
    href="#" 
    style={{ 
      color: variables.colors.accent[600],
      textDecoration: "none",
      fontWeight: variables.typography.fontWeight.semibold
    }}
  >
    Bold Link (No Underline)
  </Link>
  
  <Link 
    href="#" 
    style={{ 
      color: variables.colors.text.secondary,
      fontSize: variables.typography.fontSize.sm
    }}
  >
    Small Muted Link
  </Link>
  
  <Link 
    href="#" 
    style={{ 
      color: variables.colors.accent[700],
      borderBottom: \`2px solid \${variables.colors.accent[300]}\`,
      textDecoration: "none"
    }}
  >
    Link with Custom Underline
  </Link>
</Layout>`}
          preview={
            <Layout direction="column" gap="sm">
              <Link 
                href="#" 
                style={{ 
                  color: variables.colors.accent[600],
                  textDecoration: "none",
                  fontWeight: variables.typography.fontWeight.semibold
                }}
              >
                Bold Link (No Underline)
              </Link>
              
              <Link 
                href="#" 
                style={{ 
                  color: variables.colors.text.secondary,
                  fontSize: variables.typography.fontSize.sm
                }}
              >
                Small Muted Link
              </Link>
              
              <Link 
                href="#" 
                style={{ 
                  color: variables.colors.accent[700],
                  borderBottom: `2px solid ${variables.colors.accent[300]}`,
                  textDecoration: "none"
                }}
              >
                Link with Custom Underline
              </Link>
            </Layout>
          }
        />
      </Layout>

      {/* Navigation Links */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Navigation Links
        </Text>
        
        <CodeExample
          title="Navigation Menu"
          code={`<Layout direction="row" gap="lg" align="center">
  <Link href="#home">Home</Link>
  <Link href="#about">About</Link>
  <Link href="#services">Services</Link>
  <Link href="#contact">Contact</Link>
</Layout>`}
          preview={
            <Layout direction="row" gap="lg" align="center">
              <Link href="#home">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#services">Services</Link>
              <Link href="#contact">Contact</Link>
            </Layout>
          }
        />

        <CodeExample
          title="Breadcrumb Navigation"
          code={`<Layout direction="row" align="center" gap="xs">
  <Link href="#home">Home</Link>
  <Text style={{ color: variables.colors.text.secondary }}>/</Text>
  <Link href="#docs">Documentation</Link>
  <Text style={{ color: variables.colors.text.secondary }}>/</Text>
  <Text style={{ color: variables.colors.text.secondary }}>Components</Text>
</Layout>`}
          preview={
            <Layout direction="row" align="center" gap="xs">
              <Link href="#home">Home</Link>
              <Text style={{ color: variables.colors.text.secondary }}>/</Text>
              <Link href="#docs">Documentation</Link>
              <Text style={{ color: variables.colors.text.secondary }}>/</Text>
              <Text style={{ color: variables.colors.text.secondary }}>Components</Text>
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
            • href: string<br/>
            • external?: boolean<br/>
            • children?: React.ReactNode<br/>
            • style?: React.CSSProperties<br/>
            • className?: string<br/>
            • onClick?: (event: React.MouseEvent) =&gt; void
          </Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};