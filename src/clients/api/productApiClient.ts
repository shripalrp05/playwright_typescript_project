import { BaseApiClient } from '../../core/network/baseApiClient';
import { Products } from '../../core/config/constants/urls';

export class ProductApiClient extends BaseApiClient {
    async getProductsList() {
        return this.get(Products.GetList);
    }

    // async postToProductsList(body: unknown) {
    //     return this.post(Products.PostToList, body);
    // }
}