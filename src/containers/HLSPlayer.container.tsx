import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { Silver } from 'react-dial-knob';
import { PlayRadioButton } from '../components/PlayRadioButton.view';
import { stations } from '../constants/radioStations';
import { useMediaPlayerEvents } from '../hooks/useMediaPlayerEvents.hook';
import { StationButtonsContainer } from './StationButtons.container';
import { stationChanged } from '../signals/stationChanged.signal';
import { mediaElementEventsNeutron } from '../signals/mediaElementEvents.signal';
import { useLoadPersistSelectedRadioStation } from '../hooks/useLoadPersistSelectedRadioStation';
import { useHls } from '../hooks/useHls.hook';

export const HLSPlayerContainer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isPlaying, isLoading } = useMediaPlayerEvents(videoRef);
  const [volume, setVolume] = React.useState(0.8);
  const station = useLoadPersistSelectedRadioStation(stations);
  const [currentStation, setCurrentStation] = React.useState(station);

  useHls(videoRef, currentStation, volume);

  useEffect(() => {
    stationChanged.watch((stationId) => {
      if (stationId) {
        const station = stations[stationId] || stations['kan-bet'];
        setCurrentStation(station);
        localStorage.setItem('currentStation', JSON.stringify(station.id));
      }
    });
  }, []);

  useEffect(() => {
    document.title = `${currentStation.name}`;
  }, [currentStation]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
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
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
          <PlayRadioButton
            onClick={handlePlayPause}
            isPlaying={isPlaying}
            isLoading={isLoading}
            text="Play"
            altText="Pause"
            id="play-pause-button"
          />
        </div>
      </div>
    </div>
  );
};
