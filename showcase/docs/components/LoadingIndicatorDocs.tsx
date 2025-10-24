import React from "react";
import { LoadingIndicator, Text, Card, CardBody, Badge } from "../../../src/index";

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
        gap: "var(--space-lg)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  </div>
);

export const LoadingIndicatorDocs: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-sm)" }}>
          LoadingIndicator
        </Text>
        <Text as="p" size="lg" color="secondary">
          Advanced loading animations with customizable types, text positioning, and visual styles
        </Text>
      </div>

      {/* Overview */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Overview
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-lg)", lineHeight: "1.6" }}>
            The LoadingIndicator component provides a rich set of animated loading states perfect for 
            indicating progress, data fetching, or processing operations. It supports multiple animation 
            types, text integration, and comprehensive customization options.
          </Text>
          
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Badge variant="primary">5 Animation Types</Badge>
            <Badge variant="success">5 Sizes</Badge>
            <Badge variant="info">6 Color Variants</Badge>
            <Badge variant="secondary">Text Integration</Badge>
          </div>
        </CardBody>
      </Card>

      {/* Examples */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Examples
          </Text>

          <DemoSection title="Animation Types">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", alignItems: "center" }}>
              <LoadingIndicator type="dots" text="Dots" />
              <LoadingIndicator type="pulse" text="Pulse" />
              <LoadingIndicator type="wave" text="Wave" />
              <LoadingIndicator type="bars" text="Bars" />
              <LoadingIndicator type="bounce" text="Bounce" />
            </div>
          </DemoSection>

          <DemoSection title="Sizes">
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)" }}>
              <LoadingIndicator size="xs" text="XS" />
              <LoadingIndicator size="sm" text="SM" />
              <LoadingIndicator size="md" text="MD" />
              <LoadingIndicator size="lg" text="LG" />
              <LoadingIndicator size="xl" text="XL" />
            </div>
          </DemoSection>

          <DemoSection title="Color Variants">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)", alignItems: "center" }}>
              <LoadingIndicator variant="primary" text="Primary" />
              <LoadingIndicator variant="secondary" text="Secondary" />
              <LoadingIndicator variant="accent" text="Accent" />
              <LoadingIndicator variant="success" text="Success" />
              <LoadingIndicator variant="warning" text="Warning" />
              <LoadingIndicator variant="error" text="Error" />
            </div>
          </DemoSection>

          <DemoSection title="Animation Speed">
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)" }}>
              <LoadingIndicator speed="slow" text="Slow" />
              <LoadingIndicator speed="normal" text="Normal" />
              <LoadingIndicator speed="fast" text="Fast" />
            </div>
          </DemoSection>

          <DemoSection title="Text Positioning">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-lg)", alignItems: "center", width: "100%" }}>
              <LoadingIndicator textPosition="left" text="Loading..." />
              <LoadingIndicator textPosition="right" text="Loading..." />
              <LoadingIndicator textPosition="top" text="Loading..." />
              <LoadingIndicator textPosition="bottom" text="Loading..." />
            </div>
          </DemoSection>

          <DemoSection title="Real-world Usage">
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", width: "100%" }}>
              <Card variant="outlined" style={{ padding: "var(--space-lg)", textAlign: "center" }}>
                <LoadingIndicator 
                  type="wave" 
                  variant="primary" 
                  size="lg" 
                  text="Fetching user data..." 
                  textPosition="bottom"
                />
              </Card>
              
              <Card variant="filled" style={{ padding: "var(--space-lg)", textAlign: "center" }}>
                <LoadingIndicator 
                  type="bounce" 
                  variant="success" 
                  size="md" 
                  text="Processing payment..." 
                  textPosition="right"
                  speed="fast"
                />
              </Card>
              
              <Card variant="elevated" style={{ padding: "var(--space-lg)", textAlign: "center" }}>
                <LoadingIndicator 
                  type="bars" 
                  variant="accent" 
                  size="sm" 
                  text="Uploading files..." 
                  textPosition="left"
                />
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
                    <code>type</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'dots' | 'pulse' | 'wave' | 'bars' | 'bounce'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'dots'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Animation type for the loading indicator
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>size</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'md'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Size of the loading animation elements
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>variant</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'primary'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Color variant from the theme system
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>speed</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'slow' | 'normal' | 'fast'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'normal'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Animation speed timing
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>text</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>string</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>undefined</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Optional text to display with the loading animation
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>textPosition</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'left' | 'right' | 'top' | 'bottom'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'right'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Position of text relative to the animation
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
            Data Fetching States
          </Text>
          <CodeBlock>{`import { LoadingIndicator } from '@flowlabkit/ui';
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        padding: '2rem' 
      }}>
        <LoadingIndicator
          type="wave"
          variant="primary"
          size="lg"
          text="Loading data..."
          textPosition="bottom"
        />
      </div>
    );
  }
  
  return <div>{/* Render data */}</div>;
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Form Submission Loading
          </Text>
          <CodeBlock>{`import { LoadingIndicator, Button } from '@flowlabkit/ui';
import { useState } from 'react';

function SubmitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitForm();
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        style={{ position: 'relative' }}
      >
        {isSubmitting ? (
          <LoadingIndicator
            type="dots"
            variant="secondary"
            size="sm"
            text="Submitting..."
            speed="fast"
          />
        ) : (
          'Submit Form'
        )}
      </Button>
    </form>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            File Upload Progress
          </Text>
          <CodeBlock>{`import { LoadingIndicator, Card, CardBody, Text } from '@flowlabkit/ui';

function FileUploader({ files, uploadProgress }: FileUploaderProps) {
  return (
    <Card variant="outlined">
      <CardBody>
        <Text as="h3" weight="semibold" style={{ marginBottom: '1rem' }}>
          File Upload
        </Text>
        
        {files.map((file, index) => (
          <div key={file.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 0',
            borderBottom: '1px solid var(--border-color)'
          }}>
            <Text>{file.name}</Text>
            
            {uploadProgress[file.id] < 100 ? (
              <LoadingIndicator
                type="bars"
                variant="success"
                size="sm"
                text={\`\${uploadProgress[file.id]}%\`}
                textPosition="right"
                speed="normal"
              />
            ) : (
              <Text color="success" weight="medium">✓ Complete</Text>
            )}
          </div>
        ))}
      </CardBody>
    </Card>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Custom Styled Loading Indicator
          </Text>
          <CodeBlock>{`import { LoadingIndicator } from '@flowlabkit/ui';

function CustomLoader() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center'
      }}>
        <LoadingIndicator
          type="pulse"
          variant="primary"
          size="xl"
          text="Please wait while we process your request..."
          textPosition="bottom"
          speed="slow"
          style={{ 
            color: 'var(--text-primary)',
            gap: '1.5rem'
          }}
        />
      </div>
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Conditional Loading States
          </Text>
          <CodeBlock>{`import { LoadingIndicator, Text } from '@flowlabkit/ui';

function StatusLoader({ 
  status, 
  error 
}: { 
  status: 'loading' | 'success' | 'error'; 
  error?: string;
}) {
  const getLoadingProps = () => {
    switch (status) {
      case 'loading':
        return {
          type: 'bounce' as const,
          variant: 'primary' as const,
          text: 'Processing...'
        };
      case 'success':
        return {
          type: 'pulse' as const,
          variant: 'success' as const,
          text: 'Success!'
        };
      case 'error':
        return {
          type: 'dots' as const,
          variant: 'error' as const,
          text: error || 'Something went wrong'
        };
      default:
        return {
          type: 'dots' as const,
          variant: 'primary' as const,
          text: 'Loading...'
        };
    }
  };
  
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <LoadingIndicator
        {...getLoadingProps()}
        size="lg"
        textPosition="bottom"
        speed={status === 'loading' ? 'normal' : 'fast'}
      />
    </div>
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
            <li>ARIA role="status" for screen reader compatibility</li>
            <li>Automatic aria-label generation based on text content</li>
            <li>Reduced motion support respecting user preferences</li>
            <li>Semantic status announcements for loading states</li>
            <li>High contrast color variants for better visibility</li>
          </ul>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Best Practices
          </Text>
          <CodeBlock>{`// Always provide meaningful loading text
❌ <LoadingIndicator />
✅ <LoadingIndicator text="Loading user profile..." />

// Use appropriate ARIA attributes
<LoadingIndicator
  text="Saving changes..."
  role="status"
  aria-live="polite"
  aria-label="Saving your changes, please wait"
/>

// Respect reduced motion preferences
<LoadingIndicator
  type="dots"
  speed="slow"
  style={{
    animationDuration: 'var(--reduced-motion, 2s)'
  }}
/>

// Provide context for loading states
<div>
  <Text as="h2">User Dashboard</Text>
  {loading && (
    <LoadingIndicator
      text="Loading dashboard data..."
      variant="primary"
      textPosition="bottom"
      aria-describedby="loading-description"
    />
  )}
  <div 
    id="loading-description" 
    style={{ display: 'none' }}
  >
    Please wait while we fetch your personalized dashboard information
  </div>
</div>

// Use semantic variants for different states
<LoadingIndicator variant="success" text="Upload complete" />
<LoadingIndicator variant="error" text="Upload failed" />
<LoadingIndicator variant="warning" text="Processing with warnings" />`}</CodeBlock>
        </CardBody>
      </Card>
    </div>
  );
};