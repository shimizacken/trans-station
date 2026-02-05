import React, { useEffect, useRef, useState } from 'react';

import { stations } from '../constants/radioStations';

import { useHls } from '../hooks/useHls.hook';
import { useMediaPlayerEvents } from '../hooks/useMediaPlayerEvents.hook';
import { useLoadPersistSelectedRadioStation } from '../hooks/useLoadPersistSelectedRadioStation';

import { stationSelection } from '../signals/stationSelection.signal';
import { mediaElementEventsNeutron } from '../signals/mediaElementEvents.signal';

import { Silver } from 'react-dial-knob';

import { StationButtonsContainer } from './StationButtons.container';

import type { RadioStationId } from '../types/station.types';
import type { StationSelection } from '../signals/stationSelection.signal';

let currentStationSelection = {} as unknown as StationSelection;

export const HLSPlayerContainer: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [volume, setVolume] = useState(0.8);
  const station = useLoadPersistSelectedRadioStation(stations);
  const [currentStation, setCurrentStation] = useState(station);
  const [selectedStation, setSelectedStation] = useState<RadioStationId>(station.id);

  useHls(videoRef, currentStation, volume, isPaused);

  useMediaPlayerEvents(videoRef);

  useEffect(() => {
    document.title = `${currentStation.name}`;
  }, [currentStation]);

  const handlePlayPause = (stationId: RadioStationId) => {
    const isCurrentStation = currentStation.id === stationId;

    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }

      setCurrentStation(stations[stationId]);
      localStorage.setItem('currentStation', JSON.stringify(stations[stationId].id));
    }
  };

  useEffect(() => {
    stationSelection.watch((stationSelectionArgs) => {
      if (stationSelectionArgs) {
        currentStationSelection = stationSelectionArgs;
        setSelectedStation(stationSelectionArgs.next);

        handlePlayPause(stationSelectionArgs.next);
      }
    });
  }, []);

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      const newVolume = value / 100;
      mediaElementEventsNeutron.emit({
        id: crypto.randomUUID(),
        timestamp: new Date(),
        level: 'info',
        message: `🚀 ~ video volume be ${videoRef.current.volume}`,
      });
      videoRef.current.volume = newVolume;
      mediaElementEventsNeutron.emit({
        id: crypto.randomUUID(),
        timestamp: new Date(),
        level: 'info',
        message: `🚀 ~ video volume af ${videoRef.current.volume}`,
      });
      setVolume(newVolume);
    }
  };

  return (
    <div>
      <StationButtonsContainer stations={stations} />
      <video ref={videoRef} id="video" width="640" height="360" playsInline controls></video>
      <div className="controls">
        <Silver
          diameter={180}
          min={0}
          max={100}
          step={10}
          value={volume * 100}
          onValueChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};
