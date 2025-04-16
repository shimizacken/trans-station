import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const hlsUrl = 'https://kan88.media.kan.org.il/hls/live/2024812/2024812/playlist.m3u8';

export const HLSPlayerContainer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playButtonRef = useRef<HTMLButtonElement | null>(null);
  const volumeSliderRef = useRef<HTMLInputElement | null>(null);
  const [volume, setVolume] = React.useState(0.5);

  useEffect(() => {
    if (videoRef.current && playButtonRef.current && volumeSliderRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          if (videoRef.current && volumeSliderRef.current) {
            videoRef.current.volume = parseFloat(volumeSliderRef.current.value);
          }
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = hlsUrl;
      }
    }
  }, [videoRef.current, playButtonRef.current, volumeSliderRef.current]);

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

  const handleVolumeChange = () => {
    if (videoRef.current && volumeSliderRef.current) {
      const value = parseFloat(volumeSliderRef.current.value);
      videoRef.current.volume = value;
      setVolume(value);
    }
  };

  return (
    <div>
      <video ref={videoRef} id="video" width="640" height="360"></video>
      <div className="controls">
        <button id="playPause" ref={playButtonRef} onClick={handlePlayPause}>
          Play
        </button>
        <input
          ref={volumeSliderRef}
          type="range"
          id="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};
