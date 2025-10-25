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

  // Handle smooth positioning without visible snapping
  const [contentStyles, setContentStyles] = useState<React.CSSProperties>({});
  const positionUpdateTimeoutRef = useRef<NodeJS.Timeout>();

  // Inject CSS animation keyframes when component mounts
  useEffect(() => {
    const styleId = 'flowlab-dropdown-animations';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const updatePosition = () => {
      const newStyles = getContentStyles();
      setContentStyles(newStyles);
    };

    // Initial positioning
    updatePosition();

    // Significantly reduce position updates to minimize visual jumping
    const handlePositionUpdate = () => {
      if (positionUpdateTimeoutRef.current) {
        clearTimeout(positionUpdateTimeoutRef.current);
      }
      
      // Only update position after a longer delay to reduce snapping
      positionUpdateTimeoutRef.current = setTimeout(() => {
        updatePosition();
      }, 100); // Increased delay to reduce repositioning frequency
    };

    // Use passive listeners for better performance and less frequent updates
    window.addEventListener('scroll', handlePositionUpdate, { passive: true, capture: true });
    window.addEventListener('resize', handlePositionUpdate, { passive: true });

    return () => {
      if (positionUpdateTimeoutRef.current) {
        clearTimeout(positionUpdateTimeoutRef.current);
      }
      window.removeEventListener('scroll', handlePositionUpdate, true);
      window.removeEventListener('resize', handlePositionUpdate);
    };
  }, [isOpen, side, align, sideOffset]);

  // Position dropdown content with smooth fixed positioning
  const getContentStyles = (): React.CSSProperties => {
    if (!triggerRef.current) {
      return {
        position: 'fixed',
        zIndex: variables.zIndex.modal,
        minWidth: 'max-content',
        maxWidth: '400px',
        visibility: 'hidden',
        opacity: 0,
      };
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const styles: React.CSSProperties = {
      position: 'fixed',
      zIndex: variables.zIndex.modal,
      minWidth: Math.max(triggerRect.width, 200),
      maxWidth: Math.min(400, viewportWidth - 20),
      maxHeight: Math.min(300, viewportHeight - 40), // More conservative max height
      overflow: 'auto',
      opacity: 1,
      // Add smooth transition for repositioning
      transition: 'opacity 150ms ease-in-out',
      // Prevent text selection during positioning
      userSelect: 'none',
      pointerEvents: 'auto',
    };

    // Calculate ideal position based on side preference
    let top = triggerRect.bottom + sideOffset;
    let left = triggerRect.left;

    // Handle side positioning with less aggressive repositioning
    switch (side) {
      case 'top':
        top = triggerRect.top - sideOffset - 200; // Estimate dropdown height
        break;
      case 'bottom':
        top = triggerRect.bottom + sideOffset;
        break;
      case 'left':
        left = triggerRect.left - 220; // Estimate dropdown width
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

    // Only adjust position if absolutely necessary to prevent off-screen
    const margin = 8;
    const estimatedWidth = 220;
    
    // Gentle horizontal bounds checking
    if (left + estimatedWidth > viewportWidth - margin) {
      left = Math.max(margin, viewportWidth - estimatedWidth - margin);
    }
    if (left < margin) {
      left = margin;
    }

    // Gentle vertical bounds checking
    const estimatedHeight = 200;
    if (top + estimatedHeight > viewportHeight - margin && triggerRect.top > estimatedHeight + margin) {
      // Only flip if there's significantly more space above
      top = triggerRect.top - estimatedHeight - sideOffset;
    }
    
    // Ensure minimum distance from viewport edges
    if (top < margin) {
      top = margin;
    }
    if (top + estimatedHeight > viewportHeight - margin) {
      top = Math.max(margin, viewportHeight - estimatedHeight - margin);
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
        
        
        {/* Render dropdown content as portal with smooth positioning */}
        {isOpen && typeof document !== 'undefined' && createPortal(
          <div 
            style={{
              ...contentStyles,
              // Add CSS animation through style object
              animationName: 'fadeIn',
              animationDuration: '150ms',
              animationTimingFunction: 'ease-out',
              animationFillMode: 'both',
            }}
            onScroll={(e) => {
              // Prevent event bubbling during scroll
              e.stopPropagation();
            }}
          >
            <DropdownContent
              ref={contentRef}
              align={align}
              side={side}
              sideOffset={sideOffset}
              role="menu"
              style={{
                // Prevent layout shifts during repositioning
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                // Ensure content doesn't flash during position updates
                contain: 'layout style paint',
              }}
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