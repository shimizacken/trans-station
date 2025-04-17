import React from 'react';
import { RadioStations } from '../types/station.types';
import { StationButtons } from '../components/StationButtons.view';
import { stationChanged } from '../signals/stationChanged.signal';

export const StationButtonsContainer: React.FC<{ stations: RadioStations }> = ({ stations }) => {
  const loadCurrentStation = localStorage.getItem('currentStation');
  const parsedCurrentStation = loadCurrentStation ? JSON.parse(loadCurrentStation) : null;
  const station = stations.find((station) => station.id === parsedCurrentStation) || stations[0];
  const [selectedStation, setSelectedStation] = React.useState<string>(station.id);

  const handleStationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const e = event.currentTarget;
    stationChanged.emit(e.id);
    setSelectedStation(e.id);
  };

  return (
    <StationButtons
      stations={stations}
      selectedStation={selectedStation}
      handleStationClick={handleStationClick}
    />
  );
};
