import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradient for the main flow element - using theme-aware colors */}
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'var(--accent-500)', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: 'var(--accent-400)', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'var(--accent-600)', stopOpacity: 1}} />
        </linearGradient>
        
        {/* Gradient for secondary elements */}
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'var(--accent-300)', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: 'var(--accent-700)', stopOpacity: 0.8}} />
        </linearGradient>
        
        {/* Background circle gradient - adapts to theme */}
        <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{stopColor: 'var(--bg-elevated)', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'var(--bg-surface)', stopOpacity: 1}} />
        </radialGradient>
      </defs>
      
      {/* Background circle for better contrast */}
      <circle cx="16" cy="16" r="15" fill="url(#bgGradient)" stroke="url(#flowGradient)" strokeWidth="0.5"/>
      
      {/* Main flow curve representing the "flow" in FlowLabKit */}
      <path d="M6 20 Q10 12, 16 16 Q22 20, 26 12" 
            stroke="url(#flowGradient)" 
            strokeWidth="2.5" 
            fill="none" 
            strokeLinecap="round"/>
      
      {/* Secondary flow curve for depth */}
      <path d="M8 24 Q12 18, 16 20 Q20 22, 24 18" 
            stroke="url(#flowGradient)" 
            strokeWidth="1.5" 
            fill="none" 
            strokeLinecap="round"
            opacity="0.6"/>
      
      {/* Component blocks representing the "kit" aspect */}
      <rect x="4" y="8" width="4" height="4" rx="1" fill="url(#accentGradient)"/>
      <rect x="14" y="6" width="4" height="4" rx="1" fill="url(#accentGradient)"/>
      <rect x="24" y="8" width="4" height="4" rx="1" fill="url(#accentGradient)"/>
      
      {/* Lab flask/beaker silhouette for the "lab" aspect */}
      <path d="M12 4 L12 8 L10 12 L10 14 Q10 15, 11 15 L17 15 Q18 15, 18 14 L18 12 L16 8 L16 4 Z" 
            fill="url(#flowGradient)" 
            opacity="0.3"/>
      
      {/* Small dots for additional detail and theme variety - using theme colors */}
      <circle cx="8" cy="14" r="1" fill="var(--accent-500)" opacity="0.7"/>
      <circle cx="24" cy="24" r="1" fill="var(--accent-400)" opacity="0.7"/>
      <circle cx="6" cy="26" r="0.8" fill="var(--accent-600)" opacity="0.7"/>
      <circle cx="26" cy="26" r="0.8" fill="var(--accent-300)" opacity="0.7"/>
    </svg>
  );
};

export default Logo;