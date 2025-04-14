import React, { useEffect, useRef } from 'react';
import { Logger } from './Logger.view';
import { LogEntry, Logs } from '../types/logs.types';
import { mediaElementEventsNeutron } from '../signals/mediaElementEvents.signal';

export const LoggerContainer: React.FC = () => {
  const [logs, setLogs] = React.useState<Logs>([]);
  const loggerMessages = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    mediaElementEventsNeutron.watch((log?: LogEntry) => {
      if (log) {
        if (logs.length < 20) {
          setLogs((prevLogs) => [...prevLogs, log]);
        } else {
          setLogs([log]);
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      loggerMessages.current?.scrollTo({
        top: loggerMessages.current?.scrollHeight,
        behavior: 'smooth',
      });
    });

    mediaElementEventsNeutron.watch(() => {
      if (loggerMessages.current) {
        observer.observe(loggerMessages.current, { childList: true });
      }
    });
  }, []);

  return (
    <div>
      <Logger ref={loggerMessages} logs={logs} />
    </div>
  );
};
