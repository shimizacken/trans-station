import React, { useEffect } from 'react';
import { Logger } from './Logger.view';
import { LogEntry, Logs } from '../types/logs.types';
import { mediaElementEventsNeutron } from '../signals/mediaElementEvents.signal';

export const LoggerContainer: React.FC = () => {
  const logs: Logs = [];

  useEffect(() => {
    mediaElementEventsNeutron.subscribe((log: LogEntry) => {
      logs.push(log);
    });
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <Logger logs={logs} />
    </div>
  );
};
