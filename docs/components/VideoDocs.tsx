import React, { useState } from 'react';
import { Video, Button, Text, Card, CardHeader, CardBody, Badge } from '../../src/index';

export const VideoDocs: React.FC = () => {
  const [activeSize, setActiveSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>('md');
  const [activeVariant, setActiveVariant] = useState<'default' | 'bordered' | 'shadow' | 'elevated' | 'hover-lift'>('default');
  const [activeShape, setActiveShape] = useState<'square' | 'rounded' | 'pill'>('rounded');
  const [showControls, setShowControls] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [enableDownload, setEnableDownload] = useState(false);
  const [enableFullscreen, setEnableFullscreen] = useState(true);
  const [autoplayOnLoad, setAutoplayOnLoad] = useState(false);
  const [muteAudioOnPlay, setMuteAudioOnPlay] = useState(false);
  const [enableLoop, setEnableLoop] = useState(false);
  const [showPlaybackSpeed, setShowPlaybackSpeed] = useState(false);
  const [showVideoQuality, setShowVideoQuality] = useState(false);

  // Sample video URL - Base/Auto quality
  // Using publicly available test videos to demonstrate YouTube-style quality switching
  const sampleVideoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  
  // YouTube-style quality options - same content in different resolutions
  // Each quality represents the same video encoded at different resolutions/bitrates
  // Note: Using different sample videos to simulate quality variants for demonstration
  const sampleVideoQualities = [
    { 
      label: 'Auto', 
      value: 'auto',
      // Auto uses the main src - in production this would be adaptive bitrate
    },
    { 
      label: '1080p', 
      value: '1080p', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' // HD version
    },
    { 
      label: '720p', 
      value: '720p', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' // Lower res version
    },
    { 
      label: '480p', 
      value: '480p', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' // Standard def
    },
    { 
      label: '360p', 
      value: '360p', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' // Lower quality
    },
    { 
      label: '240p', 
      value: '240p', 
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' // Lowest quality
    }
  ];

  return (
    <div style={{ padding: 'var(--space-lg)', maxWidth: '1200px' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
          <Text as="h1" size="3xl" weight="bold">Video</Text>
          <Badge variant="secondary" size="sm">Media Component</Badge>
        </div>
        
        <Text as="p" size="lg" color="secondary" style={{ marginBottom: 'var(--space-lg)' }}>
          A feature-rich, themeable video component with transparent container where the video itself takes the 
          shape while themed SVG controls remain always visible. Includes advanced features like fullscreen toggle, 
          autoplay, loop functionality, playback speed controls, loading states, error handling, and a comprehensive 
          3-dot menu for additional options.
        </Text>

        <div style={{ 
          backgroundColor: 'var(--warning-50)', 
          border: '1px solid var(--warning-200)', 
          borderRadius: 'var(--radius-md)', 
          padding: 'var(--space-md)',
          marginBottom: 'var(--space-lg)'
        }}>
          <Text size="sm" weight="medium" style={{ color: 'var(--warning-700)' }}>
            📽️ <strong>Demo Videos:</strong> Sample videos used in this demo are from Google's test video collection 
            and Big Buck Bunny © copyright 2008, Blender Foundation (www.bigbuckbunny.org), 
            licensed under Creative Commons Attribution 3.0. Used for demonstration purposes only.
          </Text>
        </div>

        <div style={{ 
          backgroundColor: 'var(--info-50)', 
          border: '1px solid var(--info-200)', 
          borderRadius: 'var(--radius-md)', 
          padding: 'var(--space-md)',
          marginBottom: 'var(--space-lg)'
        }}>
          <Text size="sm" weight="medium" style={{ color: 'var(--info-700)' }}>
            ⚙️ <strong>Video Sources Supported:</strong> The Video component now supports multiple sources:
            <br/>• <strong>Direct files:</strong> `src="video.mp4"` (HTML5 player with all controls)
            <br/>• <strong>YouTube URLs:</strong> `src="https://youtube.com/watch?v=..." as="url"` (iframe embed)
            <br/>• <strong>Vimeo URLs:</strong> `src="https://vimeo.com/123456" as="url"` (iframe embed)
            <br/>• <strong>Auto-detection:</strong> Leave `as` prop empty for automatic detection
            <br/>• Use `as="player"` to force HTML5 player, `as="url"` to force iframe embed
          </Text>
        </div>

        <div style={{ 
          backgroundColor: 'var(--accent-50)', 
          border: '1px solid var(--accent-200)', 
          borderRadius: 'var(--radius-md)', 
          padding: 'var(--space-md)' 
        }}>
          <Text size="sm" weight="medium" style={{ color: 'var(--accent-700)' }}>
            💡 <strong>Architecture Note:</strong> This is the basic Video component. 
            For advanced features like custom controls, playlists, or analytics, 
            consider the enhanced Video component in FlowLabKit UI library.
          </Text>
        </div>
      </div>

      {/* Interactive Example */}
      <Card style={{ marginBottom: 'var(--space-2xl)' }}>
        <CardHeader>
          <Text as="h2" size="xl" weight="semibold">Interactive Example</Text>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'flex', gap: 'var(--space-xl)' }}>
            {/* Controls */}
            <div style={{ flex: '0 0 300px' }}>
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <Text as="h3" size="md" weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Size</Text>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                  {(['xs', 'sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
                    <Button
                      key={size}
                      variant={activeSize === size ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setActiveSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <Text as="h3" size="md" weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Variant</Text>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                  {(['default', 'bordered', 'shadow', 'elevated', 'hover-lift'] as const).map((variant) => (
                    <Button
                      key={variant}
                      variant={activeVariant === variant ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setActiveVariant(variant)}
                    >
                      {variant}
                    </Button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <Text as="h3" size="md" weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Shape</Text>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                  {(['square', 'rounded', 'pill'] as const).map((shape) => (
                    <Button
                      key={shape}
                      variant={activeShape === shape ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setActiveShape(shape)}
                    >
                      {shape}
                    </Button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <Text as="h3" size="md" weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Options</Text>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={showControls}
                      onChange={(e) => setShowControls(e.target.checked)}
                    />
                    <Text size="sm">Show controls</Text>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={showMenu}
                      onChange={(e) => setShowMenu(e.target.checked)}
                    />
                    <Text size="sm">Show menu (3-dot)</Text>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={enableDownload}
                      onChange={(e) => setEnableDownload(e.target.checked)}
                    />
                    <Text size="sm">Enable download</Text>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={enableFullscreen}
                      onChange={(e) => setEnableFullscreen(e.target.checked)}
                    />
                    <Text size="sm">Enable fullscreen</Text>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={autoplayOnLoad}
                      onChange={(e) => setAutoplayOnLoad(e.target.checked)}
                    />
                    <Text size="sm">Autoplay on load</Text>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={muteAudioOnPlay}
                      onChange={(e) => setMuteAudioOnPlay(e.target.checked)}
                    />
                    <Text size="sm">Mute audio on play</Text>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={enableLoop}
                      onChange={(e) => setEnableLoop(e.target.checked)}
                    />
                    <Text size="sm">Enable loop toggle</Text>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={showPlaybackSpeed}
                      onChange={(e) => setShowPlaybackSpeed(e.target.checked)}
                    />
                    <Text size="sm">Show playback speed options</Text>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={showVideoQuality}
                      onChange={(e) => setShowVideoQuality(e.target.checked)}
                    />
                    <Text size="sm">Show video quality options</Text>
                  </label>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
              <Video
                src={sampleVideoUrl}
                size={activeSize}
                variant={activeVariant}
                shape={activeShape}
                showControls={showControls}
                showMenu={showMenu}
                enableDownload={enableDownload}
                enableFullscreen={enableFullscreen}
                autoplayOnLoad={autoplayOnLoad}
                muteAudioOnPlay={muteAudioOnPlay}
                enableLoop={enableLoop}
                showPlaybackSpeed={showPlaybackSpeed}
                showVideoQuality={showVideoQuality}
                videoQualities={sampleVideoQualities}
                poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
              />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Examples */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-lg)' }}>Examples</Text>
        
        {/* Basic Usage */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Basic Usage</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
              <Video
                src={sampleVideoUrl}
                size="sm"
                poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
              />
            </div>
            <div style={{ 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-md)', 
              padding: 'var(--space-md)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-sm)',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto'
            }}>
{`<Video 
  src="your-video.mp4" 
  size="sm"
  poster="poster-image.jpg"
/>`}
            </div>
          </CardBody>
        </Card>

        {/* Different Sizes */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Different Sizes</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-lg)' }}>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} size="xs" poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Extra Small</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} size="sm" poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Small</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} size="md" poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Medium</Text>
              </div>
            </div>
            <div style={{ 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-md)', 
              padding: 'var(--space-md)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-sm)',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto'
            }}>
{`<Video src="video.mp4" size="xs" />
<Video src="video.mp4" size="sm" />
<Video src="video.mp4" size="md" />
<Video src="video.mp4" size="lg" />
<Video src="video.mp4" size="xl" />`}
            </div>
          </CardBody>
        </Card>

        {/* Different Variants */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Different Variants</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-lg)' }}>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} variant="default" size="sm" poster="https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Default" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Default</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} variant="bordered" size="sm" poster="https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Bordered" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Bordered</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} variant="shadow" size="sm" poster="https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Shadow" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Shadow</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} variant="elevated" size="sm" poster="https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Elevated" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Elevated</Text>
              </div>
            </div>
            <div style={{ 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-md)', 
              padding: 'var(--space-md)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-sm)',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto'
            }}>
{`<Video variant="default" src="video.mp4" />
<Video variant="bordered" src="video.mp4" />
<Video variant="shadow" src="video.mp4" />
<Video variant="elevated" src="video.mp4" />
<Video variant="hover-lift" src="video.mp4" />`}
            </div>
          </CardBody>
        </Card>

        {/* Different Shapes */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Different Shapes</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} shape="square" size="sm" poster="https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Square" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Square</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} shape="rounded" size="sm" poster="https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Rounded" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Rounded</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video src={sampleVideoUrl} shape="pill" size="sm" poster="https://via.placeholder.com/240x135/4F46E5/FFFFFF?text=Pill" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Pill</Text>
              </div>
            </div>
            <div style={{ 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-md)', 
              padding: 'var(--space-md)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-sm)',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto'
            }}>
{`<Video shape="square" src="video.mp4" />
<Video shape="rounded" src="video.mp4" />
<Video shape="pill" src="video.mp4" />`}
            </div>
          </CardBody>
        </Card>

        {/* Platform Support */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Platform Support - YouTube & Vimeo</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
              <div style={{ textAlign: 'center' }}>
                <Video 
                  src="https://youtu.be/nTbA7qrEsP0" 
                  as="url"
                  size="sm"
                />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>YouTube Video</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video 
                  src="https://vimeo.com/90509568" 
                  as="url"
                  size="sm"
                />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Vimeo Video</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video 
                  src={sampleVideoUrl} 
                  as="player"
                  size="sm"
                  poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>HTML5 Player</Text>
              </div>
            </div>
            <div style={{ 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-md)', 
              padding: 'var(--space-md)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-sm)',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto'
            }}>
{`// YouTube video
<Video 
  src="https://youtu.be/nTbA7qrEsP0" 
  as="url"
  size="sm"
/>

// Vimeo video
<Video 
  src="https://vimeo.com/90509568" 
  as="url"
  size="sm"
/>

// HTML5 video with controls
<Video 
  src="video.mp4" 
  as="player"
  showControls={true}
  showMenu={true}
/>`}
            </div>
          </CardBody>
        </Card>

        {/* Custom Controls */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Custom Controls & Menu</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
              <div style={{ textAlign: 'center' }}>
                <Video 
                  src={sampleVideoUrl} 
                  size="sm" 
                  showControls={true}
                  showMenu={false}
                  poster="https://via.placeholder.com/240x135/10B981/FFFFFF?text=Controls+Only" 
                />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Controls Only</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video 
                  src={sampleVideoUrl} 
                  size="sm"
                  showControls={true}
                  showMenu={true}
                  enableDownload={false}
                  poster="https://via.placeholder.com/240x135/F59E0B/FFFFFF?text=With+Menu" 
                />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>With Menu</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video 
                  src={sampleVideoUrl} 
                  size="sm"
                  showControls={true}
                  showMenu={true}
                  enableDownload={true}
                  poster="https://via.placeholder.com/240x135/EF4444/FFFFFF?text=Download+Enabled" 
                />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Download Enabled</Text>
              </div>
            </div>
            <div style={{ 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-md)', 
              padding: 'var(--space-md)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-sm)',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto'
            }}>
{`// Basic controls
<Video src="video.mp4" showControls={true} />

// With 3-dot menu
<Video 
  src="video.mp4" 
  showControls={true}
  showMenu={true}
/>

// With download option
<Video 
  src="video.mp4" 
  showControls={true}
  showMenu={true}
  enableDownload={true}
/>

// No controls
<Video src="video.mp4" showControls={false} />`}
            </div>
          </CardBody>
        </Card>

        {/* Error Handling */}
        <Card style={{ marginBottom: 'var(--space-xl)' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Error handling</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
              <div style={{ textAlign: 'center' }}>
                <Video src="invalid-video-url.mp4" size="sm" />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Default Error</Text>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Video 
                  src="invalid-video-url.mp4" 
                  size="sm"
                  fallback={
                    <div style={{ textAlign: 'center', color: 'var(--accent-500)' }}>
                      <Text size="sm" weight="medium">Custom Error Message</Text>
                      <Text size="xs" color="secondary">Video not available</Text>
                    </div>
                  }
                />
                <Text size="sm" color="secondary" style={{ marginTop: 'var(--space-xs)' }}>Custom Fallback</Text>
              </div>
            </div>
            <div style={{ 
              backgroundColor: 'var(--bg-surface)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-md)', 
              padding: 'var(--space-md)',
              fontFamily: 'monospace',
              fontSize: 'var(--font-size-sm)',
              whiteSpace: 'pre-wrap',
              overflowX: 'auto'
            }}>
{`// Default error handling
<Video src="invalid-url.mp4" />

// Custom fallback
<Video 
  src="invalid-url.mp4"
  fallback={<div>Custom error message</div>}
/>`}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* API Reference */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-lg)' }}>API Reference</Text>
        
        <Card>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">VideoProps</Text>
          </CardHeader>
          <CardBody>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontSize: 'var(--font-size-sm)',
              }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                    <th style={{ padding: 'var(--space-sm)', textAlign: 'left', fontWeight: 'var(--font-weight-semibold)' }}>Prop</th>
                    <th style={{ padding: 'var(--space-sm)', textAlign: 'left', fontWeight: 'var(--font-weight-semibold)' }}>Type</th>
                    <th style={{ padding: 'var(--space-sm)', textAlign: 'left', fontWeight: 'var(--font-weight-semibold)' }}>Default</th>
                    <th style={{ padding: 'var(--space-sm)', textAlign: 'left', fontWeight: 'var(--font-weight-semibold)' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>variant</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>'default' | 'bordered' | 'shadow' | 'elevated' | 'hover-lift'</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>'default'</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Visual style variant</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>shape</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>'square' | 'rounded' | 'pill'</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>'rounded'</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Border radius style</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>size</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>'md'</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Video dimensions</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>fit</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>'cover' | 'contain' | 'fill' | 'scale-down' | 'none'</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>'cover'</td>
                    <td style={{ padding: 'var(--space-sm)' }}>How video fits container</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>showSpinner</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>true</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Show loading spinner</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>showControls</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>true</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Show custom video controls</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>showMenu</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>true</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Show 3-dot menu button</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>enableDownload</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>false</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Enable download option in menu</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>enableFullscreen</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>true</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Enable fullscreen toggle in menu</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>autoplayOnLoad</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>false</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Automatically play video when loaded</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>muteAudioOnPlay</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>false</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Mute audio when autoplay starts</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>enableLoop</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>false</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Enable loop toggle option in menu</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>showPlaybackSpeed</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>false</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Show playback speed dropdown in menu</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>showVideoQuality</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>false</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Show video quality dropdown in menu</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>videoQualities</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>Array&lt;{'{label: string, value: string, src?: string}'}&gt;</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>Auto, 1080p, 720p, 480p, 360p</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Available video quality options. Provide different quality variants of the same video with optional src URLs</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>fallback</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>React.ReactNode</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>-</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Custom error fallback content</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>className</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>string</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>''</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Additional CSS classes</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>...props</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>VideoHTMLAttributes</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>-</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Standard HTML video attributes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Advanced Features */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-lg)' }}>Advanced Features</Text>
        
        <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
          {/* Autoplay Example */}
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">Autoplay with Muted Audio</Text>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <Video 
                  src={sampleVideoUrl} 
                  size="sm" 
                  autoplayOnLoad 
                  muteAudioOnPlay 
                  poster="https://via.placeholder.com/240x135/10B981/FFFFFF?text=Autoplay"
                />
                <Text size="sm" color="secondary" style={{ flex: 1 }}>
                  Video starts playing automatically when loaded, with audio muted to comply with browser policies.
                </Text>
              </div>
              <Text size="sm" weight="medium" style={{ fontFamily: 'monospace', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)' }}>
{`<Video 
  src="video.mp4" 
  autoplayOnLoad 
  muteAudioOnPlay 
/>`}
              </Text>
            </CardBody>
          </Card>

          {/* Fullscreen & Loop Example */}
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">Fullscreen & Loop Controls</Text>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <Video 
                  src={sampleVideoUrl} 
                  size="sm" 
                  enableFullscreen 
                  enableLoop 
                  poster="https://via.placeholder.com/240x135/8B5CF6/FFFFFF?text=Advanced"
                />
                <Text size="sm" color="secondary" style={{ flex: 1 }}>
                  Click the 3-dot menu to access fullscreen toggle and loop controls. Fullscreen works with browser APIs for immersive viewing.
                </Text>
              </div>
              <Text size="sm" weight="medium" style={{ fontFamily: 'monospace', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)' }}>
{`<Video 
  src="video.mp4" 
  enableFullscreen 
  enableLoop 
/>`}
              </Text>
            </CardBody>
          </Card>

          {/* Dropdown Controls Example */}
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">Dropdown Controls</Text>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <Video 
                  src={sampleVideoUrl} 
                  size="sm" 
                  showPlaybackSpeed 
                  showVideoQuality
                  videoQualities={sampleVideoQualities}
                  poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                />
                <Text size="sm" color="secondary" style={{ flex: 1 }}>
                  <strong>YouTube-style quality controls:</strong> Select different resolutions (1080p, 720p, 480p, 360p, 240p) to see quality changes in action.
                  Watch for the quality indicator in the top-right corner and loading feedback when switching qualities.
                  Each quality option loads a different resolution variant, demonstrating how video quality systems work.
                </Text>
              </div>
              <Text size="sm" weight="medium" style={{ fontFamily: 'monospace', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)' }}>
{`<Video 
  src="video.mp4" 
  showPlaybackSpeed 
  showVideoQuality
  videoQualities={[
    { label: 'Auto', value: 'auto' },
    { label: '1080p HD', value: '1080p', src: 'video-1080p.mp4' },
    { label: '720p HD', value: '720p', src: 'video-720p.mp4' },
    { label: '480p', value: '480p', src: 'video-480p.mp4' },
    { label: '360p', value: '360p', src: 'video-360p.mp4' }
  ]}
/>`}
              </Text>
            </CardBody>
          </Card>

          {/* Playback Speed Example */}
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">Playback Speed Control</Text>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <Video 
                  src={sampleVideoUrl} 
                  size="sm" 
                  showPlaybackSpeed 
                  poster="https://via.placeholder.com/240x135/F59E0B/FFFFFF?text=Speed"
                />
                <Text size="sm" color="secondary" style={{ flex: 1 }}>
                  Access playback speed options (0.5x to 2x) through the menu for faster or slower viewing experiences.
                </Text>
              </div>
              <Text size="sm" weight="medium" style={{ fontFamily: 'monospace', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)' }}>
{`<Video 
  src="video.mp4" 
  showPlaybackSpeed 
/>`}
              </Text>
            </CardBody>
          </Card>

          {/* All Features Combined */}
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">All Advanced Features</Text>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <Video 
                  src={sampleVideoUrl} 
                  size="sm" 
                  enableFullscreen 
                  enableLoop 
                  showPlaybackSpeed 
                  showVideoQuality
                  videoQualities={sampleVideoQualities}
                  enableDownload 
                  poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                />
                <Text size="sm" color="secondary" style={{ flex: 1 }}>
                  A fully-featured video player with all advanced options enabled. 
                  <strong>Quality testing ready:</strong> Use the 3-dot menu → Quality to test YouTube-style quality switching.
                  Watch the top-right corner for quality indicators and loading feedback when switching between 1080p, 720p, 480p, 360p, and 240p.
                </Text>
              </div>
              <Text size="sm" weight="medium" style={{ fontFamily: 'monospace', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)' }}>
{`<Video 
  src="video.mp4" 
  enableFullscreen 
  enableLoop 
  showPlaybackSpeed 
  showVideoQuality
  videoQualities={[
    { label: 'Auto', value: 'auto' },
    { label: '1080p HD', value: '1080p', src: 'video-1080p.mp4' },
    { label: '720p HD', value: '720p', src: 'video-720p.mp4' },
    { label: '480p', value: '480p', src: 'video-480p.mp4' }
  ]}
  enableDownload 
/>`}
              </Text>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-lg)' }}>Usage Guidelines</Text>
        
        <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold" style={{ color: 'var(--success-600)' }}>✅ Do</Text>
            </CardHeader>
            <CardBody>
              <ul style={{ margin: 0, paddingLeft: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Provide poster images for better loading experience</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Use appropriate sizes for your layout context</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Include meaningful alt text for accessibility</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Handle error states with custom fallbacks when needed</Text>
                </li>
                <li>
                  <Text size="sm">Consider autoplay policies when using video</Text>
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold" style={{ color: 'var(--danger-600)' }}>❌ Don't</Text>
            </CardHeader>
            <CardBody>
              <ul style={{ margin: 0, paddingLeft: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Use oversized videos that impact performance</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Forget to provide fallback content for accessibility</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Auto-play videos with sound without user consent</Text>
                </li>
                <li>
                  <Text size="sm">Use for complex video player needs - consider FlowLabKit's advanced Video component</Text>
                </li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Accessibility */}
      <Card>
        <CardHeader>
          <Text as="h2" size="xl" weight="semibold">Accessibility</Text>
        </CardHeader>
        <CardBody>
          <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
            <div>
              <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>Keyboard Navigation</Text>
              <Text size="sm" color="secondary">Video controls are keyboard accessible when enabled. Users can play/pause with Space, and navigate with arrow keys.</Text>
            </div>
            
            <div>
              <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>Screen Readers</Text>
              <Text size="sm" color="secondary">Provide meaningful descriptions and consider captions for video content.</Text>
            </div>
            
            <div>
              <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>Motion Sensitivity</Text>
              <Text size="sm" color="secondary">Respect user preferences for reduced motion and avoid auto-playing videos.</Text>
            </div>

            <div>
              <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>Error Handling</Text>
              <Text size="sm" color="secondary">Graceful error states ensure the interface remains accessible when videos fail to load.</Text>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};