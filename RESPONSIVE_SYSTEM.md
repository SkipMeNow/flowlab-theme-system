# FlowLabKit Responsive Behavior System

## Overview

The FlowLabKit Responsive Behavior System is a CSS-like, behavior-based responsive layout system that **always overrides** component layouts based on screen size. Similar to how CSS media queries override base styles, ResponsiveWrapper automatically applies responsive behaviors that take precedence over the wrapped component's original layout properties.

Components specify a `behavior` parameter to get wrapped with appropriate responsive behavior that handles desktop, tablet, and mobile layouts automatically.

## System Architecture

### 1. Core Components

- **ResponsiveProvider**: Context provider that manages responsive state and drawer controls
- **ResponsiveWrapper**: Higher-order component that wraps components with behavior-specific layouts
- **useResponsive**: Hook to access responsive context (layout mode, drawer controls)

### 2. Behavior System

Components specify their responsive behavior using the `behavior` prop:

```tsx
<ResponsiveWrapper behavior="Navigation">
  <Navigation />
</ResponsiveWrapper>
```

### 3. Layout Modes

- **Desktop**: Large screens (lg, xl, xxl breakpoints)
- **Tablet**: Medium screens (md breakpoint)
- **Mobile**: Small screens (xs, sm breakpoints)

### 4. Available Behaviors

- `Navigation`: Transforms fixed sidebar into hamburger menu with slide-out drawer
- `Header`: Optimizes header layout with proper mobile spacing and hamburger menu accommodation
- `Content`: Provides mobile-optimized content containers with proper spacing and interaction handling
- `Modal`: (To be implemented)
- `Dropdown`: (To be implemented)
- `Card`: (To be implemented)
- `Button`: (To be implemented)
- `Form`: (To be implemented)

## File Structure

```
src/layouts/
├── types.ts              # Behavior types and interfaces
├── ResponsiveProvider.tsx # Main responsive context provider
├── registry.tsx          # Behavior to layout component mapping
├── index.ts              # Public exports
├── NavigationLayout.tsx  # Navigation behavior (desktop + tablet + mobile)
├── ContentLayout.tsx     # Content behavior (desktop + tablet + mobile)
└── HeaderLayout.tsx      # Header behavior (desktop + tablet + mobile)
```

## Implementation Details

### Layout Behaviors (Unified Components)

Each layout component internally handles all screen sizes, eliminating the need for separate device-specific files.

#### Navigation Layout (NavigationLayout.tsx)
- **Desktop**: Fixed 250px sidebar, proper z-indexing (zIndex: 100)
- **Tablet**: Collapsible sidebar with toggle button, slide-out drawer
- **Mobile**: 
  - Hamburger menu button (3rem size, top-left position)
  - Slide-out drawer from left (280px width)
  - Backdrop overlay with click-to-close functionality
  - Animated hamburger icon (transforms to X when open)
  - Body scroll prevention when drawer is open

#### Content Layout (ContentLayout.tsx)
- **Desktop**: 250px left margin for sidebar, 2rem padding, 7rem top padding for header
- **Tablet**: Centered container, 1.5rem padding, 900px max-width, 6rem top padding
- **Mobile**: 
  - Full-width (100%) with 1rem padding
  - 6rem top padding for hamburger menu and header clearance
  - Interaction blocking when navigation drawer is open
  - Content dimming effect (opacity: 0.7) when drawer is open
  - Mobile-optimized typography (16px base font, 1.5 line height)
  - Proper box-sizing and overflow handling

#### Header Layout (HeaderLayout.tsx)
- **Desktop**: Fixed header, left: 250px (accounts for sidebar), 5rem height, 2rem padding
- **Tablet**: Full-width header, 4.5rem height, 4rem left padding for toggle button
- **Mobile**:
  - Full-width header, 4rem height, compact padding
  - 5rem left padding to accommodate hamburger menu
  - Proper flex layout for single-line content
  - Enhanced shadow for visual separation (zIndex: 1000)

### Usage Example (Current Implementation)

```tsx
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ResponsiveProvider>
        <div style={{ 
          minHeight: "100vh", 
          position: 'relative',
          width: '100%',
          overflow: 'hidden' // Prevent horizontal scroll
        }}>
          {/* Navigation with unified responsive behavior */}
          <ResponsiveWrapper behavior="Navigation">
            <Navigation 
              currentPage={currentPage} 
              onPageChange={setCurrentPage} 
            />
          </ResponsiveWrapper>

          {/* Header with unified responsive behavior */}
          <ResponsiveWrapper behavior="Header">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <DebugIndicator breakpoint={breakpoint} isMobile={isMobile} />
              <ThemeToggleButton onClick={toggleTheme} theme={theme} />
            </div>
          </ResponsiveWrapper>

          {/* Main content with unified responsive behavior */}
          <ResponsiveWrapper behavior="Content">
            <div>
              {renderCurrentPage()}
            </div>
          </ResponsiveWrapper>
        </div>
      </ResponsiveProvider>
    </ThemeProvider>
  );
}
```

## Three Responsive Layout Approaches

### 1. **Hardcoded CSS** (Static)
```tsx
<div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
  {/* Always the same on all devices */}
</div>
```
**Best for**: Simple, non-responsive components  
**Pros**: Fast, simple  
**Cons**: No responsiveness

### 2. **useResponsive Hooks** (Manual Control)
```tsx
function MyComponent() {
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const orientation = useOrientation();
  
  return (
    <div style={{
      padding: isMobile ? '1rem' : '2rem',
      maxWidth: breakpoint === 'xs' ? '100%' : '1200px',
      flexDirection: orientation === 'portrait' ? 'column' : 'row'
    }}>
      {/* Manual responsive control */}
    </div>
  );
}
```
**Best for**: Custom responsive logic  
**Pros**: Full control, flexible  
**Cons**: Manual work, more code

### 3. **ResponsiveWrapper** (CSS-Like Override System)
```tsx
<ResponsiveWrapper behavior="Content">
  <Layout padding="xl" style={{ maxWidth: '1200px' }}>
    {/* ResponsiveWrapper ALWAYS overrides these styles based on screen size */}
    {/* Desktop: 250px left margin, 2rem padding, proper header spacing */}
    {/* Tablet: Centered, 1.5rem padding, 900px max-width */}
    {/* Mobile: Full width, 1rem padding, hamburger menu spacing */}
  </Layout>
</ResponsiveWrapper>
```
**Best for**: Standard responsive patterns  
**Pros**: Automatic, consistent, CSS-like behavior  
**Cons**: Less granular control

## Available Responsive Hooks

### `useBreakpoint()`
Returns the current breakpoint string with real-time window resize detection.

```tsx
const breakpoint = useBreakpoint();
// 'xs' (0-479px), 'sm' (480-639px), 'md' (640-767px), 
// 'lg' (768-1023px), 'xl' (1024-1279px), 'xxl' (1280px+)

// Example usage:
const padding = breakpoint === 'xs' ? '1rem' : '2rem';
```

### `useIsMobile()`
Returns `true` if the current screen size is mobile-sized (updates on window resize).

```tsx
const isMobile = useIsMobile();
// true for xs/sm breakpoints, false for md/lg/xl/xxl

// Example usage:
return isMobile ? <MobileComponent /> : <DesktopComponent />;
```

### `useOrientation()`
Returns the current screen orientation with real-time updates.

```tsx
const orientation = useOrientation();
// 'portrait' or 'landscape'

// Example usage:
const flexDirection = orientation === 'portrait' ? 'column' : 'row';
```

### `useResponsiveValue()`
Returns different values based on the current breakpoint (responsive prop system).

```tsx
const columns = useResponsiveValue({
  xs: 1,    // Mobile: 1 column
  sm: 2,    // Small mobile: 2 columns
  md: 3,    // Tablet: 3 columns
  lg: 4,    // Desktop: 4 columns
  xl: 5,    // Large desktop: 5 columns
  xxl: 6    // Extra large: 6 columns
});

// Example with fallback:
const spacing = useResponsiveValue({
  xs: '0.5rem',
  md: '1rem',
  lg: '1.5rem'
}, '1rem'); // Default fallback value
```

All hooks automatically update when the window is resized, providing real-time responsive behavior.

## Implementation Details

### ResponsiveProvider Context
The `ResponsiveProvider` manages global responsive state:

```tsx
interface ResponsiveContextType {
  isMobileDrawerOpen: boolean;
  setIsMobileDrawerOpen: (open: boolean) => void;
  layoutMode: 'desktop' | 'tablet' | 'mobile';
}
```

### ResponsiveWrapper Component
The `ResponsiveWrapper` applies behavior-specific layouts based on screen size:

```tsx
<ResponsiveWrapper behavior="Navigation">
  <YourComponent />
</ResponsiveWrapper>
```

Available behaviors:
- **Navigation**: Uses `NavigationLayout.tsx` - handles sidebar, drawer, hamburger menu
- **Content**: Uses `ContentLayout.tsx` - handles content spacing, margins, and mobile interactions
- **Header**: Uses `HeaderLayout.tsx` - handles header positioning and sizing

### Layout Architecture
Each unified layout component follows this pattern:

```tsx
// Example: NavigationLayout.tsx
export default function NavigationLayout({ children, ...props }) {
  const { layoutMode } = useResponsiveContext();
  
  const renderDesktop = () => { /* Fixed sidebar */ };
  const renderTablet = () => { /* Collapsible drawer */ };
  const renderMobile = () => { /* Hamburger menu */ };
  
  switch (layoutMode) {
    case 'desktop': return renderDesktop();
    case 'tablet': return renderTablet();
    case 'mobile': return renderMobile();
    default: return renderDesktop();
  }
}
```

## Key Features

1. **Unified Components**: Each layout component (NavigationLayout, ContentLayout, HeaderLayout) handles all screen sizes internally
2. **CSS-Like Override System**: ResponsiveWrapper always takes precedence over wrapped component styles
3. **Real-Time Updates**: All hooks update immediately on window resize
4. **Non-intrusive**: Original components remain unchanged when wrapped
5. **Context-aware**: Uses theme system for consistent styling and ResponsiveProvider for state management
6. **Accessible**: Proper ARIA labels, keyboard navigation, and screen reader support
7. **Smooth animations**: CSS transitions for drawer, hamburger icon, and layout changes
8. **Mobile Optimized**: Prevents horizontal scroll, handles touch interactions, and optimizes content visibility

## Best Practices

### When to Use Each Approach

1. **Use Hardcoded CSS** for:
   - Simple components that don't need responsiveness
   - Static layouts that work well on all devices
   - Performance-critical components where hooks would add overhead

2. **Use Responsive Hooks** for:
   - Custom responsive logic not covered by standard behaviors
   - Components that need fine-grained control over different breakpoints
   - Dynamic content that changes based on screen size

3. **Use ResponsiveWrapper** for:
   - Standard responsive patterns (navigation, content areas, headers)
   - Consistent layout behavior across your application
   - Quick responsive behavior without writing custom logic

### Mobile-First Development
The system follows mobile-first principles:
- Base styles work on mobile
- Progressive enhancement for larger screens
- Touch-friendly interactions on mobile
- Proper spacing and sizing for all devices
6. **Auto-responsive**: Automatically switches layouts based on breakpoints

## Testing

The system is fully implemented and tested on:
- **Local**: http://localhost:3002/
- **Mobile**: http://192.168.1.22:3002/ (for cross-device testing)

## Next Steps

1. Implement additional behavior types (Header, Modal, Dropdown, etc.)
2. Add more mobile layout patterns
3. Implement tablet-specific layouts where needed
4. Add gesture support for mobile interactions
5. Create behavior-specific configuration options

## Technical Notes

- Uses circular dependency pattern (ResponsiveProvider ↔ NavigationLayout) which is intentional for the hook system
- Leverages existing theme system for consistent styling
- Compatible with all existing FlowLabKit components
- No breaking changes to existing API