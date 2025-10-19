import React from 'react';
import { 
  ThemeProvider, 
  useTheme,
  Button, 
  Link, 
  Input, 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Badge,
  Text
} from '@flowlab/theme-system';
import { oceanTheme } from '@flowlab/theme-system/themes';

function SizeSystemTest() {
  const { theme, config, setFontSize, setCompactMode, toggleTheme } = useTheme();

  const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );

  return (
    <div style={{ 
      padding: 'var(--space-lg)', 
      backgroundColor: 'var(--bg-app)',
      minHeight: '100vh',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-family)'
    }}>
      {/* Size Controls */}
      <Card style={{ marginBottom: 'var(--space-xl)' }}>
        <CardHeader>
          <Text as="h2" weight="semibold">Size System Test</Text>
          <div style={{ display: 'flex', gap: 'var(--space-xs)', alignItems: 'center' }}>
            <Badge variant="info">Font: {config.fontSize}</Badge>
            <Badge variant={config.compactMode ? 'warning' : 'secondary'}>
              {config.compactMode ? 'Compact' : 'Normal'}
            </Badge>
          </div>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
            <div>
              <Text weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Font Size</Text>
              <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                <Button 
                  size="sm" 
                  variant={config.fontSize === 'small' ? 'primary' : 'outline'}
                  onClick={() => setFontSize('small')}
                >
                  Small
                </Button>
                <Button 
                  size="sm" 
                  variant={config.fontSize === 'medium' ? 'primary' : 'outline'}
                  onClick={() => setFontSize('medium')}
                >
                  Medium
                </Button>
                <Button 
                  size="sm" 
                  variant={config.fontSize === 'large' ? 'primary' : 'outline'}
                  onClick={() => setFontSize('large')}
                >
                  Large
                </Button>
              </div>
            </div>
            
            <div>
              <Text weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Layout</Text>
              <div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => setCompactMode(!config.compactMode)}
                >
                  Toggle Compact Mode
                </Button>
                <Button size="sm" variant="ghost" onClick={toggleTheme}>
                  Toggle Theme
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* CSS Variables Display */}
      <Card style={{ marginBottom: 'var(--space-xl)' }}>
        <CardHeader>
          <Text as="h3" weight="semibold">Current CSS Variables</Text>
        </CardHeader>
        <CardBody>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: 'var(--space-md)',
            fontFamily: 'monospace',
            fontSize: 'var(--font-size-sm)'
          }}>
            <div>
              <Text weight="medium" color="accent" style={{ marginBottom: 'var(--space-xs)' }}>Font Sizes</Text>
              <div style={{ color: 'var(--text-secondary)' }}>
                <div>--font-size-xs: {getComputedStyle(document.documentElement).getPropertyValue('--font-size-xs')}</div>
                <div>--font-size-sm: {getComputedStyle(document.documentElement).getPropertyValue('--font-size-sm')}</div>
                <div>--font-size-base: {getComputedStyle(document.documentElement).getPropertyValue('--font-size-base')}</div>
                <div>--font-size-lg: {getComputedStyle(document.documentElement).getPropertyValue('--font-size-lg')}</div>
              </div>
            </div>
            
            <div>
              <Text weight="medium" color="accent" style={{ marginBottom: 'var(--space-xs)' }}>Spacing</Text>
              <div style={{ color: 'var(--text-secondary)' }}>
                <div>--space-xs: {getComputedStyle(document.documentElement).getPropertyValue('--space-xs')}</div>
                <div>--space-sm: {getComputedStyle(document.documentElement).getPropertyValue('--space-sm')}</div>
                <div>--space-md: {getComputedStyle(document.documentElement).getPropertyValue('--space-md')}</div>
                <div>--space-lg: {getComputedStyle(document.documentElement).getPropertyValue('--space-lg')}</div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Component Scaling Test */}
      <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
        
        {/* Typography Scaling */}
        <Card>
          <CardHeader>
            <Text as="h3" weight="semibold">Typography Scaling</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              <Text size="xs">Extra Small Text (xs)</Text>
              <Text size="sm">Small Text (sm)</Text>
              <Text size="md">Medium Text (md)</Text>
              <Text size="lg">Large Text (lg)</Text>
              <Text size="xl">Extra Large Text (xl)</Text>
              <Text size="2xl">2X Large Text (2xl)</Text>
              <Text size="3xl">3X Large Text (3xl)</Text>
            </div>
          </CardBody>
        </Card>

        {/* Button Scaling */}
        <Card>
          <CardHeader>
            <Text as="h3" weight="semibold">Button Scaling</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
              <div>
                <Text weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Button Sizes</Text>
                <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'end', flexWrap: 'wrap' }}>
                  <Button size="sm">Small Button</Button>
                  <Button size="md">Medium Button</Button>
                  <Button size="lg">Large Button</Button>
                </div>
              </div>
              
              <div>
                <Text weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>With Icons (Responsive)</Text>
                <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'end', flexWrap: 'wrap' }}>
                  <Button size="sm" leftIcon={<SearchIcon />}>Small</Button>
                  <Button size="md" leftIcon={<SearchIcon />}>Medium</Button>
                  <Button size="lg" leftIcon={<SearchIcon />}>Large</Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Input Scaling */}
        <Card>
          <CardHeader>
            <Text as="h3" weight="semibold">Input Scaling</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: 'var(--space-md)', maxWidth: '500px' }}>
              <Input 
                size="sm"
                label="Small Input"
                placeholder="Small size input..."
                leftIcon={<SearchIcon />}
              />
              <Input 
                size="md"
                label="Medium Input"
                placeholder="Medium size input..."
                leftIcon={<SearchIcon />}
              />
              <Input 
                size="lg"
                label="Large Input"
                placeholder="Large size input..."
                leftIcon={<SearchIcon />}
              />
            </div>
          </CardBody>
        </Card>

        {/* Badge Scaling */}
        <Card>
          <CardHeader>
            <Text as="h3" weight="semibold">Badge Scaling</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
              <div>
                <Text weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Text Badges</Text>
                <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Badge size="sm" variant="primary">Small</Badge>
                  <Badge size="md" variant="success">Medium</Badge>
                  <Badge size="lg" variant="warning">Large</Badge>
                </div>
              </div>
              
              <div>
                <Text weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Dot Badges</Text>
                <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                    <Badge dot size="sm" variant="success" />
                    <Text size="sm">Small Dot</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                    <Badge dot size="md" variant="warning" />
                    <Text>Medium Dot</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                    <Badge dot size="lg" variant="error" />
                    <Text size="lg">Large Dot</Text>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Link Scaling */}
        <Card>
          <CardHeader>
            <Text as="h3" weight="semibold">Link Scaling</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
              <Link href="#" size="sm" variant="primary">Small Link</Link>
              <Link href="#" size="md" variant="accent">Medium Link</Link>
              <Link href="#" size="lg" variant="primary">Large Link</Link>
              <Link href="#" external>External Link (responsive)</Link>
            </div>
          </CardBody>
        </Card>

        {/* Card Scaling */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
          <Card padding="sm">
            <Text as="h4" weight="semibold" style={{ marginBottom: 'var(--space-sm)' }}>Small Padding Card</Text>
            <Text color="secondary" size="sm">
              This card uses small padding that scales with the space system.
            </Text>
          </Card>
          
          <Card padding="md">
            <Text as="h4" weight="semibold" style={{ marginBottom: 'var(--space-sm)' }}>Medium Padding Card</Text>
            <Text color="secondary">
              This card uses medium padding that scales responsively.
            </Text>
          </Card>
          
          <Card padding="lg">
            <Text as="h4" weight="semibold" style={{ marginBottom: 'var(--space-sm)' }}>Large Padding Card</Text>
            <Text color="secondary">
              This card uses large padding that adjusts with the size system.
            </Text>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function SizeSystemExample() {
  return (
    <ThemeProvider theme={oceanTheme}>
      <SizeSystemTest />
    </ThemeProvider>
  );
}