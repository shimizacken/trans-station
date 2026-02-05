import { createNeutron } from 'neutron';

import type { RadioStationId } from '../types/station.types';

export type StationSelection = {
  next: RadioStationId;
  prev: RadioStationId;
};

export const stationSelection = createNeutron<StationSelection>();
