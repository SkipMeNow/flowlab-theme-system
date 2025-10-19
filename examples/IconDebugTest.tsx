import React, { useState } from 'react';
import { ThemeProvider, Input, Text, Card, CardHeader, CardBody } from '../src';

function IconDebugTest() {
  const [email, setEmail] = useState('test');
  const [showDebug, setShowDebug] = useState(true);

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <Card>
        <CardHeader>
          <Text as="h1" size="xl" weight="bold">🔍 Icon Debug Test</Text>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            
            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Test 1: Email with pre-filled invalid value
              </Text>
              <Input
                type="email"
                label="Email (should show RED X icon)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                enableValidation={true}
                showValidationIcon={true}
              />
              <Text size="sm" color="muted" style={{ marginTop: '0.5rem' }}>
                This should show a red ❌ icon because "test" is not a valid email
              </Text>
            </div>

            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Test 2: Email with valid value
              </Text>
              <Input
                type="email"
                label="Email (should show GREEN check icon)"
                value="test@example.com"
                enableValidation={true}
                showValidationIcon={true}
                readOnly
              />
              <Text size="sm" color="muted" style={{ marginTop: '0.5rem' }}>
                This should show a green ✅ icon because the email is valid
              </Text>
            </div>

            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Test 3: Password with value
              </Text>
              <Input
                type="password"
                label="Password (should show validation icon)"
                value="short"
                enableValidation={true}
                showValidationIcon={true}
                readOnly
              />
              <Text size="sm" color="muted" style={{ marginTop: '0.5rem' }}>
                This should show a red ❌ icon because password is too short
              </Text>
            </div>

            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                Test 4: Force show hardcoded icons
              </Text>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <Text>Hardcoded Red X:</Text>
                <div style={{ color: '#ef4444' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Text>Hardcoded Green Check:</Text>
                <div style={{ color: '#10b981' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
              </div>
              
              <Text size="sm" color="muted" style={{ marginTop: '0.5rem' }}>
                If you can see these hardcoded icons above but not in the inputs, 
                there's an issue with the Input component logic.
              </Text>
            </div>

            <button 
              onClick={() => setShowDebug(!showDebug)}
              style={{ 
                padding: '0.5rem 1rem', 
                backgroundColor: 'var(--primary)', 
                color: 'white', 
                border: 'none', 
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer'
              }}
            >
              {showDebug ? 'Hide' : 'Show'} Debug Info
            </button>

            {showDebug && (
              <div style={{ 
                padding: '1rem',
                backgroundColor: 'var(--gray-50)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontFamily: 'monospace'
              }}>
                <Text weight="bold">Debug Info:</Text>
                <br />
                <Text>Email value: "{email}"</Text>
                <br />
                <Text>Email length: {email.length}</Text>
                <br />
                <Text>Expected to show icon: {email ? 'YES' : 'NO'}</Text>
              </div>
            )}

          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default function IconDebugExample() {
  return (
    <ThemeProvider>
      <IconDebugTest />
    </ThemeProvider>
  );
}