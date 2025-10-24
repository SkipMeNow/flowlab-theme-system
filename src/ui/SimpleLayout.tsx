import React from 'react';

// Panel definition
export interface Panel {
  children: React.ReactNode;
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  className?: string;
  style?: React.CSSProperties;
}

// Unified layout component
export interface LayoutProps {
  direction: 'horizontal' | 'vertical';
  panels: Panel[];
  gap?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  direction,
  panels,
  gap = '0px',
  style,
  className = ''
}) => {
  const isHorizontal = direction === 'horizontal';
  
  // Generate grid template based on direction and panel sizes
  const gridTemplate = panels.map(panel => {
    if (isHorizontal) {
      return panel.width || '1fr';
    } else {
      return panel.height || '1fr';
    }
  }).join(' ');

  return (
    <div
      className={className}
      style={{
        display: 'grid',
        ...(isHorizontal 
          ? { gridTemplateColumns: gridTemplate }
          : { gridTemplateRows: gridTemplate }
        ),
        gap,
        width: '100%',
        height: '100%',
        ...style
      }}
    >
      {panels.map((panel, index) => (
        <div
          key={index}
          className={panel.className}
          style={{
            overflow: 'auto',
            ...(isHorizontal && panel.minWidth && { minWidth: panel.minWidth }),
            ...(isHorizontal && panel.maxWidth && { maxWidth: panel.maxWidth }),
            ...(!isHorizontal && panel.minHeight && { minHeight: panel.minHeight }),
            ...(!isHorizontal && panel.maxHeight && { maxHeight: panel.maxHeight }),
            ...panel.style
          }}
        >
          {panel.children}
        </div>
      ))}
    </div>
  );
};

// Legacy components for backward compatibility
export interface TwoPanelLayoutProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  leftWidth?: string;
  rightWidth?: string;
  gap?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const TwoPanelLayout: React.FC<TwoPanelLayoutProps> = ({
  leftPanel,
  rightPanel,
  leftWidth = '300px',
  rightWidth = '1fr',
  gap = '0px',
  style,
  className = ''
}) => {
  return (
    <Layout
      direction="horizontal"
      panels={[
        { children: leftPanel, width: leftWidth },
        { children: rightPanel, width: rightWidth }
      ]}
      gap={gap}
      style={style}
      className={className}
    />
  );
};

// Simple three-panel horizontal layout
export interface ThreePanelLayoutProps {
  leftPanel: React.ReactNode;
  centerPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  leftWidth?: string;
  centerWidth?: string;
  rightWidth?: string;
  gap?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const ThreePanelLayout: React.FC<ThreePanelLayoutProps> = ({
  leftPanel,
  centerPanel,
  rightPanel,
  leftWidth = '250px',
  centerWidth = '1fr',
  rightWidth = '300px',
  gap = '0px',
  style,
  className = ''
}) => {
  return (
    <Layout
      direction="horizontal"
      panels={[
        { children: leftPanel, width: leftWidth },
        { children: centerPanel, width: centerWidth },
        { children: rightPanel, width: rightWidth }
      ]}
      gap={gap}
      style={style}
      className={className}
    />
  );
};

// Simple vertical layout
export interface VerticalLayoutProps {
  topPanel: React.ReactNode;
  bottomPanel: React.ReactNode;
  topHeight?: string;
  bottomHeight?: string;
  gap?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const VerticalLayout: React.FC<VerticalLayoutProps> = ({
  topPanel,
  bottomPanel,
  topHeight = '1fr',
  bottomHeight = '300px',
  gap = '0px',
  style,
  className = ''
}) => {
  return (
    <Layout
      direction="vertical"
      panels={[
        { children: topPanel, height: topHeight },
        { children: bottomPanel, height: bottomHeight }
      ]}
      gap={gap}
      style={style}
      className={className}
    />
  );
};

// Dashboard layout with header
export interface DashboardLayoutProps {
  header?: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
  headerHeight?: string;
  sidebarWidth?: string;
  gap?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const SimpleDashboardLayout: React.FC<DashboardLayoutProps> = ({
  header,
  sidebar,
  main,
  headerHeight = '60px',
  sidebarWidth = '250px',
  gap = '0px',
  style,
  className = ''
}) => {
  if (header) {
    return (
      <Layout
        direction="vertical"
        panels={[
          { children: header, height: headerHeight },
          { 
            children: (
              <Layout
                direction="horizontal"
                panels={[
                  { children: sidebar, width: sidebarWidth },
                  { children: main, width: '1fr' }
                ]}
                gap={gap}
              />
            ),
            height: '1fr'
          }
        ]}
        gap={gap}
        style={style}
        className={className}
      />
    );
  }

  return (
    <Layout
      direction="horizontal"
      panels={[
        { children: sidebar, width: sidebarWidth },
        { children: main, width: '1fr' }
      ]}
      gap={gap}
      style={style}
      className={className}
    />
  );
};

// Editor layout
export interface EditorLayoutProps {
  fileTree: React.ReactNode;
  editor: React.ReactNode;
  terminal?: React.ReactNode;
  fileTreeWidth?: string;
  terminalHeight?: string;
  gap?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const SimpleEditorLayout: React.FC<EditorLayoutProps> = ({
  fileTree,
  editor,
  terminal,
  fileTreeWidth = '250px',
  terminalHeight = '200px',
  gap = '0px',
  style,
  className = ''
}) => {
  if (terminal) {
    return (
      <Layout
        direction="horizontal"
        panels={[
          { children: fileTree, width: fileTreeWidth },
          { 
            children: (
              <Layout
                direction="vertical"
                panels={[
                  { children: editor, height: '1fr' },
                  { children: terminal, height: terminalHeight }
                ]}
                gap={gap}
              />
            ),
            width: '1fr'
          }
        ]}
        gap={gap}
        style={style}
        className={className}
      />
    );
  }

  return (
    <Layout
      direction="horizontal"
      panels={[
        { children: fileTree, width: fileTreeWidth },
        { children: editor, width: '1fr' }
      ]}
      gap={gap}
      style={style}
      className={className}
    />
  );
};

// Convenient aliases that match the new naming pattern
export const DashboardLayout = SimpleDashboardLayout;
export const EditorLayout = SimpleEditorLayout;

// Example usage with the new unified approach:
/*
// Two-panel horizontal layout
<Layout
  direction="horizontal"
  panels={[
    { children: <Sidebar />, width: '250px' },
    { children: <MainContent />, width: '1fr' }
  ]}
  gap="8px"
/>

// Three-panel horizontal layout
<Layout
  direction="horizontal"
  panels={[
    { children: <LeftPanel />, width: '200px' },
    { children: <CenterPanel />, width: '1fr' },
    { children: <RightPanel />, width: '300px' }
  ]}
  gap="8px"
/>

// Vertical layout
<Layout
  direction="vertical"
  panels={[
    { children: <TopPanel />, height: '200px' },
    { children: <BottomPanel />, height: '1fr' }
  ]}
  gap="8px"
/>

// Complex nested layout
<Layout
  direction="vertical"
  panels={[
    { children: <Header />, height: '60px' },
    { 
      children: (
        <Layout
          direction="horizontal"
          panels={[
            { children: <Sidebar />, width: '250px' },
            { children: <Main />, width: '1fr' },
            { children: <Properties />, width: '300px' }
          ]}
          gap="8px"
        />
      ),
      height: '1fr'
    }
  ]}
  gap="8px"
/>
*/