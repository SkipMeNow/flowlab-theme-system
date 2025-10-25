import React from "react";
import { Text, Layout, useTheme } from "../../../src";
import { PageId } from "../types";

export interface NavigationProps {
  currentPage: PageId;
  onPageChange: (pageId: PageId) => void;
  'data-layout'?: string;
  style?: React.CSSProperties;
}

const navigationItems = [
  {
    category: "Getting Started",
    items: [
      { id: "overview", label: "Overview" },
      { id: "installation", label: "Installation" },
      { id: "getting-started", label: "Getting Started" },
      { id: "theming", label: "Theming" },
      { id: "responsive", label: "Responsive System" },
    ],
  },
  {
    category: "Components",
    items: [
      { id: "text", label: "Text" },
      { id: "button", label: "Button" },
      { id: "input", label: "Input" },
      { id: "card", label: "Card" },
      { id: "badge", label: "Badge" },
      { id: "layout", label: "Layout" },
      { id: "link", label: "Link" },
      { id: "loading", label: "Loading Indicators" },
      { id: "spinner", label: "Spinner" },
      { id: "image", label: "Image" },
      { id: "video", label: "Video" },
      { id: "dropdown", label: "Dropdown" },
    ],
  },
];

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onPageChange,
  style,
}) => {
  const { variables } = useTheme();

  return (
    <Layout
      direction="row"
      gap="lg"
      padding="lg"
      width={250}
      height="100vh"
      position="fixed"
      style={{
        backgroundColor: variables.colors.background.surface,
        borderRight: `1px solid ${variables.colors.border}`,
        top: 0,
        ...style, // Apply the z-index and other styles from autoArrange
      }}
    >
      <Text
        as="h2"
        size="lg"
        weight="bold"
        style={{ color: variables.colors.accent[600] }}
      >
        FlowLabKit Docs
      </Text>

      {navigationItems.map((section) => (
        <Layout
          key={section.category}
          direction="column"
          gap="sm"
          width="auto"
        >
          <Text
            size="sm"
            weight="semibold"
            style={{
              color: variables.colors.text.secondary,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: variables.spacing.xs,
            }}
          >
            {section.category}
          </Text>

          {section.items.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id as PageId)}
              style={{
                background: "none",
                border: "none",
                textAlign: "left",
                padding: `${variables.spacing.sm} ${variables.spacing.md}`,
                borderRadius: variables.borderRadius.md,
                cursor: "pointer",
                transition: variables.transitions.base,
                backgroundColor:
                  currentPage === item.id
                    ? variables.colors.accent[100]
                    : "transparent",
                color:
                  currentPage === item.id
                    ? variables.colors.accent[700]
                    : variables.colors.text.primary,
                fontFamily: variables.typography.fontFamily,
                fontSize: variables.typography.fontSize.sm,
                fontWeight:
                  currentPage === item.id
                    ? variables.typography.fontWeight.medium
                    : variables.typography.fontWeight.normal,
              }}
              onMouseEnter={(e) => {
                if (currentPage !== item.id) {
                  e.currentTarget.style.backgroundColor =
                    variables.colors.background.hover;
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== item.id) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {item.label}
            </button>
          ))}
        </Layout>
      ))}
    </Layout>
  );
};
