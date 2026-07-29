import { ILogger } from './logger.interface';
import { ConsoleLogger } from './console-logger';

export function createLogger(context: string): ILogger {
    // Single place to swap implementations later, e.g. based on env config, or based on new logging library, etc.
    return new ConsoleLogger(context);
}