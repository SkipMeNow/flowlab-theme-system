import React from 'react';

export type BehaviorType = 
  | 'Navigation' 
  | 'Header' 
  | 'Content' 
  | 'Modal' 
  | 'Dropdown' 
  | 'Card' 
  | 'Button' 
  | 'Form';

export type LayoutMode = 'desktop' | 'tablet' | 'mobile';

export interface BehaviorProps {
  children: React.ReactNode;
  mode: LayoutMode;
  [key: string]: any; // Allow any additional props
}

export interface LayoutBehavior {
  component: React.ComponentType<BehaviorProps>;
  breakpoints: LayoutMode[];
}

export interface ResponsiveLayoutConfig {
  [behavior: string]: {
    desktop?: React.ComponentType<BehaviorProps>;
    tablet?: React.ComponentType<BehaviorProps>;
    mobile?: React.ComponentType<BehaviorProps>;
  };
}