import React, { forwardRef, HTMLAttributes } from 'react';
import { useBreakpoint, useIsMobile } from '../hooks/useResponsive';

export interface ResponsiveContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /** Container layout behavior */
  layout?: 'stack' | 'grid' | 'flex' | 'auto';
  /** Number of columns for grid layout (auto-adjusts for mobile) */
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Gap between items */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding around container */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Maximum width of container */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none';
  /** Center the container */
  centered?: boolean;
  className?: string;
}

const maxWidthValues = {
  xs: '480px',
  sm: '640px', 
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
  none: 'none'
};

export const ResponsiveContainer = forwardRef<HTMLDivElement, ResponsiveContainerProps>(({
  layout = 'auto',
  columns = 3,
  gap = 'md',
  padding = 'md',
  maxWidth = 'lg',
  centered = true,
  className = '',
  children,
  ...props
}, ref) => {
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();

  // Determine responsive layout
  const getResponsiveLayout = () => {
    if (layout === 'auto') {
      // Auto-detect best layout based on screen size
      if (breakpoint === 'xs' || breakpoint === 'sm') {
        return 'stack';
      } else if (breakpoint === 'md') {
        return 'grid';
      } else {
        return 'grid';
      }
    }
    return layout;
  };

  // Determine responsive columns
  const getResponsiveColumns = () => {
    if (breakpoint === 'xs') return 1;
    if (breakpoint === 'sm') return Math.min(columns, 2);
    if (breakpoint === 'md') return Math.min(columns, 3);
    return columns;
  };

  // Determine responsive gap
  const getResponsiveGap = () => {
    if (isMobile && gap === 'xl') return 'lg';
    if (isMobile && gap === 'lg') return 'md';
    return gap;
  };

  // Determine responsive padding
  const getResponsivePadding = () => {
    if (isMobile && padding === 'xl') return 'lg';
    if (isMobile && padding === 'lg') return 'md';
    return padding;
  };

  const responsiveLayout = getResponsiveLayout();
  const responsiveColumns = getResponsiveColumns();
  const responsiveGap = getResponsiveGap();
  const responsivePadding = getResponsivePadding();

  // Layout styles
  const getLayoutStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      width: '100%',
      maxWidth: maxWidthValues[maxWidth],
      margin: centered ? '0 auto' : '0',
      padding: `var(--space-${responsivePadding})`,
    };

    switch (responsiveLayout) {
      case 'stack':
        return {
          ...baseStyles,
          display: 'flex',
          flexDirection: 'column',
          gap: `var(--space-${responsiveGap})`,
        };

      case 'flex':
        return {
          ...baseStyles,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          gap: `var(--space-${responsiveGap})`,
          alignItems: isMobile ? 'stretch' : 'flex-start',
        };

      case 'grid':
        return {
          ...baseStyles,
          display: 'grid',
          gridTemplateColumns: `repeat(${responsiveColumns}, 1fr)`,
          gap: `var(--space-${responsiveGap})`,
          alignItems: 'start',
        };

      default:
        return baseStyles;
    }
  };

  return (
    <div
      ref={ref}
      style={getLayoutStyles()}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
});

ResponsiveContainer.displayName = 'ResponsiveContainer';