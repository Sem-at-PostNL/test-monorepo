export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export function getLogLevel(): LogLevel {
  if (process.env.LOG_LEVEL === undefined) {
    return 'INFO';
  }
  switch (process.env.LOG_LEVEL.toUpperCase()) {
    case 'DEBUG':
      return 'DEBUG';
    case 'INFO':
      return 'INFO';
    case 'WARN':
      return 'WARN';
    case 'ERROR':
      return 'ERROR';
    default:
      return 'INFO';
  }
}
