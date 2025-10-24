import React, { forwardRef, useState, useRef, useEffect, ReactNode, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useBreakpoint, useIsMobile } from '../hooks/useResponsive';

export interface DropdownItemProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  destructive?: boolean;
  className?: string;
}

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(({
  leftIcon,
  rightIcon,
  disabled = false,
  destructive = false,
  className = '',
  children,
  ...props
}, ref) => {
  const { theme } = useTheme();

  const baseStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-xs)',
    width: '100%',
    padding: 'var(--space-xs) var(--space-sm)',
    border: 'none',
    backgroundColor: 'transparent',
    color: destructive ? 'var(--error-color)' : 'var(--text-primary)',
    fontSize: 'var(--font-size-sm)',
    fontFamily: 'var(--font-family)',
    textAlign: 'left',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'var(--transition-fast)',
    outline: 'none',
  };

  const hoverStyles: React.CSSProperties = {
    backgroundColor: destructive ? 'var(--error-light)' : 'var(--bg-hover)',
  };

  const focusStyles: React.CSSProperties = {
    backgroundColor: destructive ? 'var(--error-light)' : 'var(--bg-hover)',
    boxShadow: `inset 0 0 0 1px ${destructive ? 'var(--error-color)' : 'var(--focus-ring)'}`,
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      style={baseStyles}
      className={className}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, { ...baseStyles, ...hoverStyles });
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, baseStyles);
        }
      }}
      onFocus={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, { ...baseStyles, ...focusStyles });
        }
      }}
      onBlur={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, baseStyles);
        }
      }}
      {...props}
    >
      {leftIcon && (
        <span style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
          {leftIcon}
        </span>
      )}
      <span style={{ flex: 1 }}>{children}</span>
      {rightIcon && (
        <span style={{ display: 'flex', alignItems: 'center', fontSize: '12px', opacity: 0.7 }}>
          {rightIcon}
        </span>
      )}
    </button>
  );
});

DropdownItem.displayName = 'DropdownItem';

export interface DropdownSeparatorProps {
  className?: string;
}

export const DropdownSeparator = ({ className = '' }: DropdownSeparatorProps) => {
  return (
    <div
      className={className}
      style={{
        height: '1px',
        backgroundColor: 'var(--border-light)',
        margin: 'var(--space-xs) 0',
      }}
    />
  );
};

export interface DropdownLabelProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string;
}

export const DropdownLabel = forwardRef<HTMLDivElement, DropdownLabelProps>(({
  className = '',
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={className}
      style={{
        padding: 'var(--space-xs) var(--space-sm)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
      {...props}
    >
      {children}
    </div>
  );
});

DropdownLabel.displayName = 'DropdownLabel';

export interface DropdownContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  alignOffset?: number;
}

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(({
  className = '',
  align = 'start',
  side = 'bottom',
  sideOffset = 4,
  alignOffset = 0,
  children,
  style,
  ...props
}, ref) => {
  const { theme } = useTheme();

  const baseStyles: React.CSSProperties = {
    minWidth: '220px',
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-lg)',
    padding: 'var(--space-xs)',
    zIndex: 'var(--z-dropdown)',
    outline: 'none',
    ...style,
  };

  return (
    <div
      ref={ref}
      className={className}
      style={baseStyles}
      {...props}
    >
      {children}
    </div>
  );
});

DropdownContent.displayName = 'DropdownContent';

export interface DropdownProps {
  children: ReactNode;
  trigger: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  responsive?: boolean;
  className?: string;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({
  children,
  trigger,
  open: controlledOpen,
  onOpenChange,
  disabled = false,
  align = 'start',
  side = 'bottom',
  sideOffset = 4,
  responsive = true,
  className = '',
}, ref) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const setOpen = (open: boolean) => {
    if (disabled) return;
    
    if (isControlled) {
      onOpenChange?.(open);
    } else {
      setInternalOpen(open);
    }
  };

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Position dropdown content
  const getContentStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {
      position: 'absolute',
      zIndex: 'var(--z-dropdown)',
      minWidth: responsive && isMobile ? '100vw' : 'max-content',
      maxWidth: responsive && isMobile ? '100vw' : '400px',
    };

    // Responsive positioning for mobile
    if (responsive && isMobile) {
      // On mobile, dropdown takes full width and appears at bottom
      styles.top = 'calc(100% + 8px)';
      styles.left = '0';
      styles.right = '0';
      styles.transform = 'none';
      return styles;
    }

    // Side positioning
    switch (side) {
      case 'top':
        styles.bottom = `calc(100% + ${sideOffset}px)`;
        break;
      case 'bottom':
        styles.top = `calc(100% + ${sideOffset}px)`;
        break;
      case 'left':
        styles.right = `calc(100% + ${sideOffset}px)`;
        break;
      case 'right':
        styles.left = `calc(100% + ${sideOffset}px)`;
        break;
    }

    // Alignment
    if (side === 'top' || side === 'bottom') {
      switch (align) {
        case 'start':
          styles.left = '0';
          break;
        case 'center':
          styles.left = '50%';
          styles.transform = 'translateX(-50%)';
          break;
        case 'end':
          styles.right = '0';
          break;
      }
    } else {
      switch (align) {
        case 'start':
          styles.top = '0';
          break;
        case 'center':
          styles.top = '50%';
          styles.transform = 'translateY(-50%)';
          break;
        case 'end':
          styles.bottom = '0';
          break;
      }
    }

    return styles;
  };

  const handleTriggerClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(!isOpen);
  };

  const triggerElement = React.cloneElement(trigger as React.ReactElement, {
    ref: triggerRef,
    onClick: handleTriggerClick,
    'aria-expanded': isOpen,
    'aria-haspopup': 'menu',
    disabled,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div ref={containerRef}>
        {triggerElement}
        
        {isOpen && (
          <div style={getContentStyles()}>
            <DropdownContent
              ref={contentRef}
              align={align}
              side={side}
              sideOffset={sideOffset}
              role="menu"
              onKeyDown={(e) => {
                // Handle arrow key navigation
                if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                  e.preventDefault();
                  const items = contentRef.current?.querySelectorAll('[role="menuitem"]:not([disabled])');
                  if (!items || items.length === 0) return;

                  const currentIndex = Array.from(items).indexOf(document.activeElement as HTMLElement);
                  let nextIndex;

                  if (e.key === 'ArrowDown') {
                    nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
                  } else {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
                  }

                  (items[nextIndex] as HTMLElement).focus();
                }
              }}
            >
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === DropdownItem) {
                  return React.cloneElement(child, {
                    role: 'menuitem',
                    onClick: (e: React.MouseEvent) => {
                      child.props.onClick?.(e);
                      if (!e.defaultPrevented) {
                        setOpen(false);
                      }
                    },
                  });
                }
                return child;
              })}
            </DropdownContent>
          </div>
        )}
      </div>
    </div>
  );
});

Dropdown.displayName = 'Dropdown';