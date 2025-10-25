import React, { forwardRef, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';

export interface LayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /** Layout direction */
  direction?: 'row' | 'column';
  /** Gap between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Padding around layout */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Layout container width preset - defaults to 'auto' for flexible sizing */
  layoutWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'auto';
  /** Alignment of items */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Justification of items */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Wrap behavior for flex layouts */
  wrap?: boolean;
  /** Center the layout container */
  centered?: boolean;
  className?: string;
}

const layoutWidthValues = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
  auto: 'none'
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
  direction = 'row',
  gap = 'md',
  padding = 'md',
  layoutWidth = 'auto',
  align = 'start',
  justify = 'start',
  wrap = true,
  centered = false,
  className = '',
  children,
  ...props
}, ref) => {
  const { variables } = useTheme();

  // Layout styles
  const getLayoutStyles = (): React.CSSProperties => {
    return {
      display: 'flex',
      flexDirection: direction,
      alignItems: alignValues[align],
      justifyContent: justifyValues[justify],
      gap: gap !== 'none' ? variables.spacing[gap] : '0',
      padding: padding !== 'none' ? variables.spacing[padding] : '0',
      maxWidth: layoutWidthValues[layoutWidth],
      margin: centered ? '0 auto' : '0',
      flexWrap: wrap ? 'wrap' as const : 'nowrap' as const,
      width: layoutWidth === 'auto' ? 'auto' : '100%',
      boxSizing: 'border-box',
    };
  };

  const { style: externalStyle, ...otherProps } = props;
  
  return (
    <div
      ref={ref}
      style={{
        ...getLayoutStyles(),
        ...externalStyle
      }}
      className={className}
      {...otherProps}
    >
      {children}
    </div>
  );
});

Layout.displayName = 'Layout';