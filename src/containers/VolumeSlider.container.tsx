import React, { useState, forwardRef, useEffect } from 'react';
import { Silver } from 'react-dial-knob';

type RadioWithVolumeProps = {
  className?: string;
};

export const VolumeSliderContainer = forwardRef<HTMLAudioElement, RadioWithVolumeProps>(
  ({ className }, audioRef) => {
    const [volume, setVolume] = useState(0.8);

    const handleVolumeChange = (value: number) => {
      const newVolume = value / 100;
      setVolume(newVolume);

      if (audioRef && 'current' in audioRef && audioRef.current) {
        console.log('🚀 ~ handleVolumeChange ~ newVolume:', newVolume);
        audioRef.current.volume = newVolume;
      }
    };
    useEffect(() => {
      if (audioRef && 'current' in audioRef && audioRef.current) {
        audioRef.current.volume = volume;
      }
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
