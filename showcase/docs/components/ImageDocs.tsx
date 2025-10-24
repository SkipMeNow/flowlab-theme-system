import React from "react";
import { Image, Text, Card, CardBody, Badge } from "../../../src/index";

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

export const ImageDocs: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-sm)" }}>
          Image
        </Text>
        <Text as="p" size="lg" color="secondary">
          Enhanced image component with loading states, fallbacks, and responsive behavior
        </Text>
      </div>

      {/* Overview */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Overview
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-lg)", lineHeight: "1.6" }}>
            The Image component provides enhanced functionality over the standard HTML img element, 
            including loading states, error handling, multiple variants, shape options, and responsive 
            behavior. Perfect for avatars, thumbnails, hero images, and content imagery.
          </Text>
          
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Badge variant="primary">5 Variants</Badge>
            <Badge variant="success">4 Shapes</Badge>
            <Badge variant="info">Loading States</Badge>
            <Badge variant="secondary">Error Handling</Badge>
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
            <Image 
              src="https://picsum.photos/100/100?random=1" 
              alt="Default variant" 
              variant="default"
              width={100}
              height={100}
            />
            <Image 
              src="https://picsum.photos/100/100?random=2" 
              alt="Bordered variant" 
              variant="bordered"
              width={100}
              height={100}
            />
            <Image 
              src="https://picsum.photos/100/100?random=3" 
              alt="Shadow variant" 
              variant="shadow"
              width={100}
              height={100}
            />
            <Image 
              src="https://picsum.photos/100/100?random=4" 
              alt="Elevated variant" 
              variant="elevated"
              width={100}
              height={100}
            />
            <Image 
              src="https://picsum.photos/100/100?random=5" 
              alt="Hover lift variant" 
              variant="hover-lift"
              width={100}
              height={100}
            />
          </DemoSection>

          <DemoSection title="Shapes">
            <Image 
              src="https://picsum.photos/100/100?random=6" 
              alt="Square shape" 
              shape="square"
              width={100}
              height={100}
            />
            <Image 
              src="https://picsum.photos/100/100?random=7" 
              alt="Rounded shape" 
              shape="rounded"
              width={100}
              height={100}
            />
            <Image 
              src="https://picsum.photos/100/100?random=8" 
              alt="Circle shape" 
              shape="circle"
              width={100}
              height={100}
            />
            <Image 
              src="https://picsum.photos/150/75?random=9" 
              alt="Pill shape" 
              shape="pill"
              width={150}
              height={75}
            />
          </DemoSection>

          <DemoSection title="Loading and Error States">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
              <div>
                <Text size="sm" color="secondary" style={{ marginBottom: "var(--space-sm)" }}>
                  Loading State (simulated):
                </Text>
                <Image 
                  src="https://httpstat.us/200?sleep=5000" 
                  alt="Loading image" 
                  width={120}
                  height={120}
                  shape="rounded"
                />
              </div>
              <div>
                <Text size="sm" color="secondary" style={{ marginBottom: "var(--space-sm)" }}>
                  Error State (broken URL):
                </Text>
                <Image 
                  src="https://broken-url-that-will-fail.jpg" 
                  alt="Failed to load" 
                  width={120}
                  height={120}
                  shape="rounded"
                  fallback="https://via.placeholder.com/120x120/cccccc/666666?text=Error"
                />
              </div>
            </div>
          </DemoSection>

          <DemoSection title="Real-world Usage">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
              {/* Avatar */}
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)" }}>
                <Image 
                  src="https://picsum.photos/50/50?random=10" 
                  alt="User avatar" 
                  shape="circle"
                  variant="bordered"
                  width={50}
                  height={50}
                />
                <div>
                  <Text weight="medium">John Doe</Text>
                  <Text size="sm" color="secondary">Software Engineer</Text>
                </div>
              </div>
              
              {/* Product thumbnail */}
              <div style={{ display: "flex", gap: "var(--space-md)" }}>
                <Image 
                  src="https://picsum.photos/80/80?random=11" 
                  alt="Product thumbnail" 
                  shape="rounded"
                  variant="shadow"
                  width={80}
                  height={80}
                />
                <div>
                  <Text weight="medium">Product Name</Text>
                  <Text size="sm" color="secondary">High-quality product description</Text>
                  <Text size="sm" color="accent" weight="medium">$29.99</Text>
                </div>
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
                    <code>src</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>required</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Image source URL
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>alt</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>required</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Alternative text for accessibility
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>variant</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'default' | 'bordered' | 'shadow' | 'elevated' | 'hover-lift'</code>
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
                    <code>shape</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'square' | 'rounded' | 'circle' | 'pill'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'square'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Border radius style of the image
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>size</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'md'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Predefined size of the image
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>fit</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'cover' | 'contain' | 'fill' | 'scale-down' | 'none'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'cover'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    CSS object-fit behavior for image sizing
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>width</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>number | string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>undefined</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Image width in pixels or CSS value
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>height</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>number | string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>undefined</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Image height in pixels or CSS value
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>fallback</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>React.ReactNode</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>undefined</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Fallback content when primary image fails to load
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>loading</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'lazy' | 'eager'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'lazy'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Native loading behavior for the image
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
            Avatar Component
          </Text>
          <CodeBlock>{`import { Image, Text } from '@flowlabkit/ui';

function UserAvatar({ user }: { user: User }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <Image
        src={user.avatarUrl}
        alt={\`\${user.name}'s avatar\`}
        shape="circle"
        variant="bordered"
        width={40}
        height={40}
        fallback="/default-avatar.png"
      />
      <div>
        <Text weight="medium">{user.name}</Text>
        <Text size="sm" color="secondary">{user.role}</Text>
      </div>
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Product Gallery
          </Text>
          <CodeBlock>{`import { Image } from '@flowlabkit/ui';

function ProductGallery({ images }: { images: ProductImage[] }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '1rem'
    }}>
      {images.map((image, index) => (
        <Image
          key={image.id}
          src={image.url}
          alt={image.alt}
          variant="shadow"
          shape="rounded"
          width="100%"
          height={200}
          loading={index < 6 ? 'eager' : 'lazy'}
          style={{
            objectFit: 'cover',
            cursor: 'pointer',
            transition: 'var(--transition-base)'
          }}
          onClick={() => openLightbox(image)}
        />
      ))}
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Hero Image with Overlay
          </Text>
          <CodeBlock>{`import { Image, Text } from '@flowlabkit/ui';

function HeroSection() {
  return (
    <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
      <Image
        src="/hero-background.jpg"
        alt="Hero background"
        variant="default"
        shape="square"
        width="100%"
        height="100%"
        style={{
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Text as="h1" size="3xl" weight="bold">
            Welcome to Our Platform
          </Text>
          <Text as="p" size="lg">
            Discover amazing features and possibilities
          </Text>
        </div>
      </div>
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Responsive Image with Error Handling
          </Text>
          <CodeBlock>{`import { Image } from '@flowlabkit/ui';
import { useState } from 'react';

function ResponsiveImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);
  
  return (
    <Image
      src={src}
      alt={alt}
      variant="subtle"
      shape="rounded"
      width="100%"
      height="auto"
      style={{
        maxWidth: '100%',
        height: 'auto',
        aspectRatio: '16/9',
        objectFit: 'cover'
      }}
      fallback={hasError ? '/image-error-placeholder.svg' : undefined}
      onError={() => setHasError(true)}
      className="responsive-image"
    />
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
            <li>Required alt text for screen reader compatibility</li>
            <li>Proper focus management and keyboard navigation</li>
            <li>Loading state indicators for assistive technologies</li>
            <li>Error handling with fallback content</li>
            <li>Native lazy loading support for performance</li>
          </ul>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Best Practices
          </Text>
          <CodeBlock>{`// Always provide meaningful alt text
❌ <Image src="/photo.jpg" alt="image" />
✅ <Image src="/photo.jpg" alt="Team photo from company retreat 2024" />

// Use empty alt for decorative images
<Image 
  src="/decorative-pattern.svg" 
  alt="" 
  role="presentation"
/>

// Provide context for complex images
<Image
  src="/chart.png"
  alt="Sales chart showing 25% increase from Q1 to Q2 2024"
  aria-describedby="chart-description"
/>
<div id="chart-description">
  Detailed explanation of the chart data...
</div>

// Handle loading states appropriately
<Image
  src="/large-image.jpg"
  alt="Product showcase"
  loading="lazy"
  aria-label="Product image is loading"
/>

// Use proper aspect ratios
<Image
  src="/hero.jpg"
  alt="Hero image"
  style={{
    aspectRatio: '16/9',
    objectFit: 'cover'
  }}
/>`}</CodeBlock>
        </CardBody>
      </Card>
    </div>
  );
};