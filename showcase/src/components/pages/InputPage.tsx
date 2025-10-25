import React, { useState } from "react";
import { Layout, Text, Input, Card, useTheme } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";

export const InputPage: React.FC = () => {
  const { variables } = useTheme();
  const [textValue, setTextValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <DocPageLayout title="Input" description="Form input component with validation and styling support">
      
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Basic Usage
        </Text>
        
        <CodeExample
          title="Text Input"
          code={`<Input
  type="text"
  placeholder="Enter your name"
  value={textValue}
  onChange={(e) => setTextValue(e.target.value)}
/>`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <Input
                type="text"
                placeholder="Enter your name"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
              />
            </Card>
          }
        />

        <CodeExample
          title="Email Input"
          code={`<Input
  type="email"
  placeholder="Enter your email"
  value={emailValue}
  onChange={(e) => setEmailValue(e.target.value)}
/>`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </Card>
          }
        />

        <CodeExample
          title="Password Input"
          code={`<Input
  type="password"
  placeholder="Enter your password"
  value={passwordValue}
  onChange={(e) => setPasswordValue(e.target.value)}
/>`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <Input
                type="password"
                placeholder="Enter your password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </Card>
          }
        />
      </Layout>

      {/* Input States */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Input States
        </Text>
        
        <CodeExample
          title="Disabled Input"
          code={`<Input
  type="text"
  placeholder="Disabled input"
  disabled
/>`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <Input
                type="text"
                placeholder="Disabled input"
                disabled
              />
            </Card>
          }
        />

        <CodeExample
          title="Required Input"
          code={`<Input
  type="text"
  placeholder="Required field"
  required
/>`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <Input
                type="text"
                placeholder="Required field"
                required
              />
            </Card>
          }
        />
      </Layout>

      {/* Styling */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Custom Styling
        </Text>
        
        <CodeExample
          title="Custom Styled Input"
          code={`<Input
  type="text"
  placeholder="Custom styled input"
  style={{
    borderColor: variables.colors.accent[600],
    borderWidth: "2px",
    borderRadius: variables.borderRadius.lg,
  }}
/>`}
          preview={
            <Card style={{ height: '80px', overflow: 'hidden' }}>
              <Input
                type="text"
                placeholder="Custom styled input"
                style={{
                  borderColor: variables.colors.accent[600],
                  borderWidth: "2px",
                  borderRadius: variables.borderRadius.lg,
                }}
              />
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
          <Text weight="semibold" style={{ color: variables.colors.text.primary }}>Props</Text>
          <Text size="sm" style={{ color: variables.colors.text.secondary, fontFamily: "monospace" }}>
            • type?: "text" | "email" | "password" | "number" | "tel" | "url"<br/>
            • placeholder?: string<br/>
            • value?: string<br/>
            • onChange?: (event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void<br/>
            • disabled?: boolean<br/>
            • required?: boolean<br/>
            • style?: React.CSSProperties<br/>
            • className?: string
          </Text>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};