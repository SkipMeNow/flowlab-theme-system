import { applyCSSVariables, themeToCSSVariables } from '@flowlabkit/ui/core'
import { oceanTheme, cyberpunkTheme } from '@flowlabkit/ui/themes'
import './style.css'

// Theme management
let currentMode: 'light' | 'dark' = 'dark'
const lightTheme = oceanTheme
const darkTheme = cyberpunkTheme

function updateTheme() {
  const theme = currentMode === 'light' ? lightTheme : darkTheme
  const config = { mode: currentMode, fontSize: 'medium' as const, compactMode: false }
  const variables = themeToCSSVariables(theme, config)
  applyCSSVariables(variables)
  
  // Update status
  const statusElement = document.getElementById('current-theme')
  if (statusElement) {
    statusElement.textContent = `Current: ${currentMode} mode`
  }
}

function setupEventListeners() {
  const toggleBtn = document.getElementById('toggle-theme')
  const lightBtn = document.getElementById('light-mode')
  const darkBtn = document.getElementById('dark-mode')
  
  toggleBtn?.addEventListener('click', () => {
    currentMode = currentMode === 'light' ? 'dark' : 'light'
    updateTheme()
  })
  
  lightBtn?.addEventListener('click', () => {
    currentMode = 'light'
    updateTheme()
  })
  
  darkBtn?.addEventListener('click', () => {
    currentMode = 'dark'
    updateTheme()
  })
}

// Initialize
updateTheme()
setupEventListeners()

console.log(' FlowLabKit themes loaded!')
console.log('Available themes:', { lightTheme, darkTheme })
console.log('Current mode:', currentMode)