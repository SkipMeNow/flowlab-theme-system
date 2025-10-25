import React, { useState } from "react";
import { Layout, Text, LoadingIndicator, Button, Card, Badge } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";
import { useTheme } from "../../../../src";

export const LoadingPage: React.FC = () => {
  const { variables } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <DocPageLayout title="Loading Indicators" description="Various loading indicators and states for better user experience">
      
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Basic Usage
        </Text>
        
        <CodeExample
          title="Simple Loading Indicator"
          code={`<LoadingIndicator />`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <LoadingIndicator />
            </Card>
          }
        />

        <CodeExample
          title="Loading with Text"
          code={`<LoadingIndicator text="Loading..." />`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <LoadingIndicator text="Loading..." />
            </Card>
          }
        />

        <CodeExample
          title="Text Positioning"
          code={`<Layout direction="column" gap="md">
  <LoadingIndicator text="Loading data" textPosition="left" />
  <LoadingIndicator text="Processing" textPosition="right" />
  <LoadingIndicator text="Please wait" textPosition="top" />
  <LoadingIndicator text="Almost done" textPosition="bottom" />
</Layout>`}
          preview={
            <Card style={{ height: '200px', overflow: 'hidden' }}>
              <Layout direction="column" gap="md">
                <LoadingIndicator text="Loading data" textPosition="left" />
                <LoadingIndicator text="Processing" textPosition="right" />
                <LoadingIndicator text="Please wait" textPosition="top" />
                <LoadingIndicator text="Almost done" textPosition="bottom" />
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Animation Types */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Animation Types
        </Text>
        
        <CodeExample
          title="Dots Animation"
          code={`<LoadingIndicator type="dots" text="Loading dots..." />`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <LoadingIndicator type="dots" text="Loading dots..." />
            </Card>
          }
        />

        <CodeExample
          title="Pulse Animation"
          code={`<LoadingIndicator type="pulse" text="Pulsing..." />`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <LoadingIndicator type="pulse" text="Pulsing..." />
            </Card>
          }
        />

        <CodeExample
          title="Wave Animation"
          code={`<LoadingIndicator type="wave" text="Wave loading..." />`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <LoadingIndicator type="wave" text="Wave loading..." />
            </Card>
          }
        />

        <CodeExample
          title="Bars Animation"
          code={`<LoadingIndicator type="bars" text="Processing bars..." />`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <LoadingIndicator type="bars" text="Processing bars..." />
            </Card>
          }
        />

        <CodeExample
          title="Bounce Animation"
          code={`<LoadingIndicator type="bounce" text="Bouncing..." />`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <LoadingIndicator type="bounce" text="Bouncing..." />
            </Card>
          }
        />
      </Layout>

      {/* Sizes */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Different Sizes
        </Text>
        
        <CodeExample
          title="Loading Indicator Sizes"
          code={`<Layout direction="column" gap="md">
  <LoadingIndicator size="xs" text="Extra Small" />
  <LoadingIndicator size="sm" text="Small" />
  <LoadingIndicator size="md" text="Medium" />
  <LoadingIndicator size="lg" text="Large" />
  <LoadingIndicator size="xl" text="Extra Large" />
</Layout>`}
          preview={
            <Card style={{ height: '200px', overflow: 'hidden' }}>
              <Layout direction="column" gap="md">
                <LoadingIndicator size="xs" text="Extra Small" />
                <LoadingIndicator size="sm" text="Small" />
                <LoadingIndicator size="md" text="Medium" />
                <LoadingIndicator size="lg" text="Large" />
                <LoadingIndicator size="xl" text="Extra Large" />
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Color Variants */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Color Variants
        </Text>
        
        <CodeExample
          title="Different Color Variants"
          code={`<Layout direction="column" gap="md">
  <LoadingIndicator variant="primary" text="Primary" />
  <LoadingIndicator variant="secondary" text="Secondary" />
  <LoadingIndicator variant="accent" text="Accent" />
  <LoadingIndicator variant="success" text="Success" />
  <LoadingIndicator variant="warning" text="Warning" />
  <LoadingIndicator variant="error" text="Error" />
</Layout>`}
          preview={
            <Card style={{ height: '200px', overflow: 'hidden' }}>
              <Layout direction="column" gap="md">
                <LoadingIndicator variant="primary" text="Primary" />
                <LoadingIndicator variant="secondary" text="Secondary" />
                <LoadingIndicator variant="accent" text="Accent" />
                <LoadingIndicator variant="success" text="Success" />
                <LoadingIndicator variant="warning" text="Warning" />
                <LoadingIndicator variant="error" text="Error" />
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Animation Speed */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Animation Speed
        </Text>
        
        <CodeExample
          title="Different Animation Speeds"
          code={`<Layout direction="column" gap="md">
  <LoadingIndicator type="dots" speed="slow" text="Slow animation" />
  <LoadingIndicator type="dots" speed="normal" text="Normal speed" />
  <LoadingIndicator type="dots" speed="fast" text="Fast animation" />
</Layout>`}
          preview={
            <Card style={{ height: '140px', overflow: 'hidden' }}>
              <Layout direction="column" gap="md">
                <LoadingIndicator type="dots" speed="slow" text="Slow animation" />
                <LoadingIndicator type="dots" speed="normal" text="Normal speed" />
                <LoadingIndicator type="dots" speed="fast" text="Fast animation" />
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Loading Button States */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Loading Button States
        </Text>
        
        <CodeExample
          title="Button with Loading State"
          code={`const [isLoading, setIsLoading] = useState(false);

const handleClick = () => {
  setIsLoading(true);
  setTimeout(() => setIsLoading(false), 3000);
};

<Layout direction="row" gap="md">
  <Button 
    onClick={handleClick}
    disabled={isLoading}
    style={{ minWidth: "140px" }}
  >
    {isLoading ? (
      <LoadingIndicator size="sm" text="Loading" textPosition="right" />
    ) : (
      "Click to Load"
    )}
  </Button>
  
  <Button variant="outline" disabled={isLoading}>
    {isLoading ? "Processing..." : "Another Action"}
  </Button>
</Layout>`}
          preview={
            <Card style={{ height: '100px', overflow: 'hidden' }}>
              <Layout direction="row" gap="md">
                <Button 
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => setIsLoading(false), 3000);
                  }}
                  disabled={isLoading}
                  style={{ minWidth: "140px" }}
                >
                  {isLoading ? (
                    <LoadingIndicator size="sm" text="Loading" textPosition="right" />
                  ) : (
                    "Click to Load"
                  )}
                </Button>
                
                <Button variant="outline" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Another Action"}
                </Button>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Real-world Examples */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Real-world Examples
        </Text>
        
        <CodeExample
          title="Mixed Animation Types"
          code={`<Layout direction="column" gap="lg">
  <Layout direction="column" gap="sm">
    <Text weight="semibold">File Upload</Text>
    <LoadingIndicator 
      type="bars" 
      variant="accent" 
      text="Uploading..." 
      textPosition="right"
    />
  </Layout>
  
  <Layout direction="column" gap="sm">
    <Text weight="semibold">Data Processing</Text>
    <LoadingIndicator 
      type="wave" 
      variant="success" 
      speed="fast"
      text="Processing data..." 
      textPosition="right"
    />
  </Layout>
  
  <Layout direction="column" gap="sm">
    <Text weight="semibold">Network Request</Text>  
    <LoadingIndicator 
      type="pulse" 
      variant="warning" 
      speed="slow"
      text="Connecting..." 
      textPosition="right"
    />
  </Layout>
</Layout>`}
          preview={
            <Card style={{ height: '200px', overflow: 'hidden' }}>
              <Layout direction="column" gap="lg">
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">File Upload</Text>
                  <LoadingIndicator 
                    type="bars" 
                    variant="accent" 
                    text="Uploading..." 
                    textPosition="right"
                  />
                </Layout>
                
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">Data Processing</Text>
                  <LoadingIndicator 
                    type="wave" 
                    variant="success" 
                    speed="fast"
                    text="Processing data..." 
                    textPosition="right"
                  />
                </Layout>
                
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">Network Request</Text>  
                  <LoadingIndicator 
                    type="pulse" 
                    variant="warning" 
                    speed="slow"
                    text="Connecting..." 
                    textPosition="right"
                  />
                </Layout>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Loading Overlays */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Loading Overlays
        </Text>
        
        <CodeExample
          title="Card with Loading Overlay"
          code={`<Card style={{ position: "relative", minHeight: "200px" }}>
  <Layout direction="column" gap="md">
    <Text size="lg" weight="bold">Content Card</Text>
    <Text>This card contains some content that might be loading.</Text>
    <Layout direction="row" gap="sm">
      <Badge variant="secondary">Tag 1</Badge>
      <Badge variant="secondary">Tag 2</Badge>
    </Layout>
  </Layout>
  
  {/* Loading Overlay */}
  <Layout
    direction="column"
    align="center"
    justify="center"
    gap="md"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(2px)"
    }}
  >
    <Spinner size="lg" />
    <Text weight="semibold">Loading content...</Text>
  </Layout>
</Card>`}
          preview={
            <Card style={{ height: '180px', overflow: 'hidden' }}>
              <Card style={{ position: "relative", minHeight: "140px" }}>
                <Layout direction="column" gap="md">
                  <Text size="lg" weight="bold">Content Card</Text>
                  <Text>This card contains some content that might be loading.</Text>
                  <Layout direction="row" gap="sm">
                    <Badge variant="secondary">Tag 1</Badge>
                    <Badge variant="secondary">Tag 2</Badge>
                  </Layout>
                </Layout>
                
                {/* Loading Overlay */}
                <Layout
                  direction="column"
                  align="center"
                  justify="center"
                  gap="md"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(2px)"
                  }}
                >
                  <LoadingIndicator 
                    type="pulse" 
                    size="lg" 
                    text="Loading content..." 
                    textPosition="bottom" 
                  />
                </Layout>
              </Card>
            </Card>
          }
        />
      </Layout>

      {/* Skeleton Loading */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Skeleton Loading States
        </Text>
        
        <CodeExample
          title="Skeleton Placeholders"
          code={`<Layout direction="column" gap="md">
  {/* Skeleton Card */}
  <Layout direction="column" gap="sm">
    <div 
      style={{
        height: "20px",
        width: "60%",
        backgroundColor: variables.colors.neutral[200],
        borderRadius: variables.borderRadius.sm,
        animation: "pulse 1.5s ease-in-out infinite"
      }}
    />
    <div 
      style={{
        height: "14px",
        width: "100%",
        backgroundColor: variables.colors.neutral[200],
        borderRadius: variables.borderRadius.sm,
        animation: "pulse 1.5s ease-in-out infinite"
      }}
    />
    <div 
      style={{
        height: "14px",
        width: "80%",
        backgroundColor: variables.colors.neutral[200],
        borderRadius: variables.borderRadius.sm,
        animation: "pulse 1.5s ease-in-out infinite"
      }}
    />
  </Layout>
  
  <Layout direction="row" gap="sm">
    <div 
      style={{
        height: "24px",
        width: "60px",
        backgroundColor: variables.colors.neutral[200],
        borderRadius: variables.borderRadius.full,
        animation: "pulse 1.5s ease-in-out infinite"
      }}
    />
    <div 
      style={{
        height: "24px",
        width: "70px",
        backgroundColor: variables.colors.neutral[200],
        borderRadius: variables.borderRadius.full,
        animation: "pulse 1.5s ease-in-out infinite"
      }}
    />
  </Layout>
</Layout>`}
          preview={
            <Card style={{ height: '160px', overflow: 'hidden' }}>
              <Layout direction="column" gap="md">
                {/* Skeleton Card */}
                <Layout direction="column" gap="sm">
                  <div 
                    style={{
                      height: "20px",
                      width: "60%",
                      backgroundColor: variables.colors.gray[200],
                      borderRadius: variables.borderRadius.sm,
                      animation: "pulse 1.5s ease-in-out infinite"
                    }}
                  />
                  <div 
                    style={{
                      height: "14px",
                      width: "100%",
                      backgroundColor: variables.colors.gray[200],
                      borderRadius: variables.borderRadius.sm,
                      animation: "pulse 1.5s ease-in-out infinite"
                    }}
                  />
                  <div 
                    style={{
                      height: "14px",
                      width: "80%",
                      backgroundColor: variables.colors.gray[200],
                      borderRadius: variables.borderRadius.sm,
                      animation: "pulse 1.5s ease-in-out infinite"
                    }}
                  />
                </Layout>
                
                <Layout direction="row" gap="sm">
                  <div 
                    style={{
                      height: "24px",
                      width: "60px",
                      backgroundColor: variables.colors.gray[200],
                      borderRadius: variables.borderRadius.full,
                      animation: "pulse 1.5s ease-in-out infinite"
                    }}
                  />
                  <div 
                    style={{
                      height: "24px",
                      width: "70px",
                      backgroundColor: variables.colors.gray[200],
                      borderRadius: variables.borderRadius.full,
                      animation: "pulse 1.5s ease-in-out infinite"
                    }}
                  />
                </Layout>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Progress Indicators */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Progress Indicators
        </Text>
        
        <CodeExample
          title="Simple Progress Bar"
          code={`<Layout direction="column" gap="md">
  <Layout direction="row" justify="between" align="center">
    <Text weight="semibold">Loading Progress</Text>
    <Text size="sm" style={{ color: variables.colors.text.secondary }}>
      75%
    </Text>
  </Layout>
  
  <div 
    style={{
      width: "100%",
      height: "8px",
      backgroundColor: variables.colors.neutral[200],
      borderRadius: variables.borderRadius.full,
      overflow: "hidden"
    }}
  >
    <div 
      style={{
        width: "75%",
        height: "100%",
        backgroundColor: variables.colors.accent[600],
        borderRadius: variables.borderRadius.full,
        transition: "width 0.3s ease"
      }}
    />
  </div>
</Layout>`}
          preview={
            <Card style={{ height: '100px', overflow: 'hidden' }}>
              <Layout direction="column" gap="md">
                <Layout direction="row" justify="between" align="center">
                  <Text weight="semibold">Loading Progress</Text>
                  <Text size="sm" style={{ color: variables.colors.text.secondary }}>
                    75%
                  </Text>
                </Layout>
                
                <div 
                  style={{
                    width: "100%",
                    height: "8px",
                    backgroundColor: variables.colors.gray[200],
                    borderRadius: variables.borderRadius.full,
                    overflow: "hidden"
                  }}
                >
                  <div 
                    style={{
                      width: "75%",
                      height: "100%",
                      backgroundColor: variables.colors.accent[600],
                      borderRadius: variables.borderRadius.full,
                      transition: "width 0.3s ease"
                    }}
                  />
                </div>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Loading Messages */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Loading Messages
        </Text>
        
        <CodeExample
          title="Contextual Loading Messages"
          code={`<Layout direction="column" gap="lg">
  <Layout direction="row" align="center" gap="md">
    <Spinner size="sm" />
    <Text>Saving changes...</Text>
  </Layout>
  
  <Layout direction="row" align="center" gap="md">
    <Spinner size="sm" />
    <Text>Uploading files...</Text>
    <Badge variant="secondary" size="sm">3 of 5</Badge>
  </Layout>
  
  <Layout direction="row" align="center" gap="md">
    <Spinner size="sm" />
    <Text>Connecting to server...</Text>
  </Layout>
</Layout>`}
          preview={
            <Card style={{ height: '140px', overflow: 'hidden' }}>
              <Layout direction="column" gap="lg">
                <Layout direction="row" align="center" gap="md">
                  <LoadingIndicator type="dots" size="sm" text="Saving changes..." />
                </Layout>
                
                <Layout direction="row" align="center" gap="md">
                  <LoadingIndicator type="bars" size="sm" text="Uploading files..." />
                  <Badge variant="secondary" size="sm">3 of 5</Badge>
                </Layout>
                
                <Layout direction="row" align="center" gap="md">
                  <LoadingIndicator type="wave" size="sm" text="Connecting to server..." />
                </Layout>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* API Reference */}
      <Layout direction="column" gap="md">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          API Reference
        </Text>
        
        <Layout direction="column" gap="sm" style={{ backgroundColor: variables.colors.background.surface, padding: variables.spacing.lg, borderRadius: variables.borderRadius.md }}>
          <Text weight="semibold" style={{ color: variables.colors.text.primary }}>LoadingIndicator Props</Text>
          <Text size="sm" style={{ color: variables.colors.text.secondary, fontFamily: "monospace" }}>
            • type?: "dots" | "pulse" | "wave" | "bars" | "bounce"<br/>
            • size?: "xs" | "sm" | "md" | "lg" | "xl"<br/>
            • variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "error"<br/>
            • speed?: "slow" | "normal" | "fast"<br/>
            • text?: string<br/>
            • textPosition?: "left" | "right" | "top" | "bottom"<br/>
            • className?: string<br/>
            • style?: React.CSSProperties
          </Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};