import React, { forwardRef, HTMLAttributes } from 'react';
import { useTheme } from '../hooks/useTheme';

export interface LoadingIndicatorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  type?: 'dots' | 'pulse' | 'wave' | 'bars' | 'bounce';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
  speed?: 'slow' | 'normal' | 'fast';
  text?: string;
  textPosition?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

export const LoadingIndicator = forwardRef<HTMLDivElement, LoadingIndicatorProps>(({
  type = 'dots',
  size = 'md',
  variant = 'primary',
  speed = 'normal',
  text,
  textPosition = 'right',
  className = '',
  ...props
}, ref) => {
  const { theme } = useTheme();

  // Animation timing based on speed
  const animationDuration = speed === 'slow' ? '1.5s' : speed === 'fast' ? '0.8s' : '1.2s';

  // Size configurations
  const sizeConfig = {
    xs: { dotSize: '4px', gap: '2px', fontSize: '12px' },
    sm: { dotSize: '6px', gap: '3px', fontSize: '14px' },
    md: { dotSize: '8px', gap: '4px', fontSize: '16px' },
    lg: { dotSize: '10px', gap: '5px', fontSize: '18px' },
    xl: { dotSize: '12px', gap: '6px', fontSize: '20px' },
  };

  const config = sizeConfig[size];

  // Color variants
  const colorVariants = {
    primary: 'var(--text-primary)',
    secondary: 'var(--text-secondary)',
    accent: 'var(--accent-500)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    error: 'var(--error)',
  };

  const color = colorVariants[variant];

  // Base container styles
  const containerStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'var(--font-family)',
    fontSize: config.fontSize,
    color: color,
  };

  // Text styles
  const textStyles: React.CSSProperties = {
    color: color,
    fontSize: config.fontSize,
    fontWeight: 'var(--font-weight-medium)',
  };

  // Layout based on text position
  const getLayout = () => {
    if (!text) return { flexDirection: 'row' as const };
    
    switch (textPosition) {
      case 'left': return { flexDirection: 'row' as const };
      case 'right': return { flexDirection: 'row' as const };
      case 'top': return { flexDirection: 'column' as const, alignItems: 'center' as const };
      case 'bottom': return { flexDirection: 'column' as const, alignItems: 'center' as const };
      default: return { flexDirection: 'row' as const };
    }
  };

  // Add keyframes for animations
  React.useEffect(() => {
    const styleId = 'loading-indicator-keyframes';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes bouncing-dots {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes wave {
          0%, 40%, 100% { transform: scaleY(0.4); }
          20% { transform: scaleY(1); }
        }
        @keyframes bars {
          0%, 40%, 100% { transform: scaleY(0.4); opacity: 0.5; }
          20% { transform: scaleY(1); opacity: 1; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Render different loading types
  const renderLoadingAnimation = () => {
    const dotStyles: React.CSSProperties = {
      width: config.dotSize,
      height: config.dotSize,
      backgroundColor: color,
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: config.gap,
    };

    const barStyles: React.CSSProperties = {
      width: config.dotSize,
      height: `calc(${config.dotSize} * 2)`,
      backgroundColor: color,
      borderRadius: config.dotSize,
      display: 'inline-block',
      marginRight: config.gap,
    };

    switch (type) {
      case 'dots':
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: config.gap }}>
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                style={{
                  ...dotStyles,
                  animation: `bouncing-dots ${animationDuration} infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: config.gap }}>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                style={{
                  ...dotStyles,
                  animation: `pulse ${animationDuration} infinite`,
                  animationDelay: `${index * 0.15}s`,
                }}
              />
            ))}
          </div>
        );

      case 'wave':
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: config.gap }}>
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                style={{
                  ...barStyles,
                  animation: `wave ${animationDuration} infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            ))}
          </div>
        );

      case 'bars':
        return (
          <div style={{ display: 'flex', alignItems: 'end', gap: config.gap }}>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                style={{
                  width: config.dotSize,
                  height: `calc(${config.dotSize} * ${1.5 + Math.sin(index) * 0.5})`,
                  backgroundColor: color,
                  borderRadius: `${config.dotSize} ${config.dotSize} 0 0`,
                  animation: `bars ${animationDuration} infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            ))}
          </div>
        );

      case 'bounce':
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: config.gap }}>
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                style={{
                  ...dotStyles,
                  animation: `bounce ${animationDuration} infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            ))}
          </div>
        );

      default:
        return renderLoadingAnimation();
    }
  };

  // Render text and animation based on position
  const renderContent = () => {
    const animation = renderLoadingAnimation();
    
    if (!text) return animation;

    const textElement = <span style={textStyles}>{text}</span>;

    switch (textPosition) {
      case 'left':
        return (
          <>
            {textElement}
            {animation}
          </>
        );
      case 'right':
        return (
          <>
            {animation}
            {textElement}
          </>
        );
      case 'top':
        return (
          <>
            {textElement}
            {animation}
          </>
        );
      case 'bottom':
        return (
          <>
            {animation}
            {textElement}
          </>
        );
      default:
        return (
          <>
            {animation}
            {textElement}
          </>
        );
    }
  };

  return (
    <div
      ref={ref}
      style={{
        ...containerStyles,
        ...getLayout(),
      }}
      className={className}
      role="status"
      aria-label={text ? `${text}...` : "Loading"}
      {...props}
    >
      {renderContent()}
    </div>
  );
});

LoadingIndicator.displayName = 'LoadingIndicator';