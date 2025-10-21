import React, { forwardRef, ImgHTMLAttributes, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Spinner } from './Spinner';

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'className'> {
  variant?: 'default' | 'bordered' | 'shadow' | 'elevated' | 'hover-lift';
  shape?: 'square' | 'rounded' | 'circle' | 'pill';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  fit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  loading?: 'lazy' | 'eager';
  showSpinner?: boolean;
  fallback?: React.ReactNode;
  className?: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(({
  variant = 'default',
  shape = 'square',
  size = 'md',
  fit = 'cover',
  loading = 'lazy',
  showSpinner = true,
  fallback,
  className = '',
  src,
  alt,
  onLoad,
  onError,
  ...props
}, ref) => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'block',
    objectFit: fit,
    transition: 'var(--transition-base)',
    backgroundColor: 'var(--bg-surface)',
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    xs: {
      width: '32px',
      height: '32px',
    },
    sm: {
      width: '48px',
      height: '48px',
    },
    md: {
      width: '96px',
      height: '96px',
    },
    lg: {
      width: '128px',
      height: '128px',
    },
    xl: {
      width: '192px',
      height: '192px',
    },
    full: {
      width: '100%',
      height: 'auto',
    },
  };

  // Shape styles
  const shapeStyles: Record<string, React.CSSProperties> = {
    square: {
      borderRadius: '0',
    },
    rounded: {
      borderRadius: 'var(--radius-lg)',
    },
    circle: {
      borderRadius: '50%',
      aspectRatio: '1',
    },
    pill: {
      borderRadius: 'var(--radius-full)',
      aspectRatio: '2/1',
    },
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      border: '1px solid transparent',
    },
    bordered: {
      border: '3px solid var(--accent-500)',
      padding: '2px',
    },
    shadow: {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      border: '1px solid var(--border-color)',
    },
    elevated: {
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)',
      transform: 'translateY(-4px)',
      border: '1px solid var(--border-color)',
    },
    'hover-lift': {
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid var(--border-color)',
      transform: 'translateY(0px) scale(1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...sizeStyles[size],
    ...shapeStyles[shape],
    ...variantStyles[variant],
  };

  // Container styles for loading and error states
  const containerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    ...sizeStyles[size],
    ...shapeStyles[shape],
  };

  // Loading overlay styles
  const loadingOverlayStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-surface)',
    borderRadius: shapeStyles[shape].borderRadius,
    opacity: isLoading ? 1 : 0,
    pointerEvents: isLoading ? 'auto' : 'none',
    transition: 'var(--transition-base)',
  };

  // Error fallback styles
  const errorStyles: React.CSSProperties = {
    ...containerStyles,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-surface)',
    border: '2px dashed var(--border-color)',
    color: 'var(--text-secondary)',
    fontSize: 'var(--font-size-sm)',
    textAlign: 'center',
    padding: 'var(--space-sm)',
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(true);
    onError?.(e);
  };

  // If there's an error and we have a fallback, show it
  if (hasError && fallback) {
    return (
      <div style={errorStyles} className={className}>
        {fallback}
      </div>
    );
  }

  // If there's an error and no fallback, show default error message
  if (hasError) {
    return (
      <div style={errorStyles} className={className}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <div style={{ marginTop: '4px', fontSize: '10px' }}>
          Failed to load
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyles} className={className}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={loading}
        style={combinedStyles}
        onLoad={handleLoad}
        onError={handleError}
        onMouseEnter={(e) => {
          if (variant === 'hover-lift') {
            Object.assign(e.currentTarget.style, {
              transform: 'translateY(-8px) scale(1.05)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
              borderColor: 'var(--accent-500)',
            });
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'hover-lift') {
            Object.assign(e.currentTarget.style, {
              transform: 'translateY(0px) scale(1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              borderColor: 'var(--border-color)',
            });
          }
        }}
        {...props}
      />
      
      {/* Loading overlay */}
      {showSpinner && (
        <div style={loadingOverlayStyles}>
          <Spinner size="sm" variant="secondary" />
        </div>
      )}
    </div>
  );
});

Image.displayName = 'Image';