import { createNeutron } from 'neutron';
import { RadioStationId } from '../types/station.types';

export type StationSelection = {
  next: RadioStationId;
  prev: RadioStationId;
};

export const stationSelection = createNeutron<StationSelection>();
