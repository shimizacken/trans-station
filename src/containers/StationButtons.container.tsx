import React from 'react';
import { Stations } from '../types/station.types';
import { StationButtons } from '../components/StationButtons.view';
import { stationChanged } from '../signals/stationChanged.signal';

export const StationButtonsContainer: React.FC<{ stations: Stations }> = ({ stations }) => {
  const handleStationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const e = event.currentTarget;
    stationChanged.emit(e.id);
  };

  return <StationButtons stations={stations} handleStationClick={handleStationClick} />;
};
