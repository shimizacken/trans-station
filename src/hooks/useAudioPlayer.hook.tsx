import { useEffect, useState } from 'react';

const mediaElementEvents = [
  'loadstart',
  'canplay',
  'pause',
  'play',
  'playing',
  'stalled',
  'error',
] as const;

export const useAudioPlayer = (audioRef: React.RefObject<HTMLAudioElement | null>) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadStart = () => {
      setLoading(true);
      setError(false);
      setIsPlaying(false);
      console.log('Loading started...');
    };

    const handleCanPlay = () => {
      setLoading(false);
      setIsPlaying(false);
      console.log('Can play');
    };

    const handlePlay = () => {
      setLoading(false);
      setIsPlaying(false);
      console.log('Play');
    };

    const handlePlaying = () => {
      setLoading(false);
      setIsPlaying(true);
      console.log('Now playing');
    };

    const handlePause = () => {
      setLoading(false);
      setIsPlaying(false);
      console.log('Paused');
    };

    const handleStalled = () => {
      setLoading(true);
      setIsPlaying(false);
      console.log('Stalled – likely buffering');
    };

    const handleError = () => {
      setError(true);
      setLoading(false);
      setIsPlaying(false);
      console.error('Stream error');
    };

    const events = {
      loadstart: handleLoadStart,
      canplay: handleCanPlay,
      pause: handlePause,
      play: handlePlay,
      playing: handlePlaying,
      stalled: handleStalled,
      error: handleError,
    };

    const handleMediaElementEvent = (event: Event) => {
      events[event.type as keyof typeof events]?.();
      console.log(`Event: ${event.type}`);
      console.log('Current time:', audio?.currentTime);
    };

    mediaElementEvents.forEach((eventName) => {
      audio?.addEventListener(eventName, handleMediaElementEvent);
    });

    return () => {
      mediaElementEvents.forEach((eventName) => {
        audio?.removeEventListener(eventName, handleMediaElementEvent);
      });
    };
  }, []);

  return {
    isPlaying,
    loading,
    error,
  };
};
