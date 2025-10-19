import React, { forwardRef, AnchorHTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  variant?: 'primary' | 'secondary' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  underline?: 'always' | 'hover' | 'never';
  external?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
  variant = 'primary',
  size = 'md',
  underline = 'hover',
  external = false,
  disabled = false,
  className = '',
  children,
  href,
  target,
  rel,
  ...props
}, ref) => {
  const { theme } = useTheme();

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-xs)',
    fontFamily: 'var(--font-family)',
    fontWeight: 'var(--font-weight-medium)',
    textDecoration: underline === 'always' ? 'underline' : 'none',
    transition: 'var(--transition-base)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      color: 'var(--text-primary)',
    },
    secondary: {
      color: 'var(--text-secondary)',
    },
    accent: {
      color: 'var(--accent-500)',
    },
    muted: {
      color: 'var(--text-muted)',
    },
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      fontSize: 'var(--font-size-sm)',
    },
    md: {
      fontSize: 'var(--font-size-base)',
    },
    lg: {
      fontSize: 'var(--font-size-lg)',
    },
  };

  // Hover styles
  const hoverStyles: React.CSSProperties = {
    textDecoration: underline === 'hover' ? 'underline' : undefined,
    color: variant === 'accent' ? 'var(--accent-600)' : 'var(--text-accent)',
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  // Handle external links
  const linkTarget = external ? '_blank' : target;
  const linkRel = external ? 'noopener noreferrer' : rel;

  return (
    <a
      ref={ref}
      href={disabled ? undefined : href}
      target={linkTarget}
      rel={linkRel}
      style={combinedStyles}
      className={className}
      onMouseEnter={(e) => {
        if (!disabled && underline === 'hover') {
          Object.assign(e.currentTarget.style, hoverStyles);
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, combinedStyles);
        }
      }}
      {...props}
    >
      {children}
      {external && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginLeft: '2px' }}
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15,3 21,3 21,9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </a>
  );
});

Link.displayName = 'Link';