import React from 'react';
import { Text, Layout, Button, useTheme } from '../../../../src';
import { DocPageLayout } from '../DocPageLayout';
import { CodeExample } from '../CodeExample';

export const ButtonPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout
      title="Button"
      description="Interactive button component with multiple variants and sizes"
    >
      {/* Basic Usage */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Basic Usage
        </Text>
        
        <CodeExample
          title="Default Button"
          preview={
            <Button>Click me</Button>
          }
          code={`<Button>Click me</Button>`}
        />
      </Layout>

      {/* Variants */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Variants
        </Text>
        <Text size="md">
          Buttons come in different variants to indicate different actions and importance levels.
        </Text>
        
        <CodeExample
          title="Button Variants"
          preview={
            <Layout direction="row" gap="md" wrap layoutWidth="auto">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </Layout>
          }
          code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`}
        />
      </Layout>

      {/* Sizes */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Sizes
        </Text>
        <Text size="md">
          Choose from different sizes to match your design needs.
        </Text>
        
        <CodeExample
          title="Button Sizes"
          preview={
            <Layout direction="row" gap="md" align="center" wrap layoutWidth="auto">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </Layout>
          }
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        />
      </Layout>

      {/* States */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          States
        </Text>
        <Text size="md">
          Buttons support different states like disabled and loading.
        </Text>
        
        <CodeExample
          title="Button States"
          preview={
            <Layout direction="row" gap="md" wrap layoutWidth="auto">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Loading</Button>
            </Layout>
          }
          code={`<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
        />
      </Layout>

      {/* Full Width */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Full Width
        </Text>
        <Text size="md">
          Make buttons span the full width of their container.
        </Text>
        
        <CodeExample
          title="Full Width Button"
          preview={
            <Button fullWidth>Full Width Button</Button>
          }
          code={`<Button fullWidth>Full Width Button</Button>`}
        />
      </Layout>

      {/* Click Handler */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Click Handler
        </Text>
        <Text size="md">
          Handle button clicks with the onClick prop.
        </Text>
        
        <CodeExample
          title="Button with Click Handler"
          code={`const [count, setCount] = useState(0);

<Button onClick={() => setCount(count + 1)}>
  Clicked {count} times
</Button>`}
        />
      </Layout>

      {/* Props API */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Props API
        </Text>
        
        <Layout
          direction="column"
          gap="none"
          layoutWidth="auto"
          style={{
            backgroundColor: variables.colors.background.surface,
            borderRadius: variables.borderRadius.lg,
            border: `1px solid ${variables.colors.border}`,
            overflow: 'hidden',
          }}
        >
          {[
            { prop: 'variant', type: '"primary" | "secondary" | "outline" | "ghost" | "danger"', default: '"primary"', description: 'Visual variant of the button' },
            { prop: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size of the button' },
            { prop: 'disabled', type: 'boolean', default: 'false', description: 'Whether the button is disabled' },
            { prop: 'loading', type: 'boolean', default: 'false', description: 'Whether the button is in loading state' },
            { prop: 'fullWidth', type: 'boolean', default: 'false', description: 'Whether the button spans full width' },
            { prop: 'onClick', type: '() => void', default: '-', description: 'Click event handler' },
            { prop: 'children', type: 'ReactNode', default: '-', description: 'Button content' },
          ].map((row, index) => (
            <Layout
              key={row.prop}
              direction="row"
              gap="md"
              padding="md"
              layoutWidth="auto"
              style={{
                borderBottom: index < 6 ? `1px solid ${variables.colors.border}` : 'none',
              }}
            >
              <Text size="sm" weight="medium" style={{ minWidth: '100px', fontFamily: 'Monaco, monospace' }}>
                {row.prop}
              </Text>
              <Text size="sm" style={{ minWidth: '200px', fontFamily: 'Monaco, monospace', color: variables.colors.text.secondary }}>
                {row.type}
              </Text>
              <Text size="sm" style={{ minWidth: '80px', fontFamily: 'Monaco, monospace', color: variables.colors.text.secondary }}>
                {row.default}
              </Text>
              <Text size="sm" style={{ flex: 1 }}>
                {row.description}
              </Text>
            </Layout>
          ))}
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};