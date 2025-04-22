import { useEffect } from 'react';
import Hls from 'hls.js';
import { RadioStation } from '../types/station.types';

export const useHls = (
  videoRef: React.RefObject<HTMLVideoElement | null>,
  currentStation: RadioStation,
  volume: number
) => {
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
};
