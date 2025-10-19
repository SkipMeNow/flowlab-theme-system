import React from 'react';
import { allThemes } from '../../src/themes/index';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: 'themes' | 'components' | 'installation' | 'documentation') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const pages = [
    { id: 'themes', label: 'Themes', icon: '🎨' },
    { id: 'components', label: 'Components', icon: '🧩' },
    { id: 'installation', label: 'Installation', icon: '📦' },
    { id: 'documentation', label: 'Documentation', icon: '📚' }
  ];

  return (
    <nav style={{
      backgroundColor: 'var(--bg-elevated)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0 var(--space-lg)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        gap: 'var(--space-xs)'
      }}>
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => onPageChange(page.id as any)}
            style={{
              background: currentPage === page.id ? 'var(--accent-500)' : 'transparent',
              color: currentPage === page.id ? 'var(--text-on-accent)' : 'var(--text-primary)',
              border: 'none',
              padding: 'var(--space-md) var(--space-lg)',
              borderRadius: '0',
              cursor: 'pointer',
              fontSize: 'var(--font-size-sm)',
              fontWeight: currentPage === page.id ? 'var(--font-weight-semibold)' : 'var(--font-weight-normal)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              transition: 'var(--transition-base)',
              borderBottom: currentPage === page.id ? '2px solid var(--accent-500)' : '2px solid transparent'
            }}
          >
            <span>{page.icon}</span>
            {page.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;