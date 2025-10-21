import React from "react";
import { Link, Text, Card, CardBody, Badge, Button } from "../../src/index";

const CodeBlock: React.FC<{ children: string; language?: string }> = ({ children, language = "tsx" }) => (
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

const DemoSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div style={{ marginBottom: "var(--space-lg)" }}>
    <Text as="h4" size="md" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
      {title}
    </Text>
    <div
      style={{
        padding: "var(--space-md)",
        backgroundColor: "var(--bg-surface)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--border-color)",
        display: "flex",
        flexWrap: "wrap",
        gap: "var(--space-md)",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  </div>
);

export const LinkDocs: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-sm)" }}>
          Link
        </Text>
        <Text as="p" size="lg" color="secondary">
          Navigation component for internal and external links with accessibility support
        </Text>
      </div>

      {/* Overview */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Overview
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-lg)", lineHeight: "1.6" }}>
            The Link component provides consistent navigation styling and behavior for both internal 
            and external links. It includes hover states, focus management, and accessibility features 
            while maintaining design system consistency.
          </Text>
          
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Badge variant="primary">Multiple Variants</Badge>
            <Badge variant="success">3 Sizes</Badge>
            <Badge variant="info">Hover States</Badge>
            <Badge variant="secondary">Accessible</Badge>
          </div>
        </CardBody>
      </Card>

      {/* Examples */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Examples
          </Text>

          <DemoSection title="Variants">
            <Link href="#" variant="primary">Primary Link</Link>
            <Link href="#" variant="secondary">Secondary Link</Link>
            <Link href="#" variant="accent">Accent Link</Link>
            <Link href="#" variant="muted">Muted Link</Link>
          </DemoSection>

          <DemoSection title="Underline Styles">
            <Link href="#" underline="always">Always Underlined</Link>
            <Link href="#" underline="hover">Underline on Hover</Link>
            <Link href="#" underline="never">Never Underlined</Link>
          </DemoSection>

          <DemoSection title="Sizes">
            <Link href="#" size="sm">Small Link</Link>
            <Link href="#" size="md">Medium Link</Link>
            <Link href="#" size="lg">Large Link</Link>
          </DemoSection>

          <DemoSection title="States">
            <Link href="#">Normal Link</Link>
            <Link href="#" disabled>Disabled Link</Link>
            <Link href="https://example.com" external>External Link ↗</Link>
          </DemoSection>

          <DemoSection title="Usage in Context">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
              <Text as="p">
                Visit our <Link href="#" variant="primary">documentation</Link> to learn more about the components.
              </Text>
              <Text as="p">
                For support, contact us at <Link href="#" variant="accent" underline="always">support@example.com</Link>.
              </Text>
              <Text as="p">
                Check out our <Link href="#" external variant="secondary">GitHub repository ↗</Link> for the source code.
              </Text>
            </div>
          </DemoSection>
        </CardBody>
      </Card>

      {/* API Reference */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            API Reference
          </Text>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Props
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
                    Prop
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Type
                  </th>
                  <th style={{ 
                    padding: "var(--space-md)", 
                    textAlign: "left", 
                    borderBottom: "1px solid var(--border-color)",
                    fontWeight: "var(--font-weight-semibold)"
                  }}>
                    Default
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
                    <code>href</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>required</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    URL or path for the link destination
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>variant</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'primary' | 'secondary' | 'accent' | 'muted'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'primary'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Visual style variant affecting color and decoration
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>size</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'sm' | 'md' | 'lg'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'md'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Font size of the link text
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>underline</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'always' | 'hover' | 'never'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'hover'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Text decoration behavior for the link
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>disabled</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>boolean</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>false</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Disables the link and prevents navigation
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>external</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>boolean</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>false</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Opens link in new tab with security attributes
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>children</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>React.ReactNode</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>undefined</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Link text content or nested elements
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>className</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>undefined</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Additional CSS class names for custom styling
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>style</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>React.CSSProperties</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    <code>undefined</code>
                  </td>
                  <td style={{ padding: "var(--space-md)" }}>
                    Inline styles for custom styling
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      {/* Usage Examples */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Usage Examples
          </Text>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Navigation Menu
          </Text>
          <CodeBlock>{`import { Link } from '@flowlabkit/ui';

function NavigationMenu() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products" variant="primary">Products</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Content Links
          </Text>
          <CodeBlock>{`import { Link, Text } from '@flowlabkit/ui';

function BlogPost() {
  return (
    <article>
      <Text as="h1" size="2xl">Understanding React Hooks</Text>
      
      <Text as="p" style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
        React Hooks have revolutionized how we write components. 
        Learn more in the{' '}
        <Link 
          href="https://reactjs.org/docs/hooks-intro.html" 
          external 
          variant="primary"
        >
          official React documentation
        </Link>
        .
      </Text>
      
      <Text as="p">
        For advanced patterns, check out our{' '}
        <Link href="/guides/advanced-hooks" variant="accent" underline="always">
          advanced hooks guide
        </Link>
        .
      </Text>
    </article>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Custom Styled Links
          </Text>
          <CodeBlock>{`import { Link } from '@flowlabkit/ui';

function CustomLinks() {
  return (
    <div>
      {/* Button-like link */}
      <Link
        href="/signup"
        variant="primary"
        className="button-link"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--accent-500)',
          color: 'white',
          borderRadius: 'var(--radius-md)',
          textDecoration: 'none',
          fontWeight: 'var(--font-weight-semibold)',
          transition: 'var(--transition-base)'
        }}
      >
        Get Started
      </Link>
      
      {/* Subtle link */}
      <Link
        href="/privacy"
        variant="muted"
        size="sm"
        style={{
          textDecoration: 'none',
          borderBottom: '1px dotted var(--text-muted)'
        }}
      >
        Privacy Policy
      </Link>
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Conditional Link States
          </Text>
          <CodeBlock>{`import { Link } from '@flowlabkit/ui';

function ConditionalLink({ 
  isAuthenticated, 
  href, 
  children 
}: { 
  isAuthenticated: boolean; 
  href: string; 
  children: React.ReactNode; 
}) {
  return (
    <Link
      href={href}
      disabled={!isAuthenticated}
      variant={isAuthenticated ? 'primary' : 'muted'}
      style={{
        cursor: isAuthenticated ? 'pointer' : 'not-allowed',
        opacity: isAuthenticated ? 1 : 0.6
      }}
    >
      {children}
      {!isAuthenticated && ' (Login Required)'}
    </Link>
  );
}`}</CodeBlock>
        </CardBody>
      </Card>

      {/* Accessibility */}
      <Card>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Accessibility
          </Text>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Built-in Features
          </Text>
          <ul style={{ marginLeft: "var(--space-lg)", lineHeight: "1.6", marginBottom: "var(--space-md)" }}>
            <li>Semantic HTML anchor elements for proper navigation</li>
            <li>Keyboard navigation support with focus indicators</li>
            <li>Screen reader compatible link descriptions</li>
            <li>External links include security attributes (rel="noopener noreferrer")</li>
            <li>Disabled state prevents navigation and keyboard access</li>
          </ul>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Best Practices
          </Text>
          <CodeBlock>{`// Provide descriptive link text
❌ <Link href="/docs">Click here</Link>
✅ <Link href="/docs">View documentation</Link>

// Use aria-label for context when needed
<Link 
  href="/profile" 
  aria-label="View your user profile"
>
  Profile
</Link>

// Indicate external links
<Link 
  href="https://example.com" 
  external
  aria-label="Visit example.com (opens in new tab)"
>
  External Resource ↗
</Link>

// Handle disabled states properly
<Link 
  href="/premium-feature" 
  disabled={!isPremium}
  aria-disabled={!isPremium}
  title={!isPremium ? "Upgrade to premium to access this feature" : undefined}
>
  Premium Feature
</Link>

// Use semantic markup for navigation
<nav aria-label="Main navigation">
  <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/contact">Contact</Link></li>
  </ul>
</nav>`}</CodeBlock>
        </CardBody>
      </Card>
    </div>
  );
};