import { useEffect, useState } from 'react';

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

    audio?.addEventListener('loadstart', handleLoadStart);
    audio?.addEventListener('canplay', handleCanPlay);
    audio?.addEventListener('pause', handlePause);
    audio?.addEventListener('play', handlePlay);
    audio?.addEventListener('playing', handlePlaying);
    audio?.addEventListener('stalled', handleStalled);
    audio?.addEventListener('error', handleError);

    return () => {
      audio?.removeEventListener('loadstart', handleLoadStart);
      audio?.removeEventListener('canplay', handleCanPlay);
      audio?.removeEventListener('pause', handlePause);
      audio?.removeEventListener('play', handlePlay);
      audio?.removeEventListener('playing', handlePlaying);
      audio?.removeEventListener('stalled', handleStalled);
      audio?.removeEventListener('error', handleError);
    };
  }, []);

  return {
    isPlaying,
    loading,
    error,
  };
};
