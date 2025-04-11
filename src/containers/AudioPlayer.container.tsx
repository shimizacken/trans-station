import React, { useState, useRef } from 'react';
import { AudioPlayer } from '../components/AudioPlayer.view';
import { stations } from '../constants/radioStations';
import { useSpaceKey } from '../hooks/useSpaceKey.hook';

export const AudioPlayerContainer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.load();
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useSpaceKey(handlePlayPause);

  return (
    <div>
      <AudioPlayer ref={audioRef} streamUrl={stations[0].streamUrl} />
      <div>
        <button onClick={handlePlayPause} className={isPlaying ? 'playing' : ''}>
          {isPlaying ? 'Pause' : 'Play'} Reshet Bet
        </button>
      </div>
    </div>
  );
};
