import React from 'react';
import { PlayRadioButton } from './PlayRadioButton.view';
import { Stations } from '../types/station.types';

export const StationButtons: React.FC<{
  stations: Stations;
  handleStationClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ stations, handleStationClick }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    {stations.map((station) => (
      <PlayRadioButton
        key={station.id}
        id={station.id}
        isLoading={false}
        isPlaying={false}
        text={station.name}
        onClick={handleStationClick}
      />
    ))}
  </div>
);
