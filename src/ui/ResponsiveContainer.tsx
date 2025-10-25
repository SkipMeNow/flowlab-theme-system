import React, { forwardRef, HTMLAttributes, useMemo, Children, isValidElement } from 'react';
import { useBreakpoint, useIsMobile, useOrientation, useResponsiveValue } from '../hooks/useResponsive';
import { useTheme } from '../hooks/useTheme';

export interface ResponsiveContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /** Container layout behavior - 'auto' enables intelligent layout detection */
  layout?: 'stack' | 'grid' | 'flex' | 'masonry' | 'auto' | 'smart';
  /** Number of columns for grid layout (auto-adjusts based on content and device) */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto';
  /** Gap between items (auto-adjusts based on theme and device) */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  /** Padding around container (auto-adjusts based on theme and device) */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  /** Maximum width of container */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'none' | 'auto';
  /** Center the container */
  centered?: boolean;
  /** Enable intelligent component analysis and optimization */
  intelligent?: boolean;
  /** Priority for mobile optimization */
  mobilePriority?: 'performance' | 'accessibility' | 'space' | 'auto';
  /** Enable theme-aware adjustments */
  themeAware?: boolean;
  /** Density preference for layout */
  density?: 'compact' | 'comfortable' | 'spacious' | 'auto';
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
  layout = 'smart',
  columns = 'auto',
  gap = 'auto',
  padding = 'auto',
  maxWidth = 'auto',
  centered = true,
  intelligent = true,
  mobilePriority = 'auto',
  themeAware = true,
  density = 'auto',
  className = '',
  children,
  ...props
}, ref) => {
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();
  const orientation = useOrientation();
  const { theme } = useTheme();

  // Intelligent component analysis
  const componentAnalysis = useMemo(() => {
    if (!intelligent) return { totalChildren: 0, componentTypes: [], hasInteractive: false };
    
    const childrenArray = Children.toArray(children);
    const componentTypes: string[] = [];
    let hasInteractive = false;
    
    childrenArray.forEach(child => {
      if (isValidElement(child)) {
        const componentName = typeof child.type === 'string' 
          ? child.type 
          : (child.type as any)?.displayName || (child.type as any)?.name || 'Unknown';
        componentTypes.push(componentName);
        
        // Detect interactive components
        if (['Button', 'Input', 'Card', 'Link', 'Dropdown'].includes(componentName)) {
          hasInteractive = true;
        }
      }
    });
    
    return {
      totalChildren: childrenArray.length,
      componentTypes,
      hasInteractive,
      hasCards: componentTypes.includes('Card'),
      hasButtons: componentTypes.includes('Button'),
      hasInputs: componentTypes.includes('Input'),
      hasText: componentTypes.includes('Text'),
    };
  }, [children, intelligent]);

  // Theme-aware responsive values
  const themeResponsiveGap = useResponsiveValue({
    xs: theme.spacing?.xs || 'var(--space-xs)',
    sm: theme.spacing?.sm || 'var(--space-sm)', 
    md: theme.spacing?.md || 'var(--space-md)',
    lg: theme.spacing?.lg || 'var(--space-lg)',
    xl: theme.spacing?.xl || 'var(--space-xl)',
    default: theme.spacing?.md || 'var(--space-md)'
  });

  const themeResponsivePadding = useResponsiveValue({
    xs: theme.spacing?.sm || 'var(--space-sm)',
    sm: theme.spacing?.md || 'var(--space-md)',
    md: theme.spacing?.lg || 'var(--space-lg)', 
    lg: theme.spacing?.xl || 'var(--space-xl)',
    xl: theme.spacing?.xxl || 'var(--space-xxl)',
    default: theme.spacing?.lg || 'var(--space-lg)'
  });

  // Intelligent density calculation
  const getIntelligentDensity = () => {
    if (density !== 'auto') return density;
    
    // Auto-detect density based on theme, device, and content
    if (theme.name?.includes('compact')) return 'compact';
    if (isMobile && componentAnalysis.hasInteractive) return 'comfortable'; // More space for touch
    if (componentAnalysis.totalChildren > 6) return 'compact'; // Many items = compact
    if (componentAnalysis.hasCards && !isMobile) return 'spacious'; // Cards need breathing room
    
    return 'comfortable';
  };

  // Intelligent mobile priority
  const getIntelligentMobilePriority = () => {
    if (mobilePriority !== 'auto') return mobilePriority;
    
    if (componentAnalysis.hasInteractive) return 'accessibility'; // Touch targets priority
    if (componentAnalysis.totalChildren > 8) return 'performance'; // Many items = performance
    if (componentAnalysis.hasCards) return 'space'; // Cards need space optimization
    
    return 'accessibility';
  };

  // Intelligent layout detection
  const getIntelligentLayout = () => {
    if (layout === 'smart') {
      const priority = getIntelligentMobilePriority();
      const densityLevel = getIntelligentDensity();
      
      // Mobile-first decisions
      if (isMobile) {
        if (priority === 'accessibility' && componentAnalysis.hasInteractive) {
          return 'stack'; // Stack for better touch targets
        }
        if (priority === 'space' && componentAnalysis.totalChildren <= 4) {
          return orientation === 'landscape' ? 'flex' : 'stack';
        }
        if (componentAnalysis.hasCards && componentAnalysis.totalChildren <= 2) {
          return 'stack'; // Cards stack better on mobile
        }
        return 'stack'; // Default mobile layout
      }
      
      // Desktop intelligent layout
      if (componentAnalysis.hasCards && componentAnalysis.totalChildren >= 3) {
        return densityLevel === 'compact' ? 'grid' : 'masonry';
      }
      if (componentAnalysis.hasButtons && componentAnalysis.totalChildren <= 5) {
        return 'flex'; // Buttons work well in flex
      }
      if (componentAnalysis.totalChildren === 2) {
        return 'flex'; // Two items = side by side
      }
      if (componentAnalysis.totalChildren >= 6) {
        return 'grid'; // Many items = grid
      }
      
      return 'grid'; // Default desktop layout
    }
    
    if (layout === 'auto') {
      // Simple auto layout (legacy)
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

  // Intelligent column calculation
  const getIntelligentColumns = () => {
    if (columns === 'auto') {
      const densityLevel = getIntelligentDensity();
      const priority = getIntelligentMobilePriority();
      
      // Mobile column logic
      if (isMobile) {
        if (priority === 'accessibility') return 1; // Single column for accessibility
        if (componentAnalysis.hasCards) return 1; // Cards work best in single column on mobile
        if (componentAnalysis.hasButtons && componentAnalysis.totalChildren <= 4) {
          return orientation === 'landscape' ? 2 : 1;
        }
        return 1; // Default mobile: single column
      }
      
      // Desktop intelligent columns based on content
      const totalItems = componentAnalysis.totalChildren;
      
      if (componentAnalysis.hasCards) {
        if (breakpoint === 'md') return Math.min(2, totalItems);
        if (breakpoint === 'lg') return Math.min(3, totalItems);
        if (breakpoint === 'xl') return Math.min(4, totalItems);
        return Math.min(5, totalItems);
      }
      
      if (componentAnalysis.hasButtons) {
        // Buttons can be more compact
        if (densityLevel === 'compact') {
          return Math.min(Math.ceil(totalItems / 2), 6);
        }
        return Math.min(Math.ceil(totalItems / 3), 4);
      }
      
      // Default intelligent columns based on breakpoint and density
      const baseColumns = {
        xs: 1,
        sm: 2,
        md: densityLevel === 'compact' ? 4 : 3,
        lg: densityLevel === 'compact' ? 5 : 4,
        xl: densityLevel === 'compact' ? 6 : 5,
        xxl: densityLevel === 'compact' ? 7 : 6
      };
      
      return Math.min(baseColumns[breakpoint as keyof typeof baseColumns] || 3, totalItems);
    }
    
    // Manual column specification with responsive adjustments
    const numColumns = typeof columns === 'number' ? columns : 3;
    if (breakpoint === 'xs') return 1;
    if (breakpoint === 'sm') return Math.min(numColumns, 2);
    if (breakpoint === 'md') return Math.min(numColumns, 3);
    return numColumns;
  };

  // Intelligent gap calculation
  const getIntelligentGap = () => {
    if (gap === 'auto') {
      const densityLevel = getIntelligentDensity();
      const priority = getIntelligentMobilePriority();
      
      if (!themeAware) {
        // Simple responsive gap
        return isMobile ? 'sm' : 'md';
      }
      
      // Theme-aware gap calculation
      if (isMobile) {
        if (priority === 'space') return 'xs'; // Maximize space usage
        if (priority === 'accessibility') return 'md'; // Better touch separation
        if (componentAnalysis.hasInteractive) return 'sm'; // Balance for interactive elements
        return 'sm'; // Default mobile gap
      }
      
      // Desktop gap based on density and content
      if (densityLevel === 'compact') return 'sm';
      if (densityLevel === 'spacious') return 'xl';
      if (componentAnalysis.hasCards) return 'lg'; // Cards need more separation
      if (componentAnalysis.hasButtons) return 'md'; // Buttons can be closer
      
      return 'md'; // Default comfortable gap
    }
    
    // Manual gap with responsive adjustments
    if (isMobile && gap === 'xl') return 'lg';
    if (isMobile && gap === 'lg') return 'md';
    return gap;
  };

  // Intelligent padding calculation
  const getIntelligentPadding = () => {
    if (padding === 'auto') {
      const densityLevel = getIntelligentDensity();
      const priority = getIntelligentMobilePriority();
      
      if (!themeAware) {
        // Simple responsive padding
        return isMobile ? 'md' : 'lg';
      }
      
      // Theme-aware padding calculation
      if (isMobile) {
        if (priority === 'space') return 'sm'; // Minimize padding for more content space
        if (priority === 'accessibility') return 'lg'; // More padding for better touch zones
        // Compact theme detection removed - using density instead
        return 'md'; // Default mobile padding
      }
      
      // Desktop padding based on density and theme
      if (densityLevel === 'compact') return 'md';
      if (densityLevel === 'spacious') return 'xxl';
      // Theme-based padding adjustments
      
      return 'lg'; // Default comfortable padding
    }
    
    // Manual padding with responsive adjustments
    if (isMobile && padding === 'xl') return 'lg';
    if (isMobile && padding === 'lg') return 'md';
    return padding;
  };

  // Intelligent max width calculation
  const getIntelligentMaxWidth = () => {
    if (maxWidth === 'auto') {
      if (isMobile) return 'full'; // Full width on mobile
      
      const totalItems = componentAnalysis.totalChildren;
      if (componentAnalysis.hasCards && totalItems <= 3) return 'md'; // Cards don't need full width
      if (componentAnalysis.hasButtons) return 'lg'; // Buttons container
      if (totalItems <= 2) return 'md'; // Few items = constrained width
      
      return 'xl'; // Default: large container
    }
    return maxWidth;
  };

  const intelligentLayout = getIntelligentLayout();
  const intelligentColumns = getIntelligentColumns();
  const intelligentGap = getIntelligentGap();
  const intelligentPadding = getIntelligentPadding();
  const intelligentMaxWidth = getIntelligentMaxWidth();

  // Intelligent layout styles
  const getIntelligentLayoutStyles = (): React.CSSProperties => {
    const densityLevel = getIntelligentDensity();
    const priority = getIntelligentMobilePriority();
    
    // Get the appropriate max width value
    const maxWidthValue = maxWidthValues[intelligentMaxWidth] || maxWidthValues.lg;
    
    // Use theme-aware padding if available
    const paddingValue = themeAware && typeof intelligentPadding === 'string'
      ? intelligentPadding.startsWith('var(') 
        ? intelligentPadding 
        : `var(--space-${intelligentPadding})`
      : `var(--space-${intelligentPadding})`;
    
    // Use theme-aware gap if available  
    const gapValue = themeAware && typeof intelligentGap === 'string'
      ? intelligentGap.startsWith('var(')
        ? intelligentGap
        : `var(--space-${intelligentGap})`
      : `var(--space-${intelligentGap})`;

    const baseStyles: React.CSSProperties = {
      width: '100%',
      maxWidth: maxWidthValue,
      margin: centered ? '0 auto' : '0',
      padding: paddingValue,
      // Add theme-aware transitions
      transition: themeAware ? 'all 0.2s ease-in-out' : undefined,
      // Mobile-specific optimizations
      WebkitTapHighlightColor: isMobile ? 'transparent' : undefined,
      touchAction: isMobile && componentAnalysis.hasInteractive ? 'manipulation' : undefined,
    };

    switch (intelligentLayout) {
      case 'stack':
        return {
          ...baseStyles,
          display: 'flex',
          flexDirection: 'column',
          gap: gapValue,
          alignItems: isMobile && priority === 'accessibility' ? 'stretch' : 'flex-start',
          // Ensure proper touch targets on mobile
          minHeight: isMobile && componentAnalysis.hasInteractive ? '44px' : undefined,
        };

      case 'flex':
        return {
          ...baseStyles,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          gap: gapValue,
          alignItems: isMobile ? 'stretch' : 'flex-start',
          justifyContent: densityLevel === 'spacious' ? 'space-between' : 'flex-start',
          // Responsive flex behavior
          '--flex-basis': isMobile ? '100%' : densityLevel === 'compact' ? '30%' : '45%',
        } as React.CSSProperties;

      case 'grid':
        return {
          ...baseStyles,
          display: 'grid',
          gridTemplateColumns: densityLevel === 'compact' 
            ? `repeat(auto-fit, minmax(200px, 1fr))`
            : `repeat(${intelligentColumns}, 1fr)`,
          gap: gapValue,
          alignItems: 'start',
        };

      case 'masonry':
        return {
          ...baseStyles,
          display: 'grid',
          gridTemplateColumns: `repeat(${intelligentColumns}, 1fr)`,
          gap: gapValue,
          alignItems: 'start',
          // Masonry-like behavior with CSS Grid
          gridTemplateRows: 'masonry', // Future CSS feature
          // Fallback for current browsers
          gridAutoRows: 'max-content',
        };

      default:
        return baseStyles;
    }
  };

  return (
    <div
      ref={ref}
      style={getIntelligentLayoutStyles()}
      className={`flowlab-responsive-container ${className}`.trim()}
      data-layout={intelligentLayout}
      data-columns={intelligentColumns}
      data-mobile={isMobile}
      data-breakpoint={breakpoint}
      data-density={getIntelligentDensity()}
      data-component-count={componentAnalysis.totalChildren}
      {...props}
    >
      {children}
    </div>
  );
});

ResponsiveContainer.displayName = 'ResponsiveContainer';