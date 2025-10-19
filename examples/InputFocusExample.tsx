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

// Icons for examples
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

function InputFocusDemo() {
  const { config, setMode } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    search: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <Text as="h1" size="3xl" weight="bold">
            Input Focus States Demo
          </Text>
          <Text color="muted">
            Test input focus behavior - colors should return to default when not focused
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

        {/* Basic Input States */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              🎯 Focus State Testing
            </Text>
            <Badge variant="info">Click inputs to test focus behavior</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              
              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Basic Inputs
                </Text>
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
                  <Input
                    placeholder="Default input - test focus"
                    value={formData.search}
                    onChange={handleInputChange('search')}
                  />
                  <Input
                    placeholder="Filled variant"
                    variant="filled"
                    value={formData.search}
                    onChange={handleInputChange('search')}
                  />
                  <Input
                    placeholder="Flushed variant"
                    variant="flushed"
                    value={formData.search}
                    onChange={handleInputChange('search')}
                  />
                </div>
              </div>

              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  Different Sizes
                </Text>
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
                  <Input
                    size="sm"
                    placeholder="Small input"
                    value={formData.search}
                    onChange={handleInputChange('search')}
                  />
                  <Input
                    size="md"
                    placeholder="Medium input (default)"
                    value={formData.search}
                    onChange={handleInputChange('search')}
                  />
                  <Input
                    size="lg"
                    placeholder="Large input"
                    value={formData.search}
                    onChange={handleInputChange('search')}
                  />
                </div>
              </div>

              <div>
                <Text as="h3" size="lg" weight="medium" style={{ marginBottom: '1rem' }}>
                  With Icons
                </Text>
                <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
                  <Input
                    leftIcon={<SearchIcon />}
                    placeholder="Search with left icon"
                    value={formData.search}
                    onChange={handleInputChange('search')}
                  />
                  <Input
                    leftIcon={<UserIcon />}
                    rightIcon={<Button variant="ghost" size="sm" style={{ padding: '0.25rem' }}>👤</Button>}
                    placeholder="Username with both icons"
                    value={formData.username}
                    onChange={handleInputChange('username')}
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
              📝 Form Example
            </Text>
            <Badge variant="primary">Real form with validation</Badge>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                
                <Input
                  label="Email Address"
                  type="email"
                  leftIcon={<EmailIcon />}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email}
                  helperText={!errors.email ? 'We\'ll never share your email' : undefined}
                />

                <Input
                  label="Username"
                  leftIcon={<UserIcon />}
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleInputChange('username')}
                  isInvalid={!!errors.username}
                  errorMessage={errors.username}
                />

                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password}
                  rightIcon={
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ padding: '0.25rem' }}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </Button>
                  }
                />

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <Button type="submit" variant="primary">
                    Submit Form
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => {
                      setFormData({ email: '', password: '', username: '', search: '' });
                      setErrors({});
                    }}
                  >
                    Reset
                  </Button>
                </div>

              </div>
            </form>
          </CardBody>
        </Card>

        {/* Focus Behavior Guide */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">
              🎨 Focus Behavior Guide
            </Text>
            <Badge variant="success">Expected behavior</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ 
                padding: '1rem', 
                backgroundColor: 'var(--success-light)', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--success-color)'
              }}>
                <Text weight="bold" color="success">✅ Expected Focus Behavior:</Text>
                <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
                  <li>Default state: Border uses <code>--input-border</code> color</li>
                  <li>Hover state: Border changes to <code>--input-border-hover</code></li>
                  <li>Focus state: Border changes to <code>--input-border-focus</code> with focus ring</li>
                  <li>Blur state: Returns to default <code>--input-border</code> color</li>
                  <li>Error state: Border uses <code>--error-color</code> and overrides other states</li>
                </ul>
              </div>

              <div style={{ 
                padding: '1rem', 
                backgroundColor: 'var(--info-light)', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--info)'
              }}>
                <Text weight="bold" color="info">💡 How to Test:</Text>
                <ol style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
                  <li>Click on any input field to focus it</li>
                  <li>Notice the border color and focus ring appear</li>
                  <li>Click outside the input or press Tab to blur</li>
                  <li>Verify the border returns to the default color</li>
                  <li>Hover over inputs to see hover state</li>
                </ol>
              </div>
            </div>
          </CardBody>
        </Card>

      </div>
    </div>
  );
}

export default function InputFocusExample() {
  return (
    <ThemeProvider persistToLocalStorage={true} localStorageKey="input-focus-demo">
      <InputFocusDemo />
    </ThemeProvider>
  );
}