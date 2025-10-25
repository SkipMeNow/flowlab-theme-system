import React, { forwardRef, VideoHTMLAttributes, useState, useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Spinner } from './Spinner';
import { Dropdown, DropdownItem, DropdownLabel, DropdownSeparator } from './Dropdown';

// Platform detection utilities
const detectVideoPlatform = (url: string): 'html5' | 'youtube' | 'vimeo' | 'unknown' => {
  if (!url) return 'html5';
  
  // YouTube patterns
  if (url.includes('youtube.com/watch') || url.includes('youtu.be/') || url.includes('youtube.com/embed/')) {
    return 'youtube';
  }
  
  // Vimeo patterns
  if (url.includes('vimeo.com/')) {
    return 'vimeo';
  }
  
  // Direct video file extensions
  if (/\.(mp4|webm|ogg|mov|avi|mkv)(\?.*)?$/i.test(url)) {
    return 'html5';
  }
  
  // Default to HTML5 for unknown URLs
  return 'html5';
};

const extractVideoId = (url: string, platform: string): string => {
  switch (platform) {
    case 'youtube':
      // Handle various YouTube URL formats
      const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
      return youtubeMatch ? youtubeMatch[1] : '';
      
    case 'vimeo':
      // Handle Vimeo URLs
      const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
      return vimeoMatch ? vimeoMatch[1] : '';
      
    default:
      return '';
  }
};

export interface VideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, 'className'> {
  as?: 'player' | 'url';
  variant?: 'default' | 'bordered' | 'shadow' | 'elevated' | 'hover-lift';
  shape?: 'square' | 'rounded' | 'pill';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  fit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  showSpinner?: boolean;
  showControls?: boolean;
  showMenu?: boolean;
  enableDownload?: boolean;
  enableFullscreen?: boolean;
  autoplayOnLoad?: boolean;
  muteAudioOnPlay?: boolean;
  enableLoop?: boolean;
  showPlaybackSpeed?: boolean;
  showVideoQuality?: boolean;
  videoQualities?: Array<{ label: string; value: string; src?: string }>;
  fallback?: React.ReactNode;
  className?: string;
}

// Add keyframes for quality change spinner
const spinKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Inject the keyframes into the document head
if (typeof document !== 'undefined' && !document.querySelector('#video-quality-spinner-styles')) {
  const style = document.createElement('style');
  style.id = 'video-quality-spinner-styles';
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>(({
  as: renderAs,
  variant = 'default',
  shape = 'rounded',
  size = 'md',
  fit = 'cover',
  showSpinner = true,
  showControls = true,
  showMenu = true,
  enableDownload = false,
  enableFullscreen = true,
  autoplayOnLoad = false,
  muteAudioOnPlay = false,
  enableLoop = false,
  showPlaybackSpeed = false,
  showVideoQuality = false,
  videoQualities = [
    { label: 'Auto', value: 'auto' },
    { label: '1080p', value: '1080p' },
    { label: '720p', value: '720p' },
    { label: '480p', value: '480p' },
    { label: '360p', value: '360p' }
  ],
  fallback,
  className = '',
  src,
  onLoadStart,
  onLoadedData,
  onError,
  ...props
}, ref) => {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(muteAudioOnPlay);

  const [showControlsOverlay, setShowControlsOverlay] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLooping, setIsLooping] = useState(enableLoop);
  const [currentQuality, setCurrentQuality] = useState(videoQualities[0]?.value || 'auto');
  const [isQualityChanging, setIsQualityChanging] = useState(false);
  const [qualityChangeMessage, setQualityChangeMessage] = useState('');

  // Determine platform and rendering mode
  const detectedPlatform = detectVideoPlatform(src || '');
  const videoId = extractVideoId(src || '', detectedPlatform);
  
  // Determine final rendering mode
  const finalRenderMode = renderAs || (detectedPlatform === 'html5' ? 'player' : 'url');
  const shouldUseIframe = finalRenderMode === 'url' && detectedPlatform !== 'html5';

  // Use forwarded ref or internal ref
  const actualRef = (ref as React.RefObject<HTMLVideoElement>) || videoRef;

  // SVG Icons
  const PlayIcon = ({ size = 24, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M8 5v14l11-7z"/>
    </svg>
  );

  const PauseIcon = ({ size = 24, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  );

  const VolumeIcon = ({ size = 16, color = 'currentColor', level = 'high' }) => {
    if (level === 'muted') {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>
      );
    }
    if (level === 'low') {
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
        </svg>
      );
    }
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
    );
  };

  const MenuIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  );

  const DownloadIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
  );

  const RestartIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M4 12c0 4.42 3.58 8 8 8s8-3.58 8-8h-2c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L14 9h7V2l-2.35 2.35C17.15 2.85 14.74 2 12 2 6.48 2 2 6.48 2 12z"/>
    </svg>
  );

  const VideoErrorIcon = ({ size = 32, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
      <line x1="8" x2="8" y1="21" y2="3" />
    </svg>
  );

  const FullscreenIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
    </svg>
  );

  const ExitFullscreenIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
    </svg>
  );

  const LoopIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
    </svg>
  );

  const SpeedIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"/>
      <path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/>
    </svg>
  );

  const PlaySpeedIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M13 8v8l5-4-5-4zM6 8v8l5-4-5-4z"/>
    </svg>
  );

  const VideoQualityIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
    </svg>
  );

  // Event handlers
  const handleLoadStart = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsLoading(true);
    setHasError(false);
    onLoadStart?.(e);
  };

  const handleLoadedData = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    setIsLoading(false);
    setHasError(false);
    setDuration(video.duration);
    onLoadedData?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setIsLoading(false);
    setHasError(true);
    onError?.(e);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    setCurrentTime(e.currentTarget.currentTime);
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  // Control handlers
  const togglePlayPause = () => {
    const video = actualRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = actualRef.current;
    if (!video || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    const newTime = clickRatio * duration;
    
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = actualRef.current;
    const newVolume = parseFloat(e.target.value);
    
    if (video) {
      video.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    const video = actualRef.current;
    if (!video) return;

    if (isMuted) {
      video.volume = volume;
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const handleDownload = () => {
    if (src && enableDownload) {
      const link = document.createElement('a');
      link.href = src;
      link.download = 'video.mp4';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // New feature handlers
  const handleFullscreenToggle = () => {
    if (!enableFullscreen) return;
    
    try {
      if (!isFullscreen) {
        if (actualRef.current?.requestFullscreen) {
          actualRef.current.requestFullscreen();
        } else if ((actualRef.current as any)?.webkitRequestFullscreen) {
          (actualRef.current as any).webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen();
        }
      }
    } catch (error) {
      console.warn('Fullscreen not supported:', error);
    }
  };

  const handlePlaybackSpeedChange = (rate: number) => {
    const video = actualRef.current;
    if (!video) return;
    
    video.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const handleLoopToggle = () => {
    const video = actualRef.current;
    if (!video) return;
    
    const newLooping = !isLooping;
    video.loop = newLooping;
    setIsLooping(newLooping);
  };

  const handleRestart = () => {
    const video = actualRef.current;
    if (!video) return;
    
    video.currentTime = 0;
    setCurrentTime(0);
    if (!isPlaying) {
      video.play();
    }
  };

  const handleQualityChange = (qualityValue: string) => {
    const selectedQuality = videoQualities.find(q => q.value === qualityValue);
    if (!selectedQuality) return;
    
    const video = actualRef.current;
    if (!video) return;
    
    const currentTime = video.currentTime;
    const wasPlaying = !video.paused;
    
    // Show quality change indicator
    setIsQualityChanging(true);
    setQualityChangeMessage(`Switching to ${selectedQuality.label}...`);
    
    // If this quality has a specific src (different quality variant), update it
    if (selectedQuality.src && selectedQuality.src !== video.src) {
      video.src = selectedQuality.src;
      video.load(); // Reload the video with new source
      
      // Handle video loading events
      const handleLoadedData = () => {
        video.currentTime = currentTime;
        if (wasPlaying) {
          video.play().catch(() => {
            // Handle play promise rejection
          });
        }
        setIsQualityChanging(false);
        setQualityChangeMessage(`Quality changed to ${selectedQuality.label}`);
        setTimeout(() => setQualityChangeMessage(''), 2000);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
    } else {
      // Simulate quality change for same source
      setTimeout(() => {
        setIsQualityChanging(false);
        setQualityChangeMessage(`Quality set to ${selectedQuality.label}`);
        setTimeout(() => setQualityChangeMessage(''), 2000);
      }, 500);
    }
    
    setCurrentQuality(qualityValue);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };



  // Size styles
  const sizeStyles: Record<string, React.CSSProperties> = {
    xs: {
      width: '160px',
      height: '90px',
    },
    sm: {
      width: '240px',
      height: '135px',
    },
    md: {
      width: '320px',
      height: '180px',
    },
    lg: {
      width: '480px',
      height: '270px',
    },
    xl: {
      width: '640px',
      height: '360px',
    },
    full: {
      width: '100%',
      height: 'auto',
    },
  };

  // Shape styles
  const shapeStyles: Record<string, React.CSSProperties> = {
    square: {
      borderRadius: '0',
    },
    rounded: {
      borderRadius: 'var(--radius-lg)',
    },
    pill: {
      borderRadius: 'var(--radius-full)',
    },
  };

  // Variant styles
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      border: '1px solid var(--border-color)',
    },
    bordered: {
      border: '3px solid var(--accent-500)',
      padding: '2px',
    },
    shadow: {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      border: '1px solid var(--border-color)',
    },
    elevated: {
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.25)',
      transform: 'translateY(-4px)',
      border: '1px solid var(--border-color)',
    },
    'hover-lift': {
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '2px solid var(--border-color)',
      transform: 'translateY(0px) scale(1)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
  };

  // Base styles
  const baseStyles: React.CSSProperties = {
    display: 'block',
    objectFit: fit,
    transition: 'var(--transition-base)',
    backgroundColor: 'var(--bg-surface)',
    outline: 'none',
    width: '100%',
    height: '100%',
    ...shapeStyles[shape], // Apply shape to video element
    ...variantStyles[variant], // Apply variant styles to video element
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
  };

  // Container styles - keep rectangular for controls
  const containerStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    overflow: 'visible', // Allow menu to appear outside
    background: 'transparent', // Transparent container
    border: 'none', // Remove border
    ...sizeStyles[size],
    // Remove variant styles from container - apply only to video
  };

  // Loading overlay styles - match video shape
  const loadingOverlayStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: shapeStyles[shape].borderRadius, // Match video shape
    opacity: isLoading ? 1 : 0,
    pointerEvents: isLoading ? 'auto' : 'none',
    transition: 'var(--transition-base)',
    zIndex: 15, // Above controls when loading
  };

  // Error fallback styles - match video shape
  const errorStyles: React.CSSProperties = {
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...shapeStyles[shape], // Apply shape to error display
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-surface)',
    border: '2px dashed var(--border-color)',
    color: 'var(--text-secondary)',
    fontSize: 'var(--font-size-sm)',
    textAlign: 'center',
    padding: 'var(--space-sm)',
  };

  // Controls styles - no longer need to match shape
  const controlsOverlayStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
    padding: 'var(--space-sm)',
    opacity: 1, // Always show controls
    transition: 'opacity 0.3s ease',
    pointerEvents: 'auto',
    borderRadius: '0', // Controls stay rectangular
    zIndex: 10, // Ensure controls are above video
  };

  const playButtonStyles: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0, 0, 0, 0.7)',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    opacity: !isPlaying && !isLoading ? 1 : 0,
    transition: 'all 0.3s ease',
    pointerEvents: !isPlaying && !isLoading ? 'auto' : 'none',
    zIndex: 5, // Above video but below controls
  };



  // Effects
  useEffect(() => {
    const video = actualRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
  }, []);



  // Fullscreen state tracking
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement || !!(document as any).webkitFullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Autoplay on load
  useEffect(() => {
    if (autoplayOnLoad && actualRef.current && !hasError) {
      const playVideo = async () => {
        try {
          const video = actualRef.current!;
          if (muteAudioOnPlay) {
            video.muted = true;
            setIsMuted(true);
          }
          await video.play();
          setIsPlaying(true);
        } catch (error) {
          console.warn('Autoplay failed:', error);
        }
      };
      
      // Wait for video to load before attempting autoplay
      if (actualRef.current.readyState >= 3) {
        playVideo();
      } else {
        const handleCanPlay = () => {
          playVideo();
          actualRef.current?.removeEventListener('canplay', handleCanPlay);
        };
        actualRef.current.addEventListener('canplay', handleCanPlay);
      }
    }
  }, [autoplayOnLoad, muteAudioOnPlay, hasError]);

  // Loop setting
  useEffect(() => {
    if (actualRef.current) {
      actualRef.current.loop = isLooping;
    }
  }, [isLooping]);

  // Playback rate setting
  useEffect(() => {
    if (actualRef.current) {
      actualRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // If there's an error and we have a fallback, show it
  if (hasError && fallback) {
    return (
      <div style={errorStyles} className={className}>
        {fallback}
      </div>
    );
  }

  // If there's an error and no fallback, show default error message
  if (hasError) {
    return (
      <div style={errorStyles} className={className}>
        <VideoErrorIcon size={32} color="var(--text-secondary)" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>
          Failed to load video
        </div>
      </div>
    );
  }

  // Render iframe for YouTube/Vimeo when using 'url' mode
  if (shouldUseIframe && videoId) {
    const getEmbedUrl = () => {
      switch (detectedPlatform) {
        case 'youtube':
          return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${window.location.origin}`;
        case 'vimeo':
          return `https://player.vimeo.com/video/${videoId}`;
        default:
          return '';
      }
    };

    return (
      <div 
        style={containerStyles} 
        className={className}
      >
        <iframe
          src={getEmbedUrl()}
          style={{
            ...combinedStyles,
            border: 'none',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Player"
        />
        
        {/* Platform indicator */}
        <div style={{
          position: 'absolute',
          top: 'var(--space-sm)',
          left: 'var(--space-sm)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: 'var(--space-xs) var(--space-sm)',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--font-size-xs)',
          fontWeight: '500',
          textTransform: 'uppercase',
          zIndex: 10,
        }}>
          {detectedPlatform}
        </div>
      </div>
    );
  }

  // Default HTML5 video rendering
  return (
    <div 
      style={containerStyles} 
      className={className}
    >
      <video
        ref={actualRef}
        src={src}
        style={combinedStyles}
        onLoadStart={handleLoadStart}
        onLoadedData={handleLoadedData}
        onError={handleError}
        onTimeUpdate={handleTimeUpdate}
        onPlay={handlePlay}
        onPause={handlePause}
        onMouseEnter={(e) => {
          if (variant === 'hover-lift') {
            Object.assign(e.currentTarget.parentElement!.style, {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
              borderColor: 'var(--accent-500)',
            });
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'hover-lift') {
            Object.assign(e.currentTarget.parentElement!.style, {
              transform: 'translateY(0px) scale(1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              borderColor: 'var(--border-color)',
            });
          }
        }}
        {...props}
      />
      
      {/* Central Play Button */}
      <button
        style={playButtonStyles}
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <PauseIcon size={24} color="white" />
        ) : (
          <PlayIcon size={24} color="white" />
        )}
      </button>

      {/* Custom Controls Overlay */}
      {showControls && (
        <div style={controlsOverlayStyles}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'var(--space-sm)',
            marginBottom: 'var(--space-xs)'
          }}>
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '18px',
                padding: '4px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <PauseIcon size={18} color="white" />
              ) : (
                <PlayIcon size={18} color="white" />
              )}
            </button>

            {/* Progress Bar */}
            <div
              style={{
                flex: 1,
                height: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '2px',
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={handleProgressClick}
            >
              <div
                style={{
                  height: '100%',
                  backgroundColor: 'var(--accent-500)',
                  borderRadius: '2px',
                  width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                  transition: 'width 0.1s ease',
                }}
              />
            </div>

            {/* Time Display */}
            <div style={{ 
              color: 'white', 
              fontSize: '12px', 
              fontFamily: 'monospace',
              minWidth: '80px',
              textAlign: 'center'
            }}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Volume Control */}
            <button
              onClick={toggleMute}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              <VolumeIcon 
                size={16} 
                color="white" 
                level={isMuted ? 'muted' : volume > 0.5 ? 'high' : 'low'} 
              />
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              style={{
                width: '60px',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.3)',
                outline: 'none',
                borderRadius: '2px',
              }}
            />

            {/* Menu Button */}
            {showMenu && (
              <Dropdown
                trigger={
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '16px',
                      padding: '4px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-label="More options"
                  >
                    <MenuIcon size={16} color="white" />
                  </button>
                }
                align="end"
                side="top"
                sideOffset={8}
              >
                {/* Fullscreen Toggle */}
                {enableFullscreen && (
                  <DropdownItem
                    leftIcon={
                      isFullscreen ? (
                        <ExitFullscreenIcon size={16} />
                      ) : (
                        <FullscreenIcon size={16} />
                      )
                    }
                    onClick={handleFullscreenToggle}
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: 'normal',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-xs)',
                      width: '100%',
                      padding: 'var(--space-xs) var(--space-sm)',
                      border: 'none',
                      backgroundColor: 'transparent',
                      fontSize: 'var(--font-size-sm)',
                      fontFamily: 'var(--font-family)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      opacity: 1,
                      transition: 'var(--transition-fast)',
                      outline: 'none',
                    }}
                  >
                    {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  </DropdownItem>
                )}

                {/* Loop Toggle */}
                {enableLoop && (
                  <DropdownItem
                    leftIcon={<LoopIcon size={16} color={isLooping ? 'var(--primary)' : 'currentColor'} />}
                    onClick={handleLoopToggle}
                    style={{
                      color: isLooping ? 'var(--primary)' : 'var(--text-primary)',
                      fontWeight: isLooping ? '500' : 'normal',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-xs)',
                      width: '100%',
                      padding: 'var(--space-xs) var(--space-sm)',
                      border: 'none',
                      backgroundColor: 'transparent',
                      fontSize: 'var(--font-size-sm)',
                      fontFamily: 'var(--font-family)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      opacity: 1,
                      transition: 'var(--transition-fast)',
                      outline: 'none',
                    }}
                  >
                    Loop {isLooping ? '(On)' : '(Off)'}
                  </DropdownItem>
                )}

                {/* Playback Speed Submenu */}
                {showPlaybackSpeed && (
                  <Dropdown
                    trigger={
                      <DropdownItem
                        leftIcon={<SpeedIcon size={16} />}
                        rightIcon="›"
                        style={{
                          color: 'var(--text-primary)',
                          fontWeight: 'normal',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-xs)',
                          width: '100%',
                          padding: 'var(--space-xs) var(--space-sm)',
                          border: 'none',
                          backgroundColor: 'transparent',
                          fontSize: 'var(--font-size-sm)',
                          fontFamily: 'var(--font-family)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          opacity: 1,
                          transition: 'var(--transition-fast)',
                          outline: 'none',
                        }}
                      >
                        Playback Speed ({playbackRate === 1 ? 'Normal' : `${playbackRate}x`})
                      </DropdownItem>
                    }
                    align="start"
                    side="right"
                    sideOffset={4}
                  >
                    <DropdownLabel>Playback Speed</DropdownLabel>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                      <DropdownItem
                        key={speed}
                        leftIcon={<SpeedIcon size={16} color={playbackRate === speed ? 'var(--primary)' : 'currentColor'} />}
                        rightIcon={playbackRate === speed ? '[✓]' : undefined}
                        onClick={() => handlePlaybackSpeedChange(speed)}
                        style={{
                          color: playbackRate === speed ? 'var(--primary)' : 'var(--text-primary)',
                          fontWeight: playbackRate === speed ? '500' : 'normal',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-xs)',
                          width: '100%',
                          padding: 'var(--space-xs) var(--space-sm)',
                          border: 'none',
                          backgroundColor: 'transparent',
                          fontSize: 'var(--font-size-sm)',
                          fontFamily: 'var(--font-family)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          opacity: 1,
                          transition: 'var(--transition-fast)',
                          outline: 'none',
                        }}
                      >
                        {speed === 1 ? 'Normal' : `${speed}x`}
                      </DropdownItem>
                    ))}
                  </Dropdown>
                )}

                {/* Video Quality Submenu */}
                {showVideoQuality && videoQualities.length > 0 && (
                  <Dropdown
                    trigger={
                      <DropdownItem
                        leftIcon={<VideoQualityIcon size={16} />}
                        rightIcon="›"
                        style={{
                          color: 'var(--text-primary)',
                          fontWeight: 'normal',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-xs)',
                          width: '100%',
                          padding: 'var(--space-xs) var(--space-sm)',
                          border: 'none',
                          backgroundColor: 'transparent',
                          fontSize: 'var(--font-size-sm)',
                          fontFamily: 'var(--font-family)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          opacity: 1,
                          transition: 'var(--transition-fast)',
                          outline: 'none',
                        }}
                      >
                        Quality ({videoQualities.find(q => q.value === currentQuality)?.label || 'Auto'})
                      </DropdownItem>
                    }
                    align="start"
                    side="right"
                    sideOffset={4}
                  >
                    <DropdownLabel>Video Quality</DropdownLabel>
                    {videoQualities.map((quality) => (
                      <DropdownItem
                        key={quality.value}
                        leftIcon={<VideoQualityIcon size={16} color={currentQuality === quality.value ? 'var(--primary)' : 'currentColor'} />}
                        rightIcon={currentQuality === quality.value ? '[✓]' : undefined}
                        onClick={() => handleQualityChange(quality.value)}
                        style={{
                          color: currentQuality === quality.value ? 'var(--primary)' : 'var(--text-primary)',
                          fontWeight: currentQuality === quality.value ? '500' : 'normal',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-xs)',
                          width: '100%',
                          padding: 'var(--space-xs) var(--space-sm)',
                          border: 'none',
                          backgroundColor: 'transparent',
                          fontSize: 'var(--font-size-sm)',
                          fontFamily: 'var(--font-family)',
                          textAlign: 'left',
                          cursor: 'pointer',
                          opacity: 1,
                          transition: 'var(--transition-fast)',
                          outline: 'none',
                        }}
                      >
                        {quality.label}
                      </DropdownItem>
                    ))}
                  </Dropdown>
                )}

                {/* Separator */}
                {(enableDownload || (enableFullscreen || enableLoop || showPlaybackSpeed || showVideoQuality)) && (
                  <DropdownSeparator />
                )}

                {/* Restart */}
                <DropdownItem
                  leftIcon={<RestartIcon size={16} />}
                  onClick={handleRestart}
                  style={{
                    color: 'var(--text-primary)',
                    fontWeight: 'normal',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-xs)',
                    width: '100%',
                    padding: 'var(--space-xs) var(--space-sm)',
                    border: 'none',
                    backgroundColor: 'transparent',
                    fontSize: 'var(--font-size-sm)',
                    fontFamily: 'var(--font-family)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    opacity: 1,
                    transition: 'var(--transition-fast)',
                    outline: 'none',
                  }}
                >
                  Restart
                </DropdownItem>

                {/* Download */}
                {enableDownload && (
                  <DropdownItem
                    leftIcon={<DownloadIcon size={16} />}
                    onClick={handleDownload}
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: 'normal',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-xs)',
                      width: '100%',
                      padding: 'var(--space-xs) var(--space-sm)',
                      border: 'none',
                      backgroundColor: 'transparent',
                      fontSize: 'var(--font-size-sm)',
                      fontFamily: 'var(--font-family)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      opacity: 1,
                      transition: 'var(--transition-fast)',
                      outline: 'none',
                    }}
                  >
                    Download
                  </DropdownItem>
                )}
              </Dropdown>
            )}
          </div>
        </div>
      )}
      
      {/* Quality indicator overlay */}
      {(qualityChangeMessage || (showVideoQuality && currentQuality !== 'auto')) && (
        <div style={{
          position: 'absolute',
          top: 'var(--space-sm)',
          right: 'var(--space-sm)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: 'var(--space-xs) var(--space-sm)',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--font-size-xs)',
          fontWeight: '500',
          zIndex: 10,
          opacity: qualityChangeMessage ? 1 : 0.7,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-xs)',
        }}>
          {isQualityChanging && (
            <div style={{
              width: '12px',
              height: '12px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderTop: '2px solid white',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }} />
          )}
          {qualityChangeMessage || `${currentQuality.toUpperCase()}`}
        </div>
      )}

      {/* Loading overlay */}
      {showSpinner && (
        <div style={loadingOverlayStyles}>
          <Spinner size="md" variant="primary" />
        </div>
      )}
    </div>
  );
});

Video.displayName = 'Video';