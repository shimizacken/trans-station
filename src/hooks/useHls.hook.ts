import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import type { RadioStation } from '../types/station.types';

export const useHls = (
  videoRef: React.RefObject<HTMLVideoElement | null>,
  currentStation: RadioStation,
  volume: number
) => {
  // const [hls, setHls] = useState<Hls>();
  const hls = useRef<Hls | null>(null);

  useEffect(() => {
    if (hls.current) {
      hls.current.stopLoad();
      hls.current.detachMedia();
      hls.current.destroy();
    }

    hls.current = new Hls();
    // setHls(hls.current);

    if (videoRef.current) {
      const hlsUrl = currentStation.streamUrls[0].url;
      console.log('🚀 ~ useEffect ~ hlsUrl:', hlsUrl);
      if (Hls.isSupported()) {
        hls.current.loadSource(hlsUrl);
        hls.current.attachMedia(videoRef.current);

        hls.current.on(Hls.Events.BUFFER_APPENDED, () => {
          if (videoRef.current && videoRef.current.paused) {
            videoRef.current.play().catch((err) => {
              console.warn('Playback failed:', err);
            });
          }
        });

        hls.current.on(Hls.Events.MANIFEST_PARSED, () => {
          if (videoRef.current) {
            videoRef.current.volume = volume;
          }
        });

        hls.current.on(Hls.Events.FRAG_PARSING_METADATA, (event, data) => {
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

  return hls.current;
};
