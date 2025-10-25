import React from 'react';
import { BehaviorProps } from './types';
import { useTheme } from '../hooks/useTheme';
import { useResponsive } from './ResponsiveProvider';

export const NavigationLayout: React.FC<BehaviorProps> = ({ children, ...props }) => {
  const { theme } = useTheme();
  const { layoutMode, isDrawerOpen, toggleDrawer, closeDrawer } = useResponsive();

  // Desktop Navigation Layout
  const renderDesktop = () => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '250px',
        height: '100vh',
        backgroundColor: theme.colors.background.surface,
        borderRight: `1px solid ${theme.colors.border.color}`,
        zIndex: 100,
        overflowY: 'auto',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );

  // Tablet Navigation Layout
  const renderTablet = () => (
    <>
      {/* Toggle button for tablet */}
      <button
        onClick={toggleDrawer}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1100,
          width: '2.5rem',
          height: '2.5rem',
          backgroundColor: theme.colors.background.surface,
          border: `1px solid ${theme.colors.border.color}`,
          borderRadius: '0.375rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '280px',
          height: '100vh',
          backgroundColor: theme.colors.background.surface,
          borderRight: `1px solid ${theme.colors.border.color}`,
          zIndex: 1000,
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          overflowY: 'auto',
          paddingTop: '4rem',
        }}
        {...props}
      >
        {children}
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 999,
          }}
          onClick={closeDrawer}
        />
      )}
    </>
  );

  // Mobile Navigation Layout
  const renderMobile = () => (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleDrawer}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1100,
          width: '3rem',
          height: '3rem',
          backgroundColor: theme.colors.background.surface,
          border: `1px solid ${theme.colors.border.color}`,
          borderRadius: '0.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.25rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: theme.shadows?.sm || '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
        aria-label="Toggle navigation menu"
      >
        {/* Hamburger Icon */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <div
            style={{
              width: '1.25rem',
              height: '2px',
              backgroundColor: theme.colors.text.primary,
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              transform: isDrawerOpen ? 'rotate(45deg) translate(0.35rem, 0.35rem)' : 'none',
            }}
          />
          <div
            style={{
              width: '1.25rem',
              height: '2px',
              backgroundColor: theme.colors.text.primary,
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              opacity: isDrawerOpen ? 0 : 1,
            }}
          />
          <div
            style={{
              width: '1.25rem',
              height: '2px',
              backgroundColor: theme.colors.text.primary,
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              transform: isDrawerOpen ? 'rotate(-45deg) translate(0.35rem, -0.35rem)' : 'none',
            }}
          />
        </div>
      </button>

      {/* Backdrop Overlay */}
      {isDrawerOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            transition: 'opacity 0.3s ease',
          }}
          onClick={closeDrawer}
        />
      )}

      {/* Slide-out Navigation Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '280px',
          height: '100vh',
          backgroundColor: theme.colors.background.app,
          borderRight: `1px solid ${theme.colors.border.color}`,
          zIndex: 1050,
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          overflowY: 'auto',
          paddingTop: '5rem',
          boxShadow: isDrawerOpen ? (theme.shadows?.lg || '0 10px 25px rgba(0, 0, 0, 0.15)') : 'none',
        }}
        {...props}
      >
        <div style={{ padding: '1rem' }}>
          {children}
        </div>
      </div>
    </>
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