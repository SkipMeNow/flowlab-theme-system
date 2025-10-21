import React from "react";
import { Text, Card, CardBody, Badge } from "../../src/index";

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
        flexDirection: "column",
        gap: "var(--space-sm)",
      }}
    >
      {children}
    </div>
  </div>
);

export const TextDocs: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-sm)" }}>
          Text
        </Text>
        <Text as="p" size="lg" color="secondary">
          Versatile typography component for all text content with semantic HTML support
        </Text>
      </div>

      {/* Overview */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Overview
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-lg)", lineHeight: "1.6" }}>
            The Text component is the foundation of all typography in your application. It provides 
            semantic HTML rendering, consistent sizing, typography scales, and color variants while 
            maintaining accessibility and design system consistency.
          </Text>
          
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Badge variant="primary">Semantic Elements</Badge>
            <Badge variant="success">7 Sizes</Badge>
            <Badge variant="info">4 Weights</Badge>
            <Badge variant="secondary">Color System</Badge>
          </div>
        </CardBody>
      </Card>

      {/* Examples */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Examples
          </Text>

          <DemoSection title="Semantic Elements">
            <Text as="h1" size="2xl" weight="bold">Heading 1 (h1)</Text>
            <Text as="h2" size="xl" weight="semibold">Heading 2 (h2)</Text>
            <Text as="h3" size="lg" weight="medium">Heading 3 (h3)</Text>
            <Text as="h4" size="md" weight="medium">Heading 4 (h4)</Text>
            <Text as="p" size="md">Paragraph text content</Text>
            <Text as="span" size="sm">Inline span element</Text>
            <Text as="div" size="sm" color="secondary">Division element</Text>
          </DemoSection>

          <DemoSection title="Size Scale">
            <Text size="xs">Extra Small (xs)</Text>
            <Text size="sm">Small (sm)</Text>
            <Text size="md">Medium (md) - Default</Text>
            <Text size="lg">Large (lg)</Text>
            <Text size="xl">Extra Large (xl)</Text>
            <Text size="2xl">2X Large (2xl)</Text>
            <Text size="3xl">3X Large (3xl)</Text>
          </DemoSection>

          <DemoSection title="Font Weights">
            <Text weight="normal">Normal Weight</Text>
            <Text weight="medium">Medium Weight</Text>
            <Text weight="semibold">Semi Bold Weight</Text>
            <Text weight="bold">Bold Weight</Text>
          </DemoSection>

          <DemoSection title="Color Variants">
            <Text color="primary">Primary Color</Text>
            <Text color="secondary">Secondary Color</Text>
            <Text color="tertiary">Tertiary Color</Text>
            <Text color="muted">Muted Color</Text>
            <Text color="accent">Accent Color</Text>
            <Text color="error">Error Color</Text>
            <Text color="success">Success Color</Text>
            <Text color="warning">Warning Color</Text>
            <Text color="info">Info Color</Text>
          </DemoSection>

          <DemoSection title="Real-world Usage">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
              <Text as="h2" size="xl" weight="bold">Article Title</Text>
              <Text as="p" size="sm" color="secondary">Published on March 15, 2024</Text>
              <Text as="p" size="md" style={{ lineHeight: "1.6" }}>
                This is a sample paragraph that demonstrates how the Text component 
                can be used for body content with proper line height and spacing.
              </Text>
              <Text as="div" size="lg" weight="medium" color="muted" style={{ 
                fontStyle: "italic", 
                borderLeft: "4px solid var(--accent-200)", 
                paddingLeft: "var(--space-md)" 
              }}>
                "Design is not just what it looks like and feels like. Design is how it works."
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
                    <code>as</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'p'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    HTML element to render for semantic meaning
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>size</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'md'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Font size from the design system scale
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>weight</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'normal' | 'medium' | 'semibold' | 'bold'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'normal'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Font weight for emphasis and hierarchy
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>color</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'primary' | 'secondary' | 'tertiary' | 'muted' | 'accent' | 'success' | 'warning' | 'error' | 'info'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'primary'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Semantic color from the theme system
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
                    Text content or nested elements
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
            Typography Hierarchy
          </Text>
          <CodeBlock>{`import { Text } from '@flowlabkit/ui';

function BlogPost({ post }: { post: Post }) {
  return (
    <article>
      <Text as="h1" size="3xl" weight="bold">
        {post.title}
      </Text>
      
      <Text as="p" size="sm" color="secondary" style={{ marginBottom: '2rem' }}>
        By {post.author} • {post.publishedDate}
      </Text>
      
      <Text as="h2" size="xl" weight="semibold">
        Introduction
      </Text>
      
      <Text as="p" size="md" style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
        {post.introduction}
      </Text>
      
      <Text as="blockquote" size="lg" weight="medium" color="muted">
        "{post.quote}"
      </Text>
    </article>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Status Messages
          </Text>
          <CodeBlock>{`import { Text } from '@flowlabkit/ui';

function StatusMessages({ status }: { status: 'success' | 'error' | 'warning' }) {
  const getStatusText = () => {
    switch (status) {
      case 'success':
        return (
          <Text color="success" weight="medium">
            ✅ Operation completed successfully
          </Text>
        );
      case 'error':
        return (
          <Text color="error" weight="medium">
            ❌ An error occurred while processing
          </Text>
        );
      case 'warning':
        return (
          <Text color="warning" weight="medium">
            ⚠️  Please review the following information
          </Text>
        );
    }
  };
  
  return (
    <div>
      {getStatusText()}
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Custom Styled Text
          </Text>
          <CodeBlock>{`import { Text } from '@flowlabkit/ui';

function CustomStyledText() {
  return (
    <div>
      <Text
        as="h2"
        size="2xl"
        weight="bold"
        className="gradient-text"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Gradient Heading
      </Text>
      
      <Text
        as="p"
        size="md"
        style={{
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        Custom typography with serif font and italic styling
      </Text>
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Responsive Text
          </Text>
          <CodeBlock>{`import { Text } from '@flowlabkit/ui';

function ResponsiveHeading() {
  return (
    <Text
      as="h1"
      size="2xl"  // Default size
      className="responsive-heading"
      style={{
        // CSS custom properties for responsive design
        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
        lineHeight: '1.2',
      }}
    >
      Responsive Heading Text
    </Text>
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
            <li>Semantic HTML elements for proper document structure</li>
            <li>Proper heading hierarchy for screen readers</li>
            <li>Color contrast ratios meet WCAG AA standards</li>
            <li>Scalable text that respects user font size preferences</li>
            <li>Keyboard navigation and focus management</li>
          </ul>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Best Practices
          </Text>
          <CodeBlock>{`// Use proper heading hierarchy
<Text as="h1" size="3xl" weight="bold">Main Page Title</Text>
<Text as="h2" size="xl" weight="semibold">Section Heading</Text>
<Text as="h3" size="lg" weight="medium">Subsection Heading</Text>

// Provide sufficient color contrast
<Text color="primary">Primary text with proper contrast</Text>

// Use semantic elements appropriately
<Text as="p" size="md">Body paragraph content</Text>
<Text as="blockquote" size="lg">Quoted content</Text>

// Don't skip heading levels
❌ <Text as="h1">Title</Text> → <Text as="h3">Skip h2</Text>
✅ <Text as="h1">Title</Text> → <Text as="h2">Proper hierarchy</Text>

// Use color AND other indicators for meaning
<Text color="error" weight="bold" aria-label="Error message">
  ❌ Error: Please fix the following issues
</Text>`}</CodeBlock>
        </CardBody>
      </Card>
    </div>
  );
};