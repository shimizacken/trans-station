import React from 'react';

export const PlayRadioButton: React.FC<{
  text?: string;
  altText?: string;
  id: string;
  isPlaying: boolean;
  isLoading: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ isPlaying, isLoading, onClick, id, text, altText }) => (
  <button id={id} onClick={onClick} className={`play-radio-button ${isPlaying ? 'playing' : ''}`}>
    {text}
  </button>
);
