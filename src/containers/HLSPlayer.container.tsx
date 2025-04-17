import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { Silver } from 'react-dial-knob';
import { PlayRadioButton } from '../components/PlayRadioButton.view';
import { stations } from '../constants/radioStations';
import { useMediaPlayerEvents } from '../hooks/useMediaPlayerEvents.hook';
import { StationButtonsContainer } from './StationButtons.container';
import { stationChanged } from '../signals/stationChanged.signal';
import { mediaElementEventsNeutron } from '../signals/mediaElementEvents.signal';

export const HLSPlayerContainer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isPlaying, isLoading } = useMediaPlayerEvents(videoRef);
  const [volume, setVolume] = React.useState(0.8);
  const loadCurrentStation = localStorage.getItem('currentStation');
  const parsedCurrentStation = loadCurrentStation ? JSON.parse(loadCurrentStation) : null;
  const station = stations.find((station) => station.id === parsedCurrentStation) || stations[0];
  const [currentStation, setCurrentStation] = React.useState(station);

  useEffect(() => {
    if (videoRef.current) {
      const hlsUrl = currentStation.streamUrls[0].url;

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (videoRef.current) {
            videoRef.current.volume = volume;
          }
        });

        hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          // Each level includes bitrate, resolution, codecs, etc.
        });

        hls.on(Hls.Events.FRAG_PARSING_METADATA, (event, data) => {
          console.log('🚀 ~ hls.on ~ data:', data);
          data.samples.forEach((sample) => {
            const textDecoder = new TextDecoder('utf-8');
            const info = textDecoder.decode(sample.data);
            console.log('Metadata:', info);
            // You can parse this further depending on your stream
          });
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = hlsUrl;
      }
    }
  }, [videoRef.current, currentStation]);

  useEffect(() => {
    stationChanged.watch((stationId) => {
      const station = stations.find((station) => station.id === stationId) || stations[0];
      setCurrentStation(station);
      localStorage.setItem('currentStation', JSON.stringify(station.id));
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
