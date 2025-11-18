import React from 'react';
import { RadioStations } from '../types/station.types';
import { RadioStationButton } from './RadioStationButton.view';

export const StationButtons: React.FC<{
  stations: RadioStations;
  selectedStation: string;
  isStationPlaying: boolean;
  handleStationClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ stations, selectedStation, isStationPlaying, handleStationClick }) => (
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
        isStationPlaying={isStationPlaying}
        text={station.name}
        onClick={handleStationClick}
      />
    ))}
  </div>
);
