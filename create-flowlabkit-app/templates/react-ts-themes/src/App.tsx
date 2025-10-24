import React from 'react'
import { ThemeProvider, useTheme } from '@flowlabkit/ui/core'
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes'

function ThemeControls() {
  const { config, toggleTheme, setMode } = useTheme()
  
  return (
    <div style={{ 
      backgroundColor: 'var(--bg-surface)',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-md)',
      padding: '1.5rem',
      marginBottom: '2rem'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Theme Controls</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button 
          onClick={toggleTheme}
          style={{
            backgroundColor: 'var(--accent-500)',
            color: 'var(--text-on-accent)',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Switch to {config.mode === 'light' ? 'Dark' : 'Light'}
        </button>
        <button 
          onClick={() => setMode('light')}
          style={{
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Light Mode
        </button>
        <button 
          onClick={() => setMode('dark')}
          style={{
            backgroundColor: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Dark Mode
        </button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <span style={{ 
          backgroundColor: 'var(--info)',
          color: 'var(--text-on-accent)',
          padding: '0.25rem 0.75rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.875rem'
        }}>
          Current: {config.mode} mode
        </span>
      </div>
    </div>
  )
}

function ColorPalette() {
  const colors = [
    { name: 'Primary', bg: 'var(--accent-500)' },
    { name: 'Success', bg: 'var(--success)' },
    { name: 'Warning', bg: 'var(--warning)' },
    { name: 'Error', bg: 'var(--error)' },
    { name: 'Info', bg: 'var(--info)' }
  ]
  
  return (
    <div style={{ 
      backgroundColor: 'var(--bg-surface)',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-md)',
      padding: '1.5rem',
      marginBottom: '2rem'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Color Palette</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
        {colors.map(color => (
          <div key={color.name} style={{ textAlign: 'center' }}>
            <div style={{
              backgroundColor: color.bg,
              height: '60px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '0.5rem'
            }} />
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {color.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider 
      lightTheme={oceanTheme} 
      darkTheme={cyberpunkTheme}
      initialConfig={{ mode: 'dark', fontSize: 'medium' }}
    >
      <div style={{ 
        minHeight: '100vh',
        backgroundColor: 'var(--bg-app)',
        color: 'var(--text-primary)',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, var(--accent-500), var(--accent-400))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              🎨 FlowLabKit Themes
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)',
              marginBottom: '0'
            }}>
              React + TypeScript + Themes Only Template
            </p>
          </header>
          
          <ThemeControls />
          <ColorPalette />
          
          <div style={{ 
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>🚀 Next Steps</h3>
            <ul style={{ lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>Edit <code>src/App.tsx</code> to customize your app</li>
              <li>Use CSS variables like <code>var(--bg-app)</code>, <code>var(--text-primary)</code></li>
              <li>Try different themes from <code>@flowlabkit/ui/themes</code></li>
              <li>Add components by importing from <code>@flowlabkit/ui/components</code></li>
              <li>Check the <a href="https://skipmenow.github.io/flowlabkit-ui/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-500)' }}>documentation</a></li>
            </ul>
            
            <div style={{ 
              marginTop: '1.5rem',
              padding: '1rem',
              backgroundColor: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-sm)',
              borderLeft: '4px solid var(--accent-500)'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>💡 Tip:</strong> This template includes only the theme system. 
                Your app uses CSS variables that automatically update when themes change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App