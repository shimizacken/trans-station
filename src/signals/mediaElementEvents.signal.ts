import { createNeutron } from 'neutron';

import type { LogEntry } from '../types/logs.types';

export const mediaElementEventsNeutron = createNeutron<LogEntry>();
