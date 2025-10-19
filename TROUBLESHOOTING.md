# Fix: Button Export Issue

## The Problem
You're getting: `The requested module does not provide an export named 'Button'`

## The Solution

The FlowLab theme system is properly exporting all UI components. The issue is likely one of these:

### 1. **Clear Cache and Reinstall**

In your ThemeTest project, run:

```bash
# Navigate to your test project
cd "C:\Users\rambr\Documents\VSC projects\ThemeTest"

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# If using the local package, reinstall it
npm install ../flowlab-theme-system
```

### 2. **Check Your Import Statement**

Make sure you're importing correctly:

```tsx
// ✅ Correct import
import { Button, ThemeProvider, useTheme } from '@flowlab/theme-system';

// ❌ Don't import like this if using file:// protocol
import { Button } from 'file:///path/to/theme-system';
```

### 3. **Verify Package.json**

Check your ThemeTest `package.json` dependencies:

```json
{
  "dependencies": {
    "@flowlab/theme-system": "file:../flowlab-theme-system"
  }
}
```

### 4. **Clear Vite Cache**

If using Vite (which it looks like you are), clear the cache:

```bash
# In your ThemeTest project
npm run dev -- --force

# Or manually clear cache
rm -rf node_modules/.vite
```

### 5. **Test the Import**

Create a simple test file to verify imports work:

```tsx
// src/TestImports.tsx
import { 
  Button, 
  ThemeProvider, 
  useTheme,
  Card,
  Input,
  Badge,
  Text,
  Link 
} from '@flowlab/theme-system';

console.log('Imports successful:', {
  Button,
  ThemeProvider,
  useTheme,
  Card,
  Input,
  Badge,
  Text,
  Link
});

export function TestImports() {
  return (
    <div>
      <Button>Test Button</Button>
      <p>All imports working!</p>
    </div>
  );
}
```

### 6. **Correct App.tsx Usage**

Here's how your App.tsx should look:

```tsx
import React from 'react';
import { 
  ThemeProvider, 
  Button, 
  useTheme,
  Card,
  Text 
} from '@flowlab/theme-system';
import { oceanTheme } from '@flowlab/theme-system/themes';

function App() {
  return (
    <ThemeProvider theme={oceanTheme}>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { config, setFontSize, toggleTheme } = useTheme();
  
  return (
    <div style={{ padding: '20px' }}>
      <Text as="h1">Theme Test</Text>
      <Text>Current mode: {config.mode}</Text>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <Button onClick={toggleTheme}>
          Toggle Theme
        </Button>
        <Button onClick={() => setFontSize('large')}>
          Large Font
        </Button>
        <Button onClick={() => setFontSize('small')}>
          Small Font
        </Button>
      </div>
      
      <Card style={{ marginTop: '20px', padding: '20px' }}>
        <Text>This is a test card with responsive components!</Text>
      </Card>
    </div>
  );
}

export default App;
```

### 7. **Force Refresh**

Sometimes the issue is browser cache:

1. **Hard refresh** your browser (Ctrl+Shift+R)
2. **Restart your dev server**
3. **Clear browser cache** completely

## Verification

To verify everything is working:

```bash
# In your flowlab-theme-system directory
npm run build

# In your ThemeTest directory  
npm install
npm run dev
```

The Button component and all UI components are properly exported from the theme system. The issue is likely a cache/installation problem on the test project side.