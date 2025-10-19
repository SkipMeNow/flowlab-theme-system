import React from 'react';
import { 
  ThemeProvider, 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  Text,
  Badge,
  useTheme
} from '../src';

// Icons for examples
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const HeartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6" />
    <path d="m4.2 4.2 4.2 4.2m5.6 5.6 4.2 4.2" />
    <path d="M1 12h6m6 0h6" />
    <path d="m4.2 19.8 4.2-4.2m5.6-5.6 4.2-4.2" />
  </svg>
);

function ButtonShapesDemo() {
  const { config, setMode } = useTheme();

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <Text as="h1" size="3xl" weight="bold">
            Button Shapes Showcase
          </Text>
          <Text color="muted">
            Explore all button shapes with different variants and sizes
          </Text>
        </div>
        <Button 
          variant="outline" 
          shape="pill"
          onClick={() => setMode(config.mode === 'light' ? 'dark' : 'light')}
        >
          {config.mode === 'light' ? '🌙' : '☀️'} Toggle Theme
        </Button>
      </div>

      <div style={{ display: 'grid', gap: '2rem' }}>

        {/* Rounded Buttons (Default) */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              🔲 Rounded Buttons
            </Text>
            <Badge variant="default">shape="rounded" (default)</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              
              {/* Sizes */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Different Sizes
                </Text>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Button variant="primary" size="sm" shape="rounded">Small</Button>
                  <Button variant="primary" size="md" shape="rounded">Medium</Button>
                  <Button variant="primary" size="lg" shape="rounded">Large</Button>
                </div>
              </div>

              {/* Variants */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Different Variants
                </Text>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" shape="rounded">Primary</Button>
                  <Button variant="secondary" shape="rounded">Secondary</Button>
                  <Button variant="outline" shape="rounded">Outline</Button>
                  <Button variant="ghost" shape="rounded">Ghost</Button>
                  <Button variant="danger" shape="rounded">Danger</Button>
                </div>
              </div>

              {/* With Icons */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  With Icons
                </Text>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" shape="rounded" leftIcon={<PlusIcon />}>
                    Add Item
                  </Button>
                  <Button variant="outline" shape="rounded" rightIcon={<DownloadIcon />}>
                    Download
                  </Button>
                  <Button variant="secondary" shape="rounded" leftIcon={<HeartIcon />} rightIcon={<SettingsIcon />}>
                    Like & Configure
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Pill Buttons */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              💊 Pill Buttons
            </Text>
            <Badge variant="primary">shape="pill"</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              
              {/* Sizes */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Different Sizes
                </Text>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Button variant="primary" size="sm" shape="pill">Small Pill</Button>
                  <Button variant="primary" size="md" shape="pill">Medium Pill</Button>
                  <Button variant="primary" size="lg" shape="pill">Large Pill</Button>
                </div>
              </div>

              {/* Variants */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Different Variants
                </Text>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" shape="pill">Primary Pill</Button>
                  <Button variant="secondary" shape="pill">Secondary Pill</Button>
                  <Button variant="outline" shape="pill">Outline Pill</Button>
                  <Button variant="ghost" shape="pill">Ghost Pill</Button>
                  <Button variant="danger" shape="pill">Danger Pill</Button>
                </div>
              </div>

              {/* With Icons */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  With Icons
                </Text>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" shape="pill" leftIcon={<PlusIcon />}>
                    Create New
                  </Button>
                  <Button variant="outline" shape="pill" rightIcon={<DownloadIcon />}>
                    Export Data
                  </Button>
                  <Button variant="secondary" shape="pill" leftIcon={<HeartIcon />}>
                    Add to Favorites
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Square Buttons */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              ⬜ Square Buttons
            </Text>
            <Badge variant="secondary">shape="square"</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              
              {/* Sizes */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Different Sizes
                </Text>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Button variant="primary" size="sm" shape="square">Small</Button>
                  <Button variant="primary" size="md" shape="square">Medium</Button>
                  <Button variant="primary" size="lg" shape="square">Large</Button>
                </div>
              </div>

              {/* Variants */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Different Variants
                </Text>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" shape="square">Primary</Button>
                  <Button variant="secondary" shape="square">Secondary</Button>
                  <Button variant="outline" shape="square">Outline</Button>
                  <Button variant="ghost" shape="square">Ghost</Button>
                  <Button variant="danger" shape="square">Danger</Button>
                </div>
              </div>

              {/* With Icons */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  With Icons
                </Text>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" shape="square" leftIcon={<PlusIcon />}>
                    Add
                  </Button>
                  <Button variant="outline" shape="square" rightIcon={<DownloadIcon />}>
                    Download
                  </Button>
                  <Button variant="secondary" shape="square" leftIcon={<HeartIcon />} rightIcon={<SettingsIcon />}>
                    Actions
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Circle Buttons */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              ⭕ Circle Buttons
            </Text>
            <Badge variant="success">shape="circle"</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              
              {/* Sizes */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Different Sizes
                </Text>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Button variant="primary" size="sm" shape="circle">
                    <PlusIcon />
                  </Button>
                  <Button variant="primary" size="md" shape="circle">
                    <PlusIcon />
                  </Button>
                  <Button variant="primary" size="lg" shape="circle">
                    <PlusIcon />
                  </Button>
                </div>
              </div>

              {/* Variants */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Different Variants
                </Text>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" shape="circle"><PlusIcon /></Button>
                  <Button variant="secondary" shape="circle"><HeartIcon /></Button>
                  <Button variant="outline" shape="circle"><DownloadIcon /></Button>
                  <Button variant="ghost" shape="circle"><SettingsIcon /></Button>
                  <Button variant="danger" shape="circle">×</Button>
                </div>
              </div>

              {/* Circle with Text */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Circle with Text/Numbers
                </Text>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" shape="circle" size="sm">1</Button>
                  <Button variant="secondary" shape="circle" size="md">2</Button>
                  <Button variant="outline" shape="circle" size="lg">3</Button>
                  <Button variant="primary" shape="circle" size="md">+</Button>
                  <Button variant="danger" shape="circle" size="md">×</Button>
                </div>
              </div>

              <div style={{ 
                backgroundColor: 'var(--warning-light)', 
                color: 'var(--warning-color)',
                padding: '1rem', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--warning-color)'
              }}>
                <Text weight="medium">💡 Circle Button Tip:</Text>
                <Text>Circle buttons work best with icons or single characters. Text content may be truncated.</Text>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Mixed Shapes Showcase */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              🎨 Mixed Shapes in Action
            </Text>
            <Badge variant="info">Real-world examples</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '2rem' }}>
              
              {/* Action Bar */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Action Bar
                </Text>
                <div style={{ 
                  display: 'flex', 
                  gap: '0.5rem', 
                  padding: '1rem',
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)'
                }}>
                  <Button variant="primary" shape="rounded" leftIcon={<PlusIcon />}>
                    New Document
                  </Button>
                  <Button variant="outline" shape="square" title="Settings">
                    <SettingsIcon />
                  </Button>
                  <Button variant="ghost" shape="circle" title="Favorite">
                    <HeartIcon />
                  </Button>
                  <Button variant="secondary" shape="pill" rightIcon={<DownloadIcon />}>
                    Export
                  </Button>
                </div>
              </div>

              {/* Full Width Examples */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Full Width Buttons
                </Text>
                <div style={{ display: 'grid', gap: '0.5rem', maxWidth: '400px' }}>
                  <Button variant="primary" shape="rounded" fullWidth>
                    Rounded Full Width
                  </Button>
                  <Button variant="secondary" shape="pill" fullWidth>
                    Pill Full Width
                  </Button>
                  <Button variant="outline" shape="square" fullWidth>
                    Square Full Width
                  </Button>
                </div>
              </div>

              {/* Loading States */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Loading States
                </Text>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary" shape="rounded" loading>
                    Loading Rounded
                  </Button>
                  <Button variant="secondary" shape="pill" loading>
                    Loading Pill
                  </Button>
                  <Button variant="outline" shape="square" loading>
                    Loading Square
                  </Button>
                  <Button variant="primary" shape="circle" loading size="md">
                  </Button>
                </div>
              </div>

            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
}

export default function ButtonShapesExample() {
  return (
    <ThemeProvider persistToLocalStorage={true} localStorageKey="button-shapes-demo">
      <ButtonShapesDemo />
    </ThemeProvider>
  );
}