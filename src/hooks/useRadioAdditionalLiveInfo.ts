import { useEffect, useState } from 'react';
import type { RadioStation } from '../types/station.types';

export const useRadioAdditionalLiveInfo = (radioStation: RadioStation) => {
  const [radioLiveInfo, setRadioLiveInfo] = useState(null);

  useEffect(() => {
    const liveTrackDataUrl = radioStation.streamUrls[0].liveTrackDataUrl;

    if (liveTrackDataUrl) {
      fetch(liveTrackDataUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setRadioLiveInfo(data);
        })
        .catch((error) => {
          console.error('Error fetching live track data:', error);
        });
    }
  }, []);

  return radioLiveInfo;
};
