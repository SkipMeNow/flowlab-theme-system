import { useState, useEffect } from 'react';
import { useTheme } from './useTheme';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Orientation = 'portrait' | 'landscape';

// Helper function to get current breakpoint based on window width
const getCurrentBreakpoint = (width: number): Breakpoint => {
  if (width < 480) return 'xs';
  if (width < 640) return 'sm';
  if (width < 768) return 'md';
  if (width < 1024) return 'lg';
  if (width < 1280) return 'xl';
  return 'xxl';
};

// Helper function to get current orientation
const getCurrentOrientation = (width: number, height: number): Orientation => {
  return width > height ? 'landscape' : 'portrait';
};

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => {
    if (typeof window === 'undefined') return 'lg';
    return getCurrentBreakpoint(window.innerWidth);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}

export function useIsMobile(): boolean {
  const breakpoint = useBreakpoint();
  return breakpoint === 'xs' || breakpoint === 'sm';
}

export function useOrientation(): Orientation {
  const [orientation, setOrientation] = useState<Orientation>(() => {
    if (typeof window === 'undefined') return 'landscape';
    return getCurrentOrientation(window.innerWidth, window.innerHeight);
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setOrientation(getCurrentOrientation(window.innerWidth, window.innerHeight));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return orientation;
}

export function useResponsiveValue<T>(values: {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
  default: T;
}): T {
  const breakpoint = useBreakpoint();
  
  return values[breakpoint] ?? values.default;
}

export function useHoverSupport(): boolean {
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if the device supports hover
    const mediaQuery = window.matchMedia('(hover: hover)');
    setHasHover(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setHasHover(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return hasHover;
}

export function useResponsiveLayout() { 
  return { 
    containerStyle: {}, 
    itemStyle: {}, 
    isTransformed: false, 
    activeStrategy: 'preserve' as const, 
    responsive: () => null, 
    transform: (s: any) => s 
  }; 
}

export function useAutoResponsive() { 
  const isMobile = useIsMobile();
  const breakpoint = useBreakpoint();
  
  return { 
    css: (s: any) => s, 
    select: () => null, 
    classes: { container: '', item: '', interactive: '' }, 
    device: { isMobile, breakpoint, isCompact: isMobile } 
  }; 
}