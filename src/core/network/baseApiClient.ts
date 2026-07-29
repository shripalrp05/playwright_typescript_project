import { APIRequestContext } from '@playwright/test';
import { Config } from '../../core/config/Config';
import { ILogger } from '../logger/logger.interface';
import { createLogger } from '../logger/logger-factory';

export class BaseApiClient {
    protected readonly logger: ILogger;

    constructor(protected request: APIRequestContext) {
        this.logger = createLogger(this.constructor.name);
    }

    protected async get<T>(endpoint: string): Promise<T> {
        this.logger.info(`Sending GET request to ${Config.apiBaseUrl}${endpoint}`);
        const response = await this.request.get(
            `${Config.apiBaseUrl}${endpoint}`
        );
        this.logger.debug(`Received response with status ${response.status()} for GET request to ${Config.apiBaseUrl}${endpoint}`);
        return await response.json() as Promise<T>;
    }

    protected async delete<T>(endpoint: string): Promise<T> {
        this.logger.info(`Sending DELETE request to ${Config.apiBaseUrl}${endpoint}`);
        const response = await this.request.delete(
            `${Config.apiBaseUrl}${endpoint}`
        );
        this.logger.debug(`Received response with status ${response.status()} for DELETE request to ${Config.apiBaseUrl}${endpoint}`);
        return await response.json() as Promise<T>;
    }

    protected async post<T>(endpoint: string, body: unknown): Promise<T> {
        this.logger.info(`Sending POST request to ${Config.apiBaseUrl}${endpoint} with body: ${JSON.stringify(body)}`);
        const response = await this.request.post(
            `${Config.apiBaseUrl}${endpoint}`,
            { data: body }
        );
        this.logger.debug(`Received response with status ${response.status()} for POST request to ${Config.apiBaseUrl}${endpoint}`);
        return await response.json() as Promise<T>;
    }

    protected async put<T>(endpoint: string, body: unknown): Promise<T> {
        this.logger.info(`Sending PUT request to ${Config.apiBaseUrl}${endpoint} with body: ${JSON.stringify(body)}`);
        const response = await this.request.put(
            `${Config.apiBaseUrl}${endpoint}`,
            { data: body }
        );
        this.logger.debug(`Received response with status ${response.status()} for PUT request to ${Config.apiBaseUrl}${endpoint}`);
        return await response.json() as Promise<T>;
    }
}