import React, { useState, forwardRef } from 'react';
import { Silver } from 'react-dial-knob';

type RadioWithVolumeProps = {
  className?: string;
};

export const VolumeSliderContainer = forwardRef<HTMLAudioElement, RadioWithVolumeProps>(
  ({ className }, audioRef) => {
    const [volume, setVolume] = useState(0);

    const handleVolumeChange = (value: number) => {
      const newVolume = value / 100;
      setVolume(newVolume);

      if (audioRef && 'current' in audioRef && audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    };

    return (
      <Silver
        diameter={180}
        min={0}
        max={100}
        step={10}
        value={volume * 100}
        onValueChange={handleVolumeChange}
      />
    );
  }
);
