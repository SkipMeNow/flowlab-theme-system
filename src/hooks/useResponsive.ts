import { useState, useEffect } from 'react';
import { useTheme } from './useTheme';

/**
 * Hook to detect current breakpoint based on window width
 */
export function useBreakpoint() {
  const { theme } = useTheme();
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('lg');

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      
      if (width < parseInt(theme.breakpoints.sm)) {
        setCurrentBreakpoint('xs');
      } else if (width < parseInt(theme.breakpoints.md)) {
        setCurrentBreakpoint('sm');
      } else if (width < parseInt(theme.breakpoints.lg)) {
        setCurrentBreakpoint('md');
      } else if (width < parseInt(theme.breakpoints.xl)) {
        setCurrentBreakpoint('lg');
      } else if (width < parseInt(theme.breakpoints.xxl)) {
        setCurrentBreakpoint('xl');
      } else {
        setCurrentBreakpoint('xxl');
      }
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, [theme.breakpoints]);

  return currentBreakpoint;
}

/**
 * Hook to detect if current device is mobile (touch-enabled)
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isMobileWidth = window.innerWidth < 768; // md breakpoint
      const isMobileUserAgent = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsMobile(hasTouch || isMobileWidth || isMobileUserAgent);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

/**
 * Hook to detect screen orientation
 */
export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');

  useEffect(() => {
    const checkOrientation = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return orientation;
}

/**
 * Hook to get responsive values based on current breakpoint
 */
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
  
  return values[breakpoint as keyof typeof values] ?? values.default;
}

/**
 * Hook to detect if device supports hover (desktop vs mobile)
 */
export function useHoverSupport() {
  const [supportsHover, setSupportsHover] = useState(true);

  useEffect(() => {
    const checkHover = () => {
      // Check if device supports hover
      const hasHover = window.matchMedia('(hover: hover)').matches;
      setSupportsHover(hasHover);
    };

    checkHover();
    
    // Listen for media query changes
    const mediaQuery = window.matchMedia('(hover: hover)');
    mediaQuery.addEventListener('change', checkHover);
    
    return () => mediaQuery.removeEventListener('change', checkHover);
  }, []);

  return supportsHover;
}