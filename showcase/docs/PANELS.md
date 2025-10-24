# Panel System Documentation

FlowLabKit UI includes a powerful, responsive panel system similar to [react-resizable-panels](https://react-resizable-panels.vercel.app/) with advanced features like touch support, keyboard navigation, persistence, and mobile optimization.

## Overview

The panel system consists of three main components:
- **PanelGroup**: Container that manages panel layout and resize behavior
- **Panel**: Individual resizable panel with size constraints and collapse functionality  
- **PanelResizeHandle**: Draggable handle for resizing adjacent panels

## Basic Usage

```typescript
import { PanelGroup, Panel, PanelResizeHandle } from 'flowlabkit-ui';

function MyLayout() {
  return (
    <PanelGroup direction="horizontal" autoSaveId="my-layout">
      <Panel defaultSize={30} minSize={15} maxSize={40} collapsible>
        <div>Sidebar Content</div>
      </Panel>
      
      <PanelResizeHandle />
      
      <Panel defaultSize={70} minSize={50}>
        <div>Main Content</div>
      </Panel>
    </PanelGroup>
  );
}
```

## Components

### PanelGroup

The main container that manages panel layout and coordinates resizing.

#### Props

```typescript
interface PanelGroupProps {
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
  
  /** Unique identifier for persistence */
  id?: string;
  
  /** Auto-save key for localStorage persistence */
  autoSaveId?: string;
  
  /** Custom storage implementation */
  storage?: PanelStorageApi;
  
  /** Callback when panel sizes change */
  onLayout?: (sizes: number[]) => void;
  
  /** Enable responsive behavior */
  responsive?: boolean;
  
  children: ReactNode;
}
```

#### Features

- **Automatic persistence**: Panel sizes are saved to localStorage when `autoSaveId` is provided
- **Responsive layout**: Automatically switches from horizontal to vertical on mobile
- **Custom storage**: Use your own storage implementation (e.g., database, sessionStorage)
- **Layout callbacks**: Monitor panel size changes in real-time

### Panel

Individual resizable panel with size constraints and collapse functionality.

#### Props

```typescript
interface PanelProps {
  /** Unique panel identifier */
  id?: string;
  
  /** Default size as percentage (0-100) */
  defaultSize?: number;
  
  /** Minimum size as percentage (0-100) */
  minSize?: number;
  
  /** Maximum size as percentage (0-100) */
  maxSize?: number;
  
  /** Enable collapse functionality */
  collapsible?: boolean;
  
  /** Enable resize capability */
  resizable?: boolean;
  
  /** Collapse behavior strategy */
  collapseStrategy?: 'hidden' | 'collapsed' | 'overlay';
  
  /** Panel order in layout */
  order?: number;
  
  /** Responsive behavior enabled */
  responsive?: boolean;
  
  /** Collapse event callback */
  onCollapse?: (collapsed: boolean) => void;
  
  /** Resize event callback */
  onResize?: (size: number) => void;
  
  children: ReactNode;
}
```

#### Features

- **Size constraints**: Set minimum and maximum sizes
- **Auto-collapse**: Panels can collapse automatically on mobile
- **Collapse strategies**: Choose how panels behave when collapsed
- **Event callbacks**: React to panel state changes

### PanelResizeHandle

Draggable handle for resizing adjacent panels with full accessibility support.

#### Props

```typescript
interface PanelResizeHandleProps {
  /** Handle thickness in pixels */
  thickness?: number;
  
  /** Visual style variant */
  variant?: 'line' | 'bar' | 'invisible';
  
  /** Show resize indicators */
  showIndicators?: boolean;
  
  /** Enable keyboard resizing */
  keyboardResizable?: boolean;
  
  /** Enable touch resizing */
  touchResizable?: boolean;
  
  /** Disable the handle */
  disabled?: boolean;
  
  /** Resize event callbacks */
  onResizeStart?: () => void;
  onResize?: (delta: number) => void;
  onResizeEnd?: () => void;
  
  children?: ReactNode;
}
```

#### Features

- **Multi-input support**: Mouse, touch, and keyboard interaction
- **Visual feedback**: Hover and active states with customizable appearance
- **Accessibility**: Full keyboard navigation and screen reader support
- **Mobile optimization**: Larger touch targets and gesture support

## Layout Presets

Pre-built layout configurations for common use cases:

### Available Presets

```typescript
import { 
  SidebarLeftLayout,
  SidebarRightLayout, 
  SidebarBothLayout,
  TopNavLayout,
  ThreeColumnLayout,
  DashboardLayout,
  EditorLayout,
  EmailLayout,
  FileExplorerLayout
} from 'flowlabkit-ui';
```

### Sidebar Layouts

#### Left Sidebar
```typescript
<SidebarLeftLayout>
  {{
    sidebar: <Navigation />,
    main: <Content />
  }}
</SidebarLeftLayout>
```

#### Right Sidebar  
```typescript
<SidebarRightLayout>
  {{
    main: <Content />,
    sidebar: <Sidebar />
  }}
</SidebarRightLayout>
```

#### Dual Sidebar
```typescript
<SidebarBothLayout>
  {{
    'left-sidebar': <Navigation />,
    main: <Content />,
    'right-sidebar': <Sidebar />
  }}
</SidebarBothLayout>
```

### Complex Layouts

#### Editor Layout (3-panel)
```typescript
<EditorLayout 
  autoSaveId="my-editor"
  onPanelResize={(panelId, size) => console.log(panelId, size)}
>
  {{
    explorer: <FileTree />,
    editor: <CodeEditor />,
    properties: <PropertyPanel />
  }}
</EditorLayout>
```

#### Email Client Layout
```typescript
<EmailLayout>
  {{
    folders: <FolderList />,
    messages: <MessageList />,
    preview: <MessagePreview />
  }}
</EmailLayout>
```

#### Dashboard Layout (nested panels)
```typescript
<DashboardLayout>
  {{
    header: <TopNavigation />,
    content: (
      <PanelGroup direction="horizontal">
        <Panel defaultSize={25} collapsible>
          <Sidebar />
        </Panel>
        <PanelResizeHandle />
        <Panel defaultSize={75}>
          <MainDashboard />
        </Panel>
      </PanelGroup>
    )
  }}
</DashboardLayout>
```

## Responsive Behavior

### Automatic Mobile Adaptation

Panels automatically adapt to mobile devices:

```typescript
<PanelGroup direction="horizontal" responsive={true}>
  <Panel defaultSize={30} collapsible>
    {/* Auto-collapses on mobile */}
    <Sidebar />
  </Panel>
  
  <PanelResizeHandle 
    thickness={12} // Larger on mobile
    touchResizable={true}
  />
  
  <Panel defaultSize={70}>
    <MainContent />
  </Panel>
</PanelGroup>
```

### Custom Responsive Configuration

```typescript
// Custom responsive breakpoints
const customPreset = {
  name: 'Custom Layout',
  panels: [
    { id: 'nav', defaultSize: 20, collapsible: true },
    { id: 'content', defaultSize: 60 },
    { id: 'sidebar', defaultSize: 20, collapsible: true }
  ],
  direction: 'horizontal',
  responsive: {
    mobileCollapse: ['nav', 'sidebar'], // Collapse both on mobile
    tabletCollapse: ['sidebar'] // Collapse sidebar on tablet
  }
};
```

### Responsive Hooks Integration

```typescript
import { useIsMobile, useBreakpoint } from 'flowlabkit-ui';

function ResponsiveLayout() {
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  
  return (
    <PanelGroup 
      direction={isMobile ? 'vertical' : 'horizontal'}
      responsive={true}
    >
      <Panel 
        defaultSize={isMobile ? 100 : 30}
        collapsible={!isMobile}
      >
        <Navigation />
      </Panel>
      
      {!isMobile && <PanelResizeHandle />}
      
      <Panel defaultSize={isMobile ? 100 : 70}>
        <Content />
      </Panel>
    </PanelGroup>
  );
}
```

## Persistence

### Automatic LocalStorage

```typescript
<PanelGroup autoSaveId="my-app-layout">
  {/* Panel sizes automatically saved/restored */}
</PanelGroup>
```

### Custom Storage Implementation

```typescript
const customStorage = {
  getItem: (key: string) => {
    // Load from your database/API
    return fetch(`/api/layouts/${key}`).then(r => r.text());
  },
  setItem: (key: string, value: string) => {
    // Save to your database/API
    fetch(`/api/layouts/${key}`, {
      method: 'POST',
      body: value
    });
  }
};

<PanelGroup storage={customStorage} autoSaveId="user-123">
  {/* Custom persistence implementation */}
</PanelGroup>
```

### Manual Layout Management

```typescript
function LayoutManager() {
  const [layout, setLayout] = useState<number[]>([30, 70]);
  
  return (
    <PanelGroup
      onLayout={setLayout}
      // Restore layout from state/props
    >
      <Panel defaultSize={layout[0]}>
        <Sidebar />
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={layout[1]}>
        <Content />
      </Panel>
    </PanelGroup>
  );
}
```

## Advanced Features

### Nested Panel Groups

Create complex layouts by nesting panel groups:

```typescript
<PanelGroup direction="vertical">
  {/* Top section */}
  <Panel defaultSize={30}>
    <PanelGroup direction="horizontal">
      <Panel defaultSize={50} collapsible>
        <Tools />
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={50}>
        <Properties />
      </Panel>
    </PanelGroup>
  </Panel>
  
  <PanelResizeHandle />
  
  {/* Bottom section */}
  <Panel defaultSize={70}>
    <PanelGroup direction="horizontal">
      <Panel defaultSize={25} collapsible>
        <Explorer />
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={50}>
        <Editor />
      </Panel>
      <PanelResizeHandle />
      <Panel defaultSize={25} collapsible>
        <Console />
      </Panel>
    </PanelGroup>
  </Panel>
</PanelGroup>
```

### Custom Collapse Strategies

```typescript
<Panel 
  collapsible={true}
  collapseStrategy="overlay" // Panel becomes overlay when collapsed
>
  <MobileMenu />
</Panel>

<Panel 
  collapsible={true}
  collapseStrategy="hidden" // Panel completely hidden when collapsed
>
  <DesktopOnlyPanel />
</Panel>
```

### Dynamic Panel Configuration

```typescript
function DynamicLayout() {
  const [panels, setPanels] = useState([
    { id: 'main', defaultSize: 70 },
    { id: 'sidebar', defaultSize: 30, collapsible: true }
  ]);
  
  const addPanel = () => {
    setPanels(prev => [
      ...prev,
      { id: `panel-${Date.now()}`, defaultSize: 20, collapsible: true }
    ]);
  };
  
  return (
    <div>
      <button onClick={addPanel}>Add Panel</button>
      
      <PanelGroup direction="horizontal">
        {panels.map((panel, index) => (
          <React.Fragment key={panel.id}>
            <Panel {...panel}>
              Panel {panel.id}
            </Panel>
            {index < panels.length - 1 && <PanelResizeHandle />}
          </React.Fragment>
        ))}
      </PanelGroup>
    </div>
  );
}
```

## Accessibility

### Keyboard Navigation

- **Arrow Keys**: Resize panels when handle is focused
- **Tab**: Navigate between resize handles
- **Enter/Space**: Toggle collapse state
- **Escape**: Cancel active resize operation

### Screen Reader Support

All components include proper ARIA labels and roles:

```typescript
<PanelResizeHandle 
  aria-label="Resize sidebar"
  role="separator"
  aria-orientation="vertical"
/>
```

### Focus Management

Focus is properly managed during resize operations and panel state changes.

## Styling and Theming

### CSS Variables

Customize appearance using CSS variables:

```css
:root {
  --panel-handle-color: #e5e7eb;
  --panel-handle-hover-color: #3b82f6;
  --panel-handle-active-color: #1d4ed8;
  --panel-divider-color: #d1d5db;
  --panel-shadow-color: rgba(0, 0, 0, 0.1);
  --panel-animation-duration: 0.3s;
  --panel-border-radius: 0.375rem;
}
```

### Custom Handle Styling

```typescript
<PanelResizeHandle 
  variant="bar"
  thickness={8}
  showIndicators={true}
  style={{
    backgroundColor: 'var(--primary-color)',
    borderRadius: '4px'
  }}
>
  {/* Custom handle content */}
  <div>⋮</div>
</PanelResizeHandle>
```

## Performance Considerations

- **Efficient updates**: Only re-renders when panel sizes actually change
- **Debounced persistence**: Storage operations are debounced to prevent excessive writes
- **Optimized event handling**: Uses passive event listeners where possible
- **Memory management**: Automatically cleans up event listeners and timers

## Migration from react-resizable-panels

FlowLabKit panels are designed to be similar to react-resizable-panels with additional features:

```typescript
// react-resizable-panels
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels';

// FlowLabKit UI (similar API + extras)
import { PanelGroup, Panel, PanelResizeHandle } from 'flowlabkit-ui';

// Same basic usage, with additional features:
<PanelGroup direction="horizontal" autoSaveId="layout"> // + persistence
  <Panel defaultSize={30} collapsible responsive> // + mobile features
    Content
  </Panel>
  <PanelResizeHandle touchResizable /> // + touch support
  <Panel defaultSize={70}>
    Content  
  </Panel>
</PanelGroup>
```

## Examples and Demos

See the comprehensive demo at `examples/PanelsDemo.tsx` for live examples of:
- All layout presets
- Responsive behavior
- Touch interaction
- Keyboard navigation  
- Persistence features
- Custom configurations