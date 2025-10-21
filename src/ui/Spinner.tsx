import React, { forwardRef, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';

export interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  thickness?: 'thin' | 'medium' | 'thick';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({
  size = 'md',
  variant = 'primary',
  thickness = 'medium',
  speed = 'normal',
  className = '',
  ...props
}, ref) => {
  const { theme } = useTheme();

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'inline-block',
    borderRadius: '50%',
    borderStyle: 'solid',
    animation: `spin ${speed === 'slow' ? '1.5s' : speed === 'fast' ? '0.6s' : '0.8s'} linear infinite`,
    filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.1))',
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    xs: {
      width: '12px',
      height: '12px',
    },
    sm: {
      width: '16px',
      height: '16px',
    },
    md: {
      width: '24px',
      height: '24px',
    },
    lg: {
      width: '32px',
      height: '32px',
    },
    xl: {
      width: '48px',
      height: '48px',
    },
  };

  // Thickness styles
  const thicknessStyles: Record<string, React.CSSProperties> = {
    thin: {
      borderWidth: '2px',
    },
    medium: {
      borderWidth: '3px',
    },
    thick: {
      borderWidth: '4px',
    },
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      borderColor: 'rgba(128, 128, 128, 0.2)',
      borderTopColor: 'var(--accent-500)',
      borderRightColor: 'var(--accent-500)',
    },
    secondary: {
      borderColor: 'rgba(128, 128, 128, 0.2)',
      borderTopColor: 'var(--text-secondary)',
      borderRightColor: 'var(--text-secondary)',
    },
    accent: {
      borderColor: 'rgba(128, 128, 128, 0.2)',
      borderTopColor: 'var(--accent-500)',
      borderRightColor: 'var(--accent-600)',
    },
    success: {
      borderColor: 'rgba(128, 128, 128, 0.2)',
      borderTopColor: 'var(--success)',
      borderRightColor: 'var(--success)',
    },
    warning: {
      borderColor: 'rgba(128, 128, 128, 0.2)',
      borderTopColor: 'var(--warning)',
      borderRightColor: 'var(--warning)',
    },
    error: {
      borderColor: 'rgba(128, 128, 128, 0.2)',
      borderTopColor: 'var(--error)',
      borderRightColor: 'var(--error)',
    },
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...sizeStyles[size],
    ...thicknessStyles[thickness],
    ...variantStyles[variant],
  };

  // Add keyframes for spin animation if not already present
  React.useEffect(() => {
    const styleId = 'spinner-keyframes';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={combinedStyles}
      className={className}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );
});

Spinner.displayName = 'Spinner';