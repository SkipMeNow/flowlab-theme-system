export interface NavigationItem {
  id: string;
  label: string;
  category?: string;
}

export interface DocPage {
  id: string;
  title: string;
  category: string;
  component?: React.ComponentType;
}

export type PageId = 
  | 'overview'
  | 'installation' 
  | 'getting-started'
  | 'theming'
  | 'responsive'
  | 'text'
  | 'button'
  | 'input'
  | 'card'
  | 'badge'
  | 'layout'
  | 'link'
  | 'loading'
  | 'spinner'
  | 'image'
  | 'video'
  | 'dropdown';