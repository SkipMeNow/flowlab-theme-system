# FlowLabKit Showcase

> **Note: This showcase is for debugging and development purposes only. It's not part of the published FlowLabKit package.**

A clean, interactive showcase for the FlowLabKit component library.

## Features

- 🎨 **Theme Switching** - Toggle between light and dark themes
- 🧩 **Component Examples** - Live demos of all components
- 📱 **Responsive Design** - Works on all screen sizes
- ⚡ **Fast Development** - Powered by Vite

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## What's Included

### Components Showcased:
- **Button** - Multiple variants, sizes, and states
- **Badge** - Status indicators and labels  
- **Input** - Form inputs with validation
- **Card** - Container with header, body, footer
- **Text** - Typography components
- **Layout** - Flexible layout system

### Features Demonstrated:
- Theme system with CSS variables
- TypeScript integration
- Component composition
- Interactive state management

## Structure

```
showcase/
├── src/
│   ├── App.tsx          # Main showcase application
│   └── main.tsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## Development

The showcase imports FlowLabKit components directly from the `../src` directory, so any changes to the library are reflected immediately during development.

Visit `http://localhost:3001` after running `npm run dev` to see the showcase.