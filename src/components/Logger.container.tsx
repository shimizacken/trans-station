import React from 'react';
import { Logger } from './Logger.view';
import { Logs } from '../types/logs.types';

export const LoggerContainer: React.FC = () => {
  const logs: Logs = [];

  return (
    <p>
      <Logger logs={logs} />
    </p>
  );
};
