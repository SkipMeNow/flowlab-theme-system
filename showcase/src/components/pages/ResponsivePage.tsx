import React, { useState, useEffect } from "react";
import { 
  Text, 
  Layout, 
  Card, 
  CardBody, 
  Button, 
  useBreakpoint, 
  useIsMobile, 
  useOrientation,
  useResponsiveValue,
  ResponsiveWrapper
} from "../../../../src";
import { DocPageLayout } from "../DocPageLayout";
import { CodeExample } from "../CodeExample";

export const ResponsivePage: React.FC = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();
  const orientation = useOrientation();
  
  const columns = useResponsiveValue({
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    xxl: 6,
    default: 4
  });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const responsiveWrapperCode = `import { ResponsiveProvider, ResponsiveWrapper } from '@flowlabkit/ui';

function ResponsiveApp() {
  return (
    <ResponsiveProvider>
      <div style={{ minHeight: "100vh", position: 'relative' }}>
        {/* Navigation: Desktop sidebar, tablet drawer, mobile hamburger */}
        <ResponsiveWrapper behavior="Navigation">
          <Navigation />
        </ResponsiveWrapper>

        {/* Header: Responsive positioning and spacing */}
        <ResponsiveWrapper behavior="Header">
          <Header />
        </ResponsiveWrapper>

        {/* Content: Responsive margins, spacing, and mobile optimizations */}
        <ResponsiveWrapper behavior="Content">
          <div style={{ maxWidth: '1200px', padding: '2rem' }}>
            {/* ResponsiveWrapper overrides these styles based on screen size */}
          </div>
        </ResponsiveWrapper>
      </div>
    </ResponsiveProvider>
  );
}`;

  const responsiveHooksCode = `import { 
  useBreakpoint, 
  useIsMobile, 
  useOrientation, 
  useResponsiveValue 
} from '@flowlabkit/ui';

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  const orientation = useOrientation();
  
  const columns = useResponsiveValue({
    xs: 1,    // Mobile: 1 column
    sm: 2,    // Small mobile: 2 columns
    md: 3,    // Tablet: 3 columns
    lg: 4,    // Desktop: 4 columns
    xl: 5,    // Large desktop: 5 columns
    xxl: 6,   // Extra large: 6 columns
    default: 4 // Default fallback
  });
  
  return (
    <div style={{
      padding: isMobile ? '1rem' : '2rem',
      maxWidth: breakpoint === 'xs' ? '100%' : '1200px',
      flexDirection: orientation === 'portrait' ? 'column' : 'row',
      display: 'grid',
      gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
      gap: '1rem'
    }}>
      <h1>Breakpoint: {breakpoint}</h1>
      <p>Mobile: {isMobile ? 'Yes' : 'No'}</p>
      <p>Orientation: {orientation}</p>
      <p>Columns: {columns}</p>
    </div>
  );
}`;

  const layoutBehaviorsCode = `// NavigationLayout.tsx - Unified navigation component
export default function NavigationLayout({ children, ...props }) {
  const { layoutMode } = useResponsiveContext();
  
  const renderDesktop = () => (
    // Fixed 250px sidebar with navigation items
    <div style={{ width: '250px', position: 'fixed', height: '100vh' }}>
      {children}
    </div>
  );
  
  const renderTablet = () => (
    // Collapsible drawer with toggle button
    <div>
      <button onClick={toggleDrawer}>☰</button>
      <div className={isOpen ? 'drawer-open' : 'drawer-closed'}>
        {children}
      </div>
    </div>
  );
  
  const renderMobile = () => (
    // Hamburger menu with slide-out drawer
    <div>
      <button className="hamburger" onClick={toggleDrawer}>
        <span></span><span></span><span></span>
      </button>
      <div className="mobile-drawer" style={{ 
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' 
      }}>
        {children}
      </div>
    </div>
  );
  
  switch (layoutMode) {
    case 'desktop': return renderDesktop();
    case 'tablet': return renderTablet();
    case 'mobile': return renderMobile();
    default: return renderDesktop();
  }
}`;

  const cssLikeOverrideCode = `// CSS-like override system example
function MyComponent() {
  return (
    <ResponsiveWrapper behavior="Content">
      <div style={{
        maxWidth: '1200px',        // Desktop: Overridden to centered with margins
        padding: '2rem',           // Tablet: Overridden to 1.5rem
        backgroundColor: 'white'   // Mobile: Overridden to 1rem, keeps white
      }}>
        <h1>Content that adapts automatically</h1>
        <p>ResponsiveWrapper ALWAYS takes precedence over these styles</p>
      </div>
    </ResponsiveWrapper>
  );
}

// Actual applied styles:
// Desktop: 250px left margin, 2rem padding, 7rem top padding
// Tablet: Centered, 1.5rem padding, 900px max-width, 6rem top padding  
// Mobile: Full width, 1rem padding, 6rem top padding, interaction blocking`;

  const breakpointsInfo = [
    { name: 'xs', range: '0-479px', description: 'Mobile portrait' },
    { name: 'sm', range: '480-639px', description: 'Mobile landscape' },
    { name: 'md', range: '640-767px', description: 'Small tablet' },
    { name: 'lg', range: '768-1023px', description: 'Tablet/small desktop' },
    { name: 'xl', range: '1024-1279px', description: 'Desktop' },
    { name: 'xxl', range: '1280px+', description: 'Large desktop' }
  ];

  return (
    <DocPageLayout
      title="Responsive System"
      description="Advanced responsive design system with CSS-like behavior, unified layout components, and real-time breakpoint detection."
    >
      <Layout direction="column" gap="xl">
        {/* Live Demo */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Live Responsive Demo
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            Resize your browser window to see the responsive system in action. 
            All values update in real-time as you change the window size.
          </Text>
          
          <Card>
            <CardBody>
              <Layout direction="column" gap="md">
                <Text weight="semibold" size="lg">Current State</Text>
                <Layout direction="row" gap="lg" wrap>
                  <Layout direction="column" gap="sm">
                    <Text weight="medium">Window Size</Text>
                    <Text size="lg" style={{ fontFamily: 'monospace' }}>
                      {windowSize.width} × {windowSize.height}px
                    </Text>
                  </Layout>
                  
                  <Layout direction="column" gap="sm">
                    <Text weight="medium">Breakpoint</Text>
                    <Text 
                      size="lg" 
                      style={{ 
                        fontFamily: 'monospace',
                        color: breakpoint === 'xs' || breakpoint === 'sm' ? '#ef4444' : 
                               breakpoint === 'md' || breakpoint === 'lg' ? '#f59e0b' : '#10b981'
                      }}
                    >
                      {breakpoint}
                    </Text>
                  </Layout>
                  
                  <Layout direction="column" gap="sm">
                    <Text weight="medium">Device Type</Text>
                    <Text size="lg">
                      {isMobile ? '📱 Mobile' : '💻 Desktop'}
                    </Text>
                  </Layout>
                  
                  <Layout direction="column" gap="sm">
                    <Text weight="medium">Orientation</Text>
                    <Text size="lg">
                      {orientation === 'portrait' ? '📱 Portrait' : '📺 Landscape'}
                    </Text>
                  </Layout>
                  
                  <Layout direction="column" gap="sm">
                    <Text weight="medium">Responsive Columns</Text>
                    <Text size="lg" style={{ fontFamily: 'monospace' }}>
                      {columns} columns
                    </Text>
                  </Layout>
                </Layout>
              </Layout>
            </CardBody>
          </Card>
        </Layout>

        {/* Breakpoints */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Breakpoint System
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            FlowLabKit UI uses a mobile-first breakpoint system with 6 breakpoints 
            for comprehensive device coverage.
          </Text>
          
          <Layout direction="column" gap="sm">
            {breakpointsInfo.map((bp) => (
              <Card key={bp.name} style={{ 
                borderColor: breakpoint === bp.name ? '#3b82f6' : undefined,
                borderWidth: breakpoint === bp.name ? '2px' : '1px'
              }}>
                <CardBody>
                  <Layout direction="row" justify="between" align="center">
                    <Layout direction="column" gap="xs">
                      <Text weight="semibold" size="lg">
                        {bp.name.toUpperCase()}
                        {breakpoint === bp.name && ' (Current)'}
                      </Text>
                      <Text size="sm" style={{ color: '#6b7280' }}>
                        {bp.description}
                      </Text>
                    </Layout>
                    <Text style={{ 
                      fontFamily: 'monospace', 
                      fontSize: '0.875rem',
                      color: breakpoint === bp.name ? '#3b82f6' : '#6b7280'
                    }}>
                      {bp.range}
                    </Text>
                  </Layout>
                </CardBody>
              </Card>
            ))}
          </Layout>
        </Layout>

        {/* Three Approaches */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Three Responsive Approaches
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            FlowLabKit UI provides three ways to implement responsive design, 
            each with different levels of control and automation.
          </Text>
          
          <Layout direction="column" gap="md">
            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold" size="lg">1. ResponsiveWrapper (CSS-Like Override System)</Text>
                  <Text size="sm" style={{ lineHeight: 1.6 }}>
                    <strong>Best for:</strong> Standard responsive patterns (navigation, content areas, headers)<br/>
                    <strong>Pros:</strong> Automatic, consistent, CSS-like behavior<br/>
                    <strong>Cons:</strong> Less granular control
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold" size="lg">2. Responsive Hooks (Manual Control)</Text>
                  <Text size="sm" style={{ lineHeight: 1.6 }}>
                    <strong>Best for:</strong> Custom responsive logic not covered by standard behaviors<br/>
                    <strong>Pros:</strong> Full control, flexible<br/>
                    <strong>Cons:</strong> Manual work, more code
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold" size="lg">3. Hardcoded CSS (Static)</Text>
                  <Text size="sm" style={{ lineHeight: 1.6 }}>
                    <strong>Best for:</strong> Simple, non-responsive components<br/>
                    <strong>Pros:</strong> Fast, simple<br/>
                    <strong>Cons:</strong> No responsiveness
                  </Text>
                </Layout>
              </CardBody>
            </Card>
          </Layout>
        </Layout>

        {/* ResponsiveWrapper Usage */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            ResponsiveWrapper Usage
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            The ResponsiveWrapper component automatically applies responsive behavior 
            based on predefined patterns. It works like CSS media queries but with React components.
          </Text>
          <CodeExample code={responsiveWrapperCode} language="tsx" />
        </Layout>

        {/* Responsive Hooks */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Responsive Hooks
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            For custom responsive behavior, use the provided hooks. All hooks update 
            in real-time when the window is resized.
          </Text>
          <CodeExample code={responsiveHooksCode} language="tsx" />
        </Layout>

        {/* Layout Behaviors */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Unified Layout Components
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            Each layout component handles all screen sizes internally. Instead of separate 
            device-specific files, we have unified components that adapt automatically.
          </Text>
          <CodeExample code={layoutBehaviorsCode} language="tsx" />
        </Layout>

        {/* CSS-Like Override System */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            CSS-Like Override System
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            ResponsiveWrapper works like CSS media queries - it always takes precedence 
            over wrapped component styles, providing consistent responsive behavior.
          </Text>
          <CodeExample code={cssLikeOverrideCode} language="tsx" />
        </Layout>

        {/* Available Behaviors */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Available Behaviors
          </Text>
          <Layout direction="column" gap="sm">
            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">Navigation</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    <strong>Desktop:</strong> Fixed 250px sidebar<br/>
                    <strong>Tablet:</strong> Collapsible drawer with toggle button<br/>
                    <strong>Mobile:</strong> Hamburger menu with slide-out drawer
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">Content</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    <strong>Desktop:</strong> 250px left margin, 2rem padding, 7rem top padding<br/>
                    <strong>Tablet:</strong> Centered, 1.5rem padding, 900px max-width<br/>
                    <strong>Mobile:</strong> Full width, 1rem padding, interaction blocking when drawer open
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">Header</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    <strong>Desktop:</strong> Fixed header, left: 250px, 5rem height<br/>
                    <strong>Tablet:</strong> Full-width, 4.5rem height, 4rem left padding<br/>
                    <strong>Mobile:</strong> Full-width, 4rem height, 5rem left padding for hamburger
                  </Text>
                </Layout>
              </CardBody>
            </Card>
          </Layout>
        </Layout>

        {/* Best Practices */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Best Practices
          </Text>
          <Layout direction="column" gap="sm">
            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">✅ Mobile-First Development</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Design for mobile first, then progressively enhance for larger screens. 
                    The system follows mobile-first principles.
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">✅ Use ResponsiveWrapper for Standard Patterns</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    For navigation, content areas, and headers, prefer ResponsiveWrapper 
                    over custom responsive logic.
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">✅ Test on Real Devices</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Always test on actual mobile devices, not just browser dev tools. 
                    Touch interactions and viewport behavior can differ.
                  </Text>
                </Layout>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Layout direction="column" gap="sm">
                  <Text weight="semibold">⚠️ Avoid Nested ResponsiveWrappers</Text>
                  <Text size="sm" style={{ lineHeight: 1.5 }}>
                    Don't nest ResponsiveWrapper components. Each should be at the top level 
                    of its respective area (navigation, header, content).
                  </Text>
                </Layout>
              </CardBody>
            </Card>
          </Layout>
        </Layout>

        {/* Performance Notes */}
        <Layout direction="column" gap="md">
          <Text as="h2" size="xl" weight="bold">
            Performance Considerations
          </Text>
          <Text size="md" style={{ lineHeight: 1.6 }}>
            The responsive system is optimized for performance with minimal re-renders 
            and efficient event handling.
          </Text>
          <Layout direction="column" gap="sm">
            <Text size="md">
              • <strong>Debounced Resize Events:</strong> Window resize events are debounced to prevent excessive updates
            </Text>
            <Text size="md">
              • <strong>Memoized Context:</strong> ResponsiveProvider context is memoized to prevent unnecessary re-renders
            </Text>
            <Text size="md">
              • <strong>CSS Transitions:</strong> Layout changes use CSS transitions for smooth animations
            </Text>
            <Text size="md">
              • <strong>Efficient Detection:</strong> Breakpoint detection uses efficient window.matchMedia when available
            </Text>
          </Layout>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};