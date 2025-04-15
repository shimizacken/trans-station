import React from 'react';

export const PlayRadioButton: React.FC<{
  isPlaying: boolean;
  isLoading: boolean;
  onClick: () => void;
}> = ({ isPlaying, isLoading, onClick }) => (
  <button onClick={onClick} className={`play-radio-button ${isPlaying ? 'playing' : ''}`}>
    {isLoading ? ' Loading...' : isPlaying ? 'Pause' : 'Play'}
  </button>
);
