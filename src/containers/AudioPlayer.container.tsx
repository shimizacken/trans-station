import React, { useEffect, useRef, useState } from 'react';

import { stations } from '../constants/radioStations';

import { useSpaceKey } from '../hooks/useSpaceKey.hook';
import { useMediaPlayerEvents } from '../hooks/useMediaPlayerEvents.hook';

import { VolumeSliderContainer } from './VolumeSlider.container';
import { StationButtonsContainer } from './StationButtons.container';
import { AudioPlayer } from '../components/AudioPlayer.view';
import { stationSelection } from '../signals/stationSelection.signal';
import { useLoadPersistSelectedRadioStation } from '../hooks/useLoadPersistSelectedRadioStation';
import { RadioStationId } from '../types/station.types';

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
  const station = useLoadPersistSelectedRadioStation(stations);
  const [selectedStation, setSelectedStation] = useState<RadioStationId>(station.id);
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

  useEffect(() => {
    stationSelection.watch((selectedStationId) => {
      if (selectedStationId) {
        setSelectedStation(selectedStationId);
      }
    });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <StationButtonsContainer stations={stations} onClick={handlePlayPause} />
        <VolumeSliderContainer ref={audioRef} />
        <AudioPlayer ref={audioRef} streamUrl={stations[selectedStation].streamUrls[0].url} />
        {/* <HLSPlayerContainer /> */}
      </div>
    </div>
  );
};
