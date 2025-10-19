import React, { useState } from 'react';
import { ThemeProvider, Input, Text, Card, CardHeader, CardBody, Badge } from '../src';

function SimpleValidationTest() {
  const [email, setEmail] = useState('');
  const [debugInfo, setDebugInfo] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setDebugInfo(`Value: "${value}", Length: ${value.length}, Has @: ${value.includes('@')}, Has domain: ${/\.[a-z]+$/i.test(value)}`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <CardHeader>
          <Text as="h1" size="2xl" weight="bold">📧 Improved Email Validation</Text>
          <Badge variant="success">Shows error immediately on focus until proper format</Badge>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'grid', gap: '2rem' }}>
            
            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'var(--info-light)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--info)'
            }}>
              <Text weight="bold" color="info" style={{ marginBottom: '0.5rem' }}>
                🎯 New Email Validation Behavior:
              </Text>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>On Focus:</strong> Shows error immediately if field has content</li>
                <li><strong>While Typing:</strong> Error persists until you have proper email format</li>
                <li><strong>Valid Format:</strong> Must contain @ and valid domain (.com, .org, etc.)</li>
                <li><strong>Real-time Icons:</strong> Red ❌ for invalid, Green ✅ for valid</li>
              </ul>
            </div>
            
            <div>
              <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                📧 Email Input Test
              </Text>
              <Text color="muted" style={{ marginBottom: '1rem' }}>
                Click on the field and start typing to see the improved validation
              </Text>
              
              <Input
                type="email"
                label="Email Address"
                value={email}
                onChange={handleEmailChange}
                enableValidation={true}
                showValidationIcon={true}
                helperText="Error shows immediately on focus, disappears when valid format is entered"
              />
              
              <div style={{ 
                marginTop: '1rem', 
                padding: '0.75rem',
                backgroundColor: 'var(--gray-50)',
                borderRadius: 'var(--radius-sm)',
                fontSize: 'var(--font-size-sm)',
                fontFamily: 'monospace'
              }}>
                <Text size="sm" weight="medium">Debug Info:</Text>
                <Text size="sm" color="muted">{debugInfo || 'Start typing to see debug info...'}</Text>
              </div>
            </div>

            <div>
              <Text as="h3" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                🧪 Test Examples:
              </Text>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                <Text size="sm">
                  <strong>1. Click field</strong> → Error appears immediately if not empty
                </Text>
                <Text size="sm">
                  <strong>2. Type "john"</strong> → Red ❌ icon + error message
                </Text>
                <Text size="sm">
                  <strong>3. Type "john@"</strong> → Still red ❌ (needs domain)
                </Text>
                <Text size="sm">
                  <strong>4. Type "john@example"</strong> → Still red ❌ (needs .domain)
                </Text>
                <Text size="sm">
                  <strong>5. Type "john@example.com"</strong> → Green ✅ icon + error disappears
                </Text>
              </div>
            </div>

            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'var(--success-light)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--success-color)'
            }}>
              <Text weight="bold" color="success">
                ✅ Email Validation Improved!
              </Text>
              <Text style={{ marginTop: '0.5rem' }}>
                Email validation now shows errors immediately on focus and persists until 
                the user enters a proper email format with @ and a valid domain extension.
              </Text>
            </div>

          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default function SimpleValidationExample() {
  return (
    <ThemeProvider>
      <SimpleValidationTest />
    </ThemeProvider>
  );
}