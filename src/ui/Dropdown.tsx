import React, { forwardRef, useState, useRef, useEffect, ReactNode, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../hooks/useTheme';

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
  const { variables } = useTheme();

  const baseStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: variables.spacing.xs,
    width: '100%',
    padding: `${variables.spacing.xs} ${variables.spacing.sm}`,
    border: 'none',
    backgroundColor: 'transparent',
    color: destructive ? variables.colors.semantic.error : variables.colors.text.primary,
    fontSize: variables.typography.fontSize.sm,
    fontFamily: variables.typography.fontFamily,
    textAlign: 'left',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: variables.transitions.fast,
    outline: 'none',
  };

  const hoverStyles: React.CSSProperties = {
    backgroundColor: destructive ? variables.colors.semantic.errorLight : variables.colors.background.hover,
  };

  const focusStyles: React.CSSProperties = {
    backgroundColor: destructive ? variables.colors.semantic.errorLight : variables.colors.background.hover,
    boxShadow: `inset 0 0 0 1px ${destructive ? variables.colors.semantic.error : variables.colors.accent[500]}`,
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
  const { variables } = useTheme();
  
  return (
    <div
      className={className}
      style={{
        height: '1px',
        backgroundColor: variables.colors.gray[200],
        margin: `${variables.spacing.xs} 0`,
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
  const { variables } = useTheme();
  
  return (
    <div
      ref={ref}
      className={className}
      style={{
        padding: `${variables.spacing.xs} ${variables.spacing.sm}`,
        fontSize: variables.typography.fontSize.xs,
        fontWeight: variables.typography.fontWeight.semibold,
        color: variables.colors.text.muted,
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
  const { variables } = useTheme();

  const baseStyles: React.CSSProperties = {
    minWidth: '220px',
    backgroundColor: variables.colors.background.surface,
    border: `1px solid ${variables.colors.gray[300]}`,
    borderRadius: variables.borderRadius.md,
    boxShadow: variables.shadows.lg,
    padding: variables.spacing.xs,
    zIndex: variables.zIndex.dropdown,
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
  const { variables } = useTheme();
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;
  // Removed responsive hooks
  
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

  // Handle window resize and scroll to reposition dropdown
  const [contentStyles, setContentStyles] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!isOpen) return;

    const updatePosition = () => {
      setContentStyles(getContentStyles());
    };

    // Initial positioning
    updatePosition();

    // Update position on scroll and resize
    const handlePositionUpdate = () => {
      updatePosition();
    };

    window.addEventListener('scroll', handlePositionUpdate, true);
    window.addEventListener('resize', handlePositionUpdate);

    return () => {
      window.removeEventListener('scroll', handlePositionUpdate, true);
      window.removeEventListener('resize', handlePositionUpdate);
    };
  }, [isOpen, side, align, sideOffset]);

  // Position dropdown content with fixed positioning to avoid clipping
  const getContentStyles = (): React.CSSProperties => {
    if (!triggerRef.current) {
      return {
        position: 'fixed',
        zIndex: variables.zIndex.modal, // Use modal z-index for highest priority
        minWidth: 'max-content',
        maxWidth: '400px',
        visibility: 'hidden',
      };
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const styles: React.CSSProperties = {
      position: 'fixed', // Use fixed positioning to avoid parent container clipping
      zIndex: variables.zIndex.modal, // Use highest z-index to ensure it's on top
      minWidth: Math.max(triggerRect.width, 200), // Minimum width based on trigger
      maxWidth: Math.min(400, viewportWidth - 20), // Responsive max width
      maxHeight: viewportHeight - 20, // Prevent overflow
      overflow: 'auto', // Allow scrolling if content is too tall
    };

    // Calculate position based on side preference
    let top = triggerRect.bottom + sideOffset;
    let left = triggerRect.left;

    // Handle side positioning
    switch (side) {
      case 'top':
        top = triggerRect.top - sideOffset;
        break;
      case 'bottom':
        top = triggerRect.bottom + sideOffset;
        break;
      case 'left':
        left = triggerRect.left - sideOffset;
        top = triggerRect.top;
        break;
      case 'right':
        left = triggerRect.right + sideOffset;
        top = triggerRect.top;
        break;
    }

    // Handle alignment
    if (side === 'top' || side === 'bottom') {
      switch (align) {
        case 'start':
          left = triggerRect.left;
          break;
        case 'center':
          left = triggerRect.left + triggerRect.width / 2;
          styles.transform = 'translateX(-50%)';
          break;
        case 'end':
          left = triggerRect.right;
          styles.transform = 'translateX(-100%)';
          break;
      }
    }

    // Prevent dropdown from going off-screen
    const dropdownWidth = styles.minWidth as number;
    
    // Adjust horizontal position if it would go off-screen
    if (left + dropdownWidth > viewportWidth) {
      left = viewportWidth - dropdownWidth - 10;
    }
    if (left < 10) {
      left = 10;
    }

    // Adjust vertical position if it would go off-screen
    const estimatedHeight = 300; // Estimate dropdown height
    if (top + estimatedHeight > viewportHeight && triggerRect.top > estimatedHeight) {
      // Flip to top if there's more space above
      top = triggerRect.top - sideOffset;
      if (side === 'bottom') {
        styles.transform = (styles.transform || '') + ' translateY(-100%)';
      }
    }

    if (top < 10) {
      top = 10;
    }

    styles.top = top;
    styles.left = left;

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
        
        
        {/* Render dropdown content as portal to document.body to avoid clipping */}
        {isOpen && typeof document !== 'undefined' && createPortal(
          <div style={contentStyles}>
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
          </div>,
          document.body
        )}
      </div>
    </div>
  );
});

Dropdown.displayName = 'Dropdown';