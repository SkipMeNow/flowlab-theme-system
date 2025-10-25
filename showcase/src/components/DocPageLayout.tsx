import React from "react";
import { Text, Layout, useTheme } from "../../../src";

export interface DocPageLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const DocPageLayout: React.FC<DocPageLayoutProps> = ({
  title,
  description,
  children,
}) => {
  const { variables } = useTheme();

  return (
    <Layout
      direction="column"
      gap="xl"
      padding="none"
      style={{
        flex: 1,
        backgroundColor: variables.colors.background.app,
      }}
    >
      {/* Page Header */}
      <Layout direction="column" gap="md">
        <Text as="h1" size="3xl" weight="bold">
          {title}
        </Text>
        {description && (
          <Text size="lg" color="secondary">
            {description}
          </Text>
        )}
      </Layout>

      {/* Page Content */}
      <Layout direction="column" gap="xl">
        {children}
      </Layout>
    </Layout>
  );
};
