import React from 'react';

export const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>Simple streaming radio app 📻. All rights reserved © {new Date().getFullYear()}</p>
    </div>
  </footer>
);
