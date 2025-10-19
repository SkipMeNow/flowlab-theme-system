import React from 'react';
import { ThemeProvider, useTheme } from '@flowlab/theme-system';
import { oceanTheme } from '@flowlab/theme-system/themes';

function FontSizeTest() {
  const { theme, config, setFontSize } = useTheme();

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: 'var(--font-size-2xl)' }}>
        Font Size Test - {theme.name} Theme
      </h1>
      
      <p style={{ fontSize: 'var(--font-size-base)' }}>
        Current font size: <strong>{config.fontSize}</strong>
      </p>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Font Size Controls:</h3>
        <button 
          onClick={() => setFontSize('small')}
          style={{ 
            margin: '5px',
            fontSize: 'var(--font-size-sm)',
            backgroundColor: config.fontSize === 'small' ? 'var(--accent-500)' : undefined,
            color: config.fontSize === 'small' ? 'white' : undefined
          }}
        >
          Small Font
        </button>
        <button 
          onClick={() => setFontSize('medium')}
          style={{ 
            margin: '5px',
            fontSize: 'var(--font-size-base)',
            backgroundColor: config.fontSize === 'medium' ? 'var(--accent-500)' : undefined,
            color: config.fontSize === 'medium' ? 'white' : undefined
          }}
        >
          Medium Font
        </button>
        <button 
          onClick={() => setFontSize('large')}
          style={{ 
            margin: '5px',
            fontSize: 'var(--font-size-lg)',
            backgroundColor: config.fontSize === 'large' ? 'var(--accent-500)' : undefined,
            color: config.fontSize === 'large' ? 'white' : undefined
          }}
        >
          Large Font
        </button>
      </div>

      <div style={{ border: '1px solid var(--border-color)', padding: '15px', borderRadius: 'var(--radius-md)' }}>
        <h4 style={{ fontSize: 'var(--font-size-lg)' }}>Sample Text (Different Sizes)</h4>
        <p style={{ fontSize: 'var(--font-size-xs)' }}>Extra Small Text (--font-size-xs)</p>
        <p style={{ fontSize: 'var(--font-size-sm)' }}>Small Text (--font-size-sm)</p>
        <p style={{ fontSize: 'var(--font-size-base)' }}>Base Text (--font-size-base)</p>
        <p style={{ fontSize: 'var(--font-size-lg)' }}>Large Text (--font-size-lg)</p>
        <p style={{ fontSize: 'var(--font-size-xl)' }}>Extra Large Text (--font-size-xl)</p>
      </div>

      <div style={{ marginTop: '20px', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
        <strong>CSS Variables Applied:</strong>
        <ul>
          <li>--font-size-xs: {getComputedStyle(document.documentElement).getPropertyValue('--font-size-xs')}</li>
          <li>--font-size-sm: {getComputedStyle(document.documentElement).getPropertyValue('--font-size-sm')}</li>
          <li>--font-size-base: {getComputedStyle(document.documentElement).getPropertyValue('--font-size-base')}</li>
          <li>--font-size-lg: {getComputedStyle(document.documentElement).getPropertyValue('--font-size-lg')}</li>
        </ul>
      </div>
    </div>
  );
}

export function FontSizeExample() {
  return (
    <ThemeProvider theme={oceanTheme}>
      <FontSizeTest />
    </ThemeProvider>
  );
}