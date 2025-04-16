import React from 'react';

export const PlayRadioButton: React.FC<{
  text?: string;
  altText?: string;
  isPlaying: boolean;
  isLoading: boolean;
  onClick: () => void;
}> = ({ isPlaying, isLoading, onClick, text, altText }) => (
  <button onClick={onClick} className={`play-radio-button ${isPlaying ? 'playing' : ''}`}>
    {isLoading ? ' Loading...' : isPlaying ? altText : text}
  </button>
);
