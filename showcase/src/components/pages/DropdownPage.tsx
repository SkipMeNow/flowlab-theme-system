import React, { useState } from "react";
import { Layout, Text, Dropdown, DropdownContent, DropdownItem, DropdownSeparator, DropdownLabel, Button, Badge, Card } from "../../../../src";
import { DocPageLayout, CodeExample } from "../";
import { useTheme } from "../../../../src";

export const DropdownPage: React.FC = () => {
  const { variables } = useTheme();
  const [selectedValue, setSelectedValue] = useState<string>("Select an option");
  const [selectedAction, setSelectedAction] = useState<string>("Choose action");

  return (
    <DocPageLayout title="Dropdown" description="Flexible dropdown component with customizable content and menu items">
      
      {/* Basic Usage */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Basic Usage
        </Text>
        
        <CodeExample
          title="Simple Dropdown Menu"
          code={`<Card style={{ height: "120px", overflow: "hidden", padding: "16px" }}>
  <Dropdown
    trigger={<Button variant="secondary">Open Menu</Button>}
  >
    <DropdownItem onClick={() => console.log('Edit')}>
      Edit
    </DropdownItem>
    <DropdownItem onClick={() => console.log('Copy')}>
      Copy
    </DropdownItem>
    <DropdownItem onClick={() => console.log('Delete')} destructive>
      Delete
    </DropdownItem>
  </Dropdown>
</Card>`}
          preview={
            <Card style={{ height: "120px", overflow: "hidden", padding: "16px" }}>
              <Dropdown
                trigger={<Button variant="secondary">Open Menu</Button>}
              >
                <DropdownItem onClick={() => console.log('Edit')}>
                  Edit
                </DropdownItem>
                <DropdownItem onClick={() => console.log('Copy')}>
                  Copy
                </DropdownItem>
                <DropdownItem onClick={() => console.log('Delete')} destructive>
                  Delete
                </DropdownItem>
              </Dropdown>
            </Card>
          }
        />

        <CodeExample
          title="Dropdown with Selection State"
          code={`const [selected, setSelected] = useState("Select an option");

<Card style={{ height: "140px", overflow: "hidden", padding: "16px" }}>
  <Dropdown
    trigger={
      <Button variant="outline" style={{ minWidth: "200px" }}>
        {selected}
      </Button>
    }
  >
    <DropdownItem onClick={() => setSelected("Option 1")}>
      Option 1
    </DropdownItem>
    <DropdownItem onClick={() => setSelected("Option 2")}>
      Option 2
    </DropdownItem>
    <DropdownItem onClick={() => setSelected("Option 3")}>
      Option 3
    </DropdownItem>
  </Dropdown>
</Card>`}
          preview={
            <Card style={{ height: "140px", overflow: "hidden", padding: "16px" }}>
              <Dropdown
                trigger={
                  <Button variant="outline" style={{ minWidth: "200px" }}>
                    {selectedValue}
                  </Button>
                }
              >
                <DropdownItem onClick={() => setSelectedValue("Option 1")}>
                  Option 1
                </DropdownItem>
                <DropdownItem onClick={() => setSelectedValue("Option 2")}>
                  Option 2
                </DropdownItem>
                <DropdownItem onClick={() => setSelectedValue("Option 3")}>
                  Option 3
                </DropdownItem>
              </Dropdown>
            </Card>
          }
        />
      </Layout>

      {/* Dropdown with Icons */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Dropdown with Icons
        </Text>
        
        <CodeExample
          title="Menu Items with Icons"
          code={`<Card style={{ height: "160px", overflow: "hidden", padding: "16px" }}>
  <Dropdown
    trigger={<Button variant="secondary">Actions</Button>}
  >
    <DropdownItem 
      leftIcon="✏️" 
      rightIcon="⌘E"
      onClick={() => console.log('Edit')}
    >
      Edit
    </DropdownItem>
    <DropdownItem 
      leftIcon="📋" 
      rightIcon="⌘C"
      onClick={() => console.log('Copy')}
    >
      Copy
    </DropdownItem>
    <DropdownSeparator />
    <DropdownItem 
      leftIcon="🗑️" 
      destructive
      onClick={() => console.log('Delete')}
    >
      Delete
    </DropdownItem>
  </Dropdown>
</Card>`}
          preview={
            <Card style={{ height: "160px", overflow: "hidden", padding: "16px" }}>
              <Dropdown
                trigger={<Button variant="secondary">Actions</Button>}
              >
                <DropdownItem 
                  leftIcon="✏️" 
                  rightIcon="⌘E"
                  onClick={() => console.log('Edit')}
                >
                  Edit
                </DropdownItem>
                <DropdownItem 
                  leftIcon="📋" 
                  rightIcon="⌘C"
                  onClick={() => console.log('Copy')}
                >
                  Copy
                </DropdownItem>
                <DropdownSeparator />
                <DropdownItem 
                  leftIcon="🗑️" 
                  destructive
                  onClick={() => console.log('Delete')}
                >
                  Delete
                </DropdownItem>
              </Dropdown>
            </Card>
          }
        />
      </Layout>

      {/* Grouped Dropdown */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Grouped Menu Items
        </Text>
        
        <CodeExample
          title="Menu with Groups and Labels"
          code={`<Card style={{ height: "200px", overflow: "hidden", padding: "16px" }}>
  <Dropdown
    trigger={<Button variant="secondary">File Menu</Button>}
  >
    <DropdownLabel>File Operations</DropdownLabel>
    <DropdownItem leftIcon="📄" onClick={() => console.log('New')}>
      New File
    </DropdownItem>
    <DropdownItem leftIcon="📂" onClick={() => console.log('Open')}>
      Open File
    </DropdownItem>
    <DropdownSeparator />
    <DropdownLabel>Recent Files</DropdownLabel>
    <DropdownItem onClick={() => console.log('file1')}>
      document.txt
    </DropdownItem>
    <DropdownItem onClick={() => console.log('file2')}>
      image.png
    </DropdownItem>
  </Dropdown>
</Card>`}
          preview={
            <Card style={{ height: "200px", overflow: "hidden", padding: "16px" }}>
              <Dropdown
                trigger={<Button variant="secondary">File Menu</Button>}
              >
                <DropdownLabel>File Operations</DropdownLabel>
                <DropdownItem leftIcon="📄" onClick={() => console.log('New')}>
                  New File
                </DropdownItem>
                <DropdownItem leftIcon="📂" onClick={() => console.log('Open')}>
                  Open File
                </DropdownItem>
                <DropdownSeparator />
                <DropdownLabel>Recent Files</DropdownLabel>
                <DropdownItem onClick={() => console.log('file1')}>
                  document.txt
                </DropdownItem>
                <DropdownItem onClick={() => console.log('file2')}>
                  image.png
                </DropdownItem>
              </Dropdown>
            </Card>
          }
        />
      </Layout>

      {/* Dropdown Positioning */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Dropdown Positioning
        </Text>
        
        <CodeExample
          title="Different Positions"
          code={`<Card style={{ height: "150px", overflow: "hidden", padding: "16px" }}>
  <Layout direction="row" gap="md" align="center">
    <Dropdown
      trigger={<Button variant="outline">Bottom</Button>}
      side="bottom"
      align="start"
    >
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem>Item 2</DropdownItem>
      <DropdownItem>Item 3</DropdownItem>
    </Dropdown>
    
    <Dropdown
      trigger={<Button variant="outline">Top</Button>}
      side="top"
      align="start"
    >
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem>Item 2</DropdownItem>
      <DropdownItem>Item 3</DropdownItem>
    </Dropdown>
    
    <Dropdown
      trigger={<Button variant="outline">Right</Button>}
      side="right"
      align="start"
    >
      <DropdownItem>Item 1</DropdownItem>
      <DropdownItem>Item 2</DropdownItem>
      <DropdownItem>Item 3</DropdownItem>
    </Dropdown>
  </Layout>
</Card>`}
          preview={
            <Card style={{ height: "150px", overflow: "hidden", padding: "16px" }}>
              <Layout direction="row" gap="md" align="center">
                <Dropdown
                  trigger={<Button variant="outline">Bottom</Button>}
                  side="bottom"
                  align="start"
                >
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>
                
                <Dropdown
                  trigger={<Button variant="outline">Top</Button>}
                  side="top"
                  align="start"
                >
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>
                
                <Dropdown
                  trigger={<Button variant="outline">Right</Button>}
                  side="right"
                  align="start"
                >
                  <DropdownItem>Item 1</DropdownItem>
                  <DropdownItem>Item 2</DropdownItem>
                  <DropdownItem>Item 3</DropdownItem>
                </Dropdown>
              </Layout>
            </Card>
          }
        />
      </Layout>

      {/* Controlled Dropdown */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Controlled Dropdown
        </Text>
        
        <CodeExample
          title="Controlled Open State"
          code={`const [isOpen, setIsOpen] = useState(false);

<Layout direction="column" gap="md">
  <Layout direction="row" gap="sm">
    <Button 
      size="sm" 
      variant="outline"
      onClick={() => setIsOpen(true)}
    >
      Open Menu
    </Button>
    <Button 
      size="sm" 
      variant="outline"
      onClick={() => setIsOpen(false)}
    >
      Close Menu
    </Button>
  </Layout>
  
  <Dropdown
    trigger={<Button variant="secondary">Controlled Menu</Button>}
    open={isOpen}
    onOpenChange={setIsOpen}
  >
    <DropdownItem onClick={() => setIsOpen(false)}>
      Close Menu
    </DropdownItem>
    <DropdownItem>Keep Open</DropdownItem>
  </Dropdown>
</Layout>`}
          preview={
            <Layout direction="column" gap="md">
              <Layout direction="row" gap="sm">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => setSelectedAction("Open triggered")}
                >
                  Trigger Action
                </Button>
                <Text size="sm" style={{ color: variables.colors.text.secondary }}>
                  {selectedAction}
                </Text>
              </Layout>
              
              <Dropdown
                trigger={<Button variant="secondary">Controlled Menu</Button>}
              >
                <DropdownItem onClick={() => setSelectedAction("Action 1 selected")}>
                  Action 1
                </DropdownItem>
                <DropdownItem onClick={() => setSelectedAction("Action 2 selected")}>
                  Action 2
                </DropdownItem>
              </Dropdown>
            </Layout>
          }
        />
      </Layout>

      {/* Item States */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Item States
        </Text>
        
        <CodeExample
          title="Different Item States"
          code={`<Dropdown
  trigger={<Button variant="secondary">Item States</Button>}
>
  <DropdownItem onClick={() => console.log('Normal')}>
    Normal Item
  </DropdownItem>
  <DropdownItem disabled>
    Disabled Item
  </DropdownItem>
  <DropdownItem destructive onClick={() => console.log('Destructive')}>
    Destructive Item
  </DropdownItem>
  <DropdownSeparator />
  <DropdownItem 
    leftIcon="⚠️" 
    destructive 
    onClick={() => console.log('Dangerous')}
  >
    Dangerous Action
  </DropdownItem>
</Dropdown>`}
          preview={
            <Dropdown
              trigger={<Button variant="secondary">Item States</Button>}
            >
              <DropdownItem onClick={() => console.log('Normal')}>
                Normal Item
              </DropdownItem>
              <DropdownItem disabled>
                Disabled Item
              </DropdownItem>
              <DropdownItem destructive onClick={() => console.log('Destructive')}>
                Destructive Item
              </DropdownItem>
              <DropdownSeparator />
              <DropdownItem 
                leftIcon="⚠️" 
                destructive 
                onClick={() => console.log('Dangerous')}
              >
                Dangerous Action
              </DropdownItem>
            </Dropdown>
          }
        />
      </Layout>

      {/* Custom Trigger */}
      <Layout direction="column" gap="lg">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          Custom Triggers
        </Text>
        
        <CodeExample
          title="Different Trigger Types"
          code={`<Layout direction="row" gap="md" align="center">
  <Dropdown
    trigger={
      <Badge 
        variant="secondary" 
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        Badge Trigger
      </Badge>
    }
  >
    <DropdownItem>Action 1</DropdownItem>
    <DropdownItem>Action 2</DropdownItem>
  </Dropdown>
  
  <Dropdown
    trigger={
      <Text 
        style={{ 
          cursor: "pointer", 
          color: variables.colors.accent[600],
          textDecoration: "underline"
        }}
      >
        Text Trigger
      </Text>
    }
  >
    <DropdownItem>Edit</DropdownItem>
    <DropdownItem>Delete</DropdownItem>
  </Dropdown>
</Layout>`}
          preview={
            <Layout direction="row" gap="md" align="center">
              <Dropdown
                trigger={
                  <div style={{ cursor: "pointer", userSelect: "none" }}>
                    <Badge variant="secondary">
                      Badge Trigger
                    </Badge>
                  </div>
                }
              >
                <DropdownItem>Action 1</DropdownItem>
                <DropdownItem>Action 2</DropdownItem>
              </Dropdown>
              
              <Dropdown
                trigger={
                  <Text 
                    style={{ 
                      cursor: "pointer", 
                      color: variables.colors.accent[600],
                      textDecoration: "underline"
                    }}
                  >
                    Text Trigger
                  </Text>
                }
              >
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </Dropdown>
            </Layout>
          }
        />
      </Layout>

      {/* API Reference */}
      <Layout direction="column" gap="md">
        <Text as="h2" size="xl" weight="bold" style={{ color: variables.colors.text.primary }}>
          API Reference
        </Text>
        
        <Layout direction="column" gap="md">
          <Layout direction="column" gap="sm" style={{ backgroundColor: variables.colors.background.surface, padding: variables.spacing.lg, borderRadius: variables.borderRadius.md }}>
            <Text weight="semibold" style={{ color: variables.colors.text.primary }}>Dropdown Props</Text>
            <Text size="sm" style={{ color: variables.colors.text.secondary, fontFamily: "monospace" }}>
              • children: ReactNode (required)<br/>
              • trigger: ReactNode (required)<br/>
              • open?: boolean<br/>
              • onOpenChange?: (open: boolean) =&gt; void<br/>
              • disabled?: boolean<br/>
              • align?: "start" | "center" | "end"<br/>
              • side?: "top" | "bottom" | "left" | "right"<br/>
              • sideOffset?: number<br/>
              • responsive?: boolean<br/>
              • className?: string
            </Text>
          </Layout>

          <Layout direction="column" gap="sm" style={{ backgroundColor: variables.colors.background.surface, padding: variables.spacing.lg, borderRadius: variables.borderRadius.md }}>
            <Text weight="semibold" style={{ color: variables.colors.text.primary }}>DropdownItem Props</Text>
            <Text size="sm" style={{ color: variables.colors.text.secondary, fontFamily: "monospace" }}>
              • leftIcon?: ReactNode<br/>
              • rightIcon?: ReactNode<br/>
              • disabled?: boolean<br/>
              • destructive?: boolean<br/>
              • onClick?: (event: React.MouseEvent) =&gt; void<br/>
              • className?: string
            </Text>
          </Layout>

          <Layout direction="column" gap="sm" style={{ backgroundColor: variables.colors.background.surface, padding: variables.spacing.lg, borderRadius: variables.borderRadius.md }}>
            <Text weight="semibold" style={{ color: variables.colors.text.primary }}>DropdownContent Props</Text>
            <Text size="sm" style={{ color: variables.colors.text.secondary, fontFamily: "monospace" }}>
              • align?: "start" | "center" | "end"<br/>
              • side?: "top" | "bottom" | "left" | "right"<br/>
              • sideOffset?: number<br/>
              • alignOffset?: number<br/>
              • className?: string
            </Text>
          </Layout>
        </Layout>
      </Layout>
    </DocPageLayout>
  );
};