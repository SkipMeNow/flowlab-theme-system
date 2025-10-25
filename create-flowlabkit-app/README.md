# create-flowlabkit-app

**Official installer for @flowlabkit/ui** - Create React apps with 8 beautiful themes, responsive system, and TypeScript support instantly.

> **⚠️ Important:** This package is a scaffolding tool that depends on [`@flowlabkit/ui`](https://www.npmjs.com/package/@flowlabkit/ui). Generated projects will include `@flowlabkit/ui` as a dependency.

## 📚 About FlowLabKit UI

FlowLabKit UI is a comprehensive React component library featuring 8 beautiful themes, an advanced responsive system, and complete TypeScript support. This installer helps you quickly scaffold new projects with FlowLabKit UI pre-configured.

**Main Package:** [`@flowlabkit/ui`](https://www.npmjs.com/package/@flowlabkit/ui)  
**Documentation:** [https://skipmenow.github.io/flowlabkit-ui/](https://skipmenow.github.io/flowlabkit-ui/)  
**Repository:** [https://github.com/SkipMeNow/flowlabkit-ui](https://github.com/SkipMeNow/flowlabkit-ui)

## Quick Start

```bash
# Interactive installer (like Vite)
npm create flowlabkit-app@latest my-app

# Or with other package managers
yarn create flowlabkit-app my-app
pnpm create flowlabkit-app my-app
```

## What You Get

The installer will prompt you to choose:

### 1. Framework
- **React** - Popular UI library with component ecosystem
- **Vanilla** - Pure HTML/CSS/JavaScript with theme variables

### 2. Language  
- **TypeScript** - Type-safe development with IntelliSense
- **JavaScript** - Classic JavaScript for quick prototyping

### 3. Setup Type
- **Full Components** - Complete UI library with all FlowLabKit components
- **Themes Only** - Just the theme system with CSS variables

### 4. Theme Selection
- **Light & Dark only** - Minimal core themes
- **+ Ocean theme** - Calming blues and cyans
- **+ Forest theme** - Natural greens
- **+ Cyberpunk theme** - Neon highlights on dark
- **All 8 themes** - Complete theme collection

## Templates

### React + TypeScript + Components
Full-featured template with:
- All FlowLabKit UI components (Button, Card, Input, Badge, etc.)
- **Advanced Responsive System** with ResponsiveWrapper and responsive hooks
- **Mobile-First Design** with automatic layout adaptation
- Interactive theme switching and responsive demo
- Component showcase with live examples
- TypeScript support with full type safety
- Vite development server

### React + TypeScript + Themes Only  
Lightweight template with:
- Theme system only (CSS variables)
- **Basic responsive detection** with window resize handling
- Custom styling with theme variables
- Theme switching functionality
- Responsive demo showing breakpoints
- TypeScript support

### React + JavaScript variants
Same templates but using JavaScript instead of TypeScript.

### Vanilla + TypeScript
Pure web template with:
- No framework dependencies
- CSS variables for theming
- Theme switching with vanilla JS
- TypeScript for type safety

## Features

[[✓]] **Interactive CLI** - Like `npm create vite@latest`  
[[✓]] **Multiple Templates** - React, Vanilla, TypeScript, JavaScript  
[[✓]] **Component Options** - Full components or themes-only  
[[✓]] **Responsive System** - Advanced mobile-first responsive behavior  
[[✓]] **Theme Selection** - Choose specific themes or get them all  
[[✓]] **Ready to Run** - Includes dev server and build scripts  
[[✓]] **Examples Included** - Working demos with responsive features in every template  

## Example Usage

```bash
$ npm create flowlabkit-app@latest my-project

 Create FlowLabKit App

? Project name: › my-awesome-app
? Select a framework: › React
? Select setup type: › TypeScript + Components  
? Select themes to include: › All 8 themes

[[✓]] Project created! Next steps:
  cd my-awesome-app
  npm install
  npm run dev
```

## Templates Generated

Each template includes:
- **package.json** with proper dependencies
- **Vite configuration** for fast development  
- **Working examples** of theme usage and responsive behavior
- **Responsive demos** showing breakpoint detection
- **Component showcase** (in full templates) with mobile-first design
- **Documentation** and next steps
- **Build scripts** for production

## 🔗 Related Links

| Resource | Link |
|----------|------|
| **Main Package** | [`@flowlabkit/ui`](https://www.npmjs.com/package/@flowlabkit/ui) |
| **Documentation** | [https://skipmenow.github.io/flowlabkit-ui/](https://skipmenow.github.io/flowlabkit-ui/) |
| **GitHub Repository** | [https://github.com/SkipMeNow/flowlabkit-ui](https://github.com/SkipMeNow/flowlabkit-ui) |
| **Issues & Support** | [https://github.com/SkipMeNow/flowlabkit-ui/issues](https://github.com/SkipMeNow/flowlabkit-ui/issues) |

## ⚠️ Dependencies

This installer creates projects that depend on:
- [`@flowlabkit/ui`](https://www.npmjs.com/package/@flowlabkit/ui) - The main UI component library
- `react` & `react-dom` - Required peer dependencies (18.0.0+)
- `vite` - Development and build tool (included in generated templates)

## 📄 License  

MIT - Same as [@flowlabkit/ui](https://www.npmjs.com/package/@flowlabkit/ui)