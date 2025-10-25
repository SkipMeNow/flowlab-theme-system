import React from 'react';
import { BehaviorProps } from './types';
import { useTheme } from '../hooks/useTheme';
import { useResponsive } from './ResponsiveProvider';

export const ContentLayout: React.FC<BehaviorProps> = ({ children, ...props }) => {
  const { theme } = useTheme();
  const { layoutMode, isDrawerOpen } = useResponsive();

  // Desktop Content Layout
  const renderDesktop = () => (
    <div
      style={{
        marginLeft: '250px', // Space for fixed navigation
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
        padding: '2rem',
        paddingTop: '7rem', // Space for header (5rem height + 2rem padding)
        maxWidth: '1200px',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );

  // Tablet Content Layout
  const renderTablet = () => (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
        padding: '1.5rem',
        paddingTop: '6rem', // Space for header (4.5rem height + 1.5rem padding)
        maxWidth: '900px',
        margin: '0 auto',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );

  // Mobile Content Layout
  const renderMobile = () => (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '1rem',
        paddingTop: '6rem', // Extra space for hamburger menu and header
        maxWidth: '100%',
        margin: '0',
        // Prevent interaction when drawer is open
        pointerEvents: isDrawerOpen ? 'none' : 'auto',
        // Slightly dim content when drawer is open
        opacity: isDrawerOpen ? 0.7 : 1,
        transition: 'opacity 0.3s ease',
        position: 'relative',
        zIndex: 1,
        // Better typography for mobile
        fontSize: '16px', // Prevent zoom on iOS
        lineHeight: 1.5,
        // Ensure content doesn't get cut off
        boxSizing: 'border-box',
        overflow: 'visible',
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