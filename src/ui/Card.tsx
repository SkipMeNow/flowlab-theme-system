import React, { forwardRef, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  className?: string;
  /** Enable responsive behavior (default: true) */
  responsive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({
  variant = 'elevated',
  padding = 'md',
  radius = 'md',
  shadow = 'md',
  hoverable = false,
  className = '',
  responsive = true,
  children,
  ...props
}, ref) => {
  const { variables } = useTheme();

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: variables.transitions.base,
    cursor: hoverable ? 'pointer' : 'default',
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    elevated: {
      backgroundColor: variables.colors.background.surface,
      border: 'none',
    },
    outlined: {
      backgroundColor: variables.colors.background.surface,
      border: `1px solid ${variables.colors.border.color}`,
    },
    filled: {
      backgroundColor: variables.colors.background.elevated,
      border: 'none',
    },
  };

  // Padding styles
  const paddingStyles: Record<string, React.CSSProperties> = {
    none: { padding: '0' },
    sm: { padding: variables.spacing.sm },
    md: { padding: variables.spacing.md },
    lg: { padding: variables.spacing.lg },
  };

  // Radius styles
  const radiusStyles: Record<string, React.CSSProperties> = {
    none: { borderRadius: '0' },
    sm: { borderRadius: variables.borderRadius.sm },
    md: { borderRadius: variables.borderRadius.md },
    lg: { borderRadius: variables.borderRadius.lg },
  };

  // Shadow styles
  const shadowStyles: Record<string, React.CSSProperties> = {
    none: { boxShadow: 'none' },
    sm: { boxShadow: variables.shadows.sm },
    md: { boxShadow: variables.shadows.md },
    lg: { boxShadow: variables.shadows.lg },
  };

  // Hover styles
  const hoverStyles: React.CSSProperties = hoverable ? {
    transform: 'translateY(-1px)',
    boxShadow: shadow !== 'none' ? variables.shadows.lg : variables.shadows.md,
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
  const { variables } = useTheme();
  
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: variables.spacing.md,
        paddingBottom: variables.spacing.sm,
        borderBottom: `1px solid ${variables.colors.gray[200]}`,
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
  const { variables } = useTheme();
  
  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: variables.spacing.sm,
        marginTop: variables.spacing.md,
        paddingTop: variables.spacing.sm,
        borderTop: `1px solid ${variables.colors.gray[200]}`,
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';