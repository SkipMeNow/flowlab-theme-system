import React, { forwardRef, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'tertiary' | 'muted' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
  lineClamp?: number;
  className?: string;
}

export const Text = forwardRef<HTMLElement, TextProps>(({
  as = 'p',
  size = 'md',
  weight = 'normal',
  color = 'primary',
  align = 'left',
  truncate = false,
  lineClamp,
  className = '',
  children,
  style,
  ...props
}, ref) => {
  const { theme } = useTheme();
  const Component = as;

  // Base styles
  const baseStyles: React.CSSProperties = {
    margin: 0,
    fontFamily: 'var(--font-family)',
    lineHeight: 1.5,
    textAlign: align,
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    xs: { fontSize: 'var(--font-size-xs)' },
    sm: { fontSize: 'var(--font-size-sm)' },
    md: { fontSize: 'var(--font-size-base)' },
    lg: { fontSize: 'var(--font-size-lg)' },
    xl: { fontSize: 'var(--font-size-xl)' },
    '2xl': { fontSize: 'var(--font-size-2xl)' },
    '3xl': { fontSize: 'var(--font-size-3xl)' },
  };

  // Weight styles
  const weightStyles: Record<string, React.CSSProperties> = {
    normal: { fontWeight: 'var(--font-weight-normal)' },
    medium: { fontWeight: 'var(--font-weight-medium)' },
    semibold: { fontWeight: 'var(--font-weight-semibold)' },
    bold: { fontWeight: 'var(--font-weight-bold)' },
  };

  // Color styles
  const colorStyles: Record<string, React.CSSProperties> = {
    primary: { color: 'var(--text-primary)' },
    secondary: { color: 'var(--text-secondary)' },
    tertiary: { color: 'var(--text-tertiary)' },
    muted: { color: 'var(--text-muted)' },
    accent: { color: 'var(--text-accent)' },
    success: { color: 'var(--success-color)' },
    warning: { color: 'var(--warning-color)' },
    error: { color: 'var(--error-color)' },
    info: { color: 'var(--info)' },
  };

  // Truncate styles
  const truncateStyles: React.CSSProperties = truncate ? {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  } : {};

  // Line clamp styles
  const lineClampStyles: React.CSSProperties = lineClamp ? {
    display: '-webkit-box',
    WebkitLineClamp: lineClamp,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } : {};

  // Default heading styles
  const headingStyles: Record<string, React.CSSProperties> = {
    h1: { 
      fontSize: 'var(--font-size-3xl)', 
      fontWeight: 'var(--font-weight-bold)',
      lineHeight: 1.2,
      marginBottom: 'var(--space-lg)',
    },
    h2: { 
      fontSize: 'var(--font-size-2xl)', 
      fontWeight: 'var(--font-weight-bold)',
      lineHeight: 1.3,
      marginBottom: 'var(--space-md)',
    },
    h3: { 
      fontSize: 'var(--font-size-xl)', 
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 1.3,
      marginBottom: 'var(--space-md)',
    },
    h4: { 
      fontSize: 'var(--font-size-lg)', 
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 1.4,
      marginBottom: 'var(--space-sm)',
    },
    h5: { 
      fontSize: 'var(--font-size-base)', 
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 1.4,
      marginBottom: 'var(--space-sm)',
    },
    h6: { 
      fontSize: 'var(--font-size-sm)', 
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 1.4,
      marginBottom: 'var(--space-sm)',
    },
  };

  const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as);
  const defaultHeadingStyles = isHeading ? headingStyles[as] : {};

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...defaultHeadingStyles,
    ...sizeStyles[size],
    ...weightStyles[weight],
    ...colorStyles[color],
    ...truncateStyles,
    ...lineClampStyles,
    ...style,
  };

  return (
    <Component
      ref={ref as any}
      style={combinedStyles}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
});

Text.displayName = 'Text';