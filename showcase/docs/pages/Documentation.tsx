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
  Video,
} from "../../../src/index";

// Import component documentation
import { ButtonDocs } from "../components/ButtonDocs";
import { InputDocs } from "../components/InputDocs";
import { BadgeDocs } from "../components/BadgeDocs";
import { TextDocs } from "../components/TextDocs";
import { LinkDocs } from "../components/LinkDocs";
import { SpinnerDocs } from "../components/SpinnerDocs";
import { LoadingIndicatorDocs } from "../components/LoadingIndicatorDocs";
import { ImageDocs } from "../components/ImageDocs";
import { VideoDocs } from "../components/VideoDocs";
import { CardDocs } from "../components/CardDocs";
import { DropdownDocs } from "../components/DropdownDocs";
import { ThemeSystemDocs } from "../components/ThemeSystemDocs";
import { InstallationDocs } from "../components/InstallationDocs";
import { MobileDocs } from "../components/MobileDocs";
import { LayoutSystemDocs } from "../components/LayoutSystemDocs";

export interface NavigationItem {
  id: string;
  label: string;
  category: string;
  component: React.ComponentType;
}

const navigationItems: NavigationItem[] = [
  // Getting Started
  {
    id: "installation",
    label: "Installation",
    category: "Getting Started",
    component: InstallationDocs,
  },
  {
    id: "theme-system",
    label: "Theme System",
    category: "Getting Started",
    component: ThemeSystemDocs,
  },
  {
    id: "mobile-support",
    label: "Mobile Support",
    category: "Getting Started",
    component: MobileDocs,
  },
  {
    id: "layout-system",
    label: "Layout System",
    category: "Getting Started",
    component: LayoutSystemDocs,
  },

  // Form Components
  {
    id: "button",
    label: "Button",
    category: "Form Components",
    component: ButtonDocs,
  },
  {
    id: "input",
    label: "Input",
    category: "Form Components",
    component: InputDocs,
  },

  // Display Components
  {
    id: "text",
    label: "Text",
    category: "Display Components",
    component: TextDocs,
  },
  {
    id: "badge",
    label: "Badge",
    category: "Display Components",
    component: BadgeDocs,
  },
  {
    id: "image",
    label: "Image",
    category: "Display Components",
    component: ImageDocs,
  },
  {
    id: "video",
    label: "Video",
    category: "Display Components",
    component: VideoDocs,
  },

  // Navigation Components
  {
    id: "link",
    label: "Link",
    category: "Navigation Components",
    component: LinkDocs,
  },
  {
    id: "dropdown",
    label: "Dropdown",
    category: "Navigation Components",
    component: DropdownDocs,
  },

  // Feedback Components
  {
    id: "spinner",
    label: "Spinner",
    category: "Feedback Components",
    component: SpinnerDocs,
  },
  {
    id: "loading-indicator",
    label: "LoadingIndicator",
    category: "Feedback Components",
    component: LoadingIndicatorDocs,
  },

  // Layout Components
  {
    id: "card",
    label: "Card",
    category: "Layout Components",
    component: CardDocs,
  },
];

const categories = Array.from(
  new Set(navigationItems.map((item) => item.category))
);

const Documentation: React.FC = () => {
  const [activeItem, setActiveItem] = useState("installation");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["Getting Started"])
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const activeComponent = navigationItems.find(
    (item) => item.id === activeItem
  )?.component;
  const ActiveComponent = activeComponent || InstallationDocs;

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "var(--bg-app)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-family)",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: sidebarCollapsed ? "60px" : "300px",
          backgroundColor: "var(--bg-surface)",
          borderRight: "1px solid var(--border-color)",
          transition: "width 0.3s ease",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "var(--space-lg)",
            borderBottom: "1px solid var(--border-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!sidebarCollapsed && (
            <div>
              <Text as="h1" size="lg" weight="bold" style={{ margin: 0 }}>
                FlowLabKit UI
              </Text>
              <Text
                as="p"
                size="sm"
                color="secondary"
                style={{ margin: 0, marginTop: "var(--space-xs)" }}
              >
                Documentation
              </Text>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            style={{ padding: "var(--space-xs)" }}
          >
            {sidebarCollapsed ? "→" : "←"}
          </Button>
        </div>

        {/* Navigation */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: sidebarCollapsed ? "var(--space-sm)" : "var(--space-lg)",
          }}
        >
          {categories.map((category) => (
            <div key={category} style={{ marginBottom: "var(--space-md)" }}>
              {!sidebarCollapsed && (
                <button
                  onClick={() => toggleCategory(category)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "var(--space-sm)",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "var(--font-size-sm)",
                    fontWeight: "var(--font-weight-semibold)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {category}
                  <span
                    style={{
                      transform: expandedCategories.has(category)
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    ▼
                  </span>
                </button>
              )}

              {(sidebarCollapsed || expandedCategories.has(category)) && (
                <div
                  style={{
                    marginTop: sidebarCollapsed ? 0 : "var(--space-sm)",
                  }}
                >
                  {navigationItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveItem(item.id)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          padding: sidebarCollapsed
                            ? "var(--space-sm)"
                            : "var(--space-sm) var(--space-md)",
                          backgroundColor:
                            activeItem === item.id
                              ? "var(--accent-100)"
                              : "transparent",
                          border:
                            activeItem === item.id
                              ? "1px solid var(--accent-300)"
                              : "1px solid transparent",
                          color:
                            activeItem === item.id
                              ? "var(--accent-700)"
                              : "var(--text-primary)",
                          cursor: "pointer",
                          borderRadius: "var(--radius-sm)",
                          marginBottom: "var(--space-xs)",
                          fontSize: "var(--font-size-sm)",
                          textAlign: "left",
                          transition: "all 0.2s ease",
                          justifyContent: sidebarCollapsed
                            ? "center"
                            : "flex-start",
                        }}
                        onMouseEnter={(e) => {
                          if (activeItem !== item.id) {
                            e.currentTarget.style.backgroundColor =
                              "var(--bg-hover)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeItem !== item.id) {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }
                        }}
                        title={sidebarCollapsed ? item.label : undefined}
                      >
                        {sidebarCollapsed ? item.label.charAt(0) : item.label}
                      </button>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          overflow: "auto",
          backgroundColor: "var(--bg-app)",
        }}
      >
        <div
          style={{
            // maxWidth: "1200px",
            // margin: "0 auto",
            width: "100%",
            padding: "var(--space-xl)",
          }}
        >
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
