// Simple Layout Components (grid-based, no drag system)
export {
  Layout,
  TwoPanelLayout,
  ThreePanelLayout, 
  VerticalLayout,
  SimpleDashboardLayout as DashboardLayout,
  SimpleEditorLayout as EditorLayout,
  TwoPanelLayout as SidebarLeftLayout,  // Alias for compatibility
  TwoPanelLayout as EmailLayout         // Alias for compatibility
} from './SimpleLayout';

export type {
  LayoutProps,
  Panel,
  TwoPanelLayoutProps,
  ThreePanelLayoutProps,
  VerticalLayoutProps,
  DashboardLayoutProps,
  EditorLayoutProps
} from './SimpleLayout';

// Simple preset definitions for showcase compatibility
export const PANEL_PRESETS = {
  sidebar: {
    name: 'Two Panel Layout',
    description: 'Simple two-panel layout with fixed sidebar',
    direction: 'horizontal' as const
  },
  three: {
    name: 'Three Panel Layout', 
    description: 'Three-column layout',
    direction: 'horizontal' as const
  },
  dashboard: {
    name: 'Dashboard Layout',
    description: 'Header with sidebar and main content',
    direction: 'horizontal' as const
  },
  editor: {
    name: 'Editor Layout',
    description: 'File tree, editor, and optional terminal',
    direction: 'horizontal' as const
  },
  vertical: {
    name: 'Vertical Layout',
    description: 'Top and bottom panels',
    direction: 'vertical' as const
  }
};