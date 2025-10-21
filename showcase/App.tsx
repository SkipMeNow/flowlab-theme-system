import React, { useState } from "react";
import { ThemeProvider, useTheme } from "../src/index";
import { themes, allThemes } from "../src/themes/index";
import { Theme } from "../src/types";

// Pages
import ThemeShowcase from "./pages/ThemeShowcase";
import ComponentShowcase from "./pages/ComponentShowcase";
import InstallationPage from "./pages/InstallationPage";
import DocumentationPage from "./pages/DocumentationPage";

// Components
import Navigation from "./components/Navigation";
import ThemeSelector from "./components/ThemeSelector";
import Logo from "./components/Logo";

type Page = "themes" | "components" | "installation" | "documentation";

// Inner App component that uses the theme context
function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("themes");
  const {
    setLightTheme,
    setDarkTheme,
    setMode,
    setFontSize,
    setCompactMode,
    config,
    themeName,
    theme,
  } = useTheme();
  const [currentLightThemeName, setCurrentLightThemeName] =
    useState<string>("light");
  const [currentDarkThemeName, setCurrentDarkThemeName] =
    useState<string>("dark");

  console.log("Current theme info:", { themeName, config, themeObject: theme });

  const handleLightThemeChange = (newThemeName: string) => {
    const newTheme = themes[newThemeName as keyof typeof themes];
    if (newTheme) {
      console.log("Changing light theme to:", newThemeName, newTheme);
      setCurrentLightThemeName(newThemeName);
      setLightTheme(newTheme);
    }
  };

  const handleDarkThemeChange = (newThemeName: string) => {
    const newTheme = themes[newThemeName as keyof typeof themes];
    if (newTheme) {
      console.log("Changing dark theme to:", newThemeName, newTheme);
      setCurrentDarkThemeName(newThemeName);
      setDarkTheme(newTheme);
    }
  };

  const toggleDarkMode = () => {
    setMode(config.mode === "light" ? "dark" : "light");
  };

  const handleFontSizeChange = (newSize: "small" | "medium" | "large") => {
    setFontSize(newSize);
  };

  const handleCompactModeChange = (compact: boolean) => {
    setCompactMode(compact);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "themes":
        return <ThemeShowcase onThemeSelect={handleLightThemeChange} />;
      case "components":
        return <ComponentShowcase />;
      case "installation":
        return <InstallationPage />;
      case "documentation":
        return <DocumentationPage />;
      default:
        return <ThemeShowcase onThemeSelect={handleLightThemeChange} />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-app)",
        color: "var(--text-primary)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "var(--bg-surface)",
          borderBottom: "1px solid var(--border-color)",
          padding: "var(--space-md)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "var(--space-lg)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-sm)",
            }}
          >
            <Logo size={40} />
            <div>
              <h1
                style={{
                  fontSize: "var(--font-size-2xl)",
                  fontWeight: "var(--font-weight-bold)",
                  margin: 0,
                  color: "var(--accent-500)",
                }}
              >
                FlowLabKit
              </h1>
              <p
                style={{
                  fontSize: "var(--font-size-sm)",
                  color: "var(--text-secondary)",
                  margin: "4px 0 0 0",
                }}
              >
                Theme System Showcase
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "var(--space-md)",
              alignItems: "center",
            }}
          >
            <ThemeSelector
              currentLightTheme={currentLightThemeName}
              currentDarkTheme={currentDarkThemeName}
              onLightThemeChange={handleLightThemeChange}
              onDarkThemeChange={handleDarkThemeChange}
              isDark={config.mode === "dark"}
              onToggleDark={toggleDarkMode}
              fontSize={config.fontSize}
              onFontSizeChange={handleFontSizeChange}
              compactMode={config.compactMode}
              onCompactModeChange={handleCompactModeChange}
            />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Content */}
      <main
        style={{
          width: "100%",
          padding: "var(--space-lg)",
        }}
      >
        {renderPage()}
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "var(--bg-surface)",
          borderTop: "1px solid var(--border-color)",
          padding: "var(--space-lg)",
          marginTop: "var(--space-2xl)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "var(--font-size-sm)",
            margin: 0,
          }}
        >
          Built with using @flowlabkit/ui
        </p>
      </footer>
    </div>
  );
}

// Main App component with ThemeProvider
function App() {
  return (
    <ThemeProvider
      lightTheme={themes.light}
      darkTheme={themes.dark}
      initialConfig={{
        mode: "light",
        fontSize: "medium",
        compactMode: false,
      }}
    >
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
