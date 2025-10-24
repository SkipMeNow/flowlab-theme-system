import React from 'react';
import { 
  Layout,
  TwoPanelLayout, 
  ThreePanelLayout, 
  VerticalLayout,
  DashboardLayout,
  EditorLayout 
} from '../../src/ui/Panels';

const SimpleLayoutDemo: React.FC = () => {
  // Demo content components
  const SidebarContent = () => (
    <div style={{ 
      padding: '16px', 
      height: '100%',
      backgroundColor: 'var(--bg-surface, #f5f5f5)',
      borderRight: '1px solid var(--border-color, #ccc)'
    }}>
      <h3 style={{ 
        margin: '0 0 16px 0',
        color: 'var(--text-primary, #000)'
      }}>
        Navigation
      </h3>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <button style={{ 
          padding: '8px 12px',
          border: '1px solid var(--border-color, #ccc)',
          borderRadius: '4px',
          backgroundColor: 'var(--bg-elevated, #fff)',
          cursor: 'pointer',
          textAlign: 'left'
        }}>
          📊 Dashboard
        </button>
        <button style={{ 
          padding: '8px 12px',
          border: '1px solid var(--border-color, #ccc)',
          borderRadius: '4px',
          backgroundColor: 'var(--bg-elevated, #fff)',
          cursor: 'pointer',
          textAlign: 'left'
        }}>
          📁 Projects
        </button>
        <button style={{ 
          padding: '8px 12px',
          border: '1px solid var(--border-color, #ccc)',
          borderRadius: '4px',
          backgroundColor: 'var(--bg-elevated, #fff)',
          cursor: 'pointer',
          textAlign: 'left'
        }}>
          👥 Team
        </button>
        <button style={{ 
          padding: '8px 12px',
          border: '1px solid var(--border-color, #ccc)',
          borderRadius: '4px',
          backgroundColor: 'var(--bg-elevated, #fff)',
          cursor: 'pointer',
          textAlign: 'left'
        }}>
          ⚙️ Settings
        </button>
      </div>
    </div>
  );

  const MainContent = () => (
    <div style={{ 
      padding: '24px', 
      height: '100%',
      backgroundColor: 'var(--bg-app, #ffffff)'
    }}>
      <h2 style={{ 
        margin: '0 0 24px 0',
        color: 'var(--text-primary, #000)'
      }}>
        Main Content Area
      </h2>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '16px'
      }}>
        <div style={{
          padding: '16px',
          border: '1px solid var(--border-color, #ccc)',
          borderRadius: '8px',
          backgroundColor: 'var(--bg-surface, #f5f5f5)'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Analytics</h3>
          <div style={{ 
            height: '200px',
            backgroundColor: 'var(--bg-elevated, #fff)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary, #666)'
          }}>
            Chart would go here
          </div>
        </div>
        
        <div style={{
          padding: '16px',
          border: '1px solid var(--border-color, #ccc)',
          borderRadius: '8px',
          backgroundColor: 'var(--bg-surface, #f5f5f5)'
        }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Recent Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ 
              padding: '8px',
              backgroundColor: 'var(--bg-elevated, #fff)',
              borderRadius: '4px'
            }}>
              <div style={{ fontSize: '14px' }}>User john.doe@example.com logged in</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary, #666)' }}>2 minutes ago</div>
            </div>
            <div style={{ 
              padding: '8px',
              backgroundColor: 'var(--bg-elevated, #fff)',
              borderRadius: '4px'
            }}>
              <div style={{ fontSize: '14px' }}>New project "Website Redesign" created</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary, #666)' }}>15 minutes ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PropertiesPanel = () => (
    <div style={{ 
      padding: '16px', 
      height: '100%',
      backgroundColor: 'var(--bg-surface, #f5f5f5)',
      borderLeft: '1px solid var(--border-color, #ccc)'
    }}>
      <h3 style={{ 
        margin: '0 0 16px 0',
        color: 'var(--text-primary, #000)'
      }}>
        Properties
      </h3>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div>
          <div style={{ 
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '8px'
          }}>Theme Mode</div>
          <button style={{ 
            width: '100%',
            padding: '8px 12px',
            border: '1px solid var(--border-color, #ccc)',
            borderRadius: '4px',
            backgroundColor: 'var(--bg-elevated, #fff)',
            cursor: 'pointer'
          }}>
            Toggle Dark/Light
          </button>
        </div>
        <div>
          <div style={{ 
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '8px'
          }}>Font Size</div>
          <button style={{ 
            width: '100%',
            padding: '8px 12px',
            border: '1px solid var(--border-color, #ccc)',
            borderRadius: '4px',
            backgroundColor: 'var(--bg-elevated, #fff)',
            cursor: 'pointer'
          }}>
            Medium
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      height: '600px',
      border: '1px solid var(--border-color, #ccc)',
      borderRadius: '8px',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-app, #ffffff)'
    }}>
      <h3 style={{ margin: '0 0 16px 0', padding: '16px', borderBottom: '1px solid var(--border-color, #ccc)' }}>
        Unified Layout API Demo (New: direction + panels)
      </h3>
      
      <div style={{ padding: '16px', height: 'calc(100% - 80px)' }}>
        <Layout
          direction="horizontal"
          panels={[
            { children: <SidebarContent />, width: '250px' },
            { children: <MainContent />, width: '1fr' },
            { children: <PropertiesPanel />, width: '250px' }
          ]}
          gap="1px"
        />
      </div>
    </div>
  );
};

export default SimpleLayoutDemo;