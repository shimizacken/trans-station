import React, { useRef } from 'react';
// import { AudioPlayer } from '../components/AudioPlayer.view';
// import { stations } from '../constants/radioStations';
import { useSpaceKey } from '../hooks/useSpaceKey.hook';
import { useMediaPlayerEvents } from '../hooks/useMediaPlayerEvents.hook';
// import { PlayRadioButton } from '../components/PlayRadioButton.view';
// import { VolumeSliderContainer } from './VolumeSlider.container';
import { HLSPlayerContainer } from './HLSPlayer.container';

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
  const { isPlaying, isLoading } = useMediaPlayerEvents(audioRef);

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
        {/* <VolumeSliderContainer ref={audioRef} />
        <AudioPlayer ref={audioRef} streamUrl={stations[1].streamUrls[0].url} /> */}
        <HLSPlayerContainer />
        {/* <div style={{ marginTop: '10px' }}>
          <PlayRadioButton onClick={handlePlayPause} isPlaying={isPlaying} isLoading={isLoading} />
        </div> */}
      </div>
    </div>
  );
};
