import React from 'react';
import { allThemeNames } from '../../src/themes/index';

interface ThemeSelectorProps {
  currentLightTheme: string;
  currentDarkTheme: string;
  onLightThemeChange: (themeName: string) => void;
  onDarkThemeChange: (themeName: string) => void;
  isDark: boolean;
  onToggleDark: () => void;
  fontSize: 'small' | 'medium' | 'large';
  onFontSizeChange: (fontSize: 'small' | 'medium' | 'large') => void;
  compactMode: boolean;
  onCompactModeChange: (compact: boolean) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ 
  currentLightTheme,
  currentDarkTheme,
  onLightThemeChange,
  onDarkThemeChange,
  isDark, 
  onToggleDark,
  fontSize,
  onFontSizeChange,
  compactMode,
  onCompactModeChange
}) => {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', flexWrap: 'wrap' }}>
      {/* Light Theme Dropdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
        <label style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-secondary)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          Light Theme
        </label>
        <select
          value={currentLightTheme}
          onChange={(e) => onLightThemeChange(e.target.value)}
          style={{
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-sm) var(--space-md)',
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            minWidth: '120px'
          }}
        >
          {allThemeNames.map((themeName) => (
            <option key={themeName} value={themeName}>
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Dark Theme Dropdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
        <label style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-secondary)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          Dark Theme
        </label>
        <select
          value={currentDarkTheme}
          onChange={(e) => onDarkThemeChange(e.target.value)}
          style={{
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-sm) var(--space-md)',
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            minWidth: '120px'
          }}
        >
          {allThemeNames.map((themeName) => (
            <option key={themeName} value={themeName}>
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Font Size Dropdown */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
        <label style={{
          fontSize: 'var(--font-size-xs)',
          color: 'var(--text-secondary)',
          fontWeight: 'var(--font-weight-medium)'
        }}>
          Font Size
        </label>
        <select
          value={fontSize}
          onChange={(e) => onFontSizeChange(e.target.value as 'small' | 'medium' | 'large')}
          style={{
            backgroundColor: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-sm) var(--space-md)',
            fontSize: 'var(--font-size-sm)',
            cursor: 'pointer',
            minWidth: '80px'
          }}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* Compact Mode Toggle */}
      <button
        onClick={() => onCompactModeChange(!compactMode)}
        style={{
          backgroundColor: compactMode ? 'var(--accent-500)' : 'var(--bg-surface)',
          color: compactMode ? 'var(--text-on-accent)' : 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-sm) var(--space-md)',
          fontSize: 'var(--font-size-sm)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-xs)',
          transition: 'var(--transition-base)'
        }}
      >
        📐
        {compactMode ? 'Compact' : 'Standard'}
      </button>

      {/* Dark Mode Toggle */}
      <button
        onClick={onToggleDark}
        style={{
          backgroundColor: isDark ? 'var(--accent-500)' : 'var(--bg-surface)',
          color: isDark ? 'var(--text-on-accent)' : 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-sm) var(--space-md)',
          fontSize: 'var(--font-size-sm)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-xs)',
          transition: 'var(--transition-base)'
        }}
      >
        {isDark ? '🌙' : '☀️'}
        {isDark ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export default ThemeSelector;