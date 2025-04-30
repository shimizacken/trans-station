import React from 'react';
import { RadioStationId, RadioStations } from '../types/station.types';
import { StationButtons } from '../components/StationButtons.view';

import { useLoadPersistSelectedRadioStation } from '../hooks/useLoadPersistSelectedRadioStation';

export const StationButtonsContainer: React.FC<{
  stations: RadioStations;
  onClick: (stationId: RadioStationId) => void;
}> = ({ stations, onClick }) => {
  const station = useLoadPersistSelectedRadioStation(stations);
  const [selectedStation, setSelectedStation] = React.useState<string>(station.id);

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
    />
  );
};
