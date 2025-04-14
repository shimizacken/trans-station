import React from 'react';
import { Logs } from '../types/logs.types';

export const Logger: React.FC<{ logs: Logs }> = ({ logs }) => (
  <div className="logger">
    <div className="log-list">
      {logs.map((log) => (
        <div key={log.id} className="log-item" />
      ))}
    </div>
  </div>
);
