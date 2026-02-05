import type { RadioStationId, RadioStations } from '../types/station.types';

export const useLoadPersistSelectedRadioStation = (radioStations: RadioStations) => {
  const loadCurrentStation = localStorage.getItem('currentStation');
  const parsedCurrentStationId: RadioStationId = loadCurrentStation
    ? JSON.parse(loadCurrentStation)
    : null;
  const station = radioStations[parsedCurrentStationId] || radioStations['kan-bet'];

  return station;
};
