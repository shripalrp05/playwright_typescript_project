import { APIRequestContext } from '@playwright/test';
import { Config } from '../../core/config/Config';

export class BaseApiClient {
    constructor(protected request: APIRequestContext) {}

    protected async get<T>(endpoint: string): Promise<T> {
        const response = await this.request.get(
            `${Config.apiBaseUrl}${endpoint}`
        );
        return await response.json() as Promise<T>;
    }

    protected async delete<T>(endpoint: string): Promise<T> {
        const response = await this.request.delete(
            `${Config.apiBaseUrl}${endpoint}`
        );
        return await response.json() as Promise<T>;
    }

    protected async post<T>(endpoint: string, body: unknown): Promise<T> {
        const response = await this.request.post(
            `${Config.apiBaseUrl}${endpoint}`,
            { data: body }
        );
        return await response.json() as Promise<T>;
    }

    protected async put<T>(endpoint: string, body: unknown): Promise<T> {
        const response = await this.request.put(
            `${Config.apiBaseUrl}${endpoint}`,
            { data: body }
        );
        return await response.json() as Promise<T>;
    }
}