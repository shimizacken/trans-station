import React, { useRef } from 'react';
import { AudioPlayer } from '../components/AudioPlayer.view';
import { stations } from '../constants/radioStations';
import { useSpaceKey } from '../hooks/useSpaceKey.hook';
import { useAudioPlayer } from '../hooks/useAudioPlayer.hook';
import { PlayRadioButton } from '../components/PlayRadioButton.view';

/*
 * AudioPlayerContainer
 * This component manages the audio player and handles play/pause functionality.
 * It uses a custom hook to manage the audio player's state and events.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play_event
 *
 * @returns {JSX.Element} The rendered AudioPlayerContainer component.
 */
export const AudioPlayerContainer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { isPlaying, loading, error } = useAudioPlayer(audioRef);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.load();
        audioRef.current.play();
      }
    }
  };

  useSpaceKey(handlePlayPause);

  return (
    <div>
      <AudioPlayer ref={audioRef} streamUrl={stations[0].streamUrl} />
      {loading && <p>🔄 Loading stream…</p>}
      {error && <p>❌ Error loading stream</p>}
      <div>
        <PlayRadioButton onClick={handlePlayPause} isPlaying={isPlaying} />
      </div>
    </div>
  );
};
