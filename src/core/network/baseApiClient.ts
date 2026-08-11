import { APIRequestContext } from '@playwright/test';
import { Config } from '../../core/config/Config';
import { ILogger } from '../logger/logger.interface';
import { createLogger } from '../logger/logger-factory';
import { BodyType, MultipartBody } from '../network/api.types';

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

    protected async post<T>(endpoint: string, body: unknown, bodyType: BodyType = BodyType.JSON): Promise<T> {
        this.logger.info(`Sending POST request to ${Config.apiBaseUrl}${endpoint} [${bodyType}]: with body: ${JSON.stringify(body)}`);
        
        let response;
        const url = `${Config.apiBaseUrl}${endpoint}`;

        switch (bodyType) {
            case BodyType.FORM:
                response = await this.request.post(url, { form: body as Record<string, string | number | boolean> });
                break;
            case BodyType.MULTIPART:
                response = await this.request.post(url, { multipart: body as MultipartBody });
                break;
            case BodyType.JSON:
            default:
                response = await this.request.post(url, { data: body });
                break;
        }
                
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