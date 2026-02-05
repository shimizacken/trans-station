import React, { useEffect, useState } from 'react';

import { mediaElementStatus } from '../signals/mediaElementStatus.signal';
import { stationSelection } from '../signals/stationSelection.signal';

import { useLoadPersistSelectedRadioStation } from '../hooks/useLoadPersistSelectedRadioStation';

import { StationButtons } from '../components/StationButtons.view';

import type { RadioStationId, RadioStations } from '../types/station.types';

export const StationButtonsContainer: React.FC<{
  stations: RadioStations;
}> = ({ stations }) => {
  const station = useLoadPersistSelectedRadioStation(stations);
  const [selectedStation, setSelectedStation] = useState<RadioStationId>(station.id);
  const [isStationPlaying, setIsStationPlaying] = useState(false);

  useEffect(() => {
    mediaElementStatus.watch((status) => {
      setIsStationPlaying(status === 'playing' ? true : false);
    });
  }, []);

  const handleStationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const stationId = event.currentTarget.id as RadioStationId;
    stationSelection.emit({ next: stationId, prev: selectedStation });
    setSelectedStation(stationId);
    localStorage.setItem('currentStation', JSON.stringify(stations[stationId].id));
  };

  return (
    <StationButtons
      stations={stations}
      selectedStation={selectedStation}
      handleStationClick={handleStationClick}
      isStationPlaying={isStationPlaying}
    />
  );
};
