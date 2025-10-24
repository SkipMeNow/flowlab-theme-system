import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Button, Badge, Image } from "../../../src/index";

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
        gap: "var(--space-md)",
      }}
    >
      {children}
    </div>
  </div>
);

export const CardDocs: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-sm)" }}>
          Card
        </Text>
        <Text as="p" size="lg" color="secondary">
          Flexible container component for grouping related content with header, body, and footer sections
        </Text>
      </div>

      {/* Overview */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Overview
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-lg)", lineHeight: "1.6" }}>
            The Card component system provides a flexible foundation for content layout. It includes 
            Card, CardHeader, CardBody, and CardFooter components that can be composed together to 
            create structured, visually appealing content containers.
          </Text>
          
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Badge variant="primary">Modular Design</Badge>
            <Badge variant="success">Multiple Variants</Badge>
            <Badge variant="info">Flexible Layout</Badge>
            <Badge variant="secondary">Composable</Badge>
          </div>
        </CardBody>
      </Card>

      {/* Examples */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Examples
          </Text>

          <DemoSection title="Basic Cards">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-md)" }}>
              <Card>
                <CardBody>
                  <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: "var(--space-sm)" }}>
                    Simple Card
                  </Text>
                  <Text>This is a basic card with just a body section containing some content.</Text>
                </CardBody>
              </Card>

              <Card variant="outlined">
                <CardHeader>
                  <Text as="h3" size="lg" weight="semibold">Outlined Card</Text>
                </CardHeader>
                <CardBody>
                  <Text>This card has a visible border and includes both header and body sections.</Text>
                </CardBody>
              </Card>
            </div>
          </DemoSection>

          <DemoSection title="Card Variants">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-md)" }}>
              <Card variant="elevated">
                <CardBody>
                  <Text weight="medium">Elevated</Text>
                  <Text size="sm" color="secondary">Default with shadow</Text>
                </CardBody>
              </Card>
              
              <Card variant="outlined">
                <CardBody>
                  <Text weight="medium">Outlined</Text>
                  <Text size="sm" color="secondary">With visible border</Text>
                </CardBody>
              </Card>
              
              <Card variant="filled">
                <CardBody>
                  <Text weight="medium">Filled</Text>
                  <Text size="sm" color="secondary">Different background</Text>
                </CardBody>
              </Card>
            </div>
          </DemoSection>

          <DemoSection title="Complete Card Structure">
            <Card variant="outlined" style={{ maxWidth: "400px" }}>
              <CardHeader>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Text as="h3" size="lg" weight="semibold">Product Card</Text>
                  <Badge variant="success">New</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <Image 
                  src="https://picsum.photos/300/150?random=1" 
                  alt="Product image" 
                  variant="default"
                  shape="rounded"
                  style={{ width: "100%", height: "150px", marginBottom: "var(--space-md)" }}
                />
                <Text style={{ marginBottom: "var(--space-sm)" }}>
                  This is a complete card example showing how header, body, and footer work together.
                </Text>
                <Text size="sm" color="secondary">
                  Perfect for product listings, user profiles, or content previews.
                </Text>
              </CardBody>
              <CardFooter>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Text weight="semibold" color="accent">$99.99</Text>
                  <Button variant="primary" size="sm">Add to Cart</Button>
                </div>
              </CardFooter>
            </Card>
          </DemoSection>

          <DemoSection title="Interactive Cards">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-md)" }}>
              <Card 
                variant="elevated" 
                hoverable
                style={{ cursor: "pointer" }}
                onClick={() => alert("Card clicked!")}
              >
                <CardBody>
                  <Text as="h4" weight="semibold" style={{ marginBottom: "var(--space-sm)" }}>
                    Clickable Card
                  </Text>
                  <Text size="sm">This entire card is clickable and has hover effects.</Text>
                </CardBody>
              </Card>

              <Card variant="outlined">
                <CardHeader>
                  <Text as="h4" weight="semibold">User Profile</Text>
                </CardHeader>
                <CardBody>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)" }}>
                    <Image 
                      src="https://picsum.photos/50/50?random=2" 
                      alt="User avatar" 
                      shape="circle"
                      variant="bordered"
                      width={50}
                      height={50}
                    />
                    <div>
                      <Text weight="medium">Jane Smith</Text>
                      <Text size="sm" color="secondary">UI/UX Designer</Text>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <div style={{ display: "flex", gap: "var(--space-sm)" }}>
                    <Button variant="primary" size="sm">Follow</Button>
                    <Button variant="secondary" size="sm">Message</Button>
                  </div>
                </CardFooter>
              </Card>
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
            Card Props
          </Text>

          <div style={{ overflowX: "auto", marginBottom: "var(--space-lg)" }}>
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
                    <code>'elevated' | 'outlined' | 'filled'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'elevated'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'default'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Visual style variant affecting borders and shadows
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>hoverable</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>boolean</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>false</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Adds hover effects and cursor pointer for interactive cards
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>padding</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'none' | 'sm' | 'md' | 'lg'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'md'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Internal padding of the card container
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>radius</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'none' | 'sm' | 'md' | 'lg'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'md'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Border radius of the card corners
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>shadow</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'none' | 'sm' | 'md' | 'lg'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'md'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Drop shadow intensity of the card
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
                    Content of the card (typically CardHeader, CardBody, CardFooter)
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

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            CardHeader, CardBody, CardFooter Props
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-md)", lineHeight: "1.6" }}>
            All card section components (CardHeader, CardBody, CardFooter) accept the same props:
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
                    <code>children</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>React.ReactNode</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>undefined</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Content of the card section
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
            Product Card
          </Text>
          <CodeBlock>{`import { Card, CardHeader, CardBody, CardFooter, Text, Button, Image } from '@flowlabkit/ui';

function ProductCard({ product }: { product: Product }) {
  return (
    <Card variant="elevated" shadow="lg" style={{ maxWidth: '300px' }}>
      <CardHeader>
        <Text as="h3" size="lg" weight="semibold">
          {product.name}
        </Text>
      </CardHeader>
      
      <CardBody>
        <Image
          src={product.imageUrl}
          alt={product.name}
          variant="default"
          shape="rounded"
          style={{ width: '100%', height: '200px', marginBottom: '1rem' }}
        />
        <Text style={{ marginBottom: '0.5rem' }}>
          {product.description}
        </Text>
        <Text size="sm" color="secondary">
          {product.category}
        </Text>
      </CardBody>
      
      <CardFooter>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Text size="lg" weight="bold" color="accent">
            \${product.price}
          </Text>
          <Button variant="primary" size="sm">
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Dashboard Widget
          </Text>
          <CodeBlock>{`import { Card, CardHeader, CardBody, Text, Badge } from '@flowlabkit/ui';

function StatsWidget({ title, value, change, trend }: StatsWidgetProps) {
  return (
    <Card variant="outlined" hoverable>
      <CardHeader>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Text as="h4" weight="medium">{title}</Text>
          <Badge 
            variant={trend === 'up' ? 'success' : 'error'}
            size="sm"
          >
            {change}
          </Badge>
        </div>
      </CardHeader>
      
      <CardBody>
        <Text as="div" size="2xl" weight="bold">
          {value}
        </Text>
      </CardBody>
    </Card>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Card Grid Layout
          </Text>
          <CodeBlock>{`import { Card, CardBody, Text } from '@flowlabkit/ui';

function CardGrid({ items }: { items: Item[] }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      padding: '2rem'
    }}>
      {items.map((item) => (
        <Card 
          key={item.id} 
          variant="elevated" 
          hoverable
          onClick={() => handleItemClick(item.id)}
          style={{
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
        >
          <CardBody>
            <Text as="h3" weight="semibold" style={{ marginBottom: '0.5rem' }}>
              {item.title}
            </Text>
            <Text size="sm" color="secondary">
              {item.description}
            </Text>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Custom Styled Card
          </Text>
          <CodeBlock>{`import { Card, CardBody, Text } from '@flowlabkit/ui';

function CustomCard() {
  return (
    <Card
      variant="filled"
      shadow="lg"
      className="gradient-card"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
      }}
    >
      <CardBody
        style={{
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        <Text as="h2" size="xl" weight="bold" style={{ color: 'white' }}>
          Premium Feature
        </Text>
        <Text style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          Unlock advanced capabilities with our premium plan
        </Text>
      </CardBody>
    </Card>
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
            <li>Semantic HTML structure with proper heading hierarchy</li>
            <li>Keyboard navigation support for interactive cards</li>
            <li>Focus management with visible focus indicators</li>
            <li>Screen reader compatible content structure</li>
            <li>Proper color contrast ratios for all variants</li>
          </ul>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Best Practices
          </Text>
          <CodeBlock>{`// Use semantic headings in card headers
<Card>
  <CardHeader>
    <Text as="h2" size="lg" weight="semibold">
      Main Card Title
    </Text>
  </CardHeader>
  <CardBody>
    <Text as="h3" size="md" weight="medium">
      Subsection
    </Text>
  </CardBody>
</Card>

// Add proper ARIA labels for interactive cards
<Card 
  hoverable 
  onClick={handleClick}
  role="button"
  tabIndex={0}
  aria-label="View product details for Laptop Pro"
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  <CardBody>Product information...</CardBody>
</Card>

// Use landmarks for card sections
<Card>
  <CardHeader role="banner">
    <Text as="h2">Article Title</Text>
  </CardHeader>
  <CardBody role="main">
    <Text>Article content...</Text>
  </CardBody>
  <CardFooter role="contentinfo">
    <Text>Published date and author</Text>
  </CardFooter>
</Card>

// Ensure sufficient color contrast
<Card 
  style={{
    backgroundColor: '#1f2937', // Dark background
    color: '#f9fafb'           // Light text
  }}
>
  <CardBody>High contrast content</CardBody>
</Card>`}</CodeBlock>
        </CardBody>
      </Card>
    </div>
  );
};