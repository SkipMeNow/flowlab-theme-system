# Size System - Comprehensive Scaling

The FlowLab Theme System includes a comprehensive size system that ensures all UI components scale proportionally when font sizes or compact mode changes.

## ✅ **Size System Features:**

### **1. Font Size Scaling**
All components automatically scale when font size changes:

```tsx
const { setFontSize } = useTheme();

// Change font size - all components scale automatically
setFontSize('small');  // Smaller fonts and spacing
setFontSize('medium'); // Default size
setFontSize('large');  // Larger fonts and spacing
```

### **2. CSS Variable Updates**
When font size changes, these CSS variables are automatically updated:

**Small Font:**
- `--font-size-base: 14px` (instead of 16px)
- `--font-size-lg: 16px` (instead of 18px)
- All other font sizes scale proportionally

**Large Font:**
- `--font-size-base: 18px` (instead of 16px)
- `--font-size-lg: 20px` (instead of 18px)
- All other font sizes scale proportionally

### **3. Compact Mode Scaling**
Compact mode reduces spacing while maintaining readability:

```tsx
const { setCompactMode } = useTheme();

setCompactMode(true); // Reduces all spacing by ~50%
```

**Compact Mode Adjustments:**
- `--space-sm: 4px` (instead of 8px)
- `--space-md: 8px` (instead of 16px)
- `--space-lg: 12px` (instead of 24px)

## 🎨 **Component Scaling:**

### **Button Scaling**
Buttons use calculated heights that scale with font size:

```tsx
// Button sizes automatically adjust to font size changes
<Button size="sm">Small</Button>   // Scales with --font-size-sm
<Button size="md">Medium</Button>  // Scales with --font-size-base
<Button size="lg">Large</Button>   // Scales with --font-size-lg
```

**Implementation:**
```css
/* Small button height scales with font size + spacing */
min-height: calc(var(--font-size-sm) + var(--space-md));
```

### **Input Scaling**
Input fields scale their height and padding proportionally:

```tsx
<Input size="sm" />  // Scales with font size
<Input size="md" />  // Default responsive scaling
<Input size="lg" />  // Larger, scales proportionally
```

### **Badge Scaling**
Badges use CSS variables for consistent scaling:

```tsx
<Badge size="sm">Small</Badge>     // Uses --space-xs, --space-sm
<Badge size="md">Medium</Badge>    // Uses --space-xs, --space-md  
<Badge size="lg">Large</Badge>     // Uses --space-sm, --space-lg
```

### **Typography Scaling**
Text components directly use CSS variables:

```tsx
<Text size="sm">Small text</Text>     // --font-size-sm
<Text size="md">Medium text</Text>    // --font-size-base
<Text size="lg">Large text</Text>     // --font-size-lg
```

## 📐 **Implementation Details:**

### **Responsive Heights**
Components use calculated heights instead of fixed pixels:

```tsx
// ❌ Fixed height (doesn't scale)
minHeight: '40px'

// ✅ Responsive height (scales with font size)
minHeight: 'calc(var(--font-size-base) + var(--space-lg))'
```

### **Responsive Spacing**
All spacing uses CSS variables that respond to compact mode:

```tsx
// Padding scales with spacing system
padding: 'var(--space-sm) var(--space-md)'

// Margins scale automatically
marginBottom: 'var(--space-lg)'
```

### **Proportional Scaling**
Components maintain visual hierarchy across all sizes:

```tsx
// Small components stay proportionally smaller
sm: {
  padding: 'var(--space-xs) var(--space-sm)',
  fontSize: 'var(--font-size-sm)',
}

// Large components stay proportionally larger  
lg: {
  padding: 'var(--space-md) var(--space-lg)',
  fontSize: 'var(--font-size-lg)',
}
```

## 🔧 **Testing the Size System:**

### **Font Size Testing**
```tsx
import { useTheme, Button, Input, Badge, Text } from '@flowlab/theme-system';

function SizeTest() {
  const { config, setFontSize } = useTheme();
  
  return (
    <div>
      <div>Current font size: {config.fontSize}</div>
      
      {/* These buttons change the size of ALL components */}
      <Button onClick={() => setFontSize('small')}>Small Font</Button>
      <Button onClick={() => setFontSize('medium')}>Medium Font</Button>
      <Button onClick={() => setFontSize('large')}>Large Font</Button>
      
      {/* All these components will scale automatically */}
      <Button size="sm">Small Button</Button>
      <Input placeholder="Responsive input" />
      <Badge>Scaling Badge</Badge>
      <Text>Responsive text</Text>
    </div>
  );
}
```

### **Compact Mode Testing**
```tsx
function CompactTest() {
  const { config, setCompactMode } = useTheme();
  
  return (
    <div>
      <Button onClick={() => setCompactMode(!config.compactMode)}>
        Toggle Compact Mode
      </Button>
      
      {/* Spacing reduces in compact mode while maintaining readability */}
      <Card padding="md">
        <Text>This card's padding scales with compact mode</Text>
      </Card>
    </div>
  );
}
```

## 📊 **Size System Verification:**

You can verify the size system is working by checking CSS variables in DevTools:

```javascript
// Check current font size variables
console.log('Base font size:', getComputedStyle(document.documentElement).getPropertyValue('--font-size-base'));

// Check spacing variables  
console.log('Medium spacing:', getComputedStyle(document.documentElement).getPropertyValue('--space-md'));
```

## ✅ **Benefits:**

1. **Consistent Scaling**: All components scale proportionally
2. **Accessibility**: Larger font sizes improve readability
3. **Density Options**: Compact mode for power users
4. **Automatic Updates**: No manual component adjustments needed
5. **CSS Variable Driven**: Easy to customize and override
6. **Responsive Design**: Maintains visual hierarchy at all sizes

The size system ensures your entire UI scales harmoniously, providing excellent user experience across different size preferences while maintaining design consistency!