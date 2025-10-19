import React from 'react';

interface FLKLogoProps {
  size?: number;
  className?: string;
}

const FLKLogo: React.FC<FLKLogoProps> = ({ size = 32, className = '' }) => {
  // Calculate width based on aspect ratio (64:32 = 2:1)
  const width = size * 2;
  const height = size;

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 64 32" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradient for the main letters - theme aware */}
        <linearGradient id="letterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'var(--accent-500)', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: 'var(--accent-400)', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'var(--accent-600)', stopOpacity: 1}} />
        </linearGradient>
        
        {/* Gradient for accent elements */}
        <linearGradient id="flkAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'var(--accent-300)', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: 'var(--accent-700)', stopOpacity: 0.8}} />
        </linearGradient>
        
        {/* Background gradient */}
        <linearGradient id="flkBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: 'var(--bg-elevated)', stopOpacity: 0.1}} />
          <stop offset="100%" style={{stopColor: 'var(--bg-surface)', stopOpacity: 0.1}} />
        </linearGradient>
        
        {/* Flow gradient for connecting elements */}
        <linearGradient id="flowConnectGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{stopColor: 'var(--accent-500)', stopOpacity: 0.6}} />
          <stop offset="50%" style={{stopColor: 'var(--accent-400)', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: 'var(--accent-600)', stopOpacity: 0.6}} />
        </linearGradient>
      </defs>
      
      {/* Background subtle shape */}
      <rect width="64" height="32" rx="4" fill="url(#flkBgGradient)" opacity="0.3"/>
      
      {/* Letter F */}
      <g transform="translate(6, 4)">
        {/* Main F stroke */}
        <path d="M2 2 L2 22 M2 2 L12 2 M2 11 L10 11" 
              stroke="url(#letterGradient)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"/>
        
        {/* F accent dots */}
        <circle cx="14" cy="4" r="1" fill="url(#flkAccentGradient)"/>
        <circle cx="12" cy="13" r="0.8" fill="url(#flkAccentGradient)" opacity="0.7"/>
        
        {/* Flow curve from F */}
        <path d="M12 18 Q16 16, 20 18" 
              stroke="url(#flowConnectGradient)" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round"
              opacity="0.6"/>
      </g>
      
      {/* Letter L */}
      <g transform="translate(26, 4)">
        {/* Main L stroke */}
        <path d="M2 2 L2 22 L12 22" 
              stroke="url(#letterGradient)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"/>
        
        {/* L accent elements */}
        <rect x="8" y="18" width="3" height="3" rx="0.5" fill="url(#flkAccentGradient)" opacity="0.8"/>
        <circle cx="2" cy="8" r="0.8" fill="url(#flkAccentGradient)" opacity="0.6"/>
        
        {/* Flow curve from L */}
        <path d="M12 16 Q16 14, 20 16" 
              stroke="url(#flowConnectGradient)" 
              strokeWidth="1.5" 
              fill="none" 
              strokeLinecap="round"
              opacity="0.6"/>
      </g>
      
      {/* Letter K */}
      <g transform="translate(46, 4)">
        {/* Main K strokes */}
        <path d="M2 2 L2 22 M2 12 L12 2 M2 12 L12 22" 
              stroke="url(#letterGradient)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"/>
        
        {/* K accent elements */}
        <circle cx="8" cy="6" r="1" fill="url(#flkAccentGradient)"/>
        <circle cx="8" cy="18" r="1" fill="url(#flkAccentGradient)"/>
        <rect x="13" y="4" width="2" height="2" rx="0.5" fill="url(#flkAccentGradient)" opacity="0.7"/>
        <rect x="13" y="20" width="2" height="2" rx="0.5" fill="url(#flkAccentGradient)" opacity="0.7"/>
      </g>
      
      {/* Connecting flow elements between letters */}
      <path d="M18 16 Q22 14, 26 16" 
            stroke="url(#flowConnectGradient)" 
            strokeWidth="1" 
            fill="none" 
            strokeLinecap="round"
            opacity="0.4"/>
            
      <path d="M38 18 Q42 16, 46 18" 
            stroke="url(#flowConnectGradient)" 
            strokeWidth="1" 
            fill="none" 
            strokeLinecap="round"
            opacity="0.4"/>
      
      {/* Small lab/kit themed elements - using theme colors */}
      <circle cx="12" cy="6" r="0.6" fill="var(--accent-500)" opacity="0.5"/>
      <circle cx="32" cy="8" r="0.6" fill="var(--accent-400)" opacity="0.5"/>
      <circle cx="52" cy="6" r="0.6" fill="var(--accent-600)" opacity="0.5"/>
      
      {/* Bottom flow accent */}
      <path d="M8 28 Q32 24, 56 28" 
            stroke="url(#flowConnectGradient)" 
            strokeWidth="1.5" 
            fill="none" 
            strokeLinecap="round"
            opacity="0.3"/>
    </svg>
  );
};

export default FLKLogo;