import React from 'react';
import { createRoot } from 'react-dom/client';
import InputTypesExample from './examples/InputTypesExample';

// Simple demo to test the input types
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<InputTypesExample />);
}