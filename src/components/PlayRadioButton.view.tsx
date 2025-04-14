import React from 'react';

export const PlayRadioButton: React.FC<{
  isPlaying: boolean;
  isLoading: boolean;
  onClick: () => void;
}> = ({ isPlaying, isLoading, onClick }) => (
  <button onClick={onClick} className={isPlaying ? 'playing' : ''}>
    {isPlaying ? 'Pause' : 'Play'} Reshet Bet
    {isLoading && 'loading...'}
  </button>
);
