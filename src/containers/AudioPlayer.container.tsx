import React, { useRef } from 'react';
import { AudioPlayer } from '../components/AudioPlayer.view';
import { stations } from '../constants/radioStations';
import { useSpaceKey } from '../hooks/useSpaceKey.hook';
import { useAudioPlayer } from '../hooks/useAudioPlayer.hook';
import { PlayRadioButton } from '../components/PlayRadioButton.view';
import { VolumeSliderContainer } from './VolumeSlider.container';

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

  const { isPlaying, isLoading } = useAudioPlayer(audioRef);

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
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <VolumeSliderContainer ref={audioRef} />
        <AudioPlayer ref={audioRef} streamUrl={stations[0].streamUrl} />
        <div style={{ marginTop: '20px' }}>
          <PlayRadioButton onClick={handlePlayPause} isPlaying={isPlaying} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};
