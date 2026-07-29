import { ILogger } from './logger.interface';

export class ConsoleLogger implements ILogger{
    private context: string;

    constructor(context: string) {
        this.context = context;
    }

    private currenttimestamp(): string {
        const now = new Date();
        return now.toISOString();
    }

    public info(message: string): void {
        console.log(`[${this.currenttimestamp()}] [INFO] [${this.context}] ${message}`);
    }

    public debug(message: string): void {
        console.log(`[${this.currenttimestamp()}] [DEBUG] [${this.context}] ${message}`);
    }

    // err? means error is optional, if not provided it will default to an empty string (hence the ?? '' in the console.error call)
    public error(message: string, err?: unknown): void {
        console.error(`[${this.currenttimestamp()}] [ERROR] [${this.context}] ${message}`, err ?? '');
    }

    public warn(message: string): void {
    console.warn(`[${this.currenttimestamp()}] [WARN] [${this.context}] ${message}`);
  }
}