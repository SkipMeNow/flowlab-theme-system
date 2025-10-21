import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Text,
  Badge,
  Input,
  Link,
  Spinner,
  LoadingIndicator,
  Image,
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

  const ComponentCard: React.FC<{
    title: string;
    description: string;
    demo: React.ReactNode;
    code: string;
  }> = ({ title, description, demo, code }) => (
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
            Demo
          </Text>
          <div
            style={{
              padding: "var(--space-lg)",
              backgroundColor: "var(--bg-surface)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-color)",
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-lg)",
              alignItems: "center",
            }}
          >
            {demo}
          </div>
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
          FlowLabKit theme system provides CSS variables for building custom
          components. All variables automatically adapt to your chosen theme and
          respond to dark/light mode changes.
        </p>
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-md)",
            fontSize: "var(--font-size-sm)",
            color: "var(--accent-500)",
            marginBottom: "var(--space-lg)",
          }}
        >
          Current Theme: <strong>{themeName}</strong> | Mode:{" "}
          <strong>{config.mode}</strong>
          <br />
          <small style={{ color: "var(--text-tertiary)" }}>
            Theme switching should work now - try changing themes in the header!
          </small>
          <br />
          <div
            style={{
              marginTop: "var(--space-sm)",
              display: "flex",
              gap: "var(--space-sm)",
            }}
          >
            <button
              onClick={() =>
                config.mode === "light"
                  ? setLightTheme(themes.ocean)
                  : setDarkTheme(themes.ocean)
              }
              style={{
                backgroundColor: "var(--accent-500)",
                color: "var(--text-on-accent)",
                border: "none",
                borderRadius: "var(--radius-sm)",
                padding: "var(--space-xs) var(--space-sm)",
                fontSize: "var(--font-size-xs)",
                cursor: "pointer",
              }}
            >
              Set Ocean for {config.mode} mode
            </button>
            <button
              onClick={() =>
                config.mode === "light"
                  ? setLightTheme(themes.cyberpunk)
                  : setDarkTheme(themes.cyberpunk)
              }
              style={{
                backgroundColor: "var(--success)",
                color: "white",
                border: "none",
                borderRadius: "var(--radius-sm)",
                padding: "var(--space-xs) var(--space-sm)",
                fontSize: "var(--font-size-xs)",
                cursor: "pointer",
              }}
            >
              Set Cyberpunk for {config.mode} mode
            </button>
            <button
              onClick={() =>
                setMode(config.mode === "light" ? "dark" : "light")
              }
              style={{
                backgroundColor: "var(--warning)",
                color: "white",
                border: "none",
                borderRadius: "var(--radius-sm)",
                padding: "var(--space-xs) var(--space-sm)",
                fontSize: "var(--font-size-xs)",
                cursor: "pointer",
              }}
            >
              Toggle Dark/Light
            </button>
          </div>
        </div>
      </div>

      {/* Button Components */}
      <section style={{ marginBottom: "var(--space-2xl)" }}>
        <Text
          as="h2"
          size="xl"
          weight="semibold"
          style={{ marginBottom: "var(--space-lg)" }}
        >
          Button Components
        </Text>

        <Card style={{ marginBottom: "var(--space-lg)" }}>
          <CardBody>
            {/* Button Variants */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Variants
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-md)",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>

            {/* Button Sizes */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Sizes
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-md)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>

            {/* Button Shapes */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Shapes
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-md)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Button variant="primary" shape="rounded">
                Rounded
              </Button>
              <Button variant="primary" shape="pill">
                Pill
              </Button>
              <Button variant="primary" shape="square" size="lg">
                Square
              </Button>
              <Button variant="primary" shape="circle" size="lg">
                Circle
              </Button>
            </div>

            {/* Button States & Features */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              States & Features
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-md)",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Button variant="primary" loading>
                Loading...
              </Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="primary" leftIcon="👈">
                Left Icon
              </Button>
              <Button variant="primary" rightIcon="👉">
                Right Icon
              </Button>
            </div>

            <div style={{ marginTop: "var(--space-md)" }}>
              <Button variant="secondary" fullWidth>
                Full Width Button
              </Button>
            </div>
          </CardBody>
        </Card>

        <pre
          style={{
            backgroundColor: "var(--bg-elevated)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-md)",
            fontSize: "var(--font-size-sm)",
            color: "var(--text-primary)",
            overflow: "auto",
            fontFamily:
              'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          {`{/* Button Variants */}
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

{/* Button Shapes */}
<Button shape="pill">Pill Button</Button>
<Button shape="circle" size="lg">○</Button>

{/* Button States */}
<Button loading>Loading...</Button>
<Button leftIcon="👈">With Icon</Button>`}
        </pre>
      </section>

      {/* Input Components */}
      <section style={{ marginBottom: "var(--space-2xl)" }}>
        <Text
          as="h2"
          size="xl"
          weight="semibold"
          style={{ marginBottom: "var(--space-lg)" }}
        >
          Input Components
        </Text>

        <Card style={{ marginBottom: "var(--space-lg)" }}>
          <CardBody>
            {/* Input Variants */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Variants
            </Text>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--space-lg)",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Input
                label="Default Input"
                variant="default"
                placeholder="Default variant"
              />
              <Input
                label="Filled Input"
                variant="filled"
                placeholder="Filled variant"
              />
              <Input
                label="Flushed Input"
                variant="flushed"
                placeholder="Flushed variant"
              />
            </div>

            {/* Input Sizes */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Sizes
            </Text>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "var(--space-lg)",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Input label="Small Input" size="sm" placeholder="Small size" />
              <Input label="Medium Input" size="md" placeholder="Medium size" />
              <Input label="Large Input" size="lg" placeholder="Large size" />
            </div>

            {/* Input Types & Features */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Types & Features
            </Text>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--space-lg)",
              }}
            >
              <Input
                label="Text Input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter some text..."
                helperText="This is helper text"
              />

              <Input
                label="Password Input"
                type="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="Enter password..."
                showPasswordToggle
                showValidationIcon
              />

              <Input
                label="Email Input"
                type="email"
                placeholder="your.email@example.com"
                showValidationIcon
              />

              <Input
                label="Number Input"
                type="number"
                placeholder="Enter a number"
              />

              <Input
                label="Search Input"
                type="search"
                placeholder="Search..."
                leftIcon="🔍"
              />

              <Input label="Disabled Input" value="Cannot edit this" disabled />

              <Input
                label="Error State"
                placeholder="Invalid input"
                isInvalid
                errorMessage="This field is required"
              />

              <Input
                label="With Icons"
                placeholder="Input with icons"
                leftIcon="📧"
                rightIcon="✓"
              />
            </div>
          </CardBody>
        </Card>

        <pre
          style={{
            backgroundColor: "var(--bg-elevated)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-md)",
            fontSize: "var(--font-size-sm)",
            color: "var(--text-primary)",
            overflow: "auto",
            fontFamily:
              'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          {`{/* Input Variants */}
<Input variant="default" placeholder="Default" />
<Input variant="filled" placeholder="Filled" />
<Input variant="flushed" placeholder="Flushed" />

{/* Input Features */}
<Input
  type="email"
  showValidationIcon
  placeholder="your.email@example.com"
/>
<Input
  type="password"
  showPasswordToggle
  showValidationIcon
/>
<Input
  leftIcon="🔍"
  placeholder="Search..."
/>`}
        </pre>
      </section>

      {/* Card Components */}
      <section style={{ marginBottom: "var(--space-2xl)" }}>
        <Text
          as="h2"
          size="xl"
          weight="semibold"
          style={{ marginBottom: "var(--space-lg)" }}
        >
          Card Components
        </Text>

        {/* Card Variants */}
        <Text
          as="h3"
          size="md"
          weight="semibold"
          style={{ marginBottom: "var(--space-md)" }}
        >
          Variants
        </Text>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-lg)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <Card variant="elevated">
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">
                Elevated Card
              </Text>
            </CardHeader>
            <CardBody>
              <Text size="sm" color="secondary">
                Elevated variant with shadow and depth.
              </Text>
            </CardBody>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">
                Outlined Card
              </Text>
            </CardHeader>
            <CardBody>
              <Text size="sm" color="secondary">
                Outlined variant with border styling.
              </Text>
            </CardBody>
          </Card>

          <Card variant="filled">
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">
                Filled Card
              </Text>
            </CardHeader>
            <CardBody>
              <Text size="sm" color="secondary">
                Filled variant with solid background.
              </Text>
            </CardBody>
          </Card>
        </div>

        {/* Card Features */}
        <Text
          as="h3"
          size="md"
          weight="semibold"
          style={{ marginBottom: "var(--space-md)" }}
        >
          Features & Options
        </Text>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-lg)",
            marginBottom: "var(--space-lg)",
          }}
        >
          <Card variant="elevated" padding="sm">
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">
                Small Padding
              </Text>
            </CardHeader>
            <CardBody>
              <Text size="sm" color="secondary">
                Card with small padding for compact layouts.
              </Text>
            </CardBody>
          </Card>

          <Card variant="elevated" padding="lg">
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">
                Large Padding
              </Text>
            </CardHeader>
            <CardBody>
              <Text size="sm" color="secondary">
                Card with large padding for spacious layouts.
              </Text>
            </CardBody>
          </Card>

          <Card variant="elevated" hoverable>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">
                Hoverable Card
              </Text>
            </CardHeader>
            <CardBody>
              <Text size="sm" color="secondary">
                This card responds to hover interactions.
              </Text>
            </CardBody>
          </Card>
        </div>

        <pre
          style={{
            backgroundColor: "var(--bg-elevated)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-md)",
            fontSize: "var(--font-size-sm)",
            color: "var(--text-primary)",
            overflow: "auto",
            fontFamily:
              'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          {`{/* Card Variants */}
<Card variant="elevated">...</Card>
<Card variant="outlined">...</Card>
<Card variant="filled">...</Card>

{/* Card Options */}
<Card padding="lg" hoverable>
  <CardHeader>
    <Text as="h3" size="lg" weight="semibold">
      Card Title
    </Text>
  </CardHeader>
  <CardBody>
    <Text size="sm" color="secondary">
      Card content goes here...
    </Text>
  </CardBody>
</Card>`}
        </pre>
      </section>

      {/* Typography & Badge Components */}
      <section style={{ marginBottom: "var(--space-2xl)" }}>
        <Text
          as="h2"
          size="xl"
          weight="semibold"
          style={{ marginBottom: "var(--space-lg)" }}
        >
          Typography & Badge Components
        </Text>

        <Card style={{ marginBottom: "var(--space-lg)" }}>
          <CardBody>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
                marginBottom: "var(--space-xl)",
              }}
            >
              <Text as="h1" size="2xl" weight="bold">
                Heading 1
              </Text>
              <Text as="h2" size="xl" weight="semibold">
                Heading 2
              </Text>
              <Text as="h3" size="lg" weight="medium">
                Heading 3
              </Text>
              <Text as="p" size="md" weight="normal">
                Body text with normal weight and comfortable line height for
                reading.
              </Text>
              <Text as="span" size="sm" color="tertiary">
                Caption text for smaller details and metadata.
              </Text>
            </div>

            {/* Badge Variants */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Badge Variants
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-md)",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>

            {/* Badge Sizes */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Badge Sizes
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-md)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Badge variant="primary" size="sm">
                Small
              </Badge>
              <Badge variant="primary" size="md">
                Medium
              </Badge>
              <Badge variant="primary" size="lg">
                Large
              </Badge>
            </div>

            {/* Badge Shapes */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Badge Shapes
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-md)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Badge variant="primary" shape="rounded">
                Rounded
              </Badge>
              <Badge variant="primary" shape="pill">
                Pill Badge
              </Badge>
              <Badge variant="primary" shape="square">
                Square
              </Badge>
              <Badge variant="primary" dot>
                Dot
              </Badge>
            </div>

            {/* Link Variants */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Link Variants
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-lg)",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Link href="#" variant="primary">
                Primary Link
              </Link>
              <Link href="#" variant="secondary">
                Secondary Link
              </Link>
              <Link href="#" variant="accent">
                Accent Link
              </Link>
              <Link href="#" variant="muted">
                Muted Link
              </Link>
            </div>

            {/* Link Features */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Link Features
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-lg)",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Link href="#" variant="primary" underline="always">
                Always Underlined
              </Link>
              <Link href="#" variant="primary" underline="hover">
                Hover Underlined
              </Link>
              <Link href="#" variant="primary" underline="never">
                Never Underlined
              </Link>
              <Link href="#" variant="primary" external>
                External Link ↗
              </Link>
              <Link href="#" variant="primary" disabled>
                Disabled Link
              </Link>
            </div>

            {/* Link Sizes */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Link Sizes
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-lg)",
                alignItems: "center",
              }}
            >
              <Link href="#" variant="primary" size="sm">
                Small Link
              </Link>
              <Link href="#" variant="primary" size="md">
                Medium Link
              </Link>
              <Link href="#" variant="primary" size="lg">
                Large Link
              </Link>
            </div>

            {/* Spinner Variants */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Spinner/Loading Indicators
            </Text>
            <Text
              as="p"
              size="sm"
              color="secondary"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Use spinners to indicate loading states, data fetching, form submissions, or any async operations. 
              Perfect for buttons, cards, modals, or full-page loading screens.
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-lg)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
                padding: "var(--space-md)",
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <Spinner variant="primary" size="md" thickness="medium" />
                <div style={{ fontSize: "12px", marginTop: "4px", color: "var(--text-secondary)" }}>Loading data</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Spinner variant="accent" size="md" thickness="medium" />
                <div style={{ fontSize: "12px", marginTop: "4px", color: "var(--text-secondary)" }}>Processing</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Spinner variant="success" size="md" thickness="medium" />
                <div style={{ fontSize: "12px", marginTop: "4px", color: "var(--text-secondary)" }}>Saving</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Spinner variant="warning" size="md" thickness="medium" />
                <div style={{ fontSize: "12px", marginTop: "4px", color: "var(--text-secondary)" }}>Uploading</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Spinner variant="error" size="md" thickness="medium" />
                <div style={{ fontSize: "12px", marginTop: "4px", color: "var(--text-secondary)" }}>Retrying</div>
              </div>
            </div>

            {/* Spinner Sizes */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Spinner Sizes
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-lg)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
              }}
            >
              <Spinner size="xs" variant="accent" thickness="medium" />
              <Spinner size="sm" variant="accent" thickness="medium" />
              <Spinner size="md" variant="accent" thickness="medium" />
              <Spinner size="lg" variant="accent" thickness="medium" />
              <Spinner size="xl" variant="accent" thickness="medium" />
            </div>

            {/* Practical Spinner Examples */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Spinner Use Cases
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-lg)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", padding: "var(--space-sm)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-sm)" }}>
                <Spinner size="sm" variant="primary" thickness="medium" />
                <span style={{ fontSize: "14px" }}>Loading...</span>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", padding: "var(--space-sm) var(--space-md)", backgroundColor: "var(--accent-500)", color: "white", borderRadius: "var(--radius-sm)" }}>
                <Spinner size="sm" variant="accent" thickness="medium" speed="fast" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', borderTopColor: 'white', borderRightColor: 'white' }} />
                <span style={{ fontSize: "14px" }}>Submitting</span>
              </div>
              
              <div style={{ textAlign: "center", padding: "var(--space-lg)", minWidth: "120px" }}>
                <Spinner size="lg" variant="accent" thickness="thick" />
                <div style={{ fontSize: "14px", marginTop: "var(--space-sm)", color: "var(--text-secondary)" }}>Loading page...</div>
              </div>
            </div>

            {/* Loading Indicator Types */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Loading Indicator Types
            </Text>
            <Text
              as="p"
              size="sm"
              color="secondary"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Advanced loading animations with text labels. Perfect for different loading contexts and user experiences.
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-lg)",
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-xl)", alignItems: "center" }}>
                <LoadingIndicator type="dots" text="Loading" variant="accent" />
                <LoadingIndicator type="pulse" text="Processing" variant="primary" />
                <LoadingIndicator type="wave" text="Uploading" variant="success" />
                <LoadingIndicator type="bars" text="Analyzing" variant="warning" />
                <LoadingIndicator type="bounce" text="Syncing" variant="error" />
              </div>
            </div>

            {/* Loading Indicator with Text Positions */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Text Positioning
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-lg)",
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-xl)", alignItems: "center" }}>
                <LoadingIndicator type="dots" text="Loading data" textPosition="left" variant="accent" />
                <LoadingIndicator type="pulse" text="Please wait" textPosition="right" variant="primary" />
                <LoadingIndicator type="wave" text="Processing" textPosition="top" variant="success" />
                <LoadingIndicator type="bars" text="Almost done" textPosition="bottom" variant="warning" />
              </div>
            </div>

            {/* Loading Indicator Sizes */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Loading Indicator Sizes
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-xl)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <LoadingIndicator type="dots" text="XS" size="xs" variant="accent" />
              <LoadingIndicator type="dots" text="Small" size="sm" variant="accent" />
              <LoadingIndicator type="dots" text="Medium" size="md" variant="accent" />
              <LoadingIndicator type="dots" text="Large" size="lg" variant="accent" />
              <LoadingIndicator type="dots" text="XL" size="xl" variant="accent" />
            </div>

            {/* Practical Loading Examples */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Practical Examples
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ padding: "var(--space-md)", border: "1px solid var(--border-color)", borderRadius: "var(--radius-sm)" }}>
                <LoadingIndicator type="wave" text="Uploading files" variant="success" speed="normal" />
              </div>
              
              <div style={{ padding: "var(--space-md)", backgroundColor: "var(--accent-500)", color: "white", borderRadius: "var(--radius-sm)" }}>
                <LoadingIndicator 
                  type="pulse" 
                  text="Saving changes" 
                  variant="accent" 
                  speed="fast"
                  style={{ color: "white" }}
                />
              </div>
              
              <div style={{ textAlign: "center", padding: "var(--space-xl)" }}>
                <LoadingIndicator 
                  type="dots" 
                  text="Loading application" 
                  textPosition="bottom" 
                  variant="primary" 
                  size="lg" 
                  speed="slow"
                />
              </div>
            </div>

            {/* Image Variants */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Image Variants & Effects
            </Text>
            <Text
              as="p"
              size="sm"
              color="secondary"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Enhanced images with loading states, error handling, and visual effects. 
              Perfect for avatars, product images, galleries, and profile pictures.
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-xl)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <Image 
                  src="https://picsum.photos/seed/default/96/96" 
                  alt="Default" 
                  variant="default" 
                />
                <div style={{ fontSize: "12px", marginTop: "8px", color: "var(--text-secondary)" }}>Default</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Image 
                  src="https://picsum.photos/seed/bordered/96/96" 
                  alt="Bordered" 
                  variant="bordered" 
                />
                <div style={{ fontSize: "12px", marginTop: "8px", color: "var(--text-secondary)" }}>Bordered</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Image 
                  src="https://picsum.photos/seed/shadow/96/96" 
                  alt="Shadow" 
                  variant="shadow" 
                />
                <div style={{ fontSize: "12px", marginTop: "8px", color: "var(--text-secondary)" }}>Shadow</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Image 
                  src="https://picsum.photos/seed/elevated/96/96" 
                  alt="Elevated" 
                  variant="elevated" 
                />
                <div style={{ fontSize: "12px", marginTop: "8px", color: "var(--text-secondary)" }}>Elevated</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Image 
                  src="https://picsum.photos/seed/hover/96/96" 
                  alt="Hover Me!" 
                  variant="hover-lift" 
                />
                <div style={{ fontSize: "12px", marginTop: "8px", color: "var(--text-secondary)" }}>Hover Lift</div>
              </div>
            </div>

            {/* Image Shapes */}
            <Text
              as="h3"
              size="md"
              weight="semibold"
              style={{ marginBottom: "var(--space-md)" }}
            >
              Image Shapes
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--space-xl)",
                alignItems: "center",
                marginBottom: "var(--space-lg)",
                padding: "var(--space-lg)",
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <Image 
                  src="https://picsum.photos/seed/square/96/96" 
                  alt="Square" 
                  variant="shadow" 
                  shape="square" 
                />
                <div style={{ fontSize: "12px", marginTop: "8px", color: "var(--text-secondary)" }}>Square</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Image 
                  src="https://picsum.photos/seed/rounded/96/96" 
                  alt="Rounded" 
                  variant="shadow" 
                  shape="rounded" 
                />
                <div style={{ fontSize: "12px", marginTop: "8px", color: "var(--text-secondary)" }}>Rounded</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Image 
                  src="https://picsum.photos/seed/circle/96/96" 
                  alt="Circle" 
                  variant="shadow" 
                  shape="circle" 
                />
                <div style={{ fontSize: "12px", marginTop: "8px", color: "var(--text-secondary)" }}>Circle</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Image 
                  src="https://picsum.photos/seed/pill/128/64" 
                  alt="Pill" 
                  variant="shadow" 
                  shape="pill" 
                  style={{ width: "128px", height: "64px" }}
                />
                <div style={{ fontSize: "12px", marginTop: "8px", color: "var(--text-secondary)" }}>Pill</div>
              </div>
            </div>
          </CardBody>
        </Card>

        <pre
          style={{
            backgroundColor: "var(--bg-elevated)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-md)",
            fontSize: "var(--font-size-sm)",
            color: "var(--text-primary)",
            overflow: "auto",
            fontFamily:
              'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          {`{/* Typography */}
<Text as="h1" size="2xl" weight="bold">
  Main Heading
</Text>
<Text as="p" color="secondary">
  Body content text
</Text>

{/* Badges */}
<Badge variant="success">Success</Badge>
<Badge variant="warning" shape="pill">Warning</Badge>
<Badge variant="error" size="lg">Error</Badge>

{/* Spinners */}
<Spinner size="sm" variant="primary" />
<Spinner size="md" variant="accent" thickness="thick" />
<Spinner size="lg" variant="success" speed="fast" />

{/* Loading Indicators */}
<LoadingIndicator type="dots" text="Loading" variant="accent" />
<LoadingIndicator type="wave" text="Processing" variant="success" />
<LoadingIndicator type="bounce" text="Syncing" variant="primary" />

{/* Images */}
<Image 
  src="https://picsum.photos/96/96" 
  alt="Sample" 
  variant="bordered" 
  shape="rounded" 
/>
<Image 
  src="https://picsum.photos/64/64" 
  alt="Circle" 
  variant="shadow" 
  shape="circle" 
  size="sm"
/>
<Image 
  src="https://picsum.photos/128/128" 
  alt="Hover" 
  variant="hover-lift" 
  shape="pill" 
  size="lg"
/>

{/* Links */}
<Link href="#" variant="primary">Primary Link</Link>
<Link href="#" variant="accent" external>External ↗</Link>
<Link href="#" underline="always">Always Underlined</Link>`}
        </pre>
      </section>
    </div>
  );
};

export default ComponentShowcase;
