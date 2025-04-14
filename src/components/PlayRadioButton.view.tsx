import React from 'react';

export const PlayRadioButton: React.FC<{
  isPlaying: boolean;
  onClick: () => void;
}> = ({ isPlaying, onClick }) => (
  <button onClick={onClick} className={isPlaying ? 'playing' : ''}>
    {isPlaying ? 'Pause' : 'Play'} Reshet Bet
  </button>
);
