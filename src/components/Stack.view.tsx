import React from 'react';

export const Stack: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="stack">{children}</div>
);
