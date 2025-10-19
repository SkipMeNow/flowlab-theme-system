import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, Badge, Button, Text, Card, CardHeader, CardBody } from '../src';

// Test all Badge features
function BadgeTest() {
  return (
    <div style={{ padding: '2rem' }}>
      <Card>
        <CardHeader>
          <Text as="h1" size="2xl" weight="bold">✅ Badge Export Fixed!</Text>
          <Text color="success">The Badge component is now properly exported and working.</Text>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'grid', gap: '2rem' }}>
            
            {/* Variants */}
            <div>
              <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Badge Variants
              </Text>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Badge Sizes
              </Text>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Badge variant="primary" size="sm">Small</Badge>
                <Badge variant="primary" size="md">Medium</Badge>
                <Badge variant="primary" size="lg">Large</Badge>
              </div>
            </div>

            {/* Shapes */}
            <div>
              <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Badge Shapes
              </Text>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Badge variant="info" shape="rounded">Rounded</Badge>
                <Badge variant="info" shape="pill">Pill</Badge>
                <Badge variant="info" shape="square">Square</Badge>
              </div>
            </div>

            {/* Dots */}
            <div>
              <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Badge Dots
              </Text>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Badge variant="success" dot size="sm" />
                <Badge variant="warning" dot size="md" />
                <Badge variant="error" dot size="lg" />
                <Text>Notification indicators</Text>
              </div>
            </div>

            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'var(--success-light)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--success-color)'
            }}>
              <Text weight="bold" color="success">
                🎉 Badge Component Successfully Fixed!
              </Text>
              <Text style={{ marginTop: '0.5rem' }}>
                The Badge component is now properly exported and includes all features:
                variants, sizes, shapes, and dot indicators with full CSS variable integration.
              </Text>
            </div>

          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default function BadgeTestExample() {
  return (
    <ThemeProvider persistToLocalStorage={true} localStorageKey="badge-test">
      <BadgeTest />
    </ThemeProvider>
  );
}