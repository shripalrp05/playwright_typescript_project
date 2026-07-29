export interface ILogger {
  info(message: string): void;
  debug(message: string): void;
  error(message: string, err?: unknown): void;
  warn(message: string): void;
}