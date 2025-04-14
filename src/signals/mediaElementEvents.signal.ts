import { createNeutron } from 'neutron';
import { LogEntry } from '../types/logs.types';

export const mediaElementEventsNeutron = createNeutron<LogEntry>();
