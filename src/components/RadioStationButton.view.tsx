import React from 'react';

export const RadioStationButton: React.FC<{
  text?: string;
  id: string;
  isSelected: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ isSelected, onClick, id, text }) => (
  <button
    id={id}
    onClick={onClick}
    className={`radio-station-button ${isSelected ? 'playing' : ''}`}
  >
    {text}
  </button>
);
