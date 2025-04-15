import React from 'react';

export const Header: React.FC<{ isStationPlaying: boolean }> = ({ isStationPlaying }) => (
  <header className="header">
    <div className="header-content">
      <h1 className={`header-title ${isStationPlaying ? 'playing' : ''}`}>TranStation</h1>
    </div>
  </header>
);
