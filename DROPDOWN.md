# Dropdown Component

A comprehensive dropdown menu component with keyboard navigation, multiple alignment options, and full theme integration.

## Features

✅ **Keyboard Navigation** - Arrow keys, Escape, Enter support  
✅ **Multiple Alignments** - Start, center, end positioning  
✅ **Controlled & Uncontrolled** - Flexible state management  
✅ **Accessibility** - ARIA attributes and proper focus management  
✅ **Theme Integration** - Responsive to theme changes and font scaling  
✅ **Icons & Shortcuts** - Support for icons and keyboard shortcuts  
✅ **Sections & Separators** - Organize menu items with labels and dividers  

## Basic Usage

```tsx
import { 
  Dropdown, 
  DropdownItem, 
  DropdownSeparator, 
  DropdownLabel,
  Button 
} from '@flowlab/theme-system';

function BasicDropdown() {
  return (
    <Dropdown
      trigger={<Button>Open Menu</Button>}
    >
      <DropdownItem>Edit</DropdownItem>
      <DropdownItem>Copy</DropdownItem>
      <DropdownSeparator />
      <DropdownItem destructive>Delete</DropdownItem>
    </Dropdown>
  );
}
```

## Components

### Dropdown (Main Container)

```tsx
interface DropdownProps {
  children: ReactNode;          // Dropdown content
  trigger: ReactNode;           // Element that triggers the dropdown
  open?: boolean;              // Controlled open state
  onOpenChange?: (open: boolean) => void; // Open state change handler
  disabled?: boolean;          // Disable the dropdown
  align?: 'start' | 'center' | 'end';     // Horizontal alignment
  side?: 'top' | 'bottom' | 'left' | 'right'; // Positioning side
  sideOffset?: number;         // Distance from trigger
  className?: string;
}
```

### DropdownItem

```tsx
interface DropdownItemProps {
  leftIcon?: ReactNode;        // Icon on the left side
  rightIcon?: ReactNode;       // Icon on the right side (shortcuts, etc.)
  disabled?: boolean;          // Disable the item
  destructive?: boolean;       // Style as destructive action
  className?: string;
  onClick?: (event) => void;   // Click handler
}
```

### DropdownSeparator

Simple divider line between menu sections.

```tsx
<DropdownSeparator />
```

### DropdownLabel

Section headers for organizing menu items.

```tsx
<DropdownLabel>Account Settings</DropdownLabel>
```

## Examples

### With Icons and Shortcuts

```tsx
<Dropdown
  trigger={<Button variant="outline">Actions</Button>}
>
  <DropdownItem 
    leftIcon={<EditIcon />}
    rightIcon={<kbd>⌘E</kbd>}
  >
    Edit
  </DropdownItem>
  <DropdownItem 
    leftIcon={<CopyIcon />}
    rightIcon={<kbd>⌘C</kbd>}
  >
    Copy
  </DropdownItem>
  <DropdownSeparator />
  <DropdownItem 
    leftIcon={<DeleteIcon />}
    rightIcon={<kbd>⌘⌫</kbd>}
    destructive
  >
    Delete
  </DropdownItem>
</Dropdown>
```

### With Sections

```tsx
<Dropdown
  trigger={<Button>Settings</Button>}
>
  <DropdownLabel>Account</DropdownLabel>
  <DropdownItem leftIcon={<UserIcon />}>
    Profile
  </DropdownItem>
  <DropdownItem leftIcon={<SettingsIcon />}>
    Preferences
  </DropdownItem>
  
  <DropdownSeparator />
  
  <DropdownLabel>Theme</DropdownLabel>
  <DropdownItem onClick={() => toggleTheme()}>
    Toggle Dark Mode
  </DropdownItem>
  
  <DropdownSeparator />
  
  <DropdownItem leftIcon={<LogoutIcon />} destructive>
    Sign Out
  </DropdownItem>
</Dropdown>
```

### Controlled Dropdown

```tsx
function ControlledExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dropdown
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <Button>
          Menu {isOpen ? '▲' : '▼'}
        </Button>
      }
    >
      <DropdownItem onClick={() => console.log('Item 1')}>
        Item 1
      </DropdownItem>
      <DropdownItem onClick={() => console.log('Item 2')}>
        Item 2
      </DropdownItem>
    </Dropdown>
  );
}
```

### Different Alignments

```tsx
{/* Align dropdown to start of trigger */}
<Dropdown align="start" trigger={<Button>Start</Button>}>
  <DropdownItem>Option 1</DropdownItem>
</Dropdown>

{/* Center align dropdown */}
<Dropdown align="center" trigger={<Button>Center</Button>}>
  <DropdownItem>Option 1</DropdownItem>
</Dropdown>

{/* Align dropdown to end of trigger */}
<Dropdown align="end" trigger={<Button>End</Button>}>
  <DropdownItem>Option 1</DropdownItem>
</Dropdown>
```

### Different Sides

```tsx
{/* Dropdown appears above trigger */}
<Dropdown side="top" trigger={<Button>Above</Button>}>
  <DropdownItem>Option 1</DropdownItem>
</Dropdown>

{/* Dropdown appears to the right */}
<Dropdown side="right" trigger={<Button>Right</Button>}>
  <DropdownItem>Option 1</DropdownItem>
</Dropdown>
```

## Keyboard Navigation

- **Arrow Down/Up**: Navigate between menu items
- **Escape**: Close the dropdown
- **Enter/Space**: Activate the focused item
- **Tab**: Close dropdown and move to next focusable element

## Accessibility Features

- Proper ARIA attributes (`aria-expanded`, `aria-haspopup`, `role="menu"`)
- Keyboard navigation support
- Focus management
- Screen reader compatible

## Styling

The dropdown automatically adapts to your theme:

- Uses `--bg-surface` for dropdown background
- Uses `--border-color` for borders
- Uses `--shadow-lg` for elevation
- Responds to `--space-*` variables for padding
- Uses theme colors for text and hover states

## Theme Integration

```tsx
// The dropdown automatically scales with font size changes
const { setFontSize } = useTheme();

<Dropdown trigger={<Button>Menu</Button>}>
  <DropdownItem onClick={() => setFontSize('large')}>
    Large Font
  </DropdownItem>
  <DropdownItem onClick={() => setFontSize('small')}>
    Small Font
  </DropdownItem>
</Dropdown>
```

## Best Practices

1. **Use DropdownLabels** for grouping related items
2. **Add DropdownSeparators** between logical sections
3. **Use leftIcon** for visual hierarchy
4. **Use rightIcon** for keyboard shortcuts or status
5. **Mark destructive actions** with the `destructive` prop
6. **Disable items** when actions aren't available
7. **Keep menu items concise** and action-oriented

## Common Patterns

### User Menu
```tsx
<Dropdown
  align="end"
  trigger={
    <Button variant="ghost" size="sm">
      <UserAvatar />
    </Button>
  }
>
  <DropdownLabel>Signed in as John Doe</DropdownLabel>
  <DropdownSeparator />
  <DropdownItem leftIcon={<UserIcon />}>Profile</DropdownItem>
  <DropdownItem leftIcon={<SettingsIcon />}>Settings</DropdownItem>
  <DropdownSeparator />
  <DropdownItem leftIcon={<LogoutIcon />} destructive>
    Sign Out
  </DropdownItem>
</Dropdown>
```

### Context Menu
```tsx
<Dropdown
  trigger={<Button variant="ghost"><DotsIcon /></Button>}
  align="end"
>
  <DropdownItem leftIcon={<EditIcon />} rightIcon={<kbd>⌘E</kbd>}>
    Edit
  </DropdownItem>
  <DropdownItem leftIcon={<CopyIcon />} rightIcon={<kbd>⌘C</kbd>}>
    Copy
  </DropdownItem>
  <DropdownSeparator />
  <DropdownItem leftIcon={<DeleteIcon />} destructive>
    Delete
  </DropdownItem>
</Dropdown>
```

The Dropdown component provides a flexible, accessible, and theme-integrated solution for all your menu needs!