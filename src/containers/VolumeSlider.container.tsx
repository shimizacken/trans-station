import React, { useState, forwardRef } from 'react';
import { VolumeSlider } from '../components/VolumeSlider.view';

type RadioWithVolumeProps = {
  className?: string;
};

export const VolumeSliderContainer = forwardRef<HTMLAudioElement, RadioWithVolumeProps>(
  ({ className }, audioRef) => {
    const [volume, setVolume] = useState(0.7);

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(e.target.value) / 100;
      console.log('🚀 ~ handleVolumeChange ~ newVolume:', newVolume);

      setVolume(newVolume);

      if (audioRef && 'current' in audioRef && audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    };

    return <VolumeSlider volume={volume} handleVolumeChange={handleVolumeChange} />;
  }
);
