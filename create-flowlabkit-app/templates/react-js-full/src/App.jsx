import React, { useState } from 'react'
import { 
  ThemeProvider, 
  Button, 
  Card, 
  CardHeader, 
  CardBody,
  Input,
  Badge,
  useTheme
} from '@flowlabkit/ui'
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes'

function ThemeControls() {
  const { config, toggleTheme, setMode } = useTheme()
  
  return (
    <Card>
      <CardHeader>
        <h3>Theme Controls</h3>
      </CardHeader>
      <CardBody>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button onClick={toggleTheme}>
            Switch to {config.mode === 'light' ? 'Dark' : 'Light'}
          </Button>
          <Button variant="outline" onClick={() => setMode('light')}>
            Light Mode
          </Button>
          <Button variant="outline" onClick={() => setMode('dark')}>
            Dark Mode
          </Button>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <Badge variant="info">
            Current: {config.mode} mode
          </Badge>
        </div>
      </CardBody>
    </Card>
  )
}

function ComponentShowcase() {
  const [inputValue, setInputValue] = useState('')
  
  return (
    <Card>
      <CardHeader>
        <h3>Component Showcase</h3>
      </CardHeader>
      <CardBody>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <Input
              placeholder="Try typing something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
          </div>
          
          {inputValue && (
            <Card style={{ backgroundColor: 'var(--bg-elevated)' }}>
              <CardBody>
                <p>You typed: <strong>{inputValue}</strong></p>
              </CardBody>
            </Card>
          )}
        </div>
      </CardBody>
    </Card>
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
          <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, var(--accent-500), var(--accent-400))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
               FlowLabKit UI
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)',
              marginBottom: '0'
            }}>
              React + JavaScript + Components Template
            </p>
          </header>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <ThemeControls />
            <ComponentShowcase />
            
            <Card>
              <CardHeader>
                <h3> Next Steps</h3>
              </CardHeader>
              <CardBody>
                <ul style={{ lineHeight: '1.6' }}>
                  <li>Edit <code>src/App.jsx</code> to customize your app</li>
                  <li>Import more components from <code>@flowlabkit/ui</code></li>
                  <li>Try different themes from <code>@flowlabkit/ui/themes</code></li>
                  <li>Check the <a href="https://skipmenow.github.io/flowlabkit-ui/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-500)' }}>documentation</a></li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App