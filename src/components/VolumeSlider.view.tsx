import React from 'react';

export const VolumeSlider: React.FC<{
  volume?: number;
  handleVolumeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ volume = 0, handleVolumeChange }) => (
  <div>
    <input
      id="volume-knob"
      type="range"
      min="0"
      max="100"
      step="1"
      value={volume * 100}
      onChange={handleVolumeChange}
      className="w-full cursor-pointer accent-blue-500"
    />
  </div>
);
