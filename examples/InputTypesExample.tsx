import React, { useState } from 'react';
import { 
  ThemeProvider, 
  Input, 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  Text,
  Badge,
  useTheme
} from '../src';

function InputTypesDemo() {
  const { config, setMode } = useTheme();
  const [formData, setFormData] = useState({
    defaultInput: '',
    email: '',
    password: '',
    confirmPassword: '',
    customEmail: '',
    customPassword: '',
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Check console for form data');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <Text as="h1" size="3xl" weight="bold">
            Enhanced Input Types
          </Text>
          <Text color="muted">
            Email validation, password strength, and show/hide functionality
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

        {/* Input Types Overview */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              📝 Input Types Overview
            </Text>
            <Badge variant="info">Built-in validation and features</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '2rem' }}>
              
              {/* Default Input */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Default Input
                </Text>
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
                  <Input
                    type="default"
                    label="Default Input"
                    placeholder="Enter any text"
                    value={formData.defaultInput}
                    onChange={handleInputChange('defaultInput')}
                    helperText="Basic input without validation"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  📧 Email Input
                </Text>
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
                  <Input
                    type="email"
                    label="Email Address"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    helperText="Automatic email validation with visual feedback"
                    enableValidation={true}
                    showValidationIcon={true}
                  />
                  
                  <Input
                    type="email"
                    label="Email (No Validation)"
                    value={formData.customEmail}
                    onChange={handleInputChange('customEmail')}
                    enableValidation={false}
                    helperText="Email input without validation"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  🔒 Password Input
                </Text>
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
                  <Input
                    type="password"
                    label="Password"
                    value={formData.password}
                    onChange={handleInputChange('password')}
                    helperText="Password with strength indicator and show/hide toggle"
                    enableValidation={true}
                    showPasswordToggle={true}
                  />
                  
                  <Input
                    type="password"
                    label="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange('confirmPassword')}
                    enableValidation={false}
                    helperText="Password confirmation"
                    isInvalid={Boolean(formData.confirmPassword && formData.password !== formData.confirmPassword)}
                    errorMessage={
                      formData.confirmPassword && formData.password !== formData.confirmPassword 
                        ? 'Passwords do not match' 
                        : undefined
                    }
                  />

                  <Input
                    type="password"
                    label="Password (No Toggle)"
                    value={formData.customPassword}
                    onChange={handleInputChange('customPassword')}
                    showPasswordToggle={false}
                    enableValidation={false}
                    helperText="Password without show/hide toggle"
                  />
                </div>
              </div>

            </div>
          </CardBody>
        </Card>

        {/* Form Example */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              🚀 Complete Form Example
            </Text>
            <Badge variant="primary">Real form with all features</Badge>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                
                <Text as="h3" size="lg" weight="medium">
                  Create Account
                </Text>

                <Input
                  type="email"
                  label="Email Address"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  required
                  enableValidation={true}
                  showValidationIcon={true}
                />

                <Input
                  type="password"
                  label="Password"
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  required
                  enableValidation={true}
                  showPasswordToggle={true}
                />

                <Input
                  type="password"
                  label="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange('confirmPassword')}
                  required
                  enableValidation={false}
                  showPasswordToggle={false}
                  isInvalid={Boolean(formData.confirmPassword && formData.password !== formData.confirmPassword)}
                  errorMessage={
                    formData.confirmPassword && formData.password !== formData.confirmPassword 
                      ? 'Passwords do not match' 
                      : undefined
                  }
                />

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={
                      !formData.email || 
                      !formData.password || 
                      !formData.confirmPassword ||
                      formData.password !== formData.confirmPassword
                    }
                  >
                    Create Account
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setFormData({
                      defaultInput: '',
                      email: '',
                      password: '',
                      confirmPassword: '',
                      customEmail: '',
                      customPassword: '',
                    })}
                  >
                    Reset
                  </Button>
                </div>

              </div>
            </form>
          </CardBody>
        </Card>

        {/* Input Variants */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              🎨 Input Variants with Types
            </Text>
            <Badge variant="secondary">Different styles</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '2rem' }}>
              
              {/* Default Variant */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Default Variant
                </Text>
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
                  <Input
                    type="email"
                    variant="default"
                    placeholder="Default email input"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                  />
                  <Input
                    type="password"
                    variant="default"
                    placeholder="Default password input"
                    value={formData.password}
                    onChange={handleInputChange('password')}
                  />
                </div>
              </div>

              {/* Filled Variant */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Filled Variant
                </Text>
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
                  <Input
                    type="email"
                    variant="filled"
                    placeholder="Filled email input"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                  />
                  <Input
                    type="password"
                    variant="filled"
                    placeholder="Filled password input"
                    value={formData.password}
                    onChange={handleInputChange('password')}
                  />
                </div>
              </div>

              {/* Flushed Variant */}
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Flushed Variant
                </Text>
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
                  <Input
                    type="email"
                    variant="flushed"
                    placeholder="Flushed email input"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                  />
                  <Input
                    type="password"
                    variant="flushed"
                    placeholder="Flushed password input"
                    value={formData.password}
                    onChange={handleInputChange('password')}
                  />
                </div>
              </div>

            </div>
          </CardBody>
        </Card>

        {/* Features Guide */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              ✨ Features Guide
            </Text>
            <Badge variant="success">What's included</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              
              <div style={{ 
                padding: '1rem', 
                backgroundColor: 'var(--success-light)', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--success-color)'
              }}>
                <Text weight="bold" color="success" style={{ marginBottom: '0.5rem' }}>
                  📧 Email Input Features:
                </Text>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Automatic email icon</li>
                  <li>Real-time email validation</li>
                  <li>Visual feedback with checkmark/X icons</li>
                  <li>Default placeholder text</li>
                  <li>Proper HTML email input type</li>
                </ul>
              </div>

              <div style={{ 
                padding: '1rem', 
                backgroundColor: 'var(--info-light)', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--info)'
              }}>
                <Text weight="bold" color="info" style={{ marginBottom: '0.5rem' }}>
                  🔒 Password Input Features:
                </Text>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Automatic lock icon</li>
                  <li>Show/hide password toggle</li>
                  <li>Password strength indicator</li>
                  <li>Minimum length validation</li>
                  <li>Visual strength feedback (Weak, Fair, Good, Strong)</li>
                </ul>
              </div>

              <div style={{ 
                padding: '1rem', 
                backgroundColor: 'var(--warning-light)', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--warning-color)'
              }}>
                <Text weight="bold" style={{ color: 'var(--warning-color)', marginBottom: '0.5rem' }}>
                  ⚙️ Customization Options:
                </Text>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li><code>enableValidation</code> - Turn validation on/off</li>
                  <li><code>showValidationIcon</code> - Show/hide validation icons</li>
                  <li><code>showPasswordToggle</code> - Show/hide password toggle</li>
                  <li>All existing Input props still work</li>
                  <li>Custom icons override default icons</li>
                </ul>
              </div>

            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
}

export default function InputTypesExample() {
  return (
    <ThemeProvider persistToLocalStorage={true} localStorageKey="input-types-demo">
      <InputTypesDemo />
    </ThemeProvider>
  );
}