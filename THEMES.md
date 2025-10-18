# Theme Gallery

The FlowLab Theme System now includes 8 beautiful themes to suit different moods and applications.

## Available Themes

### 🌅 **Light Theme** (Default)
- **Primary Colors**: Blue accent with neutral grays
- **Best For**: Professional applications, productivity tools
- **Mood**: Clean, minimalist, accessible

### 🌙 **Dark Theme**
- **Primary Colors**: Purple accent with dark backgrounds
- **Best For**: Code editors, late-night work, reduced eye strain
- **Mood**: Modern, sleek, sophisticated

### 🌊 **Ocean Theme**
- **Primary Colors**: Cyan and aqua with blue undertones
- **Best For**: Data visualization, analytics dashboards
- **Mood**: Calm, flowing, refreshing

### 🌲 **Forest Theme**
- **Primary Colors**: Green spectrum with natural tones
- **Best For**: Environmental apps, health & wellness
- **Mood**: Natural, organic, peaceful

### 🌅 **Sunset Theme**
- **Primary Colors**: Orange, pink, and warm gradients
- **Best For**: Creative tools, design applications
- **Mood**: Warm, energetic, inspiring

### 💜 **Lavender Theme**
- **Primary Colors**: Purple and violet with soft pastels
- **Best For**: Meditation apps, creative workflows
- **Mood**: Soft, dreamy, elegant

### 🤖 **Cyberpunk Theme**
- **Primary Colors**: Neon cyan, bright greens on dark backgrounds
- **Best For**: Gaming interfaces, tech demos
- **Mood**: Futuristic, high-tech, edgy

### 🍂 **Autumn Theme**
- **Primary Colors**: Orange, brown, and golden hues
- **Best For**: Content creation, seasonal applications
- **Mood**: Cozy, warm, nostalgic

## Usage Examples

### Theme Switching
```tsx
import { ThemeProvider } from '@flowlab/theme-system';
import { 
  lightTheme, 
  darkTheme, 
  oceanTheme, 
  forestTheme,
  sunsetTheme,
  lavenderTheme,
  cyberpunkTheme,
  autumnTheme 
} from '@flowlab/theme-system/themes';

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeSelector onThemeChange={setCurrentTheme} />
      <YourApp />
    </ThemeProvider>
  );
}
```

### Theme Selector Component
```tsx
import { themes, allThemes } from '@flowlab/theme-system/themes';

function ThemeSelector({ onThemeChange }) {
  return (
    <div>
      {allThemes.map(themeName => (
        <button
          key={themeName}
          onClick={() => onThemeChange(themes[themeName])}
          style={{
            backgroundColor: themes[themeName].colors.accent[500],
            color: themes[themeName].colors.text.inverse,
          }}
        >
          {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
        </button>
      ))}
    </div>
  );
}
```

### Using Theme Colors
```tsx
function ColorPalette() {
  const { theme } = useTheme();
  
  return (
    <div style={{
      backgroundColor: theme.colors.background.app,
      color: theme.colors.text.primary,
      padding: theme.spacing.lg,
      borderRadius: theme.borderRadius.md,
    }}>
      <h2>Current Theme: {theme.name}</h2>
      
      {/* Primary Colors */}
      <div style={{ display: 'flex', gap: theme.spacing.sm }}>
        {Object.entries(theme.colors.gray).map(([shade, color]) => (
          <div
            key={shade}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: color,
              borderRadius: theme.borderRadius.sm,
            }}
            title={`Gray ${shade}: ${color}`}
          />
        ))}
      </div>
      
      {/* Accent Colors */}
      <div style={{ display: 'flex', gap: theme.spacing.sm, marginTop: theme.spacing.md }}>
        {Object.entries(theme.colors.accent).map(([shade, color]) => (
          <div
            key={shade}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: color,
              borderRadius: theme.borderRadius.sm,
            }}
            title={`Accent ${shade}: ${color}`}
          />
        ))}
      </div>
    </div>
  );
}
```

## Theme Characteristics

| Theme | Background | Accent | Text | Best Use Case |
|-------|------------|--------|------|---------------|
| Light | Light gray | Blue | Dark gray | General purpose |
| Dark | Dark blue | Purple | Light | Code editing |
| Ocean | Light blue | Cyan | Deep blue | Data apps |
| Forest | Light green | Yellow | Dark green | Nature apps |
| Sunset | Light orange | Pink | Brown | Creative tools |
| Lavender | Light purple | Yellow | Dark purple | Wellness apps |
| Cyberpunk | Dark black | Cyan | Bright | Gaming/Tech |
| Autumn | Light beige | Orange | Brown | Seasonal apps |

## Accessibility

All themes maintain WCAG AA contrast ratios for text readability and include:
- Sufficient color contrast
- Focus indicators
- Semantic color usage
- Support for reduced motion preferences