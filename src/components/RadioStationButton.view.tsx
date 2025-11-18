import React from 'react';

export const RadioStationButton: React.FC<{
  text?: string;
  id: string;
  isSelected: boolean;
  isStationPlaying: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ isSelected, onClick, id, text, isStationPlaying }) => (
  <div className={`${isSelected ? 'radio-station-button-wrapper-selected' : ''}`}>
    <button
      id={id}
      onClick={onClick}
      className={`radio-station-button ${isStationPlaying ? 'playing' : 'paused'}`}
    >
      {text}
    </button>
  </div>
);
