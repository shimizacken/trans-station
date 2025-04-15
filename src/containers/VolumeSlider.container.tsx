import React, { useState, forwardRef, useEffect } from 'react';
import { Silver } from 'react-dial-knob';

type RadioWithVolumeProps = {
  className?: string;
};

const setActualVolume = (audioRef: React.ForwardedRef<HTMLAudioElement>, volume: number) => {
  if (audioRef && 'current' in audioRef && audioRef.current) {
    audioRef.current.volume = volume;
  }
};

export const VolumeSliderContainer = forwardRef<HTMLAudioElement, RadioWithVolumeProps>(
  ({ className }, audioRef) => {
    const [volume, setVolume] = useState(0.8);

    const handleVolumeChange = (value: number) => {
      const newVolume = value / 100;
      setVolume(newVolume);

      setActualVolume(audioRef, volume);
    };

    useEffect(() => {
      setActualVolume(audioRef, volume);
    }, []);

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
