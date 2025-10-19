# Button Component - Shapes Guide

The Button component now supports multiple shapes to give you more design flexibility and visual hierarchy options.

## Shape Options

### 🔲 **Rounded** (Default)
```tsx
<Button shape="rounded">Rounded Button</Button>
// or simply
<Button>Default Button</Button>
```
- **Use for**: Primary actions, forms, general purpose buttons
- **Style**: Subtle rounded corners using `--radius-md`
- **Best practices**: Great for most UI scenarios

### 💊 **Pill**
```tsx
<Button shape="pill">Pill Button</Button>
```
- **Use for**: Tags, filters, modern interfaces, call-to-actions
- **Style**: Fully rounded ends (border-radius: 9999px)
- **Best practices**: Excellent for floating action buttons and modern UIs

### ⬜ **Square**
```tsx
<Button shape="square">Square Button</Button>
```
- **Use for**: Grid layouts, technical interfaces, minimalist designs
- **Style**: Sharp corners (border-radius: 0)
- **Best practices**: Good for data tables, admin interfaces, technical tools

### ⭕ **Circle**
```tsx
<Button shape="circle">
  <PlusIcon />
</Button>
```
- **Use for**: Icon buttons, floating action buttons, compact interfaces
- **Style**: Perfect circle with fixed dimensions
- **Best practices**: Use with icons or single characters only

## Complete Examples

### Basic Usage
```tsx
import { Button } from '@flowlab/theme-system';

function ButtonShapes() {
  return (
    <div>
      <Button shape="rounded">Rounded</Button>
      <Button shape="pill">Pill</Button>
      <Button shape="square">Square</Button>
      <Button shape="circle">+</Button>
    </div>
  );
}
```

### With Different Variants
```tsx
function VariantShapes() {
  return (
    <div>
      {/* Primary buttons */}
      <Button variant="primary" shape="rounded">Primary Rounded</Button>
      <Button variant="primary" shape="pill">Primary Pill</Button>
      <Button variant="primary" shape="circle">P</Button>
      
      {/* Outline buttons */}
      <Button variant="outline" shape="rounded">Outline Rounded</Button>
      <Button variant="outline" shape="pill">Outline Pill</Button>
      <Button variant="outline" shape="square">Outline Square</Button>
    </div>
  );
}
```

### With Icons
```tsx
import { PlusIcon, SettingsIcon, HeartIcon } from './icons';

function IconButtons() {
  return (
    <div>
      {/* Rounded with icons */}
      <Button shape="rounded" leftIcon={<PlusIcon />}>
        Add Item
      </Button>
      
      {/* Pill with icons */}
      <Button shape="pill" rightIcon={<SettingsIcon />}>
        Configure
      </Button>
      
      {/* Circle icon buttons */}
      <Button shape="circle" variant="primary">
        <PlusIcon />
      </Button>
      <Button shape="circle" variant="secondary">
        <HeartIcon />
      </Button>
      <Button shape="circle" variant="outline">
        <SettingsIcon />
      </Button>
    </div>
  );
}
```

### Sizes with Shapes
```tsx
function SizeAndShape() {
  return (
    <div>
      {/* Small buttons */}
      <Button size="sm" shape="rounded">Small Rounded</Button>
      <Button size="sm" shape="pill">Small Pill</Button>
      <Button size="sm" shape="circle">S</Button>
      
      {/* Medium buttons */}
      <Button size="md" shape="rounded">Medium Rounded</Button>
      <Button size="md" shape="pill">Medium Pill</Button>
      <Button size="md" shape="circle">M</Button>
      
      {/* Large buttons */}
      <Button size="lg" shape="rounded">Large Rounded</Button>
      <Button size="lg" shape="pill">Large Pill</Button>
      <Button size="lg" shape="circle">L</Button>
    </div>
  );
}
```

## Circle Button Specifications

Circle buttons have special sizing to maintain perfect circles:

| Size | Dimensions | Best For |
|------|------------|----------|
| `sm` | 2rem × 2rem | Small icon buttons, compact UIs |
| `md` | 2.5rem × 2.5rem | Standard icon buttons, toolbars |
| `lg` | 3rem × 3rem | Prominent action buttons, FABs |

```tsx
// Circle button sizes
<Button shape="circle" size="sm"><PlusIcon /></Button>   // 32px × 32px
<Button shape="circle" size="md"><PlusIcon /></Button>   // 40px × 40px  
<Button shape="circle" size="lg"><PlusIcon /></Button>   // 48px × 48px
```

## Real-World Usage Patterns

### Action Bar
```tsx
function ActionBar() {
  return (
    <div className="action-bar">
      <Button variant="primary" shape="rounded" leftIcon={<PlusIcon />}>
        New Document
      </Button>
      <Button variant="outline" shape="square">
        <SettingsIcon />
      </Button>
      <Button variant="ghost" shape="circle">
        <HeartIcon />
      </Button>
      <Button variant="secondary" shape="pill" rightIcon={<DownloadIcon />}>
        Export
      </Button>
    </div>
  );
}
```

### Floating Action Button
```tsx
function FloatingActionButton() {
  return (
    <Button 
      variant="primary" 
      shape="circle" 
      size="lg"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        boxShadow: 'var(--shadow-lg)'
      }}
    >
      <PlusIcon />
    </Button>
  );
}
```

### Filter Tags
```tsx
function FilterTags() {
  const [filters, setFilters] = useState(['React', 'TypeScript', 'CSS']);
  
  return (
    <div>
      {filters.map(filter => (
        <Button 
          key={filter}
          variant="secondary" 
          shape="pill" 
          size="sm"
          rightIcon={<CloseIcon />}
          onClick={() => removeFilter(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  );
}
```

### Data Table Actions
```tsx
function DataTableRow() {
  return (
    <tr>
      <td>User Name</td>
      <td>user@example.com</td>
      <td>
        <Button variant="ghost" shape="square" size="sm">
          <EditIcon />
        </Button>
        <Button variant="ghost" shape="square" size="sm">
          <DeleteIcon />
        </Button>
      </td>
    </tr>
  );
}
```

## Shape Selection Guidelines

### Use **Rounded** when:
- ✅ General purpose buttons
- ✅ Form submissions
- ✅ Primary actions
- ✅ Traditional UI designs

### Use **Pill** when:
- ✅ Modern, friendly interfaces
- ✅ Tags and filters  
- ✅ Call-to-action buttons
- ✅ Floating elements

### Use **Square** when:
- ✅ Technical/admin interfaces
- ✅ Grid-based layouts
- ✅ Minimalist designs
- ✅ Data-heavy applications

### Use **Circle** when:
- ✅ Icon-only buttons
- ✅ Floating action buttons
- ✅ Compact toolbar buttons
- ✅ Social media interactions (like, share, etc.)

## Accessibility

All button shapes maintain the same accessibility features:
- Proper focus states
- Keyboard navigation
- Screen reader compatibility
- Touch target sizes (minimum 44px for mobile)

Circle buttons automatically meet touch target requirements for medium and large sizes.

## TypeScript Interface

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill' | 'square' | 'circle';  // 🆕
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  // ... other props
}
```

The enhanced Button component with shapes gives you the flexibility to create more engaging and appropriate user interfaces for different contexts and design systems!