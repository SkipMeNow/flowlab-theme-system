import React, { useState } from "react";
import { ThemeProvider, Text, Layout, useTheme } from "../../src";
import { lightTheme, darkTheme } from "../../src/themes";

const ShowcaseContent: React.FC<{ onToggleTheme: () => void }> = ({
  onToggleTheme,
}) => {
  const { variables, theme } = useTheme();

  return (
    <Layout
      direction="column"
      gap="xl"
      padding="xl"
      layoutWidth="full"
      centered
      style={{
        minHeight: "100vh",
        backgroundColor: variables.colors.background.app,
        color: variables.colors.text.primary,
        boxSizing: "border-box",
        overflow: "auto",
      }}
    >
      {/* Header */}
      <Layout
        direction="row"
        justify="between"
        align="center"
        padding="lg"
        layoutWidth="full"
        style={{
          backgroundColor: variables.colors.background.surface,
          borderRadius: variables.borderRadius.lg,
          boxShadow: variables.shadows.sm,
        }}
      >
        <Text
          as="h1"
          size="2xl"
          weight="bold"
          style={{ color: variables.colors.accent[600] }}
        >
          FlowLabKit
        </Text>
        <button
          onClick={onToggleTheme}
          style={{
            padding: `${variables.spacing.sm} ${variables.spacing.md}`,
            backgroundColor: "transparent",
            border: `2px solid ${variables.colors.accent[600]}`,
            borderRadius: variables.borderRadius.md,
            color: variables.colors.accent[600],
            cursor: "pointer",
            fontFamily: variables.typography.fontFamily,
            transition: variables.transitions.base,
          }}
        >
          {theme.name === "Light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </Layout>

      {/* Hero Section */}
      <Layout
        direction="column"
        align="center"
        layoutWidth="full"
        style={{ textAlign: "center", width: "100%" }}
      >
        <div
          style={{
            display: "inline-block",
            padding: `${variables.spacing.xs} ${variables.spacing.sm}`,
            backgroundColor: variables.colors.accent[100],
            color: variables.colors.accent[700],
            borderRadius: variables.borderRadius.full,
            fontSize: variables.typography.fontSize.sm,
            fontWeight: variables.typography.fontWeight.medium,
            marginBottom: variables.spacing.md,
          }}
        >
          React Component Library
        </div>
        <Text
          as="h2"
          size="3xl"
          weight="bold"
          style={{ marginBottom: variables.spacing.md }}
        >
          Build Beautiful Apps Faster
        </Text>
        <Text
          size="lg"
          color="secondary"
          style={{ marginBottom: variables.spacing.xl }}
        >
          FlowLabKit provides everything you need to create modern, accessible
          React applications with TypeScript support and powerful theming
          capabilities.
        </Text>
      </Layout>

      {/* Typography Showcase */}
      <Layout
        direction="column"
        gap="xl"
        padding="xl"
        layoutWidth="full"
        align="center"
        style={{
          backgroundColor: variables.colors.background.surface,
          borderRadius: variables.borderRadius.lg,
          boxShadow: variables.shadows.sm,
        }}
      >
        <Text as="h3" size="2xl" weight="bold" style={{ textAlign: "center" }}>
          Typography System
        </Text>

        <Layout direction="column" gap="md" layoutWidth="auto">
          <Text as="h1" size="3xl" weight="bold">
            3XL Heading - Hero Title
          </Text>
          <Text as="h2" size="2xl" weight="semibold">
            2XL Heading - Section Title
          </Text>
          <Text as="h3" size="xl" weight="medium">
            XL Heading - Subsection
          </Text>
          <Text size="lg">Large text - Important content</Text>
          <Text size="md">Medium text - Regular body text</Text>
          <Text size="sm" color="secondary">
            Small secondary text - Helper text
          </Text>
        </Layout>
      </Layout>

      {/* Theme Demo */}
      <Layout
        direction="column"
        gap="xl"
        padding="xl"
        layoutWidth="full"
        align="center"
        style={{
          backgroundColor: variables.colors.background.surface,
          borderRadius: variables.borderRadius.lg,
          boxShadow: variables.shadows.sm,
        }}
      >
        <Text as="h3" size="2xl" weight="bold" style={{ textAlign: "center" }}>
          Theme System
        </Text>

        <Layout
          direction="column"
          align="center"
          layoutWidth="full"
          style={{ textAlign: "center" }}
        >
          <Text size="lg">
            Current theme: <strong>{theme.name}</strong>
          </Text>
          <Text size="sm" color="secondary">
            FlowLabKit uses organized theme variables for dynamic theming.
            Switch between themes to see the magic!
          </Text>

          <Layout
            direction="row"
            justify="center"
            gap="md"
            wrap
            layoutWidth="auto"
          >
            <button
              onClick={onToggleTheme}
              style={{
                padding: `${variables.spacing.md} ${variables.spacing.lg}`,
                backgroundColor: variables.colors.accent[600],
                color: variables.colors.text.inverse,
                border: "none",
                borderRadius: variables.borderRadius.md,
                cursor: "pointer",
                fontWeight: variables.typography.fontWeight.medium,
                fontFamily: variables.typography.fontFamily,
                transition: variables.transitions.base,
              }}
            >
              Switch Theme
            </button>

            <Layout direction="row" gap="sm" align="center" layoutWidth="auto">
              <span
                style={{
                  padding: `${variables.spacing.xs} ${variables.spacing.sm}`,
                  backgroundColor: variables.colors.semantic.infoLight,
                  color: variables.colors.semantic.info,
                  borderRadius: variables.borderRadius.full,
                  fontSize: variables.typography.fontSize.xs,
                  fontWeight: variables.typography.fontWeight.medium,
                }}
              >
                Theme Variables
              </span>
              <span
                style={{
                  padding: `${variables.spacing.xs} ${variables.spacing.sm}`,
                  backgroundColor: variables.colors.semantic.successLight,
                  color: variables.colors.semantic.success,
                  borderRadius: variables.borderRadius.full,
                  fontSize: variables.typography.fontSize.xs,
                  fontWeight: variables.typography.fontWeight.medium,
                }}
              >
                TypeScript
              </span>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <ShowcaseContent onToggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
