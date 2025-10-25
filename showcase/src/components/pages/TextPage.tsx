import React from 'react';
import { Text, Layout, useTheme } from '../../../../src';
import { DocPageLayout } from '../DocPageLayout';
import { CodeExample } from '../CodeExample';

export const TextPage: React.FC = () => {
  const { variables } = useTheme();

  return (
    <DocPageLayout
      title="Text"
      description="Typography component for displaying text content with consistent styling"
    >
      {/* Basic Usage */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Basic Usage
        </Text>
        
        <CodeExample
          title="Default Text"
          preview={
            <Text>This is a default text component</Text>
          }
          code={`<Text>This is a default text component</Text>`}
        />
      </Layout>

      {/* Semantic Elements */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Semantic Elements
        </Text>
        <Text size="md">
          Use the `as` prop to render different HTML elements while maintaining consistent styling.
        </Text>
        
        <CodeExample
          title="HTML Elements"
          preview={
            <Layout direction="column" gap="sm" layoutWidth="auto">
              <Text as="h1" size="3xl" weight="bold">Heading 1</Text>
              <Text as="h2" size="2xl" weight="semibold">Heading 2</Text>
              <Text as="h3" size="xl" weight="medium">Heading 3</Text>
              <Text as="p">This is a paragraph</Text>
              <Text as="span">This is a span</Text>
              <Text as="div">This is a div</Text>
            </Layout>
          }
          code={`<Text as="h1" size="3xl" weight="bold">Heading 1</Text>
<Text as="h2" size="2xl" weight="semibold">Heading 2</Text>
<Text as="h3" size="xl" weight="medium">Heading 3</Text>
<Text as="p">This is a paragraph</Text>
<Text as="span">This is a span</Text>
<Text as="div">This is a div</Text>`}
        />
      </Layout>

      {/* Sizes */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Sizes
        </Text>
        <Text size="md">
          Choose from different sizes to create visual hierarchy.
        </Text>
        
        <CodeExample
          title="Text Sizes"
          preview={
            <Layout direction="column" gap="sm" layoutWidth="auto">
              <Text size="xs">Extra Small - Captions and fine print</Text>
              <Text size="sm">Small - Helper text and labels</Text>
              <Text size="md">Medium - Body text (default)</Text>
              <Text size="lg">Large - Important content</Text>
              <Text size="xl">Extra Large - Section headings</Text>
              <Text size="2xl">2XL - Page headings</Text>
              <Text size="3xl">3XL - Hero titles</Text>
            </Layout>
          }
          code={`<Text size="xs">Extra Small - Captions and fine print</Text>
<Text size="sm">Small - Helper text and labels</Text>
<Text size="md">Medium - Body text (default)</Text>
<Text size="lg">Large - Important content</Text>
<Text size="xl">Extra Large - Section headings</Text>
<Text size="2xl">2XL - Page headings</Text>
<Text size="3xl">3XL - Hero titles</Text>`}
        />
      </Layout>

      {/* Weights */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Font Weights
        </Text>
        <Text size="md">
          Control the visual weight of your text content.
        </Text>
        
        <CodeExample
          title="Font Weights"
          preview={
            <Layout direction="column" gap="sm" layoutWidth="auto">
              <Text weight="normal">Normal weight text (default)</Text>
              <Text weight="medium">Medium weight text</Text>
              <Text weight="semibold">Semibold weight text</Text>
              <Text weight="bold">Bold weight text</Text>
            </Layout>
          }
          code={`<Text weight="normal">Normal weight text (default)</Text>
<Text weight="medium">Medium weight text</Text>
<Text weight="semibold">Semibold weight text</Text>
<Text weight="bold">Bold weight text</Text>`}
        />
      </Layout>

      {/* Colors */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Colors
        </Text>
        <Text size="md">
          Use semantic color variants to convey meaning and importance.
        </Text>
        
        <CodeExample
          title="Text Colors"
          preview={
            <Layout direction="column" gap="sm" layoutWidth="auto">
              <Text color="primary">Primary text color (default)</Text>
              <Text color="secondary">Secondary text color</Text>
              <Text color="tertiary">Tertiary text color</Text>
              <Text color="accent" style={{ backgroundColor: variables.colors.background.surface, padding: variables.spacing.sm, borderRadius: variables.borderRadius.md }}>
                Accent text color
              </Text>
            </Layout>
          }
          code={`<Text color="primary">Primary text color (default)</Text>
<Text color="secondary">Secondary text color</Text>
<Text color="tertiary">Tertiary text color</Text>
<Text color="accent">Accent text color</Text>`}
        />
      </Layout>

      {/* Alignment */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Text Alignment
        </Text>
        <Text size="md">
          Control text alignment within its container.
        </Text>
        
        <CodeExample
          title="Text Alignment"
          preview={
            <Layout direction="column" gap="sm" layoutWidth="auto">
              <Text align="left" style={{ width: '100%', backgroundColor: variables.colors.background.surface, padding: variables.spacing.sm }}>
                Left aligned text
              </Text>
              <Text align="center" style={{ width: '100%', backgroundColor: variables.colors.background.surface, padding: variables.spacing.sm }}>
                Center aligned text
              </Text>
              <Text align="right" style={{ width: '100%', backgroundColor: variables.colors.background.surface, padding: variables.spacing.sm }}>
                Right aligned text
              </Text>
            </Layout>
          }
          code={`<Text align="left">Left aligned text</Text>
<Text align="center">Center aligned text</Text>
<Text align="right">Right aligned text</Text>`}
        />
      </Layout>

      {/* Truncation */}
      <Layout direction="column" gap="md" layoutWidth="auto">
        <Text as="h2" size="xl" weight="semibold">
          Text Truncation
        </Text>
        <Text size="md">
          Handle long text content with truncation options.
        </Text>
        
        <CodeExample
          title="Text Truncation"
          preview={
            <Layout direction="column" gap="sm" layoutWidth="auto" style={{ maxWidth: '300px' }}>
              <Text truncate>
                This is a very long line of text that will be truncated with ellipsis when it exceeds the container width
              </Text>
              <Text lineClamp={2}>
                This is a longer paragraph that will be clamped to exactly two lines and then show ellipsis to indicate there is more content available
              </Text>
            </Layout>
          }
          code={`<Text truncate>
  This is a very long line of text that will be truncated...
</Text>

<Text lineClamp={2}>
  This is a longer paragraph that will be clamped to exactly 
  two lines and then show ellipsis...
</Text>`}
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
            { prop: 'as', type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"', default: '"p"', description: 'HTML element to render' },
            { prop: 'size', type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"', default: '"md"', description: 'Text size' },
            { prop: 'weight', type: '"normal" | "medium" | "semibold" | "bold"', default: '"normal"', description: 'Font weight' },
            { prop: 'color', type: '"primary" | "secondary" | "tertiary" | "muted" | "accent" | "success" | "warning" | "error" | "info"', default: '"primary"', description: 'Text color variant' },
            { prop: 'align', type: '"left" | "center" | "right"', default: '"left"', description: 'Text alignment' },
            { prop: 'truncate', type: 'boolean', default: 'false', description: 'Truncate text with ellipsis' },
            { prop: 'lineClamp', type: 'number', default: '-', description: 'Clamp text to specific number of lines' },
            { prop: 'children', type: 'ReactNode', default: '-', description: 'Text content' },
          ].map((row, index) => (
            <Layout
              key={row.prop}
              direction="row"
              gap="md"
              padding="md"
              layoutWidth="auto"
              style={{
                borderBottom: index < 7 ? `1px solid ${variables.colors.border}` : 'none',
              }}
            >
              <Text size="sm" weight="medium" style={{ minWidth: '100px', fontFamily: 'Monaco, monospace' }}>
                {row.prop}
              </Text>
              <Text size="sm" style={{ minWidth: '300px', fontFamily: 'Monaco, monospace', color: variables.colors.text.secondary }}>
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