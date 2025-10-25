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

### Layout Behaviors

#### Navigation Layout
- **Desktop/Tablet**: Pass-through (no wrapper)
- **Mobile**: 
  - Hamburger menu button (fixed position, top-left)
  - Slide-out drawer from left side
  - Backdrop overlay with click-to-close
  - Animated hamburger icon (transforms to X when open)
  - Body scroll prevention when drawer is open

#### Content Layout
- **Desktop**: Full-width container with 2rem padding, 1200px max-width
- **Tablet**: Medium container with 1.5rem padding, 900px max-width
- **Mobile**: 
  - Full-width with 1rem padding
  - Extra top padding (6rem) for hamburger menu clearance
  - Interaction blocking when navigation drawer is open
  - Content dimming effect when drawer is open
  - Mobile-optimized typography (16px base font size)

#### Header Layout
- **Desktop**: 5rem height, 2rem padding
- **Tablet**: 4.5rem height, 1.5rem padding
- **Mobile**:
  - 4rem height, compact padding
  - Left padding (5rem) to accommodate hamburger menu
  - Optimized for single-line content
  - Enhanced shadow for better visual separation

### Usage Example

```tsx
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <ResponsiveProvider>
        {/* Navigation with responsive behavior */}
        <ResponsiveWrapper behavior="Navigation">
          <Navigation 
            currentPage={currentPage} 
            onPageChange={setCurrentPage} 
          />
        </ResponsiveWrapper>

        {/* Main content area with responsive behavior */}
        <ResponsiveWrapper behavior="Content">
          <Layout direction="column">
            {/* Header with responsive behavior */}
            <ResponsiveWrapper behavior="Header">
              <Layout direction="row" justify="between">
                <Logo />
                <ThemeToggle />
              </Layout>
            </ResponsiveWrapper>

            {/* Page content */}
            <div>
              {renderCurrentPage()}
            </div>
          </Layout>
        </ResponsiveWrapper>
      </ResponsiveProvider>
    </ThemeProvider>
  );
}
```

## Key Features

1. **Modular**: Each behavior has separate layout files for different screen sizes
2. **Non-intrusive**: Original components remain unchanged
3. **Context-aware**: Uses theme system for consistent styling
4. **Accessible**: Proper ARIA labels and keyboard navigation support
5. **Smooth animations**: CSS transitions for drawer and hamburger icon
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