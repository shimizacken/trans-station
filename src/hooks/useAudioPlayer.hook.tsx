import { useEffect, useState } from 'react';
import { mediaElementEventsNeutron } from '../signals/mediaElementEvents.signal';

const mediaElementEvents = [
  'abort',
  'canplay',
  'canplaythrough',
  'durationchange',
  'emptied',
  'ended',
  'error',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'pause',
  'play',
  'playing',
  'progress',
  'ratechange',
  'resize',
  'seeked',
  'seeking',
  'stalled',
  'suspend',
  // 'timeupdate',
  'volumechange',
  'waiting',
] as const;

export const useAudioPlayer = (audioRef: React.RefObject<HTMLAudioElement | null>) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadStart = () => {
      setIsLoading(true);
      setIsError(false);
      setIsPlaying(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handlePlay = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handleStalled = () => {
      setIsLoading(true);
      setIsPlaying(false);
    };

    const handleError = () => {
      setIsError(true);
      setIsLoading(false);
      setIsPlaying(false);
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
      mediaElementEventsNeutron.emit({
        id: crypto.randomUUID(),
        timestamp: new Date(),
        level: 'info',
        message: `${event.type}, Current time: ${Math.round(audio?.currentTime ?? 0)} sec`,
      });
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
    isLoading,
    isError,
  };
};
