import React, { forwardRef } from 'react';

interface AudioPlayerProps {
  streamUrl: string;
  preload?: 'auto' | 'metadata' | 'none';
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  volume?: number;
}

export const AudioPlayer = forwardRef<HTMLAudioElement, AudioPlayerProps>(
  ({ streamUrl, preload = 'auto', autoPlay = false }, ref) => (
    <audio ref={ref} src={streamUrl} autoPlay={autoPlay} preload={preload} />
  )
);

AudioPlayer.displayName = 'AudioPlayer';
