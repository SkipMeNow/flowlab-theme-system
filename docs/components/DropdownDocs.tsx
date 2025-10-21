import React, { useState } from 'react';
import { 
  Dropdown, 
  DropdownItem, 
  DropdownLabel, 
  DropdownSeparator,
  Button, 
  Text, 
  Card, 
  CardHeader, 
  CardBody, 
  Badge 
} from '../../src/index';

export const DropdownDocs: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const [isOpen, setIsOpen] = useState(false);

  // Icons for examples
  const EditIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  );

  const DeleteIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
    </svg>
  );

  const SettingsIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
    </svg>
  );

  const ShareIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
    </svg>
  );

  const ChevronIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
    </svg>
  );

  return (
    <div style={{ padding: 'var(--space-lg)', maxWidth: '1200px' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
          <Text as="h1" size="3xl" weight="bold">Dropdown</Text>
          <Badge variant="secondary" size="sm">Interactive Component</Badge>
        </div>
        
        <Text as="p" size="lg" color="secondary" style={{ marginBottom: 'var(--space-lg)' }}>
          A flexible dropdown menu system with trigger element, content positioning, and keyboard navigation. 
          Built with accessibility in mind and integrated with the FlowLabKit theme system.
        </Text>

        <div style={{ 
          backgroundColor: 'var(--accent-50)', 
          border: '1px solid var(--accent-200)', 
          borderRadius: 'var(--radius-lg)', 
          padding: 'var(--space-md)',
          marginBottom: 'var(--space-xl)' 
        }}>
          <Text size="sm" weight="medium" style={{ color: 'var(--accent-700)' }}>
            💡 <strong>Key Features:</strong> Flexible positioning, keyboard navigation, click-outside-to-close, 
            customizable triggers, and seamless theme integration.
          </Text>
        </div>
      </div>

      {/* Interactive Demo */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-lg)' }}>Interactive Demo</Text>
        
        <Card>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Basic Dropdown</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
              <Dropdown
                trigger={
                  <Button variant="secondary" size="md">
                    Actions <ChevronIcon size={16} />
                  </Button>
                }
              >
                <DropdownItem 
                  leftIcon={<EditIcon />}
                  onClick={() => alert('Edit clicked')}
                >
                  Edit
                </DropdownItem>
                <DropdownItem 
                  leftIcon={<ShareIcon />}
                  rightIcon="⌘C"
                  onClick={() => alert('Share clicked')}
                >
                  Share
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem 
                  leftIcon={<SettingsIcon />}
                  onClick={() => alert('Settings clicked')}
                >
                  Settings
                </DropdownItem>
                <DropdownItem 
                  leftIcon={<DeleteIcon />}
                  destructive
                  onClick={() => alert('Delete clicked')}
                >
                  Delete
                </DropdownItem>
              </Dropdown>

              <Dropdown
                trigger={
                  <Button variant="primary" size="md">
                    Selected: {selectedValue} <ChevronIcon size={16} />
                  </Button>
                }
              >
                <DropdownLabel>Choose Option</DropdownLabel>
                <DropdownItem 
                  rightIcon={selectedValue === 'option1' ? '✓' : undefined}
                  onClick={() => setSelectedValue('option1')}
                >
                  Option 1
                </DropdownItem>
                <DropdownItem 
                  rightIcon={selectedValue === 'option2' ? '✓' : undefined}
                  onClick={() => setSelectedValue('option2')}
                >
                  Option 2
                </DropdownItem>
                <DropdownItem 
                  rightIcon={selectedValue === 'option3' ? '✓' : undefined}
                  onClick={() => setSelectedValue('option3')}
                >
                  Option 3
                </DropdownItem>
              </Dropdown>

              <Dropdown
                trigger={
                  <Button variant="outline" size="md" disabled>
                    Disabled Dropdown
                  </Button>
                }
                disabled
              >
                <DropdownItem>This won't show</DropdownItem>
              </Dropdown>
            </div>

            <Text size="sm" color="secondary">
              Try the dropdowns above to see different trigger styles, positioning, and interactions.
            </Text>
          </CardBody>
        </Card>
      </div>

      {/* Positioning Examples */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-lg)' }}>Positioning Options</Text>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
          {/* Bottom Alignment */}
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">Bottom Aligned (Default)</Text>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'space-around' }}>
                <Dropdown
                  trigger={<Button size="sm">Start</Button>}
                  align="start"
                  side="bottom"
                >
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>

                <Dropdown
                  trigger={<Button size="sm">Center</Button>}
                  align="center"
                  side="bottom"
                >
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>

                <Dropdown
                  trigger={<Button size="sm">End</Button>}
                  align="end"
                  side="bottom"
                >
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>
              </div>
              <Text size="sm" weight="medium" style={{ fontFamily: 'monospace', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)', marginTop: 'var(--space-md)' }}>
{`<Dropdown align="start|center|end" side="bottom">
  <DropdownItem>Item</DropdownItem>
</Dropdown>`}
              </Text>
            </CardBody>
          </Card>

          {/* Side Positioning */}
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">Side Positioning</Text>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'space-around' }}>
                <Dropdown
                  trigger={<Button size="sm">Left</Button>}
                  align="start"
                  side="left"
                >
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>

                <Dropdown
                  trigger={<Button size="sm">Right</Button>}
                  align="start"
                  side="right"
                >
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>

                <Dropdown
                  trigger={<Button size="sm">Top</Button>}
                  align="center"
                  side="top"
                >
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>
              </div>
              <Text size="sm" weight="medium" style={{ fontFamily: 'monospace', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)', marginTop: 'var(--space-md)' }}>
{`<Dropdown side="left|right|top|bottom">
  <DropdownItem>Item</DropdownItem>
</Dropdown>`}
              </Text>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Component Examples */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-lg)' }}>Component Examples</Text>
        
        <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
          {/* Context Menu Style */}
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">Context Menu Style</Text>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <Dropdown
                  trigger={
                    <div style={{ 
                      padding: 'var(--space-md)', 
                      border: '2px dashed var(--border-color)', 
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      textAlign: 'center' as const
                    }}>
                      <Text size="sm">Right-click style menu</Text>
                    </div>
                  }
                >
                  <DropdownItem leftIcon={<EditIcon />}>Edit</DropdownItem>
                  <DropdownItem leftIcon={<ShareIcon />}>Duplicate</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem leftIcon={<SettingsIcon />}>Properties</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem leftIcon={<DeleteIcon />} destructive>Delete</DropdownItem>
                </Dropdown>

                <Text size="sm" color="secondary" style={{ flex: 1 }}>
                  Perfect for context menus, right-click actions, and content management interfaces.
                </Text>
              </div>
              <Text size="sm" weight="medium" style={{ fontFamily: 'monospace', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)' }}>
{`<Dropdown trigger={<div>Custom Trigger</div>}>
  <DropdownItem leftIcon={<Icon />}>Action</DropdownItem>
  <DropdownSeparator />
  <DropdownItem destructive>Delete</DropdownItem>
</Dropdown>`}
              </Text>
            </CardBody>
          </Card>

          {/* Selection Menu */}
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold">Selection Menu with Labels</Text>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                <Dropdown
                  trigger={
                    <Button variant="outline" size="md">
                      Categories <ChevronIcon size={16} />
                    </Button>
                  }
                >
                  <DropdownLabel>Design</DropdownLabel>
                  <DropdownItem>UI Components</DropdownItem>
                  <DropdownItem>Icons & Graphics</DropdownItem>
                  <DropdownItem>Templates</DropdownItem>
                  
                  <DropdownSeparator />
                  
                  <DropdownLabel>Development</DropdownLabel>
                  <DropdownItem>Frontend</DropdownItem>
                  <DropdownItem>Backend</DropdownItem>
                  <DropdownItem>DevOps</DropdownItem>
                  
                  <DropdownSeparator />
                  
                  <DropdownLabel>Other</DropdownLabel>
                  <DropdownItem>Documentation</DropdownItem>
                  <DropdownItem>Resources</DropdownItem>
                </Dropdown>

                <Text size="sm" color="secondary" style={{ flex: 1 }}>
                  Organized dropdown with labeled sections for better navigation and grouping.
                </Text>
              </div>
              <Text size="sm" weight="medium" style={{ fontFamily: 'monospace', backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-sm)', borderRadius: 'var(--radius-sm)' }}>
{`<Dropdown trigger={<Button>Menu</Button>}>
  <DropdownLabel>Section 1</DropdownLabel>
  <DropdownItem>Item 1</DropdownItem>
  <DropdownSeparator />
  <DropdownLabel>Section 2</DropdownLabel>
  <DropdownItem>Item 2</DropdownItem>
</Dropdown>`}
              </Text>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Props Documentation */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-lg)' }}>API Reference</Text>
        
        {/* Main Dropdown Props */}
        <Card style={{ marginBottom: 'var(--space-lg)' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">Dropdown Props</Text>
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
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>trigger</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>ReactNode</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>-</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Element that triggers the dropdown</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>children</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>ReactNode</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>-</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Dropdown content (items, separators, labels)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>open</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>undefined</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Controlled open state</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>onOpenChange</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>(open: boolean) =&gt; void</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>-</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Called when open state changes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>disabled</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>false</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Disable the dropdown</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>align</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>'start' | 'center' | 'end'</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>'start'</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Alignment relative to trigger</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>side</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>'top' | 'bottom' | 'left' | 'right'</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>'bottom'</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Side to open dropdown on</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>sideOffset</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>number</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>4</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Distance from trigger (px)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>

        {/* DropdownItem Props */}
        <Card style={{ marginBottom: 'var(--space-lg)' }}>
          <CardHeader>
            <Text as="h3" size="lg" weight="semibold">DropdownItem Props</Text>
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
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>leftIcon</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>ReactNode</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>-</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Icon displayed on the left</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>rightIcon</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>ReactNode</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>-</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Icon or text displayed on the right</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>disabled</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>false</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Disable the item</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>destructive</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>boolean</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>false</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Style as destructive action (red)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', color: 'var(--accent-600)' }}>onClick</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace', fontSize: 'var(--font-size-xs)' }}>() =&gt; void</td>
                    <td style={{ padding: 'var(--space-sm)', fontFamily: 'monospace' }}>-</td>
                    <td style={{ padding: 'var(--space-sm)' }}>Click handler</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Usage Guidelines */}
      <div style={{ marginBottom: 'var(--space-2xl)' }}>
        <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: 'var(--space-lg)' }}>Usage Guidelines</Text>
        
        <div style={{ display: 'grid', gap: 'var(--space-lg)' }}>
          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold" style={{ color: 'var(--success-color)' }}>✅ Best Practices</Text>
            </CardHeader>
            <CardBody>
              <ul style={{ margin: 0, paddingLeft: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Use consistent trigger styling (buttons, links, or custom elements)</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Group related items with DropdownLabel and DropdownSeparator</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Place destructive actions at the bottom with separators</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Use icons consistently - either all items have icons or none do</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Keep menu items concise and action-oriented</Text>
                </li>
                <li>
                  <Text size="sm">Consider keyboard navigation - items are focusable with arrow keys</Text>
                </li>
              </ul>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <Text as="h3" size="lg" weight="semibold" style={{ color: 'var(--error-color)' }}>❌ Avoid</Text>
            </CardHeader>
            <CardBody>
              <ul style={{ margin: 0, paddingLeft: 'var(--space-lg)' }}>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Too many items without organization (use labels and separators)</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Inconsistent positioning - stick to one alignment pattern</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Opening dropdowns outside viewport bounds</Text>
                </li>
                <li style={{ marginBottom: 'var(--space-sm)' }}>
                  <Text size="sm">Nesting dropdowns more than one level deep</Text>
                </li>
                <li>
                  <Text size="sm">Using for complex forms - consider modal dialogs instead</Text>
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
              <Text size="sm" color="secondary">
                <strong>Space/Enter:</strong> Open dropdown • <strong>Escape:</strong> Close dropdown • 
                <strong>Arrow Keys:</strong> Navigate items • <strong>Enter:</strong> Select item
              </Text>
            </div>
            
            <div>
              <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>ARIA Support</Text>
              <Text size="sm" color="secondary">
                Includes proper ARIA attributes: aria-expanded, aria-haspopup, role="menu", and role="menuitem" for screen readers.
              </Text>
            </div>
            
            <div>
              <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>Focus Management</Text>
              <Text size="sm" color="secondary">
                Focus is properly managed when opening/closing dropdowns and navigating between items.
              </Text>
            </div>

            <div>
              <Text size="sm" weight="medium" style={{ marginBottom: 'var(--space-xs)' }}>Click Outside</Text>
              <Text size="sm" color="secondary">
                Dropdown closes when clicking outside, providing intuitive interaction patterns.
              </Text>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};