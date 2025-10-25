import React from 'react';
import { useTheme } from '../hooks/useTheme';

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill' | 'square';
  dot?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  shape = 'rounded',
  dot = false,
  className = '',
  children,
}) => {
  const { variables } = useTheme();
  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: variables.typography.fontFamily,
    fontWeight: variables.typography.fontWeight.medium,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    transition: variables.transitions.base,
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: variables.colors.gray[100],
      color: variables.colors.gray[800],
    },
    primary: {
      backgroundColor: variables.colors.accent[500],
      color: variables.colors.text.inverse,
    },
    secondary: {
      backgroundColor: variables.colors.gray[500],
      color: variables.colors.text.inverse,
    },
    success: {
      backgroundColor: variables.colors.semantic.success,
      color: variables.colors.text.inverse,
    },
    warning: {
      backgroundColor: variables.colors.semantic.warning,
      color: variables.colors.text.inverse,
    },
    error: {
      backgroundColor: variables.colors.semantic.error,
      color: variables.colors.text.inverse,
    },
    info: {
      backgroundColor: variables.colors.semantic.info,
      color: variables.colors.text.inverse,
    },
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      fontSize: variables.typography.fontSize.xs,
      padding: dot ? '0' : `${variables.spacing.xs} ${variables.spacing.sm}`,
      minWidth: dot ? variables.spacing.sm : 'auto',
      height: dot ? variables.spacing.sm : `calc(${variables.typography.fontSize.xs} + ${variables.spacing.xs} * 2)`,
    },
    md: {
      fontSize: variables.typography.fontSize.sm,
      padding: dot ? '0' : `${variables.spacing.xs} ${variables.spacing.md}`,
      minWidth: dot ? variables.spacing.md : 'auto',
      height: dot ? variables.spacing.md : `calc(${variables.typography.fontSize.sm} + ${variables.spacing.sm})`,
    },
    lg: {
      fontSize: variables.typography.fontSize.base,
      padding: dot ? '0' : `${variables.spacing.sm} ${variables.spacing.lg}`,
      minWidth: dot ? variables.spacing.lg : 'auto',
      height: dot ? variables.spacing.lg : `calc(${variables.typography.fontSize.base} + ${variables.spacing.md})`,
    },
  };

  // Shape styles
  const shapeStyles: Record<string, React.CSSProperties> = {
    rounded: {
      borderRadius: variables.borderRadius.sm,
    },
    pill: {
      borderRadius: variables.borderRadius.full,
    },
    square: {
      borderRadius: '0',
    },
  };

  // Dot specific styles
  const dotStyles: React.CSSProperties = dot ? {
    borderRadius: '50%',
    padding: '0',
  } : {};

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...shapeStyles[shape],
    ...dotStyles,
  };

  return (
    <span
      style={combinedStyles}
      className={className}
    >
      {!dot && children}
    </span>
  );
};