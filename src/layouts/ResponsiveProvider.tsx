import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useBreakpoint } from '../hooks/useResponsive';
import { BehaviorType, LayoutMode, ResponsiveLayoutConfig } from './types';
import { layoutBehaviors } from './registry';

interface ResponsiveContextType {
  layoutMode: LayoutMode;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  openDrawer: () => void;
}

const ResponsiveContext = createContext<ResponsiveContextType | null>(null);

export const useResponsive = (): ResponsiveContextType => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error('useResponsive must be used within ResponsiveProvider');
  }
  return context;
};

interface ResponsiveProviderProps {
  children: ReactNode;
}

export const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({ children }) => {
  const breakpoint = useBreakpoint();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Determine layout mode based on breakpoint
  const getLayoutMode = (): LayoutMode => {
    if (breakpoint === 'xs' || breakpoint === 'sm') return 'mobile';
    if (breakpoint === 'md') return 'tablet';
    return 'desktop';
  };

  const layoutMode = getLayoutMode();

  // Close drawer when switching to desktop
  useEffect(() => {
    if (layoutMode === 'desktop') {
      setIsDrawerOpen(false);
    }
  }, [layoutMode]);

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const value: ResponsiveContextType = {
    layoutMode,
    isDrawerOpen,
    toggleDrawer,
    closeDrawer,
    openDrawer,
  };

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

// Higher-order component to wrap components with responsive behavior
interface ResponsiveWrapperProps {
  behavior: BehaviorType;
  children: React.ReactNode;
  [key: string]: any;
}

export const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({ 
  behavior, 
  children, 
  ...props 
}) => {
  const { layoutMode } = useResponsive();
  
  // Get the appropriate layout component for this behavior and mode
  const behaviorConfig = layoutBehaviors[behavior];
  
  if (!behaviorConfig) {
    // If no behavior config found, return children as-is
    console.log(`ResponsiveWrapper: No config found for behavior "${behavior}"`);
    return <>{children}</>;
  }

  // Select the appropriate layout component based on current mode
  const LayoutComponent = behaviorConfig[layoutMode];
  
  if (!LayoutComponent) {
    // If no layout component found, return children as-is
    console.log(`ResponsiveWrapper: No layout component found for "${behavior}" in "${layoutMode}" mode`);
    return <>{children}</>;
  }

  // ALWAYS apply the responsive layout component (like CSS media queries override base styles)
  // This ensures responsive behavior ALWAYS takes precedence over the child component's layout
  console.log(`ResponsiveWrapper: Applying "${behavior}" behavior for "${layoutMode}" mode`);
  return (
    <LayoutComponent mode={layoutMode} {...props}>
      {children}
    </LayoutComponent>
  );
};