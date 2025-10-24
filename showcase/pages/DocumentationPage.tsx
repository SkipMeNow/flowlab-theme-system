import React from 'react';
import Documentation from '../docs/pages/Documentation';

const DocumentationPage: React.FC = () => {
  return (
    <div style={{ 
      margin: 'calc(-1 * var(--space-lg))', 
      minHeight: 'calc(100vh - 200px)' 
    }}>
      <Documentation />
    </div>
  );
};

export default DocumentationPage;