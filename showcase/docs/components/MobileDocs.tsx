import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  Button, 
  Text, 
  Input,
  Badge,
  ThemeProvider,
  useBreakpoint, 
  useIsMobile, 
  useOrientation, 
  useResponsiveValue, 
  useHoverSupport 
} from '../../../src';

const CodeBlock = ({ children }: { children: string }) => (
  <div style={{ 
    backgroundColor: 'var(--bg-surface)', 
    border: '1px solid var(--border-color)', 
    borderRadius: 'var(--radius-md)', 
    padding: 'var(--space-md)',
    fontFamily: 'monospace',
    fontSize: 'var(--font-size-sm)',
    whiteSpace: 'pre-wrap',
    overflowX: 'auto'
  }}>
    {children}
  </div>
);

const MobileDemoSection = () => {
  const breakpoint = useBreakpoint();
  const isMobile = useIsMobile();
  const orientation = useOrientation();
  const supportsHover = useHoverSupport();
  
  const responsiveText = useResponsiveValue({
    xs: '📱 Mobile Portrait',
    sm: '📱 Mobile Landscape', 
    md: '📺 Tablet',
    lg: '💻 Desktop',
    xl: '🖥️ Large Desktop',
    xxl: '🖥️ Extra Large',
    default: '🖥️ Desktop'
  });

  return (
    <div style={{ padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
      <Text as="h2" size="xl" weight="bold">Current Device Info</Text>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: 'var(--space-md)' 
      }}>
        <Card>
          <CardBody>
            <Text weight="semibold">Breakpoint</Text>
            <Text size="sm" color="secondary">{breakpoint} ({responsiveText})</Text>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <Text weight="semibold">Device Type</Text>
            <Text size="sm" color="secondary">{isMobile ? 'Mobile/Touch' : 'Desktop'}</Text>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <Text weight="semibold">Orientation</Text>
            <Text size="sm" color="secondary">{orientation}</Text>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <Text weight="semibold">Hover Support</Text>
            <Text size="sm" color="secondary">{supportsHover ? 'Yes' : 'No'}</Text>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export const MobileDocs = () => {
  return (
    <div style={{ padding: 'var(--space-lg)', maxWidth: '1200px' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
          <Text as="h1" size="3xl" weight="bold">Mobile Support</Text>
          <Badge variant="secondary" size="sm">Responsive System</Badge>
        </div>
        <Text as="p" size="lg" color="secondary" style={{ marginBottom: 'var(--space-lg)' }}>
          Comprehensive mobile support with responsive breakpoints, touch optimizations, and device-aware components.
        </Text>
        <div style={{ 
          backgroundColor: 'var(--bg-surface)', 
          border: '1px solid var(--border-color)', 
          borderRadius: 'var(--radius-md)', 
          padding: 'var(--space-md)',
          display: 'flex',
          gap: 'var(--space-md)',
          flexWrap: 'wrap'
        }}>
          <Badge variant="primary">Touch Targets</Badge>
          <Badge variant="success">Responsive Hooks</Badge>
          <Badge variant="info">Auto-sizing</Badge>
          <Badge variant="secondary">Safe Areas</Badge>
        </div>
      </div>

      {/* Live Demo */}
      <Card style={{ marginBottom: 'var(--space-xl)' }}>
        <CardHeader>
          <Text as="h2" size="xl" weight="semibold">Live Device Detection</Text>
        </CardHeader>
        <CardBody>
          <Text as="p" size="md" style={{ marginBottom: 'var(--space-lg)', lineHeight: '1.6' }}>
            The components automatically detect your device type and adjust accordingly. Resize your browser or view on different devices to see the changes.
          </Text>
          <MobileDemoSection />
        </CardBody>
      </Card>

      {/* Responsive Hooks */}
      <Card style={{ marginBottom: 'var(--space-xl)' }}>
        <CardHeader>
          <Text as="h2" size="xl" weight="semibold">Responsive Hooks</Text>
        </CardHeader>
        <CardBody>
          <Text as="p" size="md" style={{ marginBottom: 'var(--space-lg)', lineHeight: '1.6' }}>
            Use these hooks to create responsive and mobile-aware experiences.
          </Text>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: 'var(--space-sm)', marginTop: 'var(--space-lg)' }}>
            Available Hooks
          </Text>
          <CodeBlock>
{`import { 
  useBreakpoint,
  useIsMobile,
  useOrientation,
  useResponsiveValue,
  useHoverSupport 
} from '@flowlabkit/ui';

function ResponsiveComponent() {
  const breakpoint = useBreakpoint(); // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  const isMobile = useIsMobile(); // boolean
  const orientation = useOrientation(); // 'portrait' | 'landscape'
  const supportsHover = useHoverSupport(); // boolean
  
  const spacing = useResponsiveValue({
    xs: 'var(--space-sm)',
    md: 'var(--space-md)', 
    lg: 'var(--space-lg)',
    default: 'var(--space-md)'
  });
  
  return (
    <div style={{ padding: spacing }}>
      {isMobile ? 'Mobile View' : 'Desktop View'}
    </div>
  );
}`}
          </CodeBlock>
        </CardBody>
      </Card>

      {/* Mobile-Optimized Components */}
      <Card style={{ marginBottom: 'var(--space-xl)' }}>
        <CardHeader>
          <Text as="h2" size="xl" weight="semibold">Mobile-Optimized Components</Text>
        </CardHeader>
        <CardBody>
          <Text as="p" size="md" style={{ marginBottom: 'var(--space-lg)', lineHeight: '1.6' }}>
            Components automatically adapt for mobile devices with larger touch targets, optimized spacing, and touch-friendly interactions.
          </Text>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Button variant="primary" mobileOptimized={true}>Mobile Optimized</Button>
              <Button variant="secondary" mobileOptimized={false}>Standard Button</Button>
              <Button variant="outline" size="sm" mobileOptimized={true}>Small → Auto-sized</Button>
            </div>
            
            <Input 
              placeholder="Touch-friendly input" 
              style={{ 
                minHeight: 'var(--touch-target-size)',
                fontSize: 'var(--font-size-base)' 
              }} 
            />
          </div>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: 'var(--space-sm)', marginTop: 'var(--space-lg)' }}>
            Button Mobile Optimization
          </Text>
          <CodeBlock>
{`import { Button } from '@flowlabkit/ui';

// Automatically adjusts for mobile
<Button variant="primary" mobileOptimized={true}>
  Touch-Friendly Button
</Button>

// Small buttons auto-size to medium on mobile for better touch targets
<Button size="sm" mobileOptimized={true}>
  Auto-sized Button
</Button>

// Disable mobile optimizations if needed
<Button mobileOptimized={false}>
  Standard Button
</Button>`}
          </CodeBlock>
        </CardBody>
      </Card>

      {/* Breakpoints */}
      <Card style={{ marginBottom: 'var(--space-xl)' }}>
        <CardHeader>
          <Text as="h2" size="xl" weight="semibold">Responsive Breakpoints</Text>
        </CardHeader>
        <CardBody>
          <Text as="p" size="md" style={{ marginBottom: 'var(--space-lg)', lineHeight: '1.6' }}>
            Standard breakpoints designed for modern devices and usage patterns.
          </Text>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-lg)'
          }}>
            <Card>
              <CardBody>
                <Text weight="semibold">XS - Mobile Portrait</Text>
                <Text size="sm" color="secondary">320px+ • Phones in portrait</Text>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text weight="semibold">SM - Mobile Landscape</Text>
                <Text size="sm" color="secondary">480px+ • Phones in landscape</Text>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text weight="semibold">MD - Tablet</Text>
                <Text size="sm" color="secondary">768px+ • Tablets and small laptops</Text>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text weight="semibold">LG - Desktop</Text>
                <Text size="sm" color="secondary">1024px+ • Laptops and desktops</Text>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text weight="semibold">XL - Large Desktop</Text>
                <Text size="sm" color="secondary">1200px+ • Large screens</Text>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text weight="semibold">XXL - Extra Large</Text>
                <Text size="sm" color="secondary">1400px+ • Ultra-wide displays</Text>
              </CardBody>
            </Card>
          </div>
          
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: 'var(--space-sm)', marginTop: 'var(--space-lg)' }}>
            CSS Variables
          </Text>
          <CodeBlock>
{`/* Available breakpoint variables */
--breakpoint-xs: 320px;
--breakpoint-sm: 480px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1200px;
--breakpoint-xxl: 1400px;

/* Mobile-specific variables */
--touch-target-size: 44px;
--tap-highlight-color: rgba(59, 130, 246, 0.15);
--safe-area-inset-top: env(safe-area-inset-top, 0px);
--safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);`}
          </CodeBlock>
        </CardBody>
      </Card>

      {/* Best Practices */}
      <Card style={{ marginBottom: 'var(--space-xl)' }}>
        <CardHeader>
          <Text as="h2" size="xl" weight="semibold">Mobile Best Practices</Text>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
            <div>
              <Text as="h3" size="lg" weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>
                ✅ Do
              </Text>
              <ul style={{ margin: 0, paddingLeft: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Use minimum 44px touch targets for interactive elements</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Enable mobile optimization on components by default</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Test on actual devices, not just browser resize</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Use responsive hooks for device-specific logic</Text>
                </li>
                <li>
                  <Text size="sm">Respect safe areas on modern devices</Text>
                </li>
              </ul>
            </div>
            
            <div>
              <Text as="h3" size="lg" weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>
                ❌ Don't
              </Text>
              <ul style={{ margin: 0, paddingLeft: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Rely only on hover states for important interactions</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Use very small touch targets on mobile</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Ignore orientation changes</Text>
                </li>
                <li>
                  <Text size="sm">Assume desktop behavior on mobile devices</Text>
                </li>
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* API Reference */}
      <Card style={{ marginBottom: 'var(--space-xl)' }}>
        <CardHeader>
          <Text as="h2" size="xl" weight="semibold">API Reference</Text>
        </CardHeader>
        <CardBody>
          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: 'var(--space-md)' }}>
            Responsive Hooks
          </Text>
          
          <div style={{ overflowX: 'auto', marginBottom: 'var(--space-xl)' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              backgroundColor: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden'
            }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-surface)' }}>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Hook
                  </th>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Return Type
                  </th>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>useBreakpoint()</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Returns the current responsive breakpoint based on viewport width
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>useIsMobile()</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>boolean</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Returns true for mobile devices and small viewports (xs, sm breakpoints)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>useOrientation()</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>'portrait' | 'landscape'</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Returns the current device orientation
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>useHoverSupport()</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>boolean</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Returns true if the device supports hover interactions (desktop)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)' }}>
                    <code>useResponsiveValue(values)</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)' }}>
                    <code>T</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)' }}>
                    Returns a value based on current breakpoint from provided breakpoint-value mapping
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: 'var(--space-md)' }}>
            useResponsiveValue Parameters
          </Text>
          
          <div style={{ overflowX: 'auto', marginBottom: 'var(--space-xl)' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              backgroundColor: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden'
            }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-surface)' }}>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Parameter
                  </th>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Type
                  </th>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Required
                  </th>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>values.xs</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>T</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Optional
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Value for mobile portrait (320px+)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>values.sm</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>T</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Optional
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Value for mobile landscape (480px+)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>values.md</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>T</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Optional
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Value for tablet (768px+)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>values.lg</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>T</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Optional
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Value for desktop (1024px+)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>values.xl</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>T</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Optional
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Value for large desktop (1200px+)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>values.xxl</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    <code>T</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Optional
                  </td>
                  <td style={{ padding: 'var(--space-md)', borderBottom: '1px solid var(--border-color)' }}>
                    Value for extra large displays (1400px+)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: 'var(--space-md)' }}>
                    <code>values.default</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)' }}>
                    <code>T</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)' }}>
                    Required
                  </td>
                  <td style={{ padding: 'var(--space-md)' }}>
                    Fallback value when no breakpoint-specific value is defined
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Text as="h3" size="lg" weight="medium" style={{ marginBottom: 'var(--space-md)' }}>
            Component Mobile Props
          </Text>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              backgroundColor: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden'
            }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-surface)' }}>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Prop
                  </th>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Type
                  </th>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Default
                  </th>
                  <th style={{ 
                    padding: 'var(--space-md)', 
                    textAlign: 'left', 
                    borderBottom: '1px solid var(--border-color)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: 'var(--space-md)' }}>
                    <code>mobileOptimized</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)' }}>
                    <code>boolean</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)' }}>
                    <code>true</code>
                  </td>
                  <td style={{ padding: 'var(--space-md)' }}>
                    Enables mobile-specific optimizations like larger touch targets and auto-sizing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};