import React from "react";
import { Spinner, Text, Card, CardBody, Badge } from "../../../src/index";

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

export const SpinnerDocs: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-sm)" }}>
          Spinner
        </Text>
        <Text as="p" size="lg" color="secondary">
          Loading spinner component for indicating async operations and loading states
        </Text>
      </div>

      {/* Overview */}
      <Card style={{ marginBottom: "var(--space-xl)" }}>
        <CardBody>
          <Text as="h2" size="xl" weight="semibold" style={{ marginBottom: "var(--space-md)" }}>
            Overview
          </Text>
          <Text as="p" size="md" style={{ marginBottom: "var(--space-lg)", lineHeight: "1.6" }}>
            The Spinner component provides visual feedback for loading states with multiple variants, sizes, 
            and animation options. Perfect for indicating data fetching, form submissions, or any async operations.
          </Text>
          
          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Badge variant="primary">6 Variants</Badge>
            <Badge variant="success">5 Sizes</Badge>
            <Badge variant="info">3 Thickness Options</Badge>
            <Badge variant="secondary">3 Speed Settings</Badge>
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
            <Spinner variant="primary" />
            <Spinner variant="accent" />
            <Spinner variant="success" />
            <Spinner variant="warning" />
            <Spinner variant="error" />
            <Spinner variant="secondary" />
          </DemoSection>

          <DemoSection title="Sizes">
            <Spinner variant="accent" size="xs" />
            <Spinner variant="accent" size="sm" />
            <Spinner variant="accent" size="md" />
            <Spinner variant="accent" size="lg" />
            <Spinner variant="accent" size="xl" />
          </DemoSection>

          <DemoSection title="Thickness Options">
            <Spinner variant="accent" thickness="thin" />
            <Spinner variant="accent" thickness="medium" />
            <Spinner variant="accent" thickness="thick" />
          </DemoSection>

          <DemoSection title="Speed Settings">
            <Spinner variant="accent" speed="slow" />
            <Spinner variant="accent" speed="normal" />
            <Spinner variant="accent" speed="fast" />
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
                    <code>'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'primary'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Color variant of the spinner
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
                    Size of the spinner (16px to 48px)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>thickness</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'thin' | 'medium' | 'thick'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    <code>'medium'</code>
                  </td>
                  <td style={{ padding: "var(--space-md)", borderBottom: "1px solid var(--border-color)" }}>
                    Thickness of the spinner border
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
                    Animation speed (2s, 1s, 0.5s)
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
            Basic Usage
          </Text>
          <CodeBlock>{`import { Spinner } from '@flowlabkit/ui';

function LoadingComponent() {
  return (
    <div>
      <p>Loading data...</p>
      <Spinner variant="primary" size="md" />
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            In Buttons
          </Text>
          <CodeBlock>{`import { Button, Spinner } from '@flowlabkit/ui';

function SubmitButton({ loading }) {
  return (
    <Button disabled={loading}>
      {loading && <Spinner size="sm" />}
      {loading ? 'Submitting...' : 'Submit'}
    </Button>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Centered Loading Screen
          </Text>
          <CodeBlock>{`import { Spinner } from '@flowlabkit/ui';

function LoadingScreen() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      gap: '1rem'
    }}>
      <Spinner variant="accent" size="lg" />
      <p>Loading your content...</p>
    </div>
  );
}`}</CodeBlock>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)", marginTop: "var(--space-lg)" }}>
            Data Fetching Hook
          </Text>
          <CodeBlock>{`import { useState, useEffect } from 'react';
import { Spinner } from '@flowlabkit/ui';

function DataComponent() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <Spinner variant="primary" size="lg" />
        <p>Fetching data...</p>
      </div>
    );
  }
  
  return <div>{/* Render data */}</div>;
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
            <li>Proper ARIA attributes for screen readers</li>
            <li>Respects user's motion preferences</li>
            <li>Semantic role as "status" for live updates</li>
            <li>Hidden from focus as it's not interactive</li>
          </ul>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: "var(--space-sm)" }}>
            Best Practices
          </Text>
          <CodeBlock>{`// Provide context with aria-label
<Spinner aria-label="Loading user data" />

// Use with descriptive text
<div>
  <Spinner size="sm" />
  <span>Saving changes...</span>
</div>

// Announce completion to screen readers
function AsyncOperation() {
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  
  return (
    <div>
      {loading && <Spinner aria-label="Processing request" />}
      {complete && (
        <div role="alert" aria-live="polite">
          Operation completed successfully
        </div>
      )}
    </div>
  );
}`}</CodeBlock>
        </CardBody>
      </Card>
    </div>
  );
};