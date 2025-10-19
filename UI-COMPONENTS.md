# FlowLab UI Components

A comprehensive set of themed UI components built on top of the FlowLab theme system.

## Installation

```bash
npm install @flowlab/theme-system
```

## Components Available

### 🔗 Link
Themed link component with multiple variants and states.

```tsx
import { Link } from '@flowlab/theme-system';

<Link href="/page" variant="primary">Primary Link</Link>
<Link href="https://example.com" external>External Link</Link>
<Link href="/page" underline="always">Always Underlined</Link>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'accent' | 'muted'
- `size`: 'sm' | 'md' | 'lg'
- `underline`: 'always' | 'hover' | 'never'
- `external`: boolean (adds external icon)
- `disabled`: boolean

### 🔘 Button
Full-featured button component with loading states and icons.

```tsx
import { Button } from '@flowlab/theme-system';

<Button variant="primary">Primary Button</Button>
<Button variant="outline" size="lg">Large Outline</Button>
<Button loading leftIcon={<Icon />}>Loading Button</Button>
<Button fullWidth>Full Width Button</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `loading`: boolean
- `leftIcon` / `rightIcon`: ReactNode

### 📝 Input
Form input with labels, helper text, and error states.

```tsx
import { Input } from '@flowlab/theme-system';

<Input 
  label="Email"
  placeholder="Enter email..."
  helperText="We'll never share your email"
/>
<Input 
  variant="filled"
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>
<Input 
  isInvalid
  errorMessage="This field is required"
/>
```

**Props:**
- `variant`: 'default' | 'filled' | 'flushed'
- `size`: 'sm' | 'md' | 'lg'
- `label`: string
- `helperText`: string
- `errorMessage`: string
- `leftIcon` / `rightIcon`: ReactNode

### 🎴 Card
Container component with header, body, and footer sections.

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@flowlab/theme-system';

<Card variant="elevated" hoverable>
  <CardHeader>
    <h3>Card Title</h3>
    <Badge>Status</Badge>
  </CardHeader>
  <CardBody>
    <p>Card content goes here...</p>
  </CardBody>
  <CardFooter>
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant`: 'elevated' | 'outlined' | 'filled'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `radius`: 'none' | 'sm' | 'md' | 'lg'
- `shadow`: 'none' | 'sm' | 'md' | 'lg'
- `hoverable`: boolean

### 🏷️ Badge
Small status indicators and labels.

```tsx
import { Badge } from '@flowlab/theme-system';

<Badge variant="success">Success</Badge>
<Badge variant="warning" size="lg">Warning</Badge>
<Badge dot variant="error" />
<Badge shape="pill">Pill Badge</Badge>
```

**Props:**
- `variant`: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
- `size`: 'sm' | 'md' | 'lg'
- `shape`: 'rounded' | 'pill' | 'square'
- `dot`: boolean (renders as a small dot)

### 📖 Text
Typography component with semantic styling.

```tsx
import { Text } from '@flowlab/theme-system';

<Text as="h1" size="3xl" weight="bold">Main Title</Text>
<Text color="secondary" size="sm">Helper text</Text>
<Text truncate style={{ width: '200px' }}>Long text that truncates</Text>
<Text lineClamp={3}>Text with line clamping</Text>
```

**Props:**
- `as`: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
- `weight`: 'normal' | 'medium' | 'semibold' | 'bold'
- `color`: 'primary' | 'secondary' | 'tertiary' | 'muted' | 'accent' | 'success' | 'warning' | 'error' | 'info'
- `align`: 'left' | 'center' | 'right' | 'justify'
- `truncate`: boolean
- `lineClamp`: number

## Complete Example

```tsx
import React from 'react';
import { 
  ThemeProvider, 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  Text,
  Input,
  Badge 
} from '@flowlab/theme-system';
import { oceanTheme } from '@flowlab/theme-system/themes';

function App() {
  return (
    <ThemeProvider theme={oceanTheme}>
      <div style={{ padding: '24px' }}>
        <Text as="h1" size="3xl" weight="bold">
          Welcome to FlowLab UI
        </Text>
        
        <Card style={{ marginTop: '24px' }}>
          <CardHeader>
            <Text as="h2" weight="semibold">User Profile</Text>
            <Badge variant="success">Active</Badge>
          </CardHeader>
          <CardBody>
            <Input 
              label="Full Name"
              placeholder="Enter your name"
              style={{ marginBottom: '16px' }}
            />
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```

## Theme Integration

All components automatically:
- ✅ **Use CSS variables** from the active theme
- ✅ **Respond to theme changes** instantly
- ✅ **Support dark/light modes** seamlessly
- ✅ **Scale with font size** settings
- ✅ **Adapt to compact mode** when enabled

## Customization

Components use CSS variables, so you can override styles:

```css
/* Custom button styles */
.my-custom-button {
  --btn-primary-bg: #custom-color;
  --btn-primary-bg-hover: #custom-hover-color;
}
```

Or use the `style` prop for component-specific styling:

```tsx
<Button 
  style={{ 
    backgroundColor: 'var(--accent-600)',
    borderRadius: '999px' 
  }}
>
  Custom Styled Button
</Button>
```