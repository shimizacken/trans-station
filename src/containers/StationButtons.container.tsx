import React, { useEffect, useState } from 'react';
import { RadioStationId, RadioStations } from '../types/station.types';
import { StationButtons } from '../components/StationButtons.view';

import { useLoadPersistSelectedRadioStation } from '../hooks/useLoadPersistSelectedRadioStation';
import { mediaElementStatus } from '../signals/mediaElementStatus.signal';

export const StationButtonsContainer: React.FC<{
  stations: RadioStations;
  onClick: (stationId: RadioStationId) => void;
}> = ({ stations, onClick }) => {
  const station = useLoadPersistSelectedRadioStation(stations);
  const [selectedStation, setSelectedStation] = useState<string>(station.id);
  const [isStationPlaying, setIsStationPlaying] = useState(false);

  useEffect(() => {
    mediaElementStatus.watch((status) => {
      setIsStationPlaying(status === 'playing' ? true : false);
    });
  }, []);

  const handleStationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const stationId = event.currentTarget.id as RadioStationId;
    setSelectedStation(stationId);
    onClick(stationId);
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
