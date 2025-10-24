import React from "react";
import { Badge, Text, Card, CardBody } from "../../../src/index";

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
        gap: "var(--space-sm)",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  </div>
);

export const BadgeDocs: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-sm)" }}>
          Badge
        </Text>
        <Text as="p" size="lg" color="secondary">
          Small status descriptors for labeling, categorizing, and displaying metadata
        </Text>
      </div>

      {/* Overview */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Overview
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-lg)", lineHeight: "1.6" }}>
            Badges are small components used to display status, notifications, or metadata. They're 
            perfect for showing counts, labels, categories, or any short piece of information that 
            needs to stand out from the main content.
          </Text>
          
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Badge variant="primary">7 Variants</Badge>
            <Badge variant="success">3 Sizes</Badge>
            <Badge variant="info">3 Shapes</Badge>
            <Badge variant="secondary">Flexible Content</Badge>
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
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </DemoSection>

          <DemoSection title="Sizes">
            <Badge size="sm">Small Badge</Badge>
            <Badge size="md">Medium Badge</Badge>
            <Badge size="lg">Large Badge</Badge>
          </DemoSection>

          <DemoSection title="Shapes">
            <Badge shape="rounded">Rounded</Badge>
            <Badge shape="square">Square</Badge>
            <Badge shape="pill">Pill Shape</Badge>
            <Badge dot size="md" variant="primary" />
          </DemoSection>

          <DemoSection title="Real-world Usage">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                <Text>Messages</Text>
                <Badge variant="primary" shape="pill" size="sm">3</Badge>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                <Text>Status:</Text>
                <Badge variant="success" size="sm">Active</Badge>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                <Text>Priority:</Text>
                <Badge variant="error" size="sm">High</Badge>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                <Text>Version:</Text>
                <Badge variant="info" shape="pill">v2.1.0</Badge>
              </div>
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
                    <code>variant</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'default'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Visual style variant affecting color scheme
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
                    Size of the badge affecting padding and font size
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>shape</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'rounded' | 'square' | 'pill'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'rounded'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Shape style of the badge corners
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>dot</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>boolean</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>false</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Renders as a circular dot without content
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
                    Content to display inside the badge
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
            Notification Badges
          </Text>
          <CodeBlock>{`import { Badge, Text } from '@flowlabkit/ui';

function NotificationBell() {
  const notificationCount = 5;
  
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button>🔔</button>
      {notificationCount > 0 && (
        <Badge
          variant="error"
          shape="circle"
          size="sm"
          style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            minWidth: '20px',
            height: '20px'
          }}
        >
          {notificationCount > 99 ? '99+' : notificationCount}
        </Badge>
      )}
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Status Labels
          </Text>
          <CodeBlock>{`import { Badge, Text } from '@flowlabkit/ui';

function UserStatus({ user }: { user: User }) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge variant="success" size="sm">Active</Badge>;
      case 'inactive':
        return <Badge variant="secondary" size="sm">Inactive</Badge>;
      case 'pending':
        return <Badge variant="warning" size="sm">Pending</Badge>;
      case 'blocked':
        return <Badge variant="error" size="sm">Blocked</Badge>;
      default:
        return <Badge variant="default" size="sm">Unknown</Badge>;
    }
  };
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Text>{user.name}</Text>
      {getStatusBadge(user.status)}
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Category Tags
          </Text>
          <CodeBlock>{`import { Badge } from '@flowlabkit/ui';

function BlogPost({ post }: { post: Post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        {post.categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            shape="pill"
            size="sm"
          >
            {category}
          </Badge>
        ))}
      </div>
      <p>{post.excerpt}</p>
    </article>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Custom Styled Badge
          </Text>
          <CodeBlock>{`import { Badge } from '@flowlabkit/ui';

function PremiumBadge() {
  return (
    <Badge
      variant="primary"
      shape="pill"
      className="premium-badge"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        border: 'none',
        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
      }}
    >
      ✨ Premium
    </Badge>
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
            <li>Semantic HTML structure with proper contrast ratios</li>
            <li>Screen reader friendly text content</li>
            <li>Color combinations meet WCAG AA standards</li>
            <li>Keyboard navigation support when used as interactive elements</li>
          </ul>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Best Practices
          </Text>
          <CodeBlock>{`// Use aria-label for icon-only badges
<Badge variant="error" shape="circle" aria-label="3 unread notifications">
  3
</Badge>

// Provide context for screen readers
<Badge 
  variant="success" 
  aria-label="Status: Active user account"
>
  Active
</Badge>

// Use role="status" for live updates
<Badge 
  variant="warning" 
  role="status" 
  aria-live="polite"
>
  {connectionStatus}
</Badge>

// Ensure sufficient color contrast
<Badge
  variant="custom"
  style={{
    backgroundColor: '#1f2937', // Dark background
    color: '#f9fafb'           // Light text for contrast
  }}
>
  High Contrast
</Badge>`}</CodeBlock>
        </CardBody>
      </Card>
    </div>
  );
};