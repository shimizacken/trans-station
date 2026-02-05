import React, { forwardRef } from 'react';

import type { Logs } from '../types/logs.types';

export const Logger = forwardRef<HTMLDivElement, { logs: Logs }>(({ logs }, ref) => (
  <div className="logger">
    <div className="log-list" ref={ref}>
      {logs.map((log) => (
        <div key={log.id} className="log-item">
          <span className="log-timestamp">{log.timestamp.toLocaleTimeString()} </span>
          <span className={`log-level log-level-${log.level}`}>{log.level} </span>
          <span className="log-message">{log.message} </span>
        </div>
      ))}
    </div>
  </div>
));

Logger.displayName = 'Logger';
