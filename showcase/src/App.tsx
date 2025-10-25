import React, { useState } from "react";
import { 
  ThemeProvider, 
  Layout, 
  useTheme, 
  useIsMobile, 
  useBreakpoint,
  ResponsiveProvider,
  ResponsiveWrapper
} from "../../src";
import { lightTheme, darkTheme } from "../../src/themes";
import { Navigation } from "./components";
import { PageId } from "./types";
import {
  OverviewPage,
  InstallationPage,
  ButtonPage,
  TextPage,
  InputPage,
  CardPage,
  BadgePage,
  LayoutPage,
  LinkPage,
  LoadingPage,
  SpinnerPage,
  ImagePage,
  VideoPage,
  DropdownPage,
} from "./components/pages";

const DocContent: React.FC<{
  currentPage: PageId;
  onPageChange: (pageId: PageId) => void;
  onToggleTheme: () => void;
}> = ({ currentPage, onPageChange, onToggleTheme }) => {
  const { variables, theme } = useTheme();
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();

  // Debug: Log responsive state changes
  React.useEffect(() => {
    console.log('Responsive Debug:', { breakpoint, isMobile, windowWidth: window.innerWidth });
  }, [breakpoint, isMobile]);

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <OverviewPage />;
      case "installation":
        return <InstallationPage />;
      case "button":
        return <ButtonPage />;
      case "text":
        return <TextPage />;
      case "input":
        return <InputPage />;
      case "card":
        return <CardPage />;
      case "badge":
        return <BadgePage />;
      case "layout":
        return <LayoutPage />;
      case "link":
        return <LinkPage />;
      case "loading":
        return <LoadingPage />;
      case "spinner":
        return <SpinnerPage />;
      case "image":
        return <ImagePage />;
      case "video":
        return <VideoPage />;
      case "dropdown":
        return <DropdownPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: variables.colors.background.app,
        position: 'relative',
        width: '100%',
        overflow: 'hidden', // Prevent horizontal scroll
      }}
    >
      {/* Navigation Sidebar with Responsive Behavior */}
      <ResponsiveWrapper behavior="Navigation">
        <Navigation
          currentPage={currentPage}
          onPageChange={onPageChange}
          data-layout="layout"
        />
      </ResponsiveWrapper>

      {/* Header with Responsive Behavior */}
      <ResponsiveWrapper behavior="Header">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Debug indicator */}
          <div style={{ 
            padding: '0.5rem', 
            fontSize: '0.75rem', 
            color: variables.colors.text.secondary,
            backgroundColor: variables.colors.background.elevated,
            borderRadius: variables.borderRadius.sm,
            fontFamily: 'monospace'
          }}>
            {breakpoint} {isMobile ? '📱' : '💻'} ({window.innerWidth}px)
          </div>
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
        </div>
      </ResponsiveWrapper>

      {/* Main Content Area with Responsive Behavior */}
      <ResponsiveWrapper behavior="Content">
        <div>
          {renderPage()}
        </div>
      </ResponsiveWrapper>
    </div>
  );
};

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const [currentPage, setCurrentPage] = useState<PageId>("overview");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <ResponsiveProvider>
        <DocContent
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onToggleTheme={toggleTheme}
        />
      </ResponsiveProvider>
    </ThemeProvider>
  );
};

export default App;
