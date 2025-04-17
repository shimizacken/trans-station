import React from 'react';
import { RadioStationId, RadioStations } from '../types/station.types';
import { StationButtons } from '../components/StationButtons.view';
import { stationChanged } from '../signals/stationChanged.signal';

export const StationButtonsContainer: React.FC<{ stations: RadioStations }> = ({ stations }) => {
  const loadCurrentStation = localStorage.getItem('currentStation');
  const parsedCurrentStationId: RadioStationId = loadCurrentStation
    ? JSON.parse(loadCurrentStation)
    : null;
  const station = stations[parsedCurrentStationId] || stations['kan-bet'];
  const [selectedStation, setSelectedStation] = React.useState<string>(station.id);

  const handleStationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const stationId = event.currentTarget.id as RadioStationId;
    stationChanged.emit(stationId);
    setSelectedStation(stationId);
  };

  return (
    <StationButtons
      stations={stations}
      selectedStation={selectedStation}
      handleStationClick={handleStationClick}
    />
  );
};
