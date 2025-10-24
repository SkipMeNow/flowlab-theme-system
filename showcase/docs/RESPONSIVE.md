# Responsive Design System

FlowLabKit UI provides comprehensive responsive design capabilities that automatically adapt to different screen sizes and devices. Components are responsive by default, providing an optimal experience across desktop, tablet, and mobile devices.

## Responsive Breakpoints

The system uses a mobile-first approach with the following breakpoints:

```typescript
const breakpoints = {
  xs: '320px',  // Extra small devices (phones in portrait)
  sm: '480px',  // Small devices (phones in landscape)
  md: '768px',  // Medium devices (tablets)
  lg: '1024px', // Large devices (laptops)
  xl: '1200px', // Extra large devices (desktops)
  xxl: '1400px' // Extra extra large devices (large desktops)
};
```

## Responsive Hooks

### useBreakpoint()
Returns the current breakpoint based on screen width:

```typescript
import { useBreakpoint } from 'flowlabkit-ui';

function MyComponent() {
  const breakpoint = useBreakpoint(); // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  
  return (
    <div>
      Current breakpoint: {breakpoint}
    </div>
  );
}
```

### useIsMobile()
Returns true if the current device is considered mobile (xs or sm breakpoint):

```typescript
import { useIsMobile } from 'flowlabkit-ui';

function MyComponent() {
  const isMobile = useIsMobile();
  
  return (
    <div>
      {isMobile ? 'Mobile view' : 'Desktop view'}
    </div>
  );
}
```

### useOrientation()
Returns the current device orientation:

```typescript
import { useOrientation } from 'flowlabkit-ui';

function MyComponent() {
  const orientation = useOrientation(); // 'portrait' | 'landscape'
  
  return (
    <div>
      Orientation: {orientation}
    </div>
  );
}
```

### useResponsiveValue()
Returns different values based on breakpoints:

```typescript
import { useResponsiveValue } from 'flowlabkit-ui';

function MyComponent() {
  const columns = useResponsiveValue({
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
  });
  
  return (
    <div style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      Grid with {columns} columns
    </div>
  );
}
```

### useHoverSupport()
Detects if the device supports hover interactions:

```typescript
import { useHoverSupport } from 'flowlabkit-ui';

function MyComponent() {
  const hasHover = useHoverSupport();
  
  return (
    <button 
      className={hasHover ? 'with-hover' : 'touch-friendly'}
    >
      Button
    </button>
  );
}
```

## Responsive Components

### Automatic Responsive Behavior

Most components are responsive by default and automatically adjust their appearance for mobile devices:

```typescript
import { Button, Input, Card } from 'flowlabkit-ui';

function MyForm() {
  return (
    <Card>
      {/* Automatically responsive - larger touch targets on mobile */}
      <Input 
        label="Email" 
        type="email" 
        // responsive={true} is default
      />
      
      {/* Auto-sizes from sm to md on mobile for better touch targets */}
      <Button size="sm">
        Submit
      </Button>
    </Card>
  );
}
```

### ResponsiveContainer

A smart container that automatically adjusts layout based on screen size:

```typescript
import { ResponsiveContainer, Card } from 'flowlabkit-ui';

function MyGrid() {
  return (
    <ResponsiveContainer
      layout="auto"        // 'stack' on mobile, 'grid' on desktop
      columns={3}          // Max 3 columns, auto-reduces on mobile
      gap="md"             // Auto-reduces to smaller gap on mobile
      padding="lg"         // Auto-reduces padding on mobile
      maxWidth="lg"        // Constrains width on large screens
      centered={true}      // Centers the container
    >
      <Card>Item 1</Card>
      <Card>Item 2</Card>
      <Card>Item 3</Card>
    </ResponsiveContainer>
  );
}
```

### Layout Component

A flexible layout component for building responsive designs:

```typescript
import { Layout, Card } from 'flowlabkit-ui';

function MyLayout() {
  return (
    <Layout
      direction="auto"     // 'row' on desktop, 'column' on mobile
      gap="lg"            // Auto-reduces on mobile
      padding="xl"        // Auto-reduces on mobile
      align="stretch"     // Items stretch to container width
      justify="between"   // Space items evenly
      wrap={true}         // Allow wrapping
      centered={true}     // Center the layout
    >
      <Card>Sidebar</Card>
      <Card>Main Content</Card>
    </Layout>
  );
}
```

## Mobile-Specific Features

### Touch Targets
Components automatically use larger touch targets (44px minimum) on mobile devices for better accessibility.

### Safe Area Support
Layout components automatically respect device safe areas (notches, home indicators) on mobile devices.

### Reduced Motion
Components respect user's motion preferences and provide reduced animations when requested.

### Orientation Changes
Components automatically adapt when device orientation changes.

## Responsive Design Patterns

### Grid Layouts
```typescript
import { ResponsiveContainer, Card } from 'flowlabkit-ui';

function ProductGrid() {
  return (
    <ResponsiveContainer
      layout="grid"
      columns={4}  // 4 on desktop, 3 on tablet, 2 on mobile, 1 on xs
      gap="lg"
      padding="xl"
    >
      {products.map(product => (
        <Card key={product.id}>
          {product.name}
        </Card>
      ))}
    </ResponsiveContainer>
  );
}
```

### Responsive Navigation
```typescript
import { Layout, Button, useIsMobile } from 'flowlabkit-ui';

function Navigation() {
  const isMobile = useIsMobile();
  
  return (
    <Layout 
      direction={isMobile ? 'column' : 'row'}
      gap="md"
      padding="lg"
    >
      <Button variant={isMobile ? 'filled' : 'ghost'}>
        Home
      </Button>
      <Button variant={isMobile ? 'filled' : 'ghost'}>
        About
      </Button>
      <Button variant={isMobile ? 'filled' : 'ghost'}>
        Contact
      </Button>
    </Layout>
  );
}
```

### Conditional Rendering
```typescript
import { useBreakpoint, useIsMobile } from 'flowlabkit-ui';

function ConditionalContent() {
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();
  
  return (
    <div>
      {/* Show different content based on screen size */}
      {isMobile ? (
        <MobileNavigation />
      ) : (
        <DesktopNavigation />
      )}
      
      {/* Show more details on larger screens */}
      {breakpoint !== 'xs' && <DetailedView />}
    </div>
  );
}
```

## Theming with Responsive Values

Themes include responsive values that automatically adjust based on screen size:

```typescript
const customTheme = {
  ...lightTheme,
  mobile: {
    touchTarget: '48px',     // Larger touch targets
    safeAreaTop: '20px',     // Account for status bar
    safeAreaBottom: '34px',  // Account for home indicator
    tapHighlight: 'rgba(0, 0, 0, 0.1)'
  },
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    xxl: '1400px'
  }
};
```

## Best Practices

1. **Mobile-First Design**: Start with mobile layouts and enhance for larger screens
2. **Touch-Friendly**: Ensure interactive elements are at least 44px on mobile
3. **Content Hierarchy**: Use responsive typography to establish clear hierarchy
4. **Performance**: Consider loading different content/images based on screen size
5. **Testing**: Test on real devices, not just browser dev tools

## Performance Considerations

The responsive system uses efficient event listeners and CSS media queries to minimize performance impact:

- Breakpoint detection uses `matchMedia` API
- CSS variables update automatically based on screen size
- Components only re-render when breakpoints actually change
- Mobile detection is cached to avoid repeated calculations

## Accessibility

The responsive system includes accessibility features:

- Respects user's motion preferences
- Provides appropriate touch targets on mobile
- Maintains focus management during orientation changes
- Supports screen readers across all breakpoints