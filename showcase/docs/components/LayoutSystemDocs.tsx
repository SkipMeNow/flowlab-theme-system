import React, { useState } from 'react';
import { 
  Layout,
  TwoPanelLayout,
  ThreePanelLayout,
  VerticalLayout,
  DashboardLayout,
  EditorLayout,
  PANEL_PRESETS
} from '../../../src/ui/Panels';
import { Button, Card, CardBody, CardHeader, Text, Badge, Input } from '../../../src/index';
import SimpleLayoutDemo from '../../components/SimpleLayoutDemo';

const CodeBlock: React.FC<{ children: string; language?: string }> = ({ children, language = "tsx" }) => (
  <pre
    style={{
      backgroundColor: "var(--bg-elevated)",
      color: "var(--text-primary)",
      padding: "var(--space-md)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border-color)",
      overflow: "auto",
      fontSize: "var(--font-size-sm)",
      fontFamily: "Consolas, Monaco, 'Courier New', monospace",
      margin: "var(--space-sm) 0",
      lineHeight: "1.4",
    }}
  >
    <code>{children}</code>
  </pre>
);

export const LayoutSystemDocs: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState<string>('interactive');
  const [showCode, setShowCode] = useState<boolean>(false);

  // Demo content components
  const SidebarContent = () => (
    <div style={{ padding: 'var(--space-md)', height: '100%' }}>
      <h3 style={{ margin: '0 0 var(--space-md) 0', color: 'var(--text-primary)' }}>
        Navigation
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
          📊 Dashboard
        </Button>
        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
          📁 Projects
        </Button>
        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
          👥 Team
        </Button>
        <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>
          ⚙️ Settings
        </Button>
      </div>
    </div>
  );

  const MainContent = () => (
    <div style={{ padding: 'var(--space-lg)', height: '100%' }}>
      <h2 style={{ margin: '0 0 var(--space-lg) 0', color: 'var(--text-primary)' }}>
        Main Content Area
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
        <Card>
          <CardHeader>
            <Text as="h3" size="lg">Analytics</Text>
            <Badge variant="success">Live</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ height: '200px', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text size="sm" style={{ color: 'var(--text-secondary)' }}>Chart would go here</Text>
            </div>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader>
            <Text as="h3" size="lg">Recent Activity</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <div style={{ padding: 'var(--space-sm)', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)' }}>
                <Text size="sm">User john.doe@example.com logged in</Text>
                <Text size="xs" style={{ color: 'var(--text-secondary)' }}>2 minutes ago</Text>
              </div>
              <div style={{ padding: 'var(--space-sm)', backgroundColor: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)' }}>
                <Text size="sm">New project "Website Redesign" created</Text>
                <Text size="xs" style={{ color: 'var(--text-secondary)' }}>15 minutes ago</Text>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );

  const RightPanelContent = () => (
    <div style={{ padding: 'var(--space-md)', height: '100%' }}>
      <h3 style={{ margin: '0 0 var(--space-md) 0', color: 'var(--text-primary)' }}>
        Properties
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>Theme Mode</Text>
          <Button variant="outline" size="sm" style={{ width: '100%' }}>
            Toggle Dark/Light
          </Button>
        </div>
        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>Font Size</Text>
          <Button variant="outline" size="sm" style={{ width: '100%' }}>
            Medium
          </Button>
        </div>
        <div>
          <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>Layout</Text>
          <Button variant="outline" size="sm" style={{ width: '100%' }}>
            Responsive
          </Button>
        </div>
      </div>
    </div>
  );

  const CodeEditor = () => (
    <div style={{ 
      padding: 'var(--space-md)', 
      height: '100%', 
      backgroundColor: 'var(--gray-900)',
      color: 'var(--gray-100)',
      fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSize: '14px',
      overflow: 'auto'
    }}>
      <div style={{ marginBottom: 'var(--space-sm)', color: 'var(--gray-400)' }}>
        // Example React Component
      </div>
      <div style={{ lineHeight: '1.5' }}>
        <div><span style={{ color: '#569cd6' }}>import</span> React <span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#ce9178' }}>'react'</span>;</div>
        <div><span style={{ color: '#569cd6' }}>import</span> {`{ Button }`} <span style={{ color: '#569cd6' }}>from</span> <span style={{ color: '#ce9178' }}>'@flowlabkit/ui'</span>;</div>
        <br />
        <div><span style={{ color: '#569cd6' }}>function</span> <span style={{ color: '#dcdcaa' }}>App</span>() {`{`}</div>
        <div>&nbsp;&nbsp;<span style={{ color: '#569cd6' }}>return</span> (</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ec9b0' }}>&lt;Button</span> <span style={{ color: '#92c5f8' }}>variant</span>=<span style={{ color: '#ce9178' }}>"primary"</span><span style={{ color: '#4ec9b0' }}>&gt;</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello FlowLabKit!</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#4ec9b0' }}>&lt;/Button&gt;</span></div>
        <div>&nbsp;&nbsp;);</div>
        <div>{`}`}</div>
      </div>
    </div>
  );

  const FileTree = () => (
    <div style={{ padding: 'var(--space-md)', height: '100%', fontSize: '14px' }}>
      <h4 style={{ margin: '0 0 var(--space-md) 0', color: 'var(--text-primary)' }}>
        Explorer
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontFamily: 'Monaco, Consolas, monospace' }}>
        <div style={{ color: 'var(--text-secondary)' }}>📁 src/</div>
        <div style={{ paddingLeft: 'var(--space-md)', color: 'var(--text-secondary)' }}>📁 components/</div>
        <div style={{ paddingLeft: 'var(--space-lg)', color: 'var(--text-primary)' }}>📄 Button.tsx</div>
        <div style={{ paddingLeft: 'var(--space-lg)', color: 'var(--text-primary)' }}>📄 Card.tsx</div>
        <div style={{ paddingLeft: 'var(--space-md)', color: 'var(--text-secondary)' }}>📁 themes/</div>
        <div style={{ paddingLeft: 'var(--space-lg)', color: 'var(--text-primary)' }}>📄 light.ts</div>
        <div style={{ paddingLeft: 'var(--space-lg)', color: 'var(--text-primary)' }}>📄 dark.ts</div>
        <div style={{ paddingLeft: 'var(--space-md)', color: 'var(--text-primary)' }}>📄 index.ts</div>
        <div style={{ color: 'var(--text-primary)' }}>📄 package.json</div>
      </div>
    </div>
  );

  const TerminalContent = () => (
    <div style={{ 
      padding: 'var(--space-md)', 
      height: '100%', 
      backgroundColor: 'var(--gray-900)',
      color: 'var(--gray-100)',
      fontFamily: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      fontSize: '14px'
    }}>
      <div style={{ marginBottom: 'var(--space-sm)' }}>
        <span style={{ color: 'var(--green-400)' }}>➜</span> flowlabkit-ui git:(main) 
      </div>
      <div style={{ marginBottom: 'var(--space-sm)' }}>
        $ npm run build
      </div>
      <div style={{ marginBottom: 'var(--space-sm)', color: 'var(--gray-400)' }}>
        Building for production...
      </div>
      <div style={{ marginBottom: 'var(--space-sm)', color: 'var(--green-400)' }}>
        ✓ Built successfully
      </div>
      <div>
        <span style={{ color: 'var(--green-400)' }}>➜</span> flowlabkit-ui git:(main) <span style={{ backgroundColor: 'var(--gray-700)', padding: '1px 2px' }}>█</span>
      </div>
    </div>
  );

  const renderDemo = () => {
    switch (currentDemo) {
      case 'interactive':
        return <SimpleLayoutDemo />;

      case 'unified':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {/* Two-Panel with Unified API */}
            <div>
              <Text as="h4" size="md" weight="semibold" style={{ marginBottom: 'var(--space-sm)' }}>
                Two-Panel Layout (Unified API)
              </Text>
              <div style={{ height: '300px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <Layout
                  direction="horizontal"
                  panels={[
                    { 
                      children: (
                        <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                          <SidebarContent />
                        </div>
                      ), 
                      width: '300px' 
                    },
                    { 
                      children: (
                        <div style={{ backgroundColor: 'var(--bg-elevated)', height: '100%' }}>
                          <MainContent />
                        </div>
                      ), 
                      width: '1fr' 
                    }
                  ]}
                  gap="1px"
                />
              </div>
              
              <Text as="h5" size="sm" weight="medium" style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                Code Example:
              </Text>
              <CodeBlock>
{`<Layout
  direction="horizontal"
  panels={[
    { 
      children: <SidebarContent />, 
      width: '300px' 
    },
    { 
      children: <MainContent />, 
      width: '1fr' 
    }
  ]}
  gap="1px"
/>`}
              </CodeBlock>
            </div>

            {/* Three-Panel with Unified API */}
            <div>
              <Text as="h4" size="md" weight="semibold" style={{ marginBottom: 'var(--space-sm)' }}>
                Three-Panel Layout (Unified API)
              </Text>
              <div style={{ height: '300px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <Layout
                  direction="horizontal"
                  panels={[
                    { 
                      children: (
                        <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                          <SidebarContent />
                        </div>
                      ), 
                      width: '200px' 
                    },
                    { 
                      children: (
                        <div style={{ backgroundColor: 'var(--bg-elevated)', height: '100%' }}>
                          <MainContent />
                        </div>
                      ), 
                      width: '1fr' 
                    },
                    { 
                      children: (
                        <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                          <RightPanelContent />
                        </div>
                      ), 
                      width: '250px' 
                    }
                  ]}
                  gap="1px"
                />
              </div>
              
              <Text as="h5" size="sm" weight="medium" style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                Code Example:
              </Text>
              <CodeBlock>
{`<Layout
  direction="horizontal"
  panels={[
    { 
      children: <SidebarContent />, 
      width: '200px' 
    },
    { 
      children: <MainContent />, 
      width: '1fr' 
    },
    { 
      children: <RightPanelContent />, 
      width: '250px' 
    }
  ]}
  gap="1px"
/>`}
              </CodeBlock>
            </div>

            {/* Complex Nested Layout */}
            <div>
              <Text as="h4" size="md" weight="semibold" style={{ marginBottom: 'var(--space-sm)' }}>
                Complex Nested Layout (Unified API)
              </Text>
              <div style={{ height: '400px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                <Layout
                  direction="vertical"
                  panels={[
                    { 
                      children: (
                        <div style={{ 
                          padding: 'var(--space-md)', 
                          backgroundColor: 'var(--bg-surface)', 
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>Header</h3>
                          <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                            <Button size="sm" variant="outline">Settings</Button>
                            <Button size="sm" variant="primary">New Project</Button>
                          </div>
                        </div>
                      ), 
                      height: '60px' 
                    },
                    { 
                      children: (
                        <Layout
                          direction="horizontal"
                          panels={[
                            { 
                              children: (
                                <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                                  <SidebarContent />
                                </div>
                              ), 
                              width: '200px' 
                            },
                            { 
                              children: (
                                <Layout
                                  direction="vertical"
                                  panels={[
                                    { 
                                      children: (
                                        <div style={{ backgroundColor: 'var(--bg-elevated)', height: '100%' }}>
                                          <MainContent />
                                        </div>
                                      ), 
                                      height: '1fr' 
                                    },
                                    { 
                                      children: (
                                        <div style={{ backgroundColor: 'var(--gray-900)', height: '100%' }}>
                                          <TerminalContent />
                                        </div>
                                      ), 
                                      height: '100px' 
                                    }
                                  ]}
                                  gap="1px"
                                />
                              ), 
                              width: '1fr' 
                            },
                            { 
                              children: (
                                <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                                  <RightPanelContent />
                                </div>
                              ), 
                              width: '200px' 
                            }
                          ]}
                          gap="1px"
                        />
                      ), 
                      height: '1fr' 
                    }
                  ]}
                  gap="1px"
                />
              </div>
              
              <Text as="h5" size="sm" weight="medium" style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                Code Example:
              </Text>
              <CodeBlock>
{`<Layout
  direction="vertical"
  panels={[
    { 
      children: <HeaderContent />, 
      height: '60px' 
    },
    { 
      children: (
        <Layout
          direction="horizontal"
          panels={[
            { 
              children: <SidebarContent />, 
              width: '200px' 
            },
            { 
              children: (
                <Layout
                  direction="vertical"
                  panels={[
                    { 
                      children: <MainContent />, 
                      height: '1fr' 
                    },
                    { 
                      children: <TerminalContent />, 
                      height: '100px' 
                    }
                  ]}
                  gap="1px"
                />
              ), 
              width: '1fr' 
            },
            { 
              children: <RightPanelContent />, 
              width: '200px' 
            }
          ]}
          gap="1px"
        />
      ), 
      height: '1fr' 
    }
  ]}
  gap="1px"
/>`}
              </CodeBlock>
            </div>
          </div>
        );

      case 'basic':
        return (
          <div style={{ height: '500px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
            <TwoPanelLayout
              leftPanel={
                <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                  <SidebarContent />
                </div>
              }
              rightPanel={
                <div style={{ backgroundColor: 'var(--bg-elevated)', height: '100%' }}>
                  <MainContent />
                </div>
              }
              leftWidth="300px"
              gap="1px"
            />
          </div>
        );

      case 'three-panel':
        return (
          <div style={{ height: '500px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
            <ThreePanelLayout
              leftPanel={
                <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                  <SidebarContent />
                </div>
              }
              centerPanel={
                <div style={{ backgroundColor: 'var(--bg-elevated)', height: '100%' }}>
                  <MainContent />
                </div>
              }
              rightPanel={
                <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                  <RightPanelContent />
                </div>
              }
              leftWidth="250px"
              rightWidth="250px"
              gap="1px"
            />
          </div>
        );

      case 'editor-preset':
        return (
          <div style={{ height: '600px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
            <EditorLayout
              fileTree={
                <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                  <FileTree />
                </div>
              }
              editor={
                <div style={{ backgroundColor: 'var(--bg-elevated)', height: '100%' }}>
                  <CodeEditor />
                </div>
              }
              terminal={
                <div style={{ backgroundColor: 'var(--gray-900)', height: '100%' }}>
                  <TerminalContent />
                </div>
              }
              fileTreeWidth="250px"
              terminalHeight="200px"
              gap="1px"
            />
          </div>
        );

      case 'dashboard-preset':
        return (
          <div style={{ height: '600px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
            <DashboardLayout
              header={
                <div style={{ 
                  padding: 'var(--space-md)', 
                  backgroundColor: 'var(--bg-surface)', 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>Dashboard</h2>
                  <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                    <Button size="sm" variant="outline">Settings</Button>
                    <Button size="sm" variant="primary">New Project</Button>
                  </div>
                </div>
              }
              sidebar={
                <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                  <SidebarContent />
                </div>
              }
              main={
                <div style={{ backgroundColor: 'var(--bg-elevated)', height: '100%' }}>
                  <MainContent />
                </div>
              }
              headerHeight="60px"
              sidebarWidth="250px"
              gap="1px"
            />
          </div>
        );

      case 'vertical':
        return (
          <div style={{ height: '500px', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
            <VerticalLayout
              topPanel={
                <div style={{ backgroundColor: 'var(--bg-elevated)', height: '100%' }}>
                  <MainContent />
                </div>
              }
              bottomPanel={
                <div style={{ backgroundColor: 'var(--bg-surface)', height: '100%' }}>
                  <TerminalContent />
                </div>
              }
              bottomHeight="200px"
              gap="1px"
            />
          </div>
        );

      default:
        return null;
    }
  };

  const renderCodeExample = () => {
    if (!showCode) return null;

    const codeExamples = {
      'basic': `<TwoPanelLayout
  leftPanel={<SidebarContent />}
  rightPanel={<MainContent />}
  leftWidth="300px"
  gap="1px"
/>`,
      'three-panel': `<ThreePanelLayout
  leftPanel={<SidebarContent />}
  centerPanel={<MainContent />}
  rightPanel={<RightPanelContent />}
  leftWidth="200px"
  rightWidth="250px"
  gap="1px"
/>`,
      'editor-preset': `<EditorLayout
  fileTree={<FileTree />}
  editor={<CodeEditor />}
  terminal={<TerminalContent />}
  fileTreeWidth="250px"
  terminalHeight="200px"
  gap="1px"
/>`,
      'dashboard-preset': `<DashboardLayout
  header={<HeaderContent />}
  sidebar={<SidebarContent />}
  main={<MainContent />}
  sidebarWidth="250px"
  headerHeight="60px"
  gap="1px"
/>`,
      'vertical': `<VerticalLayout
  topPanel={<HeaderContent />}
  bottomPanel={<FooterContent />}
  topHeight="200px"
  gap="1px"
/>`,
      'unified': `// Two-Panel with Unified API
<Layout
  direction="horizontal"
  panels={[
    { children: <SidebarContent />, width: '300px' },
    { children: <MainContent />, width: '1fr' }
  ]}
  gap="1px"
/>

// Three-Panel with Unified API
<Layout
  direction="horizontal"
  panels={[
    { children: <SidebarContent />, width: '200px' },
    { children: <MainContent />, width: '1fr' },
    { children: <RightPanelContent />, width: '250px' }
  ]}
  gap="1px"
/>

// Complex Nested Layout
<Layout
  direction="vertical"
  panels={[
    { children: <HeaderContent />, height: '60px' },
    { 
      children: (
        <Layout
          direction="horizontal"
          panels={[
            { children: <SidebarContent />, width: '200px' },
            { 
              children: (
                <Layout
                  direction="vertical"
                  panels={[
                    { children: <MainContent />, height: '1fr' },
                    { children: <TerminalContent />, height: '100px' }
                  ]}
                />
              ), 
              width: '1fr' 
            },
            { children: <RightPanelContent />, width: '200px' }
          ]}
        />
      ), 
      height: '1fr' 
    }
  ]}
/>`
    };

    const code = codeExamples[currentDemo as keyof typeof codeExamples];
    
    if (!code) return null;

    return (
      <div style={{ marginTop: 'var(--space-md)' }}>
        <Text as="h4" size="md" weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>
          Code Example:
        </Text>
        <CodeBlock>{code}</CodeBlock>
      </div>
    );
  };

  const demos = [
    { id: 'interactive', name: 'Simple Layout Demo', description: 'Clean grid-based layout system' },
    { id: 'unified', name: 'Unified Layout API', description: 'New unified Layout component with direction + panels' },
    { id: 'basic', name: 'Two-Panel Layout', description: 'Simple sidebar and main content' },
    { id: 'three-panel', name: 'Three-Panel Layout', description: 'Sidebar, main content, and properties panel' },
    { id: 'editor-preset', name: 'Editor Layout', description: 'File tree, editor, and terminal layout' },
    { id: 'dashboard-preset', name: 'Dashboard Layout', description: 'Header with sidebar and main content' },
    { id: 'vertical', name: 'Vertical Layout', description: 'Top and bottom panel split' },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <Text as="h1" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-md)' }}>
          Layout System
        </Text>
        <Text size="lg" style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
          Clean, grid-based layout components with a new unified API. Use direction + panels array for ultimate flexibility, or the familiar component names for quick setup.
        </Text>
        
        <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
          <Badge variant="primary">Unified API</Badge>
          <Badge variant="secondary">Grid-based</Badge>
          <Badge variant="success">Reliable</Badge>
          <Badge variant="info">Flexible</Badge>
          <Badge variant="warning">Backward Compatible</Badge>
        </div>
      </div>

      {/* Quick Start */}
      <Card style={{ marginBottom: 'var(--space-lg)' }}>
        <CardHeader>
          <Text as="h2" size="xl">Quick Start</Text>
        </CardHeader>
        <CardBody>
          <div style={{ 
            backgroundColor: 'var(--bg-elevated)', 
            padding: 'var(--space-lg)', 
            borderRadius: 'var(--radius-md)',
            fontFamily: 'Monaco, Consolas, monospace',
            fontSize: '14px',
            color: 'var(--text-primary)',
            overflow: 'auto',
            marginBottom: 'var(--space-md)'
          }}>
            <div style={{ marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
              // Import the unified Layout component
            </div>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              {`import { Layout } from '@flowlabkit/ui';`}
            </div>
            
            <div style={{ marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
              // New unified API - direction + panels array
            </div>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              {`<Layout
  direction="horizontal"
  panels={[
    { children: <Sidebar />, width: '250px' },
    { children: <MainContent />, width: '1fr' }
  ]}
  gap="8px"
/>`}
            </div>

            <div style={{ marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
              // Legacy components still work
            </div>
            <div>
              {`<TwoPanelLayout
  leftPanel={<Sidebar />}
  rightPanel={<MainContent />}
  leftWidth="250px"
  gap="8px"
/>`}
            </div>
          </div>
        </CardBody>
      </Card>

      {/* New vs Legacy comparison */}
      <Card style={{ marginBottom: 'var(--space-lg)' }}>
        <CardHeader>
          <Text as="h2" size="xl">New Unified API vs Legacy</Text>
          <Text size="sm" style={{ color: 'var(--text-secondary)' }}>
            The new Layout component provides a unified API while maintaining backward compatibility
          </Text>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--space-lg)' }}>
            
            {/* New Unified API */}
            <div>
              <Text as="h3" size="lg" style={{ marginBottom: 'var(--space-md)', color: 'var(--accent-600)' }}>
                ✨ New Unified API
              </Text>
              <div style={{ 
                backgroundColor: 'var(--bg-elevated)', 
                padding: 'var(--space-md)', 
                borderRadius: 'var(--radius-md)',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '12px',
                marginBottom: 'var(--space-md)'
              }}>
                {`// Three-panel layout
<Layout
  direction="horizontal"
  panels={[
    { children: <Left />, width: '200px' },
    { children: <Center />, width: '1fr' },
    { children: <Right />, width: '250px' }
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
          panels={[...]}
        />
      ),
      height: '1fr'
    }
  ]}
/>`}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <Badge variant="success" size="sm">✓</Badge>
                  <Text size="sm">One component for all layouts</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <Badge variant="success" size="sm">✓</Badge>
                  <Text size="sm">Any number of panels</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <Badge variant="success" size="sm">✓</Badge>
                  <Text size="sm">Easy nesting</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <Badge variant="success" size="sm">✓</Badge>
                  <Text size="sm">Consistent API</Text>
                </div>
              </div>
            </div>

            {/* Legacy API */}
            <div>
              <Text as="h3" size="lg" style={{ marginBottom: 'var(--space-md)', color: 'var(--text-secondary)' }}>
                🔄 Legacy API (Still Supported)
              </Text>
              <div style={{ 
                backgroundColor: 'var(--bg-elevated)', 
                padding: 'var(--space-md)', 
                borderRadius: 'var(--radius-md)',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '12px',
                marginBottom: 'var(--space-md)'
              }}>
                {`// Three-panel layout
<ThreePanelLayout
  leftPanel={<Left />}
  centerPanel={<Center />}
  rightPanel={<Right />}
  leftWidth="200px"
  rightWidth="250px"
  gap="8px"
/>

// Dashboard layout
<DashboardLayout
  header={<Header />}
  sidebar={<Sidebar />}
  main={<Main />}
  headerHeight="60px"
  sidebarWidth="250px"
/>`}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <Badge variant="info" size="sm">✓</Badge>
                  <Text size="sm">Familiar component names</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <Badge variant="info" size="sm">✓</Badge>
                  <Text size="sm">Backward compatible</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <Badge variant="warning" size="sm">-</Badge>
                  <Text size="sm">Separate components</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                  <Badge variant="warning" size="sm">-</Badge>
                  <Text size="sm">Fixed panel count</Text>
                </div>
              </div>
            </div>

          </div>
        </CardBody>
      </Card>

      {/* Interactive Demo */}
      <Card style={{ marginBottom: 'var(--space-lg)' }}>
        <CardHeader>
          <Text as="h2" size="xl">Interactive Examples</Text>
          <Text size="sm" style={{ color: 'var(--text-secondary)' }}>
            Simple, grid-based layouts that are easy to use and customize. All layouts are responsive and theme-aware.
          </Text>
        </CardHeader>
        <CardBody>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 'var(--space-sm)',
            marginBottom: 'var(--space-md)'
          }}>
            {demos.map((demo) => (
              <Button
                key={demo.id}
                variant={currentDemo === demo.id ? "primary" : "ghost"}
                onClick={() => setCurrentDemo(demo.id)}
              >
                <div>
                  <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-xs)' }}>
                    {demo.name}
                  </div>
                  <div style={{ 
                    fontSize: 'var(--font-size-sm)', 
                    opacity: 0.9
                  }}>
                    {demo.description}
                  </div>
                </div>
              </Button>
            ))}
          </div>

          {/* Code Toggle Button */}
          <div style={{ marginBottom: 'var(--space-md)' }}>
            <Button
              variant={showCode ? "primary" : "outline"}
              size="sm"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? "Hide Code Examples" : "Show Code Examples"}
            </Button>
          </div>

          {/* Active Demo */}
          <div style={{ marginTop: 'var(--space-md)' }}>
            <Text as="h3" size="lg" style={{ marginBottom: 'var(--space-sm)' }}>
              {demos.find(d => d.id === currentDemo)?.name}
            </Text>
            {renderDemo()}
            {renderCodeExample()}
          </div>
        </CardBody>
      </Card>

      {/* Available Components */}
      <Card style={{ marginBottom: 'var(--space-lg)' }}>
        <CardHeader>
          <Text as="h2" size="xl">Available Layout Components</Text>
          <Text size="sm" style={{ color: 'var(--text-secondary)' }}>
            Ready-to-use layout components for common application patterns.
          </Text>
        </CardHeader>
        <CardBody>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: 'var(--space-md)'
          }}>
            {Object.entries(PANEL_PRESETS).map(([key, preset]) => (
              <div
                key={key}
                style={{
                  padding: 'var(--space-md)',
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-xs)', color: 'var(--text-primary)' }}>
                  {preset.name}
                </div>
                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
                  {preset.description}
                </div>
                <Badge variant="secondary" size="sm">
                  {preset.direction}
                </Badge>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* Features Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 'var(--space-md)',
        marginBottom: 'var(--space-lg)'
      }}>
        <Card>
          <CardHeader>
            <Text as="h3" size="lg">✨ Unified API</Text>
          </CardHeader>
          <CardBody>
            <Text size="sm" style={{ marginBottom: 'var(--space-md)' }}>
              New Layout component unifies all layout needs with direction + panels array. Clean, intuitive, and infinitely flexible.
            </Text>
            <div style={{ 
              backgroundColor: 'var(--bg-elevated)', 
              padding: 'var(--space-md)', 
              borderRadius: 'var(--radius-md)',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '12px',
              color: 'var(--text-secondary)'
            }}>
              {`<Layout
  direction="horizontal"
  panels={[
    { children: <Sidebar />, width: '250px' },
    { children: <Main />, width: '1fr' }
  ]}
/>`}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Text as="h3" size="lg">📐 Grid-Based</Text>
          </CardHeader>
          <CardBody>
            <Text size="sm" style={{ marginBottom: 'var(--space-md)' }}>
              Built on CSS Grid for reliable, predictable layouts that work consistently across browsers.
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <Badge variant="success" size="sm">✓</Badge>
                <Text size="sm">Predictable sizing</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <Badge variant="success" size="sm">✓</Badge>
                <Text size="sm">No layout bugs</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <Badge variant="success" size="sm">✓</Badge>
                <Text size="sm">Responsive by default</Text>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Text as="h3" size="lg">⚡ Lightweight</Text>
          </CardHeader>
          <CardBody>
            <Text size="sm" style={{ marginBottom: 'var(--space-md)' }}>
              Zero dependencies, minimal JavaScript. Just simple React components with clean CSS Grid layouts.
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <Badge variant="info" size="sm">🚀</Badge>
                <Text size="sm">Fast rendering</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <Badge variant="info" size="sm">📦</Badge>
                <Text size="sm">Small bundle size</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                <Badge variant="info" size="sm">🛠️</Badge>
                <Text size="sm">Easy to customize</Text>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* API Reference */}
      <Card>
        <CardHeader>
          <Text as="h2" size="xl">API Reference</Text>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            
            {/* Layout - Unified Component */}
            <div>
              <Text as="h3" size="lg" style={{ marginBottom: 'var(--space-md)' }}>Layout (Unified API) ⭐</Text>
              <div style={{ 
                backgroundColor: 'var(--bg-elevated)', 
                padding: 'var(--space-md)', 
                borderRadius: 'var(--radius-md)',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '12px',
                marginBottom: 'var(--space-md)'
              }}>
                {`interface LayoutProps {
  direction: 'horizontal' | 'vertical';
  panels: Panel[];
  gap?: string;              // Default: '0px'
  style?: React.CSSProperties;
  className?: string;
}

interface Panel {
  children: React.ReactNode;
  width?: string;            // For horizontal direction
  height?: string;           // For vertical direction
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  className?: string;
  style?: React.CSSProperties;
}`}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
                <Text size="sm" style={{ fontWeight: 'var(--font-weight-medium)' }}>Key Benefits:</Text>
                <Text size="sm">• Single component for all layout needs</Text>
                <Text size="sm">• Support for any number of panels</Text>
                <Text size="sm">• Easy nesting for complex layouts</Text>
                <Text size="sm">• Flexible sizing with CSS Grid</Text>
              </div>
            </div>
            
            {/* TwoPanelLayout */}
            <div>
              <Text as="h3" size="lg" style={{ marginBottom: 'var(--space-md)' }}>TwoPanelLayout (Legacy)</Text>
              <div style={{ 
                backgroundColor: 'var(--bg-elevated)', 
                padding: 'var(--space-md)', 
                borderRadius: 'var(--radius-md)',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '12px',
                marginBottom: 'var(--space-md)'
              }}>
                {`interface TwoPanelLayoutProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  leftWidth?: string;        // Default: '250px'
  gap?: string;              // Default: '8px'
  style?: React.CSSProperties;
}`}
              </div>
            </div>

            {/* ThreePanelLayout */}
            <div>
              <Text as="h3" size="lg" style={{ marginBottom: 'var(--space-md)' }}>ThreePanelLayout</Text>
              <div style={{ 
                backgroundColor: 'var(--bg-elevated)', 
                padding: 'var(--space-md)', 
                borderRadius: 'var(--radius-md)',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '12px',
                marginBottom: 'var(--space-md)'
              }}>
                {`interface ThreePanelLayoutProps {
  leftPanel: React.ReactNode;
  centerPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  leftWidth?: string;        // Default: '250px'
  rightWidth?: string;       // Default: '250px'
  gap?: string;              // Default: '8px'
  style?: React.CSSProperties;
}`}
              </div>
            </div>

            {/* DashboardLayout */}
            <div>
              <Text as="h3" size="lg" style={{ marginBottom: 'var(--space-md)' }}>DashboardLayout</Text>
              <div style={{ 
                backgroundColor: 'var(--bg-elevated)', 
                padding: 'var(--space-md)', 
                borderRadius: 'var(--radius-md)',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '12px',
                marginBottom: 'var(--space-md)'
              }}>
                {`interface DashboardLayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
  headerHeight?: string;     // Default: '60px'
  sidebarWidth?: string;     // Default: '250px'
  gap?: string;              // Default: '8px'
  style?: React.CSSProperties;
}`}
              </div>
            </div>

            {/* EditorLayout */}
            <div>
              <Text as="h3" size="lg" style={{ marginBottom: 'var(--space-md)' }}>EditorLayout</Text>
              <div style={{ 
                backgroundColor: 'var(--bg-elevated)', 
                padding: 'var(--space-md)', 
                borderRadius: 'var(--radius-md)',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '12px',
                marginBottom: 'var(--space-md)'
              }}>
                {`interface EditorLayoutProps {
  fileTree: React.ReactNode;
  editor: React.ReactNode;
  terminal: React.ReactNode;
  fileTreeWidth?: string;    // Default: '250px'
  terminalHeight?: string;   // Default: '200px'
  gap?: string;              // Default: '8px'
  style?: React.CSSProperties;
}`}
              </div>
            </div>

            {/* VerticalLayout */}
            <div>
              <Text as="h3" size="lg" style={{ marginBottom: 'var(--space-md)' }}>VerticalLayout</Text>
              <div style={{ 
                backgroundColor: 'var(--bg-elevated)', 
                padding: 'var(--space-md)', 
                borderRadius: 'var(--radius-md)',
                fontFamily: 'Monaco, Consolas, monospace',
                fontSize: '12px'
              }}>
                {`interface VerticalLayoutProps {
  topPanel: React.ReactNode;
  bottomPanel: React.ReactNode;
  bottomHeight?: string;     // Default: '200px'
  gap?: string;              // Default: '8px'
  style?: React.CSSProperties;
}`}
              </div>
            </div>

          </div>
        </CardBody>
      </Card>
    </div>
  );
};