import React, { useState, useRef, useEffect } from 'react';
import { AudioPlayer } from '../components/AudioPlayer.view';
import { stations } from '../constants/radioStations';
import { useSpaceKey } from '../hooks/useSpaceKey.hook';

export const AudioPlayerContainer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadStart = () => {
      setLoading(true);
      setError(false);
      console.log('Loading started...');
    };

    const handleCanPlay = () => {
      setLoading(false);
      console.log('Can play');
    };

    const handlePlaying = () => {
      setLoading(false);
      console.log('Now playing');
    };

    const handlePause = () => {
      setLoading(false);
      console.log('Paused');
    };

    const handleStalled = () => {
      setLoading(true);
      console.log('Stalled – likely buffering');
    };

    const handleError = () => {
      setError(true);
      setLoading(false);
      console.error('Stream error');
    };

    audio?.addEventListener('loadstart', handleLoadStart);
    audio?.addEventListener('canplay', handleCanPlay);
    audio?.addEventListener('playing', handlePlaying);
    audio?.addEventListener('pause', handlePause);
    audio?.addEventListener('stalled', handleStalled);
    audio?.addEventListener('error', handleError);

    return () => {
      audio?.removeEventListener('loadstart', handleLoadStart);
      audio?.removeEventListener('canplay', handleCanPlay);
      audio?.removeEventListener('playing', handlePlaying);
      audio?.removeEventListener('pause', handlePause);
      audio?.removeEventListener('stalled', handleStalled);
      audio?.removeEventListener('error', handleError);
    };
  }, []);

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
      {loading && <p>🔄 Loading stream…</p>}
      {error && <p>❌ Error loading stream</p>}
      <div>
        <button onClick={handlePlayPause} className={isPlaying ? 'playing' : ''}>
          {isPlaying ? 'Pause' : 'Play'} Reshet Bet
        </button>
      </div>
    </div>
  );
};
