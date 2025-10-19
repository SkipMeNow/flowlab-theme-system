import React, { useState } from 'react';
import { ThemeProvider, Input, Button, Card, CardHeader, CardBody, Text, Badge } from '../src';

function ValidationIconDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailNoIcons, setEmailNoIcons] = useState('');

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Card>
        <CardHeader>
          <Text as="h1" size="2xl" weight="bold">
            🔍 Validation Icons Fixed!
          </Text>
          <Badge variant="success">Icons now show properly for both valid and invalid states</Badge>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'grid', gap: '2rem' }}>
            
            {/* Email with validation icons */}
            <div>
              <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                📧 Email Input with Validation Icons
              </Text>
              <Text color="muted" style={{ marginBottom: '1rem' }}>
                Type a valid/invalid email to see the checkmark ✓ or X ✗ icons
              </Text>
              <Input
                type="email"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                enableValidation={true}
                showValidationIcon={true}
                helperText="Icons will appear as you type"
              />
            </div>

            {/* Password with validation icons */}
            <div>
              <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                🔒 Password Input with Validation Icons
              </Text>
              <Text color="muted" style={{ marginBottom: '1rem' }}>
                Type a password to see validation feedback and strength indicator
              </Text>
              <Input
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                enableValidation={true}
                showValidationIcon={true}
                showPasswordToggle={true}
                helperText="Icons show validation state + eye icon for show/hide"
              />
            </div>

            {/* Email without validation icons */}
            <div>
              <Text as="h2" size="lg" weight="semibold" style={{ marginBottom: '1rem' }}>
                📧 Email Input WITHOUT Validation Icons
              </Text>
              <Text color="muted" style={{ marginBottom: '1rem' }}>
                Same validation but no visual icons (cleaner look)
              </Text>
              <Input
                type="email"
                label="Email (No Icons)"
                value={emailNoIcons}
                onChange={(e) => setEmailNoIcons(e.target.value)}
                enableValidation={true}
                showValidationIcon={false}
                helperText="Validation runs but no checkmark/X icons"
              />
            </div>

            {/* Test examples */}
            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'var(--info-light)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--info)'
            }}>
              <Text weight="bold" color="info" style={{ marginBottom: '0.5rem' }}>
                🧪 Test Examples:
              </Text>
              <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                <li><strong>Valid email:</strong> user@example.com → Green ✓ icon</li>
                <li><strong>Invalid email:</strong> invalid-email → Red ✗ icon</li>
                <li><strong>Short password:</strong> 123 → Red ✗ icon + error</li>
                <li><strong>Good password:</strong> SecurePass123! → Green ✓ icon</li>
              </ul>
            </div>

            <div style={{ 
              padding: '1rem', 
              backgroundColor: 'var(--success-light)', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--success-color)'
            }}>
              <Text weight="bold" color="success">
                ✅ Fix Applied: Validation Icons Now Show Correctly!
              </Text>
              <Text style={{ marginTop: '0.5rem' }}>
                The issue was that validation icons were hidden when there were validation errors. 
                Now they show for both valid (✓) and invalid (✗) states as expected.
              </Text>
            </div>

          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default function ValidationIconExample() {
  return (
    <ThemeProvider persistToLocalStorage={true} localStorageKey="validation-icon-demo">
      <ValidationIconDemo />
    </ThemeProvider>
  );
}