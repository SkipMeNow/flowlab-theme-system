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

function UIShowcase() {
  const { theme, config, setMode, setFontSize, toggleTheme } = useTheme();

  // Icons for demonstration
  const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <Path d="m21 21-4.35-4.35" />
    </svg>
  );

  const UserIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const ExternalIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );

  return (
    <div style={{ 
      padding: '24px', 
      maxWidth: '1200px', 
      margin: '0 auto',
      backgroundColor: 'var(--bg-app)',
      minHeight: '100vh',
      color: 'var(--text-primary)'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <Text as="h1" size="3xl" weight="bold">
          FlowLab UI Components
        </Text>
        <Text color="secondary" style={{ marginBottom: '16px' }}>
          A comprehensive collection of themed UI components
        </Text>
        
        {/* Theme Controls */}
        <Card padding="md" style={{ marginBottom: '24px' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Theme Controls</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>
                  Current Theme: <Badge variant="primary">{theme.name}</Badge>
                </Text>
                <Text color="secondary" style={{ marginBottom: '8px' }}>
                  Mode: <Badge variant={config.mode === 'dark' ? 'secondary' : 'default'}>{config.mode}</Badge>
                </Text>
                <Text color="secondary">
                  Font Size: <Badge variant="info">{config.fontSize}</Badge>
                </Text>
              </div>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button size="sm" onClick={() => setMode('light')}>Light</Button>
                <Button size="sm" onClick={() => setMode('dark')}>Dark</Button>
                <Button size="sm" variant="outline" onClick={toggleTheme}>Toggle</Button>
              </div>
              
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button size="sm" variant="ghost" onClick={() => setFontSize('small')}>Small Font</Button>
                <Button size="sm" variant="ghost" onClick={() => setFontSize('medium')}>Medium Font</Button>
                <Button size="sm" variant="ghost" onClick={() => setFontSize('large')}>Large Font</Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        {/* Typography */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Typography</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '16px' }}>
              <Text as="h1">Heading 1 - Large Title</Text>
              <Text as="h2">Heading 2 - Section Title</Text>
              <Text as="h3">Heading 3 - Subsection</Text>
              <Text as="h4">Heading 4 - Component Title</Text>
              <Text size="lg" weight="semibold">Large semibold text</Text>
              <Text>Regular paragraph text with normal weight</Text>
              <Text color="secondary">Secondary text for descriptions</Text>
              <Text color="muted" size="sm">Small muted text for captions</Text>
              <Text truncate style={{ width: '200px' }}>
                This is a very long text that will be truncated with ellipsis
              </Text>
            </div>
          </CardBody>
        </Card>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Buttons</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>Variants</Text>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>
              
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>Sizes</Text>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>With Icons</Text>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <Button leftIcon={<UserIcon />}>With Left Icon</Button>
                  <Button variant="outline" rightIcon={<ExternalIcon />}>With Right Icon</Button>
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Links */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Links</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>Variants</Text>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="#" variant="primary">Primary Link</Link>
                  <Link href="#" variant="secondary">Secondary Link</Link>
                  <Link href="#" variant="accent">Accent Link</Link>
                  <Link href="#" variant="muted">Muted Link</Link>
                </div>
              </div>
              
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>Underline Styles</Text>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="#" underline="always">Always Underlined</Link>
                  <Link href="#" underline="hover">Hover Underline</Link>
                  <Link href="#" underline="never">Never Underlined</Link>
                </div>
              </div>
              
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>External Links</Text>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="https://example.com" external>External Link</Link>
                  <Link href="#" disabled>Disabled Link</Link>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Inputs */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Inputs</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '16px', maxWidth: '400px' }}>
              <Input 
                label="Default Input"
                placeholder="Enter some text..."
                helperText="This is helper text"
              />
              <Input 
                variant="filled"
                label="Filled Input" 
                placeholder="Filled variant"
              />
              <Input 
                variant="flushed"
                label="Flushed Input" 
                placeholder="Flushed variant"
              />
              <Input 
                label="With Icons"
                placeholder="Search..."
                leftIcon={<SearchIcon />}
                rightIcon={<UserIcon />}
              />
              <Input 
                label="Error State"
                placeholder="Invalid input"
                isInvalid
                errorMessage="This field is required"
              />
              <Input 
                label="Disabled Input"
                placeholder="Disabled"
                disabled
              />
            </div>
          </CardBody>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Badges</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>Variants</Text>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Badge>Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>
              </div>
              
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>Sizes & Shapes</Text>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                  <Badge shape="pill" variant="primary">Pill</Badge>
                  <Badge shape="square" variant="secondary">Square</Badge>
                </div>
              </div>
              
              <div>
                <Text weight="medium" style={{ marginBottom: '8px' }}>Dots</Text>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Badge dot variant="success" />
                  <Badge dot variant="warning" size="md" />
                  <Badge dot variant="error" size="lg" />
                  <Text>Status indicators</Text>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          <Card variant="elevated" hoverable>
            <CardHeader>
              <Text as="h3" weight="semibold">Elevated Card</Text>
              <Badge variant="success">Active</Badge>
            </CardHeader>
            <CardBody>
              <Text color="secondary">
                This is an elevated card with hover effects. It demonstrates the card component structure.
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
          
          <Card variant="outlined">
            <CardHeader>
              <Text as="h3" weight="semibold">Outlined Card</Text>
            </CardHeader>
            <CardBody>
              <Text color="secondary">
                This card has a border instead of a shadow for a different visual style.
              </Text>
            </CardBody>
          </Card>
          
          <Card variant="filled" padding="lg">
            <Text as="h3" weight="semibold" style={{ marginBottom: '8px' }}>Filled Card</Text>
            <Text color="secondary">
              A filled card with large padding and no separate header/body sections.
            </Text>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function UIComponentsExample() {
  return (
    <ThemeProvider theme={oceanTheme}>
      <UIShowcase />
    </ThemeProvider>
  );
}