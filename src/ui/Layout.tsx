import React, { forwardRef, HTMLAttributes } from 'react';
import { useBreakpoint, useIsMobile } from '../hooks/useResponsive';

export interface LayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /** Layout direction */
  direction?: 'row' | 'column' | 'auto';
  /** Gap between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding around layout */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Maximum width constraint */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none';
  /** Alignment of items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justification of items */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Wrap behavior for flex layouts */
  wrap?: boolean;
  /** Center the layout container */
  centered?: boolean;
  /** Responsive behavior enabled */
  responsive?: boolean;
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

const alignValues = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch'
};

const justifyValues = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly'
};

export const Layout = forwardRef<HTMLDivElement, LayoutProps>(({
  direction = 'auto',
  gap = 'md',
  padding = 'md',
  maxWidth = 'none',
  align = 'start',
  justify = 'start',
  wrap = true,
  centered = false,
  responsive = true,
  className = '',
  children,
  ...props
}, ref) => {
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();

  // Determine responsive direction
  const getResponsiveDirection = () => {
    if (!responsive) return direction;
    
    if (direction === 'auto') {
      // Auto-detect direction based on screen size
      return isMobile ? 'column' : 'row';
    }
    
    // Force column on very small screens for better UX
    if (direction === 'row' && breakpoint === 'xs') {
      return 'column';
    }
    
    return direction;
  };

  // Determine responsive gap
  const getResponsiveGap = () => {
    if (!responsive) return gap;
    
    if (isMobile) {
      if (gap === 'xl') return 'lg';
      if (gap === 'lg') return 'md';
    }
    return gap;
  };

  // Determine responsive padding
  const getResponsivePadding = () => {
    if (!responsive) return padding;
    
    if (isMobile) {
      if (padding === 'xl') return 'lg';
      if (padding === 'lg') return 'md';
    }
    return padding;
  };

  const responsiveDirection = getResponsiveDirection();
  const responsiveGap = getResponsiveGap();
  const responsivePadding = getResponsivePadding();

  // Layout styles
  const getLayoutStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: responsiveDirection as 'row' | 'column',
      alignItems: alignValues[align],
      justifyContent: justifyValues[justify],
      gap: responsiveGap !== 'none' ? `var(--space-${responsiveGap})` : '0',
      padding: responsivePadding !== 'none' ? `var(--space-${responsivePadding})` : '0',
      maxWidth: maxWidthValues[maxWidth],
      margin: centered ? '0 auto' : '0',
      flexWrap: wrap ? 'wrap' : 'nowrap',
      width: '100%',
    };

    // Mobile-specific adjustments
    if (responsive && isMobile) {
      baseStyles.minHeight = 'auto';
      
      // Ensure items stretch to full width in column layout
      if (responsiveDirection === 'column') {
        baseStyles.alignItems = 'stretch';
      }
      
      // Add safe area padding on mobile
      if (responsivePadding !== 'none') {
        baseStyles.paddingLeft = `max(var(--space-${responsivePadding}), var(--mobile-safe-area-left, 0px))`;
        baseStyles.paddingRight = `max(var(--space-${responsivePadding}), var(--mobile-safe-area-right, 0px))`;
        baseStyles.paddingTop = `max(var(--space-${responsivePadding}), var(--mobile-safe-area-top, 0px))`;
        baseStyles.paddingBottom = `max(var(--space-${responsivePadding}), var(--mobile-safe-area-bottom, 0px))`;
      }
    }

    return baseStyles;
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

Layout.displayName = 'Layout';