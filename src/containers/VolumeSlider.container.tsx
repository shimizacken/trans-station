import React, { useState, forwardRef, useEffect } from 'react';
import { Silver } from 'react-dial-knob';
import { mediaElementEventsNeutron } from '../signals/mediaElementEvents.signal';

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

      mediaElementEventsNeutron.emit({
        id: crypto.randomUUID(),
        timestamp: new Date(),
        level: 'info',
        message: `🚀 ~ volume changed ${volume * 100}`,
      });
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
