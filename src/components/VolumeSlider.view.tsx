import React, { useState, forwardRef } from 'react';

type RadioWithVolumeProps = {
  className?: string;
};

export const VolumeSlider = forwardRef<HTMLAudioElement, RadioWithVolumeProps>(
  ({ className }, audioRef) => {
    const [volume, setVolume] = useState(1);

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(e.target.value) / 100;
      console.log('🚀 ~ handleVolumeChange ~ newVolume:', newVolume);

      setVolume(newVolume);

      if (audioRef && 'current' in audioRef && audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    };

    return (
      <div className={className}>
        <label htmlFor="volume-knob" className="block text-sm mb-2">
          Volume
        </label>
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
  }
);
