import React from 'react';
import { BehaviorProps } from './types';
import { useTheme } from '../hooks/useTheme';
import { useResponsive } from './ResponsiveProvider';

export const HeaderLayout: React.FC<BehaviorProps> = ({ children, ...props }) => {
  const { theme } = useTheme();
  const { layoutMode } = useResponsive();

  // Desktop Header Layout
  const renderDesktop = () => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: '250px', // Account for navigation sidebar
        right: 0,
        height: '5rem',
        backgroundColor: theme.colors.background.surface,
        borderBottom: `1px solid ${theme.colors.border.color}`,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        boxShadow: theme.shadows?.sm || '0 1px 3px rgba(0, 0, 0, 0.1)',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );

  // Tablet Header Layout
  const renderTablet = () => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4.5rem',
        backgroundColor: theme.colors.background.surface,
        borderBottom: `1px solid ${theme.colors.border.color}`,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.5rem',
        paddingLeft: '4rem', // Space for toggle button
        boxShadow: theme.shadows?.sm || '0 1px 3px rgba(0, 0, 0, 0.1)',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );

  // Mobile Header Layout
  const renderMobile = () => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: theme.colors.background.surface,
        borderBottom: `1px solid ${theme.colors.border.color}`,
        padding: '0.75rem 1rem',
        paddingLeft: '5rem', // Space for hamburger menu
        boxShadow: theme.shadows?.sm || '0 1px 3px rgba(0, 0, 0, 0.1)',
        // Ensure header content doesn't wrap
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '4rem',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );

  // Render based on layout mode
  switch (layoutMode) {
    case 'mobile':
      return renderMobile();
    case 'tablet':
      return renderTablet();
    case 'desktop':
    default:
      return renderDesktop();
  }
};