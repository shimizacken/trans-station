export type LogLevel = 'info' | 'warn' | 'error';

export type LogEntry = {
  id: string;
  timestamp: Date;
  level: LogLevel;
  message: string;
};

export type Logs = LogEntry[];
