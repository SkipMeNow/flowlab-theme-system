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
  const { variables } = useTheme();
  const Component = as;

  // Base styles
  const baseStyles: React.CSSProperties = {
    margin: 0,
    fontFamily: variables.typography.fontFamily,
    lineHeight: 1.5,
    textAlign: align,
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    xs: { fontSize: variables.typography.fontSize.xs },
    sm: { fontSize: variables.typography.fontSize.sm },
    md: { fontSize: variables.typography.fontSize.base },
    lg: { fontSize: variables.typography.fontSize.lg },
    xl: { fontSize: variables.typography.fontSize.xl },
    '2xl': { fontSize: variables.typography.fontSize.xxl },
    '3xl': { fontSize: variables.typography.fontSize.xxxl },
  };

  // Weight styles
  const weightStyles: Record<string, React.CSSProperties> = {
    normal: { fontWeight: variables.typography.fontWeight.normal },
    medium: { fontWeight: variables.typography.fontWeight.medium },
    semibold: { fontWeight: variables.typography.fontWeight.semibold },
    bold: { fontWeight: variables.typography.fontWeight.bold },
  };

  // Color styles
  const colorStyles: Record<string, React.CSSProperties> = {
    primary: { color: variables.colors.text.primary },
    secondary: { color: variables.colors.text.secondary },
    tertiary: { color: variables.colors.text.tertiary },
    muted: { color: variables.colors.text.muted },
    accent: { color: variables.colors.text.accent },
    success: { color: variables.colors.semantic.success },
    warning: { color: variables.colors.semantic.warning },
    error: { color: variables.colors.semantic.error },
    info: { color: variables.colors.semantic.info },
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
      fontSize: variables.typography.fontSize.xxxl, 
      fontWeight: variables.typography.fontWeight.bold,
      lineHeight: 1.2,
      marginBottom: variables.spacing.lg,
    },
    h2: { 
      fontSize: variables.typography.fontSize.xxl, 
      fontWeight: variables.typography.fontWeight.bold,
      lineHeight: 1.3,
      marginBottom: variables.spacing.md,
    },
    h3: { 
      fontSize: variables.typography.fontSize.xl, 
      fontWeight: variables.typography.fontWeight.semibold,
      lineHeight: 1.3,
      marginBottom: variables.spacing.md,
    },
    h4: { 
      fontSize: variables.typography.fontSize.lg, 
      fontWeight: variables.typography.fontWeight.semibold,
      lineHeight: 1.4,
      marginBottom: variables.spacing.sm,
    },
    h5: { 
      fontSize: variables.typography.fontSize.base, 
      fontWeight: variables.typography.fontWeight.semibold,
      lineHeight: 1.4,
      marginBottom: variables.spacing.sm,
    },
    h6: { 
      fontSize: variables.typography.fontSize.sm, 
      fontWeight: variables.typography.fontWeight.semibold,
      lineHeight: 1.4,
      marginBottom: variables.spacing.sm,
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