import React, { useEffect, useRef } from 'react';
import { Silver } from 'react-dial-knob';
import { stations } from '../constants/radioStations';
import { useMediaPlayerEvents } from '../hooks/useMediaPlayerEvents.hook';
import { StationButtonsContainer } from './StationButtons.container';
import { mediaElementEventsNeutron } from '../signals/mediaElementEvents.signal';
import { useLoadPersistSelectedRadioStation } from '../hooks/useLoadPersistSelectedRadioStation';
import { useHls } from '../hooks/useHls.hook';
import { RadioStationId } from '../types/station.types';

export const HLSPlayerContainer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isPlaying, isLoading } = useMediaPlayerEvents(videoRef);
  const [volume, setVolume] = React.useState(0.8);
  const station = useLoadPersistSelectedRadioStation(stations);
  const [currentStation, setCurrentStation] = React.useState(station);
  useHls(videoRef, currentStation, volume);

  useEffect(() => {
    document.title = `${currentStation.name}`;
  }, [currentStation]);

  const handlePlayPause = (stationId: RadioStationId) => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
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
