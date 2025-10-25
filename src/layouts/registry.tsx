import React from 'react';
import { BehaviorType, LayoutMode, ResponsiveLayoutConfig, BehaviorProps } from './types';

// Import organized layout components
import { NavigationLayout } from './NavigationLayout';
import { ContentLayout } from './ContentLayout';
import { HeaderLayout } from './HeaderLayout';

// Default fallback for behaviors not yet implemented
const DefaultBehaviorLayout: React.FC<BehaviorProps> = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

// Registry mapping behavior types to their responsive layout components
// Each layout component handles desktop, tablet, and mobile internally
export const layoutBehaviors: ResponsiveLayoutConfig = {
  Navigation: {
    desktop: NavigationLayout,
    tablet: NavigationLayout,
    mobile: NavigationLayout,
  },
  Header: {
    desktop: HeaderLayout,
    tablet: HeaderLayout,
    mobile: HeaderLayout,
  },
  Content: {
    desktop: ContentLayout,
    tablet: ContentLayout,
    mobile: ContentLayout,
  },
  Modal: {
    desktop: DefaultBehaviorLayout,
    tablet: DefaultBehaviorLayout,
    mobile: DefaultBehaviorLayout, // Will be implemented later
  },
  Dropdown: {
    desktop: DefaultBehaviorLayout,
    tablet: DefaultBehaviorLayout,
    mobile: DefaultBehaviorLayout, // Will be implemented later
  },
  Card: {
    desktop: DefaultBehaviorLayout,
    tablet: DefaultBehaviorLayout,
    mobile: DefaultBehaviorLayout, // Will be implemented later
  },
  Button: {
    desktop: DefaultBehaviorLayout,
    tablet: DefaultBehaviorLayout,
    mobile: DefaultBehaviorLayout, // Will be implemented later
  },
  Form: {
    desktop: DefaultBehaviorLayout,
    tablet: DefaultBehaviorLayout,
    mobile: DefaultBehaviorLayout, // Will be implemented later
  },
};