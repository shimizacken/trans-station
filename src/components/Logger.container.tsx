import React from 'react';
import { Logger } from './Logger.view';
import { Logs } from '../types/logs.types';

export const LoggerContainer: React.FC = () => {
  const logs: Logs = [];

  return (
    <div style={{ marginTop: '20px' }}>
      <Logger logs={logs} />
    </div>
  );
};
