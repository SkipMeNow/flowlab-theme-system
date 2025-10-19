import * as React from 'react';

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill' | 'square';
  dot?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  size = 'md', 
  shape = 'rounded',
  dot = false,
  children, 
  className = '' 
}) => {
  // Base styles using CSS variables
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-family)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    transition: 'var(--transition-base)',
  };

  // Variant styles using CSS variables
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--gray-100)',
      color: 'var(--gray-800)',
    },
    primary: {
      backgroundColor: 'var(--accent-500)',
      color: 'white',
    },
    secondary: {
      backgroundColor: 'var(--gray-500)',
      color: 'white',
    },
    success: {
      backgroundColor: 'var(--success-color)',
      color: 'white',
    },
    warning: {
      backgroundColor: 'var(--warning-color)',
      color: 'white',
    },
    error: {
      backgroundColor: 'var(--error-color)',
      color: 'white',
    },
    info: {
      backgroundColor: 'var(--info)',
      color: 'white',
    },
  };

  // Size styles using CSS variables
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      fontSize: 'var(--font-size-xs)',
      padding: dot ? '0' : 'var(--space-xs) var(--space-sm)',
      minWidth: dot ? 'var(--space-sm)' : 'auto',
      height: dot ? 'var(--space-sm)' : 'calc(var(--font-size-xs) + var(--space-xs) * 2)',
    },
    md: {
      fontSize: 'var(--font-size-sm)',
      padding: dot ? '0' : 'var(--space-xs) var(--space-md)',
      minWidth: dot ? 'var(--space-md)' : 'auto',
      height: dot ? 'var(--space-md)' : 'calc(var(--font-size-sm) + var(--space-sm))',
    },
    lg: {
      fontSize: 'var(--font-size-base)',
      padding: dot ? '0' : 'var(--space-sm) var(--space-lg)',
      minWidth: dot ? 'var(--space-lg)' : 'auto',
      height: dot ? 'var(--space-lg)' : 'calc(var(--font-size-base) + var(--space-md))',
    },
  };

  // Shape styles using CSS variables
  const shapeStyles: Record<string, React.CSSProperties> = {
    rounded: {
      borderRadius: 'var(--radius-sm)',
    },
    pill: {
      borderRadius: '9999px',
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
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...shapeStyles[shape],
    ...dotStyles,
  };

  return React.createElement('span', {
    style: combinedStyles,
    className: className
  }, !dot ? children : null);
};