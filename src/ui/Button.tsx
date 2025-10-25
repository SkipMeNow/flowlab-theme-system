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
  /** Mobile-specific optimizations */
  mobileOptimized?: boolean;
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
  mobileOptimized = true,
  children,
  ...props
}, ref) => {
  const { variables } = useTheme();

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: shape === 'circle' ? '0' : variables.spacing.xs,
    fontFamily: variables.typography.fontFamily,
    fontWeight: variables.typography.fontWeight.medium,
    border: '1px solid transparent',
    transition: variables.transitions.base,
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
      backgroundColor: variables.colors.button.primary.bg,
      color: variables.colors.button.primary.text,
      borderColor: variables.colors.button.primary.bg,
    },
    secondary: {
      backgroundColor: variables.colors.button.bg,
      color: variables.colors.button.text,
      borderColor: variables.colors.button.border,
    },
    outline: {
      backgroundColor: 'transparent',
      color: variables.colors.button.text,
      borderColor: variables.colors.button.border,
    },
    ghost: {
      backgroundColor: 'transparent',
      color: variables.colors.button.text,
      borderColor: 'transparent',
    },
    danger: {
      backgroundColor: variables.colors.semantic.error,
      color: variables.colors.text.inverse,
      borderColor: variables.colors.semantic.error,
    },
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: `${variables.spacing.xs} ${variables.spacing.sm}`,
      fontSize: variables.typography.fontSize.sm,
      minHeight: `calc(${variables.typography.fontSize.sm} + ${variables.spacing.md})`,
    },
    md: {
      padding: `${variables.spacing.sm} ${variables.spacing.md}`,
      fontSize: variables.typography.fontSize.base,
      minHeight: `calc(${variables.typography.fontSize.base} + ${variables.spacing.lg})`,
    },
    lg: {
      padding: `${variables.spacing.md} ${variables.spacing.lg}`,
      fontSize: variables.typography.fontSize.lg,
      minHeight: `calc(${variables.typography.fontSize.lg} + ${variables.spacing.xl})`,
    },
  };

  // Shape styles
  const shapeStyles: Record<string, React.CSSProperties> = {
    rounded: {
      borderRadius: variables.borderRadius.md,
    },
    pill: {
      borderRadius: variables.borderRadius.full,
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
          backgroundColor: variables.colors.button.primary.bgHover,
        };
      case 'secondary':
        return {
          backgroundColor: variables.colors.button.bgHover,
        };
      case 'outline':
        return {
          backgroundColor: variables.colors.button.bgHover,
        };
      case 'ghost':
        return {
          backgroundColor: variables.colors.background.hover,
        };
      case 'danger':
        return {
          backgroundColor: variables.colors.semantic.error,
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
          backgroundColor: variables.colors.button.primary.bgActive,
        };
      case 'secondary':
        return {
          backgroundColor: variables.colors.button.bgActive,
        };
      case 'outline':
        return {
          backgroundColor: variables.colors.button.bgActive,
        };
      case 'ghost':
        return {
          backgroundColor: variables.colors.background.active,
        };
      case 'danger':
        return {
          backgroundColor: variables.colors.semantic.error,
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
        className={`flowlab-button variant-${variant} ${className}`.trim()}
        onMouseEnter={(e) => {
          if (!disabled && !loading) {
            // Only apply hover styles, preserve existing styles
            const hoverStyles = getHoverStyles(variant);
            Object.assign(e.currentTarget.style, hoverStyles);
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !loading) {
            // Only restore the specific properties we changed
            const hoverStyles = getHoverStyles(variant);
            Object.keys(hoverStyles).forEach((key) => {
              const cssKey = key as keyof React.CSSProperties;
              (e.currentTarget.style as any)[cssKey] = combinedStyles[cssKey] || '';
            });
          }
        }}
        onMouseDown={(e) => {
          if (!disabled && !loading) {
            const activeStyles = getActiveStyles(variant);
            Object.assign(e.currentTarget.style, activeStyles);
          }
        }}
        onMouseUp={(e) => {
          if (!disabled && !loading) {
            const hoverStyles = getHoverStyles(variant);
            Object.assign(e.currentTarget.style, hoverStyles);
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