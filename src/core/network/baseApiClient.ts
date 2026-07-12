import { APIRequestContext } from '@playwright/test';
import { Config } from '../../core/config/Config';

export class BaseApiClient {
    constructor(protected request: APIRequestContext) {}

    protected async get(endpoint: string){
        return this.request.get(
            `${Config.apiBaseUrl}${endpoint}`
        );
    }

    protected async delete(endpoint: string) {
        return this.request.delete(
            `${Config.apiBaseUrl}${endpoint}`
        );
    }

    protected async post(endpoint: string, body: unknown) {
        return this.request.post(
            `${Config.apiBaseUrl}${endpoint}`,
            { data: body }
        );
    }

    protected async put(endpoint: string, body: unknown) {
        return this.request.put(
            `${Config.apiBaseUrl}${endpoint}`,
            { data: body }
        );
    }
}