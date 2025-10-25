import React, { useState } from 'react';
import { Text, Layout, useTheme } from '../../../src';

export interface CodeExampleProps {
  title?: string;
  code: string;
  preview?: React.ReactNode;
  language?: string;
}

export const CodeExample: React.FC<CodeExampleProps> = ({ 
  title, 
  code, 
  preview,
  language = 'tsx'
}) => {
  const { variables } = useTheme();
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>(preview ? 'preview' : 'code');

  return (
    <Layout
      direction="column"
      gap="md"
      layoutWidth="auto"
      style={{
        backgroundColor: variables.colors.background.surface,
        borderRadius: variables.borderRadius.lg,
        border: `1px solid ${variables.colors.border}`,
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Layout
        direction="row"
        justify="between"
        align="center"
        padding="md"
        layoutWidth="auto"
        style={{
          borderBottom: `1px solid ${variables.colors.border}`,
        }}
      >
        {title && (
          <Text size="md" weight="semibold">
            {title}
          </Text>
        )}

        {preview && (
          <Layout direction="row" gap="none" layoutWidth="auto">
            <button
              onClick={() => setActiveTab('preview')}
              style={{
                background: 'none',
                border: 'none',
                padding: `${variables.spacing.xs} ${variables.spacing.sm}`,
                borderRadius: `${variables.borderRadius.md} 0 0 ${variables.borderRadius.md}`,
                cursor: 'pointer',
                backgroundColor: activeTab === 'preview' 
                  ? variables.colors.accent[100] 
                  : 'transparent',
                color: activeTab === 'preview' 
                  ? variables.colors.accent[700] 
                  : variables.colors.text.secondary,
                fontFamily: variables.typography.fontFamily,
                fontSize: variables.typography.fontSize.sm,
                fontWeight: variables.typography.fontWeight.medium,
              }}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              style={{
                background: 'none',
                border: 'none',
                padding: `${variables.spacing.xs} ${variables.spacing.sm}`,
                borderRadius: `0 ${variables.borderRadius.md} ${variables.borderRadius.md} 0`,
                cursor: 'pointer',
                backgroundColor: activeTab === 'code' 
                  ? variables.colors.accent[100] 
                  : 'transparent',
                color: activeTab === 'code' 
                  ? variables.colors.accent[700] 
                  : variables.colors.text.secondary,
                fontFamily: variables.typography.fontFamily,
                fontSize: variables.typography.fontSize.sm,
                fontWeight: variables.typography.fontWeight.medium,
              }}
            >
              Code
            </button>
          </Layout>
        )}
      </Layout>

      {/* Content */}
      {activeTab === 'preview' && preview ? (
        <Layout padding="lg" layoutWidth="auto">
          {preview}
        </Layout>
      ) : (
        <pre
          style={{
            margin: 0,
            padding: variables.spacing.lg,
            backgroundColor: variables.colors.background.app,
            color: variables.colors.text.primary,
            fontSize: variables.typography.fontSize.sm,
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
            lineHeight: '1.5',
            overflow: 'auto',
          }}
        >
          <code>{code}</code>
        </pre>
      )}
    </Layout>
  );
};