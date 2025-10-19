import React, { forwardRef, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({
  variant = 'elevated',
  padding = 'md',
  radius = 'md',
  shadow = 'md',
  hoverable = false,
  className = '',
  children,
  ...props
}, ref) => {
  const { theme } = useTheme();

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'var(--transition-base)',
    cursor: hoverable ? 'pointer' : 'default',
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    elevated: {
      backgroundColor: 'var(--bg-surface)',
      border: 'none',
    },
    outlined: {
      backgroundColor: 'var(--bg-surface)',
      border: '1px solid var(--border-color)',
    },
    filled: {
      backgroundColor: 'var(--bg-elevated)',
      border: 'none',
    },
  };

  // Padding styles
  const paddingStyles: Record<string, React.CSSProperties> = {
    none: { padding: '0' },
    sm: { padding: 'var(--space-sm)' },
    md: { padding: 'var(--space-md)' },
    lg: { padding: 'var(--space-lg)' },
  };

  // Radius styles
  const radiusStyles: Record<string, React.CSSProperties> = {
    none: { borderRadius: '0' },
    sm: { borderRadius: 'var(--radius-sm)' },
    md: { borderRadius: 'var(--radius-md)' },
    lg: { borderRadius: 'var(--radius-lg)' },
  };

  // Shadow styles
  const shadowStyles: Record<string, React.CSSProperties> = {
    none: { boxShadow: 'none' },
    sm: { boxShadow: 'var(--shadow-sm)' },
    md: { boxShadow: 'var(--shadow-md)' },
    lg: { boxShadow: 'var(--shadow-lg)' },
  };

  // Hover styles
  const hoverStyles: React.CSSProperties = hoverable ? {
    transform: 'translateY(-1px)',
    boxShadow: shadow !== 'none' ? 'var(--shadow-lg)' : 'var(--shadow-md)',
  } : {};

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...paddingStyles[padding],
    ...radiusStyles[radius],
    ...shadowStyles[shadow],
  };

  return (
    <div
      ref={ref}
      style={combinedStyles}
      className={className}
      onMouseEnter={(e) => {
        if (hoverable) {
          Object.assign(e.currentTarget.style, {
            ...combinedStyles,
            ...hoverStyles,
          });
        }
      }}
      onMouseLeave={(e) => {
        if (hoverable) {
          Object.assign(e.currentTarget.style, combinedStyles);
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Card subcomponents
export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({
  className = '',
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'var(--space-md)',
        paddingBottom: 'var(--space-sm)',
        borderBottom: '1px solid var(--border-light)',
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

export interface CardBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string;
}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(({
  className = '',
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      style={{
        flex: 1,
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
});

CardBody.displayName = 'CardBody';

export interface CardFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({
  className = '',
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 'var(--space-sm)',
        marginTop: 'var(--space-md)',
        paddingTop: 'var(--space-sm)',
        borderTop: '1px solid var(--border-light)',
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';