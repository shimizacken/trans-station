import React, { useEffect, useRef, useState } from 'react';
import { Silver } from 'react-dial-knob';
import { stations } from '../constants/radioStations';
import { useMediaPlayerEvents } from '../hooks/useMediaPlayerEvents.hook';
import { StationButtonsContainer } from './StationButtons.container';
import { mediaElementEventsNeutron } from '../signals/mediaElementEvents.signal';
import { useLoadPersistSelectedRadioStation } from '../hooks/useLoadPersistSelectedRadioStation';
import { useHls } from '../hooks/useHls.hook';
import { RadioStationId } from '../types/station.types';

export const HLSPlayerContainer: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isPlaying, isLoading } = useMediaPlayerEvents(videoRef);
  const [volume, setVolume] = useState(0.8);
  const station = useLoadPersistSelectedRadioStation(stations);
  const [currentStation, setCurrentStation] = useState(station);
  useHls(videoRef, currentStation, volume, isPaused);

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
      <StationButtonsContainer stations={stations} onClick={handlePlayPause} />
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
