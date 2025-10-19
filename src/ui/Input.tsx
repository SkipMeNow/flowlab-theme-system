import React, { forwardRef, InputHTMLAttributes, useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'className' | 'type'> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'flushed';
  type?: 'default' | 'email' | 'password' | 'text' | 'number' | 'tel' | 'url' | 'search';
  isInvalid?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
  helperText?: string;
  errorMessage?: string;
  className?: string;
  // Validation options
  enableValidation?: boolean;
  showValidationIcon?: boolean;
  // Password options
  showPasswordToggle?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  size = 'md',
  variant = 'default',
  type = 'default',
  isInvalid = false,
  disabled = false,
  leftIcon,
  rightIcon,
  label,
  helperText,
  errorMessage,
  className = '',
  id,
  enableValidation = true,
  showValidationIcon = true,
  showPasswordToggle = true,
  onFocus,
  onBlur,
  onChange,
  value,
  ...props
}, ref) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  
  const hasError = isInvalid || !!errorMessage || !!validationError;
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  // Validate initial value on mount
  useEffect(() => {
    if (enableValidation && value) {
      let validation = { isValid: true, error: '' };
      
      if (type === 'email') {
        validation = validateEmail(value.toString());
      } else if (type === 'password') {
        validation = validatePassword(value.toString());
      }
      
      setIsValid(validation.isValid);
      if (!validation.isValid) {
        setValidationError(validation.error);
      }
    }
  }, []); // Run only on mount

  // Validation functions
  const validateEmail = (email: string): { isValid: boolean; error: string } => {
    if (!email) return { isValid: false, error: '' };
    // More comprehensive email regex that allows common domains
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|mil|int|co|io|me|info|biz|name|museum|coop|aero|[a-z]{2,3})$/i;
    if (!emailRegex.test(email)) {
      return { isValid: false, error: 'Please enter a valid email address' };
    }
    return { isValid: true, error: '' };
  };

  const validatePassword = (password: string): { isValid: boolean; error: string } => {
    if (!password) return { isValid: false, error: '' };
    if (password.length < 6) {
      return { isValid: false, error: 'Password must be at least 6 characters' };
    }
    if (password.length < 8) {
      return { isValid: true, error: '' }; // Weak but valid
    }
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (hasUpper && hasLower && hasNumber && hasSpecial) {
      return { isValid: true, error: '' }; // Strong
    }
    return { isValid: true, error: '' }; // Acceptable
  };

  // Icons
  const EyeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const EyeOffIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );

  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );

  const XIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  const EmailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const LockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <circle cx="12" cy="16" r="1" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'var(--font-family)',
    transition: 'var(--transition-base)',
    position: 'relative',
  };

  // Container styles
  const getContainerStyles = (): React.CSSProperties => {
    let borderColor = 'var(--input-border)';
    let boxShadow = 'none';

    if (hasError) {
      borderColor = 'var(--error-color)';
      if (isFocused) {
        boxShadow = `0 0 0 2px var(--error-light)`;
      }
    } else if (isFocused) {
      borderColor = 'var(--input-border-focus)';
      boxShadow = `0 0 0 2px var(--focus-ring)`;
    } else if (isHovered && !disabled) {
      borderColor = 'var(--input-border-hover)';
    }

    return {
      display: 'flex',
      alignItems: 'center',
      borderRadius: variant === 'flushed' ? '0' : 'var(--radius-md)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor,
      backgroundColor: variant === 'filled' ? 'var(--bg-elevated)' : 'var(--input-bg)',
      borderBottomWidth: variant === 'flushed' ? '2px' : '1px',
      borderTopWidth: variant === 'flushed' ? '0' : '1px',
      borderLeftWidth: variant === 'flushed' ? '0' : '1px',
      borderRightWidth: variant === 'flushed' ? '0' : '1px',
      paddingLeft: leftIcon ? 'var(--space-xs)' : 'var(--space-sm)',
      paddingRight: rightIcon ? 'var(--space-xs)' : 'var(--space-sm)',
      paddingTop: 'var(--space-xs)',
      paddingBottom: 'var(--space-xs)',
      boxShadow,
      transition: 'var(--transition-base)',
      ...sizeStyles[size],
    };
  };

  // Input styles
  const inputStyles: React.CSSProperties = {
    flex: 1,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    color: 'var(--input-text)',
    fontSize: 'var(--font-size-base)',
    fontFamily: 'inherit',
    padding: '0',
    margin: leftIcon || rightIcon ? '0 var(--space-xs)' : '0',
  };

  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      minHeight: 'calc(var(--font-size-sm) + var(--space-md))',
      fontSize: 'var(--font-size-sm)',
    },
    md: {
      minHeight: 'calc(var(--font-size-base) + var(--space-lg))',
      fontSize: 'var(--font-size-base)',
    },
    lg: {
      minHeight: 'calc(var(--font-size-lg) + var(--space-xl))',
      fontSize: 'var(--font-size-lg)',
    },
  };

  // Determine actual HTML input type
  const getInputType = () => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    if (type === 'email') return 'email';
    if (type === 'default') return 'text';
    return type;
  };

  // Get default icons based on type
  const getDefaultLeftIcon = () => {
    if (leftIcon) return leftIcon;
    if (type === 'email') return <EmailIcon />;
    if (type === 'password') return <LockIcon />;
    return null;
  };

  // Get default placeholder based on type
  const getDefaultPlaceholder = () => {
    if (type === 'email') return 'Enter your email address';
    if (type === 'password') return 'Enter your password';
    return '';
  };

  // Password strength component
  const PasswordStrengthIndicator = ({ password }: { password: string }) => {
    const getStrength = (pwd: string) => {
      if (pwd.length < 6) return { level: 0, text: 'Too short', color: 'var(--error-color)' };
      
      let score = 0;
      if (pwd.length >= 8) score++;
      if (/[A-Z]/.test(pwd)) score++;
      if (/[a-z]/.test(pwd)) score++;
      if (/\d/.test(pwd)) score++;
      if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) score++;
      
      if (score < 2) return { level: 1, text: 'Weak', color: 'var(--error-color)' };
      if (score < 4) return { level: 2, text: 'Fair', color: 'var(--warning-color)' };
      if (score < 5) return { level: 3, text: 'Good', color: 'var(--info)' };
      return { level: 4, text: 'Strong', color: 'var(--success-color)' };
    };

    const strength = getStrength(password);
    
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
        <div style={{ flex: 1, height: '4px', backgroundColor: 'var(--gray-200)', borderRadius: '2px', overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${(strength.level / 4) * 100}%`,
              backgroundColor: strength.color,
              transition: 'var(--transition-base)',
            }}
          />
        </div>
        <span style={{ 
          color: strength.color, 
          minWidth: '60px', 
          fontSize: 'var(--font-size-xs)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          {strength.text}
        </span>
      </div>
    );
  };

  // Get validation/toggle icons for right side
  const getRightIcon = () => {
    const icons = [];
    
    // Validation icon - show when validation is enabled and we have a value
    if (enableValidation && showValidationIcon && value) {
      if (isValid === true) {
        icons.push(
          <div key="validation" style={{ color: '#10b981' }}> {/* hardcoded green */}
            <CheckIcon />
          </div>
        );
      } else if (isValid === false) {
        icons.push(
          <div key="validation" style={{ color: '#ef4444' }}> {/* hardcoded red */}
            <XIcon />
          </div>
        );
      }
    }

    // Password toggle
    if (type === 'password' && showPasswordToggle) {
      icons.push(
        <button
          key="password-toggle"
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'flex',
            alignItems: 'center',
            color: 'var(--text-muted)',
            borderRadius: 'var(--radius-sm)',
          }}
          tabIndex={-1}
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      );
    }

    // Custom right icon
    if (rightIcon) {
      icons.push(<div key="custom">{rightIcon}</div>);
    }

    return icons.length > 0 ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
        {icons}
      </div>
    ) : null;
  };

  // Event handlers
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    
    // For email fields, show validation error immediately on focus if field has content
    if (enableValidation && type === 'email' && value) {
      const validation = validateEmail(value.toString());
      setIsValid(validation.isValid);
      if (!validation.isValid) {
        setValidationError(validation.error);
      }
    }
    
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    
    // Validate on blur if validation is enabled
    if (enableValidation && value) {
      let validation = { isValid: true, error: '' };
      
      if (type === 'email') {
        validation = validateEmail(value.toString());
      } else if (type === 'password') {
        validation = validatePassword(value.toString());
      }
      
      setIsValid(validation.isValid);
      setValidationError(validation.error);
    }
    
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Real-time validation for better UX
    if (enableValidation) {
      if (newValue) {
        let validation = { isValid: true, error: '' };
        
        if (type === 'email') {
          validation = validateEmail(newValue);
          setIsValid(validation.isValid);
          // Show error immediately for email until it contains @ and proper domain
          if (!validation.isValid) {
            setValidationError(validation.error);
          } else {
            setValidationError('');
          }
        } else if (type === 'password') {
          validation = validatePassword(newValue);
          setIsValid(validation.isValid);
          // Show error for very short passwords
          if (!validation.isValid) {
            setValidationError(validation.error);
          } else {
            setValidationError('');
          }
        } else {
          // For other types, just mark as valid if there's content
          setIsValid(true);
          setValidationError('');
        }
      } else {
        // Clear validation when field is empty
        setIsValid(null);
        setValidationError('');
      }
    }
    
    onChange?.(e);
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            display: 'block',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {label}
        </label>
      )}
      
      <div
        style={getContainerStyles()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {getDefaultLeftIcon() && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--text-muted)',
              fontSize: sizeStyles[size].fontSize,
            }}
          >
            {getDefaultLeftIcon()}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          type={getInputType()}
          disabled={disabled}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          style={{
            ...inputStyles,
            ...sizeStyles[size],
            opacity: disabled ? 0.6 : 1,
            cursor: disabled ? 'not-allowed' : 'text',
          }}
          placeholder={props.placeholder || getDefaultPlaceholder()}
          {...props}
        />
        
        {getRightIcon() && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--text-muted)',
              fontSize: sizeStyles[size].fontSize,
            }}
          >
            {getRightIcon()}
          </div>
        )}
      </div>

      {(helperText || errorMessage || validationError) && (
        <div
          style={{
            marginTop: 'var(--space-xs)',
            fontSize: 'var(--font-size-sm)',
            color: hasError ? 'var(--error-color)' : 'var(--text-secondary)',
          }}
        >
          {errorMessage || validationError || helperText}
        </div>
      )}

      {/* Password strength indicator */}
      {type === 'password' && value && enableValidation && (
        <div style={{ marginTop: 'var(--space-xs)' }}>
          <PasswordStrengthIndicator password={value.toString()} />
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';