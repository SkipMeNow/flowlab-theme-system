import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Basic CSS reset and setup
const styles = `
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--bg-app, #ffffff);
    color: var(--text-primary, #000000);
  }
  
  button {
    font-family: inherit;
  }
  
  code, pre {
    font-family: 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);