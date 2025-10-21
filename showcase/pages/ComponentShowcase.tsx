import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Badge,
  Input,
  Link,
  Spinner,
  LoadingIndicator,
  Image,
  Video,
} from "../../src/index";

const ComponentShowcase: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  
  const CodeBlock: React.FC<{ children: string }> = ({ children }) => (
    <pre
      style={{
        backgroundColor: "var(--bg-elevated)",
        border: "1px solid var(--border-color)",
        borderRadius: "var(--radius-sm)",
        padding: "var(--space-sm)",
        fontSize: "12px",
        fontFamily: "Monaco, 'Cascadia Code', 'Roboto Mono', monospace",
        color: "var(--text-secondary)",
        overflow: "auto",
        margin: 0,
      }}
    >
      {children}
    </pre>
  );

  const DemoSection: React.FC<{
    title: string;
    children: React.ReactNode;
  }> = ({ title, children }) => (
    <div style={{ marginBottom: "var(--space-lg)" }}>
      <Text as="h5" size="sm" weight="semibold" style={{ marginBottom: "var(--space-sm)", color: "var(--text-secondary)" }}>
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

  const ComponentCard: React.FC<{
    title: string;
    description: string;
    demos: { [key: string]: React.ReactNode };
    code: string;
  }> = ({ title, description, demos, code }) => (
    <Card style={{ marginBottom: "var(--space-xl)" }}>
      <CardHeader>
        <Text as="h3" size="lg" weight="semibold">
          {title}
        </Text>
        <Text as="p" size="sm" color="secondary" style={{ marginTop: "var(--space-xs)" }}>
          {description}
        </Text>
      </CardHeader>
      <CardBody>
        <div style={{ marginBottom: "var(--space-lg)" }}>
          <Text as="h4" size="md" weight="medium" style={{ marginBottom: "var(--space-md)" }}>
            Examples
          </Text>
          {Object.entries(demos).map(([category, content]) => (
            <DemoSection key={category} title={category}>
              {content}
            </DemoSection>
          ))}
        </div>
        
        <div>
          <Text as="h4" size="md" weight="medium" style={{ marginBottom: "var(--space-md)" }}>
            Code Example
          </Text>
          <CodeBlock>{code}</CodeBlock>
        </div>
      </CardBody>
    </Card>
  );

  return (
    <div style={{ padding: "var(--space-xl)" }}>
      {/* Header */}
      <div style={{ marginBottom: "var(--space-2xl)", textAlign: "center" }}>
        <Text as="h1" size="3xl" weight="bold" style={{ marginBottom: "var(--space-md)" }}>
          Component Library
        </Text>
        <Text as="p" size="lg" color="secondary" style={{ maxWidth: "600px", margin: "0 auto" }}>
          A comprehensive collection of React components with theme integration, 
          accessibility, and TypeScript support.
        </Text>
      </div>

      {/* Button Component */}
      <ComponentCard
        title="Button"
        description="Interactive buttons with multiple variants, sizes, and states"
        demos={{
          "Variants": (
            <>
              <Button>Default</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </>
          ),
          "Sizes": (
            <>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </>
          ),
          "States": (
            <>
              <Button variant="primary">Normal</Button>
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="primary" loading>Loading</Button>
            </>
          )
        }}
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

{/* Sizes */}
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>

{/* States */}
<Button variant="primary" disabled>Disabled</Button>
<Button variant="primary" loading>Loading</Button>`}
      />

      {/* Input Component */}
      <ComponentCard
        title="Input"
        description="Form inputs with validation states and various configurations"
        demos={{
          "Types": (
            <>
              <Input placeholder="Text input" />
              <Input type="email" placeholder="Email input" />
              <Input type="password" placeholder="Password input" />
              <Input type="number" placeholder="Number input" />
            </>
          ),
          "Sizes": (
            <>
              <Input placeholder="Small input" size="sm" />
              <Input placeholder="Medium input" size="md" />
              <Input placeholder="Large input" size="lg" />
            </>
          ),
          "States": (
            <>
              <Input placeholder="Normal input" />
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="Error input" isInvalid />
            </>
          )
        }}
        code={`<Input 
  placeholder="Basic input" 
  value={value} 
  onChange={(e) => setValue(e.target.value)} 
/>

{/* Types */}
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />

{/* Sizes */}
<Input placeholder="Small" size="sm" />
<Input placeholder="Large" size="lg" />

{/* States */}
<Input placeholder="Disabled" disabled />
<Input placeholder="Error" isInvalid />`}
      />

      {/* Badge Component */}
      <ComponentCard
        title="Badge"
        description="Small status indicators and labels with various styles"
        demos={{
          "Variants": (
            <>
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </>
          ),
          "Sizes": (
            <>
              <Badge variant="primary" size="sm">Small</Badge>
              <Badge variant="primary" size="md">Medium</Badge>
              <Badge variant="primary" size="lg">Large</Badge>
            </>
          ),
          "Shapes": (
            <>
              <Badge variant="primary">Default</Badge>
              <Badge variant="primary" shape="pill">Pill</Badge>
              <Badge variant="primary" shape="square">Square</Badge>
              <Badge variant="primary" dot>Dot</Badge>
            </>
          )
        }}
        code={`<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>

{/* Sizes */}
<Badge variant="primary" size="sm">Small</Badge>
<Badge variant="primary" size="lg">Large</Badge>

{/* Shapes */}
<Badge variant="primary" shape="pill">Pill</Badge>
<Badge variant="primary" shape="square">Square</Badge>
<Badge variant="primary" dot>Dot</Badge>`}
      />

      {/* Text Component */}
      <ComponentCard
        title="Text"
        description="Typography component with semantic elements and styling options"
        demos={{
          "Sizes": (
            <>
              <Text as="h1" size="3xl" weight="bold">3XL Heading</Text>
              <Text as="h2" size="2xl" weight="semibold">2XL Heading</Text>
              <Text as="h3" size="xl" weight="medium">XL Heading</Text>
              <Text as="p" size="lg">Large Text</Text>
              <Text as="p" size="md">Medium Text</Text>
              <Text as="span" size="sm">Small Text</Text>
              <Text as="span" size="xs">XS Text</Text>
            </>
          ),
          "Variants": (
            <>
              <Text color="primary">Primary Text</Text>
              <Text color="secondary">Secondary Text</Text>
              <Text color="tertiary">Tertiary Text</Text>
              <Text color="success">Success Text</Text>
              <Text color="warning">Warning Text</Text>
              <Text color="error">Error Text</Text>
            </>
          ),
          "Weights": (
            <>
              <Text weight="normal">Normal Weight</Text>
              <Text weight="medium">Medium Weight</Text>
              <Text weight="semibold">Semibold Weight</Text>
              <Text weight="bold">Bold Weight</Text>
            </>
          )
        }}
        code={`<Text as="h1" size="3xl" weight="bold">Heading 1</Text>
<Text as="h2" size="2xl" weight="semibold">Heading 2</Text>
<Text as="h3" size="xl" weight="medium">Heading 3</Text>
<Text as="p" size="md">Body paragraph</Text>

{/* Colors */}
<Text color="primary">Primary text</Text>
<Text color="secondary">Secondary text</Text>
<Text color="tertiary">Tertiary text</Text>

{/* Weights */}
<Text weight="normal">Normal weight</Text>
<Text weight="medium">Medium weight</Text>
<Text weight="semibold">Semibold weight</Text>
<Text weight="bold">Bold weight</Text>`}
      />

      {/* Link Component */}
      <ComponentCard
        title="Link"
        description="Styled links with hover effects and external link indicators"
        demos={{
          "Variants": (
            <>
              <Link href="#" variant="primary">Primary Link</Link>
              <Link href="#" variant="secondary">Secondary Link</Link>
              <Link href="#" variant="accent">Accent Link</Link>
              <Link href="#" variant="muted">Muted Link</Link>
            </>
          ),
          "Sizes": (
            <>
              <Link href="#" variant="primary" size="sm">Small Link</Link>
              <Link href="#" variant="primary" size="md">Medium Link</Link>
              <Link href="#" variant="primary" size="lg">Large Link</Link>
            </>
          ),
          "States": (
            <>
              <Link href="#" variant="primary">Normal Link</Link>
              <Link href="#" variant="primary" underline="always">Always Underlined</Link>
              <Link href="#" variant="primary" underline="never">Never Underlined</Link>
              <Link href="#" variant="primary" external>External Link</Link>
              <Link href="#" variant="primary" disabled>Disabled Link</Link>
            </>
          )
        }}
        code={`<Link href="#" variant="primary">Primary Link</Link>
<Link href="#" variant="secondary">Secondary Link</Link>
<Link href="#" variant="accent">Accent Link</Link>
<Link href="#" variant="muted">Muted Link</Link>

{/* Underline options */}
<Link href="#" underline="always">Always Underlined</Link>
<Link href="#" underline="hover">Hover Underlined</Link>
<Link href="#" underline="never">Never Underlined</Link>

{/* External links */}
<Link href="#" external>External Link ↗</Link>

{/* Sizes */}
<Link href="#" size="sm">Small</Link>
<Link href="#" size="lg">Large</Link>`}
      />

      {/* Spinner Component */}
      <ComponentCard
        title="Spinner"
        description="Loading spinners for indicating async operations and loading states"
        demos={{
          "Variants": (
            <>
              <Spinner variant="primary" />
              <Spinner variant="accent" />
              <Spinner variant="success" />
              <Spinner variant="warning" />
              <Spinner variant="error" />
              <Spinner variant="secondary" />
            </>
          ),
          "Sizes": (
            <>
              <Spinner variant="accent" size="xs" />
              <Spinner variant="accent" size="sm" />
              <Spinner variant="accent" size="md" />
              <Spinner variant="accent" size="lg" />
              <Spinner variant="accent" size="xl" />
            </>
          ),
          "Types": (
            <>
              <Spinner variant="accent" thickness="thin" />
              <Spinner variant="accent" thickness="medium" />
              <Spinner variant="accent" thickness="thick" />
              <Spinner variant="accent" speed="slow" />
              <Spinner variant="accent" speed="normal" />
              <Spinner variant="accent" speed="fast" />
            </>
          )
        }}
        code={`<Spinner variant="primary" />
<Spinner variant="accent" />
<Spinner variant="success" />
<Spinner variant="warning" />
<Spinner variant="error" />

{/* Sizes */}
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />

{/* Thickness */}
<Spinner thickness="thin" />
<Spinner thickness="medium" />
<Spinner thickness="thick" />

{/* Speed */}
<Spinner speed="slow" />
<Spinner speed="normal" />
<Spinner speed="fast" />`}
      />

      {/* LoadingIndicator Component */}
      <ComponentCard
        title="LoadingIndicator"
        description="Advanced loading animations with text labels and multiple animation types"
        demos={{
          "Types": (
            <>
              <LoadingIndicator type="dots" text="Loading" variant="accent" />
              <LoadingIndicator type="pulse" text="Processing" variant="primary" />
              <LoadingIndicator type="wave" text="Uploading" variant="success" />
              <LoadingIndicator type="bars" text="Analyzing" variant="warning" />
              <LoadingIndicator type="bounce" text="Syncing" variant="error" />
            </>
          ),
          "Variants": (
            <>
              <LoadingIndicator type="dots" text="Primary" variant="primary" />
              <LoadingIndicator type="dots" text="Accent" variant="accent" />
              <LoadingIndicator type="dots" text="Success" variant="success" />
              <LoadingIndicator type="dots" text="Warning" variant="warning" />
              <LoadingIndicator type="dots" text="Error" variant="error" />
            </>
          ),
          "Sizes": (
            <>
              <LoadingIndicator type="wave" size="sm" variant="success" />
              <LoadingIndicator type="wave" size="md" variant="success" />
              <LoadingIndicator type="wave" size="lg" variant="success" />
            </>
          ),
          "States": (
            <>
              <LoadingIndicator type="dots" text="Above" textPosition="top" variant="accent" />
              <LoadingIndicator type="pulse" text="Below" textPosition="bottom" variant="primary" />
              <LoadingIndicator type="bounce" text="Left" textPosition="left" variant="warning" />
              <LoadingIndicator type="bars" text="Right" textPosition="right" variant="error" />
            </>
          )
        }}
        code={`<LoadingIndicator type="dots" text="Loading" variant="accent" />
<LoadingIndicator type="pulse" text="Processing" variant="primary" />
<LoadingIndicator type="wave" text="Uploading" variant="success" />
<LoadingIndicator type="bars" text="Analyzing" variant="warning" />
<LoadingIndicator type="bounce" text="Syncing" variant="error" />

{/* Text positioning */}
<LoadingIndicator 
  type="dots" 
  text="Loading" 
  textPosition="top" 
  variant="accent" 
/>
<LoadingIndicator 
  text="Processing" 
  textPosition="left" 
  variant="primary" 
/>

{/* Without text */}
<LoadingIndicator type="wave" variant="success" />

{/* Sizes and speed */}
<LoadingIndicator size="lg" speed="fast" />`}
      />

      {/* Image Component */}
      <ComponentCard
        title="Image"
        description="Enhanced images with loading states, error handling, and visual effects"
        demos={{
          "Variants": (
            <>
              <Image 
                src="https://picsum.photos/seed/default/80/80" 
                alt="Default" 
                variant="default" 
                size="sm"
              />
              <Image 
                src="https://picsum.photos/seed/bordered/80/80" 
                alt="Bordered" 
                variant="bordered" 
                size="sm"
              />
              <Image 
                src="https://picsum.photos/seed/shadow/80/80" 
                alt="Shadow" 
                variant="shadow" 
                size="sm"
              />
              <Image 
                src="https://picsum.photos/seed/elevated/80/80" 
                alt="Elevated" 
                variant="elevated" 
                size="sm"
              />
              <Image 
                src="https://picsum.photos/seed/hover/80/80" 
                alt="Hover" 
                variant="hover-lift" 
                size="sm"
              />
            </>
          ),
          "Shapes": (
            <>
              <Image 
                src="https://picsum.photos/seed/square/80/80" 
                alt="Square" 
                variant="shadow" 
                shape="square" 
                size="sm"
              />
              <Image 
                src="https://picsum.photos/seed/rounded/80/80" 
                alt="Rounded" 
                variant="shadow" 
                shape="rounded" 
                size="sm"
              />
              <Image 
                src="https://picsum.photos/seed/circle/80/80" 
                alt="Circle" 
                variant="shadow" 
                shape="circle" 
                size="sm"
              />
              <Image 
                src="https://picsum.photos/seed/pill/96/48" 
                alt="Pill" 
                variant="shadow" 
                shape="pill" 
                style={{ width: '96px', height: '48px' }}
              />
            </>
          ),
          "Sizes": (
            <>
              <Image 
                src="https://picsum.photos/seed/xs/40/40" 
                alt="XS" 
                variant="shadow" 
                size="xs"
              />
              <Image 
                src="https://picsum.photos/seed/sm/60/60" 
                alt="Small" 
                variant="shadow" 
                size="sm"
              />
              <Image 
                src="https://picsum.photos/seed/md/80/80" 
                alt="Medium" 
                variant="shadow" 
                size="md"
              />
              <Image 
                src="https://picsum.photos/seed/lg/100/100" 
                alt="Large" 
                variant="shadow" 
                size="lg"
              />
            </>
          )
        }}
        code={`<Image 
  src="image.jpg" 
  alt="Description" 
  variant="default" 
/>

{/* Variants */}
<Image variant="bordered" />
<Image variant="shadow" />
<Image variant="elevated" />
<Image variant="hover-lift" />

{/* Shapes */}
<Image shape="square" />
<Image shape="rounded" />
<Image shape="circle" />
<Image shape="pill" />

{/* Sizes */}
<Image size="xs" />
<Image size="sm" />
<Image size="md" />
<Image size="lg" />
<Image size="xl" />
<Image size="full" />

{/* Features */}
<Image showSpinner={true} />
<Image fallback={<div>Failed to load</div>} />
<Image fit="cover" />
<Image loading="lazy" />`}
      />

      {/* Video Component */}
      <ComponentCard
        title="Video"
        description="Video player with transparent container, themed SVG icons, and shape applied to video element only"
        demos={{
          "Variants": (
            <>
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="default" 
                size="xs"
                poster="https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Default"
              />
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="bordered" 
                size="xs"
                poster="https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Bordered"
              />
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="shadow" 
                size="xs"
                poster="https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Shadow"
              />
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="elevated" 
                size="xs"
                poster="https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Elevated"
              />
            </>
          ),
          "Shapes": (
            <>
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="shadow" 
                shape="square" 
                size="xs"
                poster="https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Square"
              />
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="shadow" 
                shape="rounded" 
                size="xs"
                poster="https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Rounded"
              />
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="shadow" 
                shape="pill" 
                size="xs"
                poster="https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=Pill"
              />
            </>
          ),
          "Sizes": (
            <>
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="shadow" 
                size="xs"
                poster="https://via.placeholder.com/160x90/4F46E5/FFFFFF?text=XS"
              />
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="shadow" 
                size="sm"
                poster="https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=SM"
              />
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                variant="shadow" 
                size="md"
                poster="https://via.placeholder.com/320x180/4F46E5/FFFFFF?text=MD"
              />
            </>
          ),
          "Features": (
            <>
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                size="xs"
                showControls={true}
                showMenu={true}
                enableDownload={true}
                poster="https://via.placeholder.com/160x90/10B981/FFFFFF?text=Full+Features"
              />
              <Video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                size="xs"
                showControls={false}
                poster="https://via.placeholder.com/160x90/F59E0B/FFFFFF?text=No+Controls"
              />
              <Video 
                src="invalid-video.mp4" 
                size="xs"
                fallback={
                  <div style={{ textAlign: 'center', color: 'var(--accent-500)' }}>
                    <Text size="xs">Custom Error</Text>
                  </div>
                }
              />
            </>
          )
        }}
        code={`<Video 
  src="video.mp4" 
  poster="poster.jpg"
  variant="default" 
/>

{/* Variants */}
<Video variant="bordered" />
<Video variant="shadow" />
<Video variant="elevated" />
<Video variant="hover-lift" />

{/* Shapes */}
<Video shape="square" />
<Video shape="rounded" />
<Video shape="pill" />

{/* Sizes */}
<Video size="xs" />
<Video size="sm" />
<Video size="md" />
<Video size="lg" />
<Video size="xl" />
<Video size="full" />

{/* Features */}
<Video showSpinner={true} />
<Video showControls={false} />
<Video showMenu={true} enableDownload={true} />
<Video fallback={<div>Failed to load</div>} />
<Video fit="cover" />
<Video autoPlay muted loop />`}
      />

      {/* Card Component */}
      <ComponentCard
        title="Card"
        description="Container component with header, body, and footer sections"
        demos={{
          "Variants": (
            <>
              <Card style={{ width: "200px" }}>
                <CardHeader>
                  <Text as="h3" size="md" weight="semibold">Full Card</Text>
                  <Text as="p" size="sm" color="secondary">With all sections</Text>
                </CardHeader>
                <CardBody>
                  <Text as="p" size="sm">
                    This card has header, body, and footer sections.
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button variant="primary" size="sm">Action</Button>
                </CardFooter>
              </Card>
              <Card style={{ width: "200px" }}>
                <CardBody>
                  <Text as="p" size="sm">
                    Simple card with body only.
                  </Text>
                </CardBody>
              </Card>
            </>
          ),
          "States": (
            <>
              <Card style={{ width: "180px" }}>
                <CardHeader>
                  <Text as="h3" size="sm" weight="semibold">Normal Card</Text>
                </CardHeader>
                <CardBody>
                  <Text as="p" size="xs">Standard appearance</Text>
                </CardBody>
              </Card>
              <Card style={{ width: "180px", opacity: 0.6 }}>
                <CardHeader>
                  <Text as="h3" size="sm" weight="semibold">Disabled Card</Text>
                </CardHeader>
                <CardBody>
                  <Text as="p" size="xs">Disabled appearance</Text>
                </CardBody>
              </Card>
            </>
          )
        }}
        code={`<Card>
  <CardHeader>
    <Text as="h3" size="md" weight="semibold">
      Card Title
    </Text>
    <Text as="p" size="sm" color="secondary">
      Card subtitle
    </Text>
  </CardHeader>
  <CardBody>
    <Text as="p" size="sm">
      Card body content goes here.
    </Text>
  </CardBody>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>

{/* Simple card */}
<Card>
  <CardBody>
    Simple card content
  </CardBody>
</Card>`}
      />
    </div>
  );
};

export default ComponentShowcase;