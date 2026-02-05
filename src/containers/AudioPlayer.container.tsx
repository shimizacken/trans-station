import React, { useEffect, useRef, useState } from 'react';

import { stations } from '../constants/radioStations';

import { useSpaceKey } from '../hooks/useSpaceKey.hook';
import { useMediaPlayerEvents } from '../hooks/useMediaPlayerEvents.hook';
import { useLoadPersistSelectedRadioStation } from '../hooks/useLoadPersistSelectedRadioStation';

import { StationSelection, stationSelection } from '../signals/stationSelection.signal';

import { VolumeSliderContainer } from './VolumeSlider.container';
import { StationButtonsContainer } from './StationButtons.container';

import { AudioPlayer } from '../components/AudioPlayer.view';

import type { RadioStationId } from '../types/station.types';

let currentStationSelection = {} as unknown as StationSelection;

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

  useMediaPlayerEvents(audioRef);

  const handlePlayPause = async () => {
    if (audioRef.current) {
      if (
        currentStationSelection?.next === currentStationSelection.prev &&
        !audioRef.current.paused
      ) {
        audioRef.current.pause();
        audioRef.current.load();
      } else {
        const ctx = new AudioContext();
        await ctx.resume();

        audioRef.current.muted = true;
        await audioRef.current.play();
        audioRef.current.muted = false;
      }
    }
  };

  useSpaceKey(handlePlayPause);

  useEffect(() => {
    stationSelection.watch((stationSelectionArgs) => {
      if (stationSelectionArgs) {
        currentStationSelection = stationSelectionArgs;
        setSelectedStation(stationSelectionArgs.next);

        handlePlayPause();
      }
    });
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <StationButtonsContainer stations={stations} />
        <VolumeSliderContainer ref={audioRef} />
        <AudioPlayer ref={audioRef} streamUrl={stations[selectedStation].streamUrls[0].url} />
      </div>
    </div>
  );
};
