import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill' | 'square' | 'circle';
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  children,
  ...props
}, ref) => {
  const { theme } = useTheme();

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: shape === 'circle' ? '0' : 'var(--space-xs)',
    fontFamily: 'var(--font-family)',
    fontWeight: 'var(--font-weight-medium)',
    border: '1px solid transparent',
    transition: 'var(--transition-base)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    whiteSpace: shape === 'circle' ? 'nowrap' : 'normal',
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-text)',
      borderColor: 'var(--btn-primary-bg)',
    },
    secondary: {
      backgroundColor: 'var(--btn-bg)',
      color: 'var(--btn-text)',
      borderColor: 'var(--btn-border)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--btn-text)',
      borderColor: 'var(--btn-border)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--btn-text)',
      borderColor: 'transparent',
    },
    danger: {
      backgroundColor: 'var(--error-color)',
      color: 'white',
      borderColor: 'var(--error-color)',
    },
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: 'var(--space-xs) var(--space-sm)',
      fontSize: 'var(--font-size-sm)',
      minHeight: 'calc(var(--font-size-sm) + var(--space-md))',
    },
    md: {
      padding: 'var(--space-sm) var(--space-md)',
      fontSize: 'var(--font-size-base)',
      minHeight: 'calc(var(--font-size-base) + var(--space-lg))',
    },
    lg: {
      padding: 'var(--space-md) var(--space-lg)',
      fontSize: 'var(--font-size-lg)',
      minHeight: 'calc(var(--font-size-lg) + var(--space-xl))',
    },
  };

  // Shape styles
  const shapeStyles: Record<string, React.CSSProperties> = {
    rounded: {
      borderRadius: 'var(--radius-md)',
    },
    pill: {
      borderRadius: '9999px',
    },
    square: {
      borderRadius: '0',
    },
    circle: {
      borderRadius: '50%',
      aspectRatio: '1',
      padding: '0',
      minWidth: shape === 'circle' && size === 'sm' ? '2rem' : 
                shape === 'circle' && size === 'md' ? '2.5rem' : 
                shape === 'circle' && size === 'lg' ? '3rem' : 'auto',
      width: shape === 'circle' && size === 'sm' ? '2rem' : 
             shape === 'circle' && size === 'md' ? '2.5rem' : 
             shape === 'circle' && size === 'lg' ? '3rem' : 'auto',
      height: shape === 'circle' && size === 'sm' ? '2rem' : 
              shape === 'circle' && size === 'md' ? '2.5rem' : 
              shape === 'circle' && size === 'lg' ? '3rem' : 'auto',
    },
  };

  // Hover styles
  const getHoverStyles = (variant: string): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--btn-primary-bg-hover)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--btn-bg-hover)',
        };
      case 'outline':
        return {
          backgroundColor: 'var(--btn-bg-hover)',
        };
      case 'ghost':
        return {
          backgroundColor: 'var(--bg-hover)',
        };
      case 'danger':
        return {
          backgroundColor: 'var(--error-color)',
          filter: 'brightness(0.9)',
        };
      default:
        return {};
    }
  };

  // Active styles
  const getActiveStyles = (variant: string): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--btn-primary-bg-active)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--btn-bg-active)',
        };
      case 'outline':
        return {
          backgroundColor: 'var(--btn-bg-active)',
        };
      case 'ghost':
        return {
          backgroundColor: 'var(--bg-active)',
        };
      case 'danger':
        return {
          backgroundColor: 'var(--error-color)',
          filter: 'brightness(0.8)',
        };
      default:
        return {};
    }
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...shapeStyles[shape],
  };

  // Loading spinner
  const LoadingSpinner = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        animation: 'spin 1s linear infinite',
      }}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2 A10 10 0 0 1 22 12" />
    </svg>
  );

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <button
        ref={ref}
        disabled={disabled || loading}
        style={combinedStyles}
        className={className}
        onMouseEnter={(e) => {
          if (!disabled && !loading) {
            Object.assign(e.currentTarget.style, {
              ...combinedStyles,
              ...getHoverStyles(variant),
            });
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !loading) {
            Object.assign(e.currentTarget.style, combinedStyles);
          }
        }}
        onMouseDown={(e) => {
          if (!disabled && !loading) {
            Object.assign(e.currentTarget.style, {
              ...combinedStyles,
              ...getActiveStyles(variant),
            });
          }
        }}
        onMouseUp={(e) => {
          if (!disabled && !loading) {
            Object.assign(e.currentTarget.style, {
              ...combinedStyles,
              ...getHoverStyles(variant),
            });
          }
        }}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {leftIcon && !loading && leftIcon}
        {children}
        {rightIcon && !loading && rightIcon}
      </button>
    </>
  );
});

Button.displayName = 'Button';