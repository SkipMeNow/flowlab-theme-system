import React, { useState } from 'react';
import { 
  ThemeProvider, 
  useTheme,
  Button, 
  Card, 
  CardHeader, 
  CardBody,
  Text,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
  Badge
} from '@flowlab/theme-system';
import { oceanTheme } from '@flowlab/theme-system/themes';

function DropdownExamples() {
  const { theme, config, toggleTheme, setFontSize } = useTheme();
  const [selectedUser, setSelectedUser] = useState('John Doe');
  const [selectedAction, setSelectedAction] = useState('');

  // Icons for demonstration
  const UserIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const SettingsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
    </svg>
  );

  const LogoutIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16,17 21,12 16,7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );

  const ChevronIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6,9 12,15 18,9" />
    </svg>
  );

  const DotsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );

  const EditIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );

  const DeleteIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3,6 5,6 21,6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );

  const CopyIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );

  return (
    <div style={{ 
      padding: 'var(--space-lg)', 
      backgroundColor: 'var(--bg-app)',
      minHeight: '100vh',
      color: 'var(--text-primary)'
    }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <Text as="h1" size="3xl" weight="bold">
          Dropdown Component Examples
        </Text>
        <Text color="secondary" style={{ marginBottom: 'var(--space-md)' }}>
          Interactive dropdown menus with keyboard navigation
        </Text>
        
        <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center' }}>
          <Badge variant="info">Current Theme: {theme.name}</Badge>
          <Badge variant={config.mode === 'dark' ? 'secondary' : 'default'}>
            Mode: {config.mode}
          </Badge>
        </div>
      </div>

      <div style={{ display: 'grid', gap: 'var(--space-xl)' }}>
        
        {/* Basic Dropdown */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Basic Dropdown</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Dropdown
                trigger={
                  <Button variant="outline" rightIcon={<ChevronIcon />}>
                    Select User
                  </Button>
                }
              >
                <DropdownItem 
                  leftIcon={<UserIcon />}
                  onClick={() => setSelectedUser('John Doe')}
                >
                  John Doe
                </DropdownItem>
                <DropdownItem 
                  leftIcon={<UserIcon />}
                  onClick={() => setSelectedUser('Jane Smith')}
                >
                  Jane Smith
                </DropdownItem>
                <DropdownItem 
                  leftIcon={<UserIcon />}
                  onClick={() => setSelectedUser('Bob Johnson')}
                >
                  Bob Johnson
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem 
                  leftIcon={<UserIcon />}
                  disabled
                >
                  Disabled User
                </DropdownItem>
              </Dropdown>

              <Text color="secondary">Selected: {selectedUser}</Text>
            </div>
          </CardBody>
        </Card>

        {/* Dropdown with Sections */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Dropdown with Sections</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'start', flexWrap: 'wrap' }}>
              <Dropdown
                trigger={
                  <Button leftIcon={<SettingsIcon />} rightIcon={<ChevronIcon />}>
                    Settings Menu
                  </Button>
                }
              >
                <DropdownLabel>Account</DropdownLabel>
                <DropdownItem leftIcon={<UserIcon />}>
                  Profile Settings
                </DropdownItem>
                <DropdownItem leftIcon={<SettingsIcon />}>
                  Preferences
                </DropdownItem>
                
                <DropdownSeparator />
                
                <DropdownLabel>Theme</DropdownLabel>
                <DropdownItem 
                  leftIcon={<SettingsIcon />}
                  onClick={toggleTheme}
                >
                  Toggle Theme Mode
                </DropdownItem>
                <DropdownItem 
                  leftIcon={<SettingsIcon />}
                  onClick={() => setFontSize('large')}
                >
                  Large Font Size
                </DropdownItem>
                <DropdownItem 
                  leftIcon={<SettingsIcon />}
                  onClick={() => setFontSize('small')}
                >
                  Small Font Size
                </DropdownItem>
                
                <DropdownSeparator />
                
                <DropdownItem 
                  leftIcon={<LogoutIcon />}
                  destructive
                  onClick={() => setSelectedAction('Logout')}
                >
                  Sign Out
                </DropdownItem>
              </Dropdown>

              {selectedAction && (
                <Badge variant="warning">Action: {selectedAction}</Badge>
              )}
            </div>
          </CardBody>
        </Card>

        {/* Context Menu Style */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Context Menu Style</Text>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'start', flexWrap: 'wrap' }}>
              <Dropdown
                trigger={
                  <Button variant="ghost" size="sm">
                    <DotsIcon />
                  </Button>
                }
                align="end"
              >
                <DropdownItem 
                  leftIcon={<EditIcon />}
                  rightIcon={<kbd style={{ fontSize: '10px', opacity: 0.7 }}>⌘E</kbd>}
                >
                  Edit
                </DropdownItem>
                <DropdownItem 
                  leftIcon={<CopyIcon />}
                  rightIcon={<kbd style={{ fontSize: '10px', opacity: 0.7 }}>⌘C</kbd>}
                >
                  Copy
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem 
                  leftIcon={<DeleteIcon />}
                  rightIcon={<kbd style={{ fontSize: '10px', opacity: 0.7 }}>⌘⌫</kbd>}
                  destructive
                >
                  Delete
                </DropdownItem>
              </Dropdown>

              <Text color="secondary" size="sm">
                Right-click style menu with keyboard shortcuts
              </Text>
            </div>
          </CardBody>
        </Card>

        {/* Different Alignments */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Alignment Options</Text>
          </CardHeader>
          <CardBody>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: 'var(--space-md)' 
            }}>
              <div>
                <Text weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Start Aligned</Text>
                <Dropdown
                  trigger={<Button variant="outline" size="sm">Start</Button>}
                  align="start"
                >
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                </Dropdown>
              </div>

              <div>
                <Text weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>Center Aligned</Text>
                <Dropdown
                  trigger={<Button variant="outline" size="sm">Center</Button>}
                  align="center"
                >
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                </Dropdown>
              </div>

              <div>
                <Text weight="medium" style={{ marginBottom: 'var(--space-sm)' }}>End Aligned</Text>
                <Dropdown
                  trigger={<Button variant="outline" size="sm">End</Button>}
                  align="end"
                >
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem>Option 3</DropdownItem>
                </Dropdown>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Controlled Dropdown */}
        <Card>
          <CardHeader>
            <Text as="h2" size="xl" weight="semibold">Controlled Dropdown</Text>
          </CardHeader>
          <CardBody>
            <ControlledDropdownExample />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

function ControlledDropdownExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', flexWrap: 'wrap' }}>
      <Dropdown
        open={isOpen}
        onOpenChange={setIsOpen}
        trigger={
          <Button variant="primary">
            Controlled Menu {isOpen ? '▲' : '▼'}
          </Button>
        }
      >
        <DropdownItem onClick={() => setSelectedItem('Item 1')}>
          Item 1
        </DropdownItem>
        <DropdownItem onClick={() => setSelectedItem('Item 2')}>
          Item 2
        </DropdownItem>
        <DropdownItem onClick={() => setSelectedItem('Item 3')}>
          Item 3
        </DropdownItem>
      </Dropdown>

      <Button 
        variant="outline" 
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle: {isOpen ? 'Close' : 'Open'}
      </Button>

      {selectedItem && (
        <Text color="secondary">Selected: {selectedItem}</Text>
      )}
    </div>
  );
}

export function DropdownExample() {
  return (
    <ThemeProvider theme={oceanTheme}>
      <DropdownExamples />
    </ThemeProvider>
  );
}