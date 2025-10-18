export { lightTheme } from './light';
export { darkTheme } from './dark';
export { oceanTheme } from './ocean';
export { forestTheme } from './forest';
export { sunsetTheme } from './sunset';
export { lavenderTheme } from './lavender';
export { cyberpunkTheme } from './cyberpunk';
export { autumnTheme } from './autumn';

import { lightTheme } from './light';
import { darkTheme } from './dark';
import { oceanTheme } from './ocean';
import { forestTheme } from './forest';
import { sunsetTheme } from './sunset';
import { lavenderTheme } from './lavender';
import { cyberpunkTheme } from './cyberpunk';
import { autumnTheme } from './autumn';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  ocean: oceanTheme,
  forest: forestTheme,
  sunset: sunsetTheme,
  lavender: lavenderTheme,
  cyberpunk: cyberpunkTheme,
  autumn: autumnTheme,
} as const;

export const defaultTheme = lightTheme;

// Array of all theme names for easy iteration
export const allThemes = [
  'light',
  'dark',
  'ocean',
  'forest',
  'sunset',
  'lavender',
  'cyberpunk',
  'autumn',
] as const;

export type ThemeName = typeof allThemes[number];