/**
 * @flowlabkit/design-system/themes
 * 
 * Additional Themes (Optional Module)
 * 6 beautiful themes: ocean, forest, sunset, lavender, cyberpunk, autumn
 * Excludes light/dark which are included in core
 */

// Additional Themes (6 themes)
export { oceanTheme } from '../themes/ocean';
export { forestTheme } from '../themes/forest';
export { sunsetTheme } from '../themes/sunset';
export { lavenderTheme } from '../themes/lavender';
export { cyberpunkTheme } from '../themes/cyberpunk';
export { autumnTheme } from '../themes/autumn';

// Theme utilities and collections
export { 
  themes, 
  allThemes
} from '../themes/index';

// Re-export theme types for convenience
export type { Theme } from '../types';