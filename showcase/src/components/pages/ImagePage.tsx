import React from "react";
import { Layout, Text, Image, Badge, Card } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";
import { useTheme } from "../../../../src";

export const ImagePage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout title="Image" description="Enhanced image component with loading states, fallbacks, and responsive features">
      
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Basic Usage
        </Text>
        
        <CodeExample
          title="Simple Image"
          code={`<Image 
  src="https://picsum.photos/300/200" 
  alt="Sample image"
/>`}
          preview={
            <Card style={{ height: '180px', overflow: 'hidden' }}>
              <Image 
                src="https://picsum.photos/300/200" 
                alt="Sample image"
              />
            </Card>
          }
        />

        <CodeExample
          title="Image with Caption"
          code={`<Layout direction="column" gap="sm">
  <Image 
    src="https://picsum.photos/400/250" 
    alt="Beautiful landscape"
  />
  <Text size="sm" style={{ color: variables.colors.text.secondary }}>
    A beautiful landscape captured at sunset
  </Text>
</Layout>`}
          preview={
            <Card style={{ height: '220px', overflow: 'hidden' }}>
              <Layout direction="column" gap="sm">
                <Image 
                  src="https://picsum.photos/400/250" 
                  alt="Beautiful landscape"
                />
                <Text size="sm" style={{ color: variables.colors.text.secondary }}>
                  A beautiful landscape captured at sunset
                </Text>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Image Sizes */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Image Sizes
        </Text>
        
        <CodeExample
          title="Predefined Sizes"
          code={`<Layout direction="row" align="center" gap="lg" wrap>
  <Layout direction="column" align="center" gap="sm">
    <Image 
      src="https://picsum.photos/150/150" 
      alt="Small image"
      size="sm"
    />
    <Text size="sm">Small</Text>
  </Layout>
  
  <Layout direction="column" align="center" gap="sm">
    <Image 
      src="https://picsum.photos/200/200" 
      alt="Medium image"
      size="md"
    />
    <Text size="sm">Medium</Text>
  </Layout>
  
  <Layout direction="column" align="center" gap="sm">
    <Image 
      src="https://picsum.photos/250/250" 
      alt="Large image"
      size="lg"
    />
    <Text size="sm">Large</Text>
  </Layout>
</Layout>`}
          preview={
            <Card style={{ height: '200px', overflow: 'hidden' }}>
              <Layout direction="row" align="center" gap="lg" wrap>
                <Layout direction="column" align="center" gap="sm">
                  <Image 
                    src="https://picsum.photos/150/150" 
                    alt="Small image"
                    size="sm"
                  />
                  <Text size="sm">Small</Text>
                </Layout>
                
                <Layout direction="column" align="center" gap="sm">
                  <Image 
                    src="https://picsum.photos/200/200" 
                    alt="Medium image"
                    size="md"
                  />
                  <Text size="sm">Medium</Text>
                </Layout>
                
                <Layout direction="column" align="center" gap="sm">
                  <Image 
                    src="https://picsum.photos/250/250" 
                    alt="Large image"
                    size="lg"
                  />
                  <Text size="sm">Large</Text>
                </Layout>
              </Layout>
            </Card>
          }
        />

        <CodeExample
          title="Custom Dimensions"
          code={`<Layout direction="row" gap="md" wrap>
  <Image 
    src="https://picsum.photos/300/150" 
    alt="Wide image"
    width={300}
    height={150}
  />
  
  <Image 
    src="https://picsum.photos/150/300" 
    alt="Tall image"
    width={150}
    height={300}
  />
</Layout>`}
          preview={
            <Card style={{ height: '180px', overflow: 'hidden' }}>
              <Layout direction="row" gap="md" wrap>
                <Image 
                  src="https://picsum.photos/300/150" 
                  alt="Wide image"
                  width={300}
                  height={150}
                />
                
                <Image 
                  src="https://picsum.photos/150/300" 
                  alt="Tall image"
                  width={150}
                  height={300}
                />
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Image Shapes */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Image Shapes
        </Text>
        
        <CodeExample
          title="Different Shapes"
          code={`<Layout direction="row" align="center" gap="lg">
  <Layout direction="column" align="center" gap="sm">
    <Image 
      src="https://picsum.photos/200/200" 
      alt="Square image"
      shape="square"
      size="md"
    />
    <Text size="sm">Square</Text>
  </Layout>
  
  <Layout direction="column" align="center" gap="sm">
    <Image 
      src="https://picsum.photos/200/200" 
      alt="Rounded image"
      shape="rounded"
      size="md"
    />
    <Text size="sm">Rounded</Text>
  </Layout>
  
  <Layout direction="column" align="center" gap="sm">
    <Image 
      src="https://picsum.photos/200/200" 
      alt="Circle image"
      shape="circle"
      size="md"
    />
    <Text size="sm">Circle</Text>
  </Layout>
</Layout>`}
          preview={
            <Card style={{ height: '160px', overflow: 'hidden' }}>
              <Layout direction="row" align="center" gap="lg">
                <Layout direction="column" align="center" gap="sm">
                  <Image 
                    src="https://picsum.photos/200/200" 
                    alt="Square image"
                    shape="square"
                    size="md"
                  />
                  <Text size="sm">Square</Text>
                </Layout>
                
                <Layout direction="column" align="center" gap="sm">
                  <Image 
                    src="https://picsum.photos/200/200" 
                    alt="Rounded image"
                    shape="rounded"
                    size="md"
                  />
                  <Text size="sm">Rounded</Text>
                </Layout>
                
                <Layout direction="column" align="center" gap="sm">
                  <Image 
                    src="https://picsum.photos/200/200" 
                    alt="Circle image"
                    shape="circle"
                    size="md"
                  />
                  <Text size="sm">Circle</Text>
                </Layout>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Image States */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Image States
        </Text>
        
        <CodeExample
          title="Loading and Error States"
          code={`<Layout direction="row" gap="md" wrap>
  <Layout direction="column" align="center" gap="sm">
    <Image 
      src="https://picsum.photos/200/200?random=1" 
      alt="Loading image"
      loading="eager"
    />
    <Text size="sm">Normal Loading</Text>
  </Layout>
  
  <Layout direction="column" align="center" gap="sm">
    <Image 
      src="invalid-url" 
      alt="Broken image"
      fallback="/placeholder.jpg"
    />
    <Text size="sm">With Fallback</Text>
  </Layout>
</Layout>`}
          preview={
            <Layout direction="row" gap="md" wrap>
              <Layout direction="column" align="center" gap="sm">
                <Image 
                  src="https://picsum.photos/200/200?random=1" 
                  alt="Loading image"
                  loading="eager"
                />
                <Text size="sm">Normal Loading</Text>
              </Layout>
              
              <Layout direction="column" align="center" gap="sm">
                <Image 
                  src="invalid-url" 
                  alt="Broken image"
                  fallback="/placeholder.jpg"
                />
                <Text size="sm">With Fallback</Text>
              </Layout>
            </Layout>
          }
        />
      </Layout>

      {/* Responsive Images */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Responsive Images
        </Text>
        
        <CodeExample
          title="Responsive Sizing"
          code={`<Layout direction="column" gap="md">
  <Image 
    src="https://picsum.photos/800/400" 
    alt="Responsive image"
    responsive
    style={{ maxWidth: "100%" }}
  />
  
  <Layout direction="row" gap="md">
    <Badge variant="secondary" size="sm">Responsive</Badge>
    <Text size="sm" style={{ color: variables.colors.text.secondary }}>
      Automatically adjusts to container width
    </Text>
  </Layout>
</Layout>`}
          preview={
            <Layout direction="column" gap="md">
              <Image 
                src="https://picsum.photos/800/400" 
                alt="Responsive image"
                style={{ maxWidth: "100%" }}
              />
              
              <Layout direction="row" gap="md">
                <Badge variant="secondary" size="sm">Responsive</Badge>
                <Text size="sm" style={{ color: variables.colors.text.secondary }}>
                  Automatically adjusts to container width
                </Text>
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
            • src: string (required)<br/>
            • alt: string (required)<br/>
            • size?: "sm" | "md" | "lg"<br/>
            • width?: number<br/>
            • height?: number<br/>
            • shape?: "square" | "rounded" | "circle"<br/>
            • loading?: "lazy" | "eager"<br/>
            • responsive?: boolean<br/>
            • fallback?: string<br/>
            • onLoad?: () =&gt; void<br/>
            • onError?: () =&gt; void<br/>
            • style?: React.CSSProperties<br/>
            • className?: string
          </Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};