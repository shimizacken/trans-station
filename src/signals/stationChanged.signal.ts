import { createNeutron } from 'neutron';
import { RadioStationId } from '../types/station.types';

export const stationChanged = createNeutron<RadioStationId>();
