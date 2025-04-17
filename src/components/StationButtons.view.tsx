import React from 'react';
import { RadioStations } from '../types/station.types';
import { RadioStationButton } from './RadioStationButton.view';

export const StationButtons: React.FC<{
  stations: RadioStations;
  selectedStation: string;
  handleStationClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ stations, selectedStation, handleStationClick }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '350px',
    }}
  >
    {Object.values(stations).map((station) => (
      <RadioStationButton
        key={station.id}
        id={station.id}
        isSelected={station.id === selectedStation}
        text={station.name}
        onClick={handleStationClick}
      />
    ))}
  </div>
);
