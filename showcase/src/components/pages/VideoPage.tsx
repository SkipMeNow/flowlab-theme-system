import React from "react";
import { Layout, Text, Video, Badge, Card } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";
import { useTheme } from "../../../../src";

export const VideoPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout
      title="Video"
      description="Enhanced video player component with controls, responsive features, and multiple formats"
    >
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text
          as="h2"
          size="xl"
          weight="bold"
          style={{ color: variables.colors.text.primary }}
        >
          Basic Usage
        </Text>

        <CodeExample
          title="Simple Video Player"
          code={`<Video 
  src="https://www.w3schools.com/html/mov_bbb.mp4" 
  width={400}
  height={225}
  controls
/>`}
          preview={
            <Card style={{ height: "280px", overflow: "hidden" }}>
              <Video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                width={400}
                height={225}
                controls
              />
            </Card>
          }
        />

        <CodeExample
          title="Video with Poster"
          code={`<Video 
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  poster="https://picsum.photos/400/225"
  width={400}
  height={225}
  controls
/>`}
          preview={
            <Card style={{ height: "280px", overflow: "hidden" }}>
              <Video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                poster="https://picsum.photos/400/225"
                width={400}
                height={225}
                controls
              />
            </Card>
          }
        />
      </Layout>

      {/* Video Sizes */}
      <Layout direction="column" gap="lg">
        <Text
          as="h2"
          size="xl"
          weight="bold"
          style={{ color: variables.colors.text.primary }}
        >
          Video Sizes
        </Text>

        <CodeExample
          title="Predefined Sizes"
          code={`<Layout direction="column" gap="lg">
  <Layout direction="column" gap="sm">
    <Video 
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      size="sm"
      controls
    />
    <Text size="sm">Small (320x180)</Text>
  </Layout>
  
  <Layout direction="column" gap="sm">
    <Video 
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      size="md"
      controls
    />
    <Text size="sm">Medium (640x360)</Text>
  </Layout>
</Layout>`}
          preview={
            <Card style={{ height: "300px", overflow: "hidden" }}>
              <Layout direction="column" gap="lg">
                <Layout direction="column" gap="sm">
                  <Video
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    size="sm"
                    controls
                  />
                  <Text size="sm">Small (320x180)</Text>
                </Layout>

                <Layout direction="column" gap="sm">
                  <Video
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    size="md"
                    controls
                  />
                  <Text size="sm">Medium (640x360)</Text>
                </Layout>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Video Controls */}
      <Layout direction="column" gap="lg">
        <Text
          as="h2"
          size="xl"
          weight="bold"
          style={{ color: variables.colors.text.primary }}
        >
          Video Controls
        </Text>

        <CodeExample
          title="Different Control Options"
          code={`<Layout direction="column" gap="lg">
  <Layout direction="column" gap="sm">
    <Video 
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      width={400}
      height={225}
      controls
      autoPlay
      muted
    />
    <Layout direction="row" gap="sm">
      <Badge variant="primary" size="sm">Controls</Badge>
      <Badge variant="secondary" size="sm">AutoPlay</Badge>
      <Badge variant="secondary" size="sm">Muted</Badge>
    </Layout>
  </Layout>
  
  <Layout direction="column" gap="sm">
    <Video 
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      width={400}
      height={225}
      controls
      loop
    />
    <Layout direction="row" gap="sm">
      <Badge variant="primary" size="sm">Controls</Badge>
      <Badge variant="secondary" size="sm">Loop</Badge>
    </Layout>
  </Layout>
</Layout>`}
          preview={
            <Card style={{ height: "350px", overflow: "hidden" }}>
              <Layout direction="column" gap="lg">
                <Layout direction="column" gap="sm">
                  <Video
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    width={400}
                    height={225}
                    controls
                    autoPlay
                    muted
                  />
                  <Layout direction="row" gap="sm">
                    <Badge variant="primary" size="sm">
                      Controls
                    </Badge>
                    <Badge variant="secondary" size="sm">
                      AutoPlay
                    </Badge>
                    <Badge variant="secondary" size="sm">
                      Muted
                    </Badge>
                  </Layout>
                </Layout>

                <Layout direction="column" gap="sm">
                  <Video
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    width={400}
                    height={225}
                    controls
                    loop
                  />
                  <Layout direction="row" gap="sm">
                    <Badge variant="primary" size="sm">
                      Controls
                    </Badge>
                    <Badge variant="secondary" size="sm">
                      Loop
                    </Badge>
                  </Layout>
                </Layout>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Responsive Video */}
      <Layout direction="column" gap="lg">
        <Text
          as="h2"
          size="xl"
          weight="bold"
          style={{ color: variables.colors.text.primary }}
        >
          Responsive Video
        </Text>

        <CodeExample
          title="Responsive Video Player"
          code={`<Layout direction="column" gap="md">
  <Video 
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    style={{ 
      width: "100%", 
      maxWidth: "600px",
      height: "auto"
    }}
    controls
  />
  
  <Layout direction="row" gap="md">
    <Badge variant="secondary" size="sm">Responsive</Badge>
    <Text size="sm" style={{ color: variables.colors.text.secondary }}>
      Adjusts to container width while maintaining aspect ratio
    </Text>
  </Layout>
</Layout>`}
          preview={
            <Card style={{ height: "280px", overflow: "hidden" }}>
              <Layout direction="column" gap="md">
                <Video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "auto",
                  }}
                  controls
                />

                <Layout direction="row" gap="md">
                  <Badge variant="secondary" size="sm">
                    Responsive
                  </Badge>
                  <Text
                    size="sm"
                    style={{ color: variables.colors.text.secondary }}
                  >
                    Adjusts to container width while maintaining aspect ratio
                  </Text>
                </Layout>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Video with Custom Styling */}
      <Layout direction="column" gap="lg">
        <Text
          as="h2"
          size="xl"
          weight="bold"
          style={{ color: variables.colors.text.primary }}
        >
          Custom Styling
        </Text>

        <CodeExample
          title="Styled Video Player"
          code={`<Layout direction="column" gap="md">
  <Video 
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    width={500}
    height={280}
    controls
    style={{
      borderRadius: variables.borderRadius.lg,
      border: \`2px solid \${variables.colors.border}\`,
      boxShadow: variables.shadows.md
    }}
  />
  
  <Text size="sm" style={{ color: variables.colors.text.secondary }}>
    Video with custom border radius, border, and shadow
  </Text>
</Layout>`}
          preview={
            <Layout direction="column" gap="md">
              <Video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                width={500}
                height={280}
                controls
                style={{
                  borderRadius: variables.borderRadius.lg,
                  border: `2px solid ${variables.colors.border}`,
                  boxShadow: variables.shadows.md,
                }}
              />

              <Text
                size="sm"
                style={{ color: variables.colors.text.secondary }}
              >
                Video with custom border radius, border, and shadow
              </Text>
            </Layout>
          }
        />
      </Layout>

      {/* Video Gallery */}
      <Layout direction="column" gap="lg">
        <Text
          as="h2"
          size="xl"
          weight="bold"
          style={{ color: variables.colors.text.primary }}
        >
          Video Gallery
        </Text>

        <CodeExample
          title="Multiple Videos"
          code={`<Layout direction="row" gap="md" wrap>
  <Layout direction="column" gap="sm">
    <Video 
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://picsum.photos/300/169?random=1"
      width={300}
      height={169}
      controls
    />
    <Text size="sm" weight="semibold">Big Buck Bunny</Text>
    <Text size="xs" style={{ color: variables.colors.text.secondary }}>
      Animated short film
    </Text>
  </Layout>
  
  <Layout direction="column" gap="sm">
    <Video 
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      poster="https://picsum.photos/300/169?random=2"
      width={300}
      height={169}
      controls
    />
    <Text size="sm" weight="semibold">Sample Video</Text>
    <Text size="xs" style={{ color: variables.colors.text.secondary }}>
      Demo content
    </Text>
  </Layout>
</Layout>`}
          preview={
            <Layout direction="row" gap="md" wrap>
              <Layout direction="column" gap="sm">
                <Video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  poster="https://picsum.photos/300/169?random=1"
                  width={300}
                  height={169}
                  controls
                />
                <Text size="sm" weight="semibold">
                  Big Buck Bunny
                </Text>
                <Text
                  size="xs"
                  style={{ color: variables.colors.text.secondary }}
                >
                  Animated short film
                </Text>
              </Layout>

              <Layout direction="column" gap="sm">
                <Video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  poster="https://picsum.photos/300/169?random=2"
                  width={300}
                  height={169}
                  controls
                />
                <Text size="sm" weight="semibold">
                  Sample Video
                </Text>
                <Text
                  size="xs"
                  style={{ color: variables.colors.text.secondary }}
                >
                  Demo content
                </Text>
              </Layout>
            </Layout>
          }
        />
      </Layout>

      {/* API Reference */}
      <Layout direction="column" gap="md">
        <Text
          as="h2"
          size="xl"
          weight="bold"
          style={{ color: variables.colors.text.primary }}
        >
          API Reference
        </Text>

        <Layout
          direction="column"
          gap="sm"
          style={{
            backgroundColor: variables.colors.background.surface,
            padding: variables.spacing.lg,
            borderRadius: variables.borderRadius.md,
          }}
        >
          <Text
            weight="semibold"
            style={{ color: variables.colors.text.primary }}
          >
            Props
          </Text>
          <Text
            size="sm"
            style={{
              color: variables.colors.text.secondary,
              fontFamily: "monospace",
            }}
          >
            • src: string (required)
            <br />
            • size?: "sm" | "md" | "lg"
            <br />
            • width?: number
            <br />
            • height?: number
            <br />
            • poster?: string
            <br />
            • controls?: boolean
            <br />
            • autoPlay?: boolean
            <br />
            • loop?: boolean
            <br />
            • muted?: boolean
            <br />
            • preload?: "none" | "metadata" | "auto"
            <br />
            • onPlay?: () =&gt; void
            <br />
            • onPause?: () =&gt; void
            <br />
            • onEnded?: () =&gt; void
            <br />
            • style?: React.CSSProperties
            <br />• className?: string
          </Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};
