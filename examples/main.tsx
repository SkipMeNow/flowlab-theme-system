import React from 'react'
import ReactDOM from 'react-dom/client'

// Import all examples
import ValidationIconExample from './ValidationIconExample'
import IconDebugExample from './IconDebugTest'
import SimpleValidationExample from './SimpleValidationTest'
import InputTypesExample from './InputTypesExample'
import BadgeTestExample from './BadgeTestExample'
import ButtonShapesExample from './ButtonShapesExample'
import InputFocusExample from './InputFocusExample'
import DynamicThemeExample from './DynamicThemeExample'
import SimpleExample from './SimpleThemeSwitcher'

const examples = {
  ValidationIconExample,
  IconDebugExample,
  SimpleValidationExample,
  InputTypesExample,
  BadgeTestExample,
  ButtonShapesExample,
  InputFocusExample,
  DynamicThemeExample,
  SimpleExample,
}

function App() {
  // Get example from URL params
  const urlParams = new URLSearchParams(window.location.search)
  const exampleName = urlParams.get('example') || 'ValidationIconExample'
  
  // Get the selected example component
  const ExampleComponent = examples[exampleName as keyof typeof examples] || ValidationIconExample
  
  if (!ExampleComponent) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Example not found: {exampleName}</h2>
        <p>Available examples: {Object.keys(examples).join(', ')}</p>
      </div>
    )
  }
  
  return <ExampleComponent />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)