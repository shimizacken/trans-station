import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { Silver } from 'react-dial-knob';

const hlsUrl = 'https://kan88.media.kan.org.il/hls/live/2024812/2024812/playlist.m3u8';

export const HLSPlayerContainer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playButtonRef = useRef<HTMLButtonElement | null>(null);
  const [volume, setVolume] = React.useState(0.8);

  useEffect(() => {
    if (videoRef.current && playButtonRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          if (videoRef.current) {
            videoRef.current.volume = volume;
          }
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = hlsUrl;
      }
    }
  }, [videoRef.current, playButtonRef.current]);

  const handlePlayPause = () => {
    if (videoRef.current && playButtonRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        playButtonRef.current.innerText = 'Pause';
      } else {
        videoRef.current.pause();
        playButtonRef.current.innerText = 'Play';
      }
    }
  };

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      const newVolume = value / 100;
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  return (
    <div>
      <video ref={videoRef} id="video" width="640" height="360"></video>
      <div className="controls">
        <button id="playPause" ref={playButtonRef} onClick={handlePlayPause}>
          Play
        </button>
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
