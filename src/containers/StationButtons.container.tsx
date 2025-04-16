import React from 'react';
import { RadioStations } from '../types/station.types';
import { StationButtons } from '../components/StationButtons.view';
import { stationChanged } from '../signals/stationChanged.signal';

export const StationButtonsContainer: React.FC<{ stations: RadioStations }> = ({ stations }) => {
  const [selectedStation, setSelectedStation] = React.useState<string>(stations[0].id);

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
