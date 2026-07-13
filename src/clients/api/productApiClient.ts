import { BaseApiClient } from '../../core/network/baseApiClient';
import { Products } from '../../core/config/constants/urls';
import { GetProductsResponse } from '../../contracts/responses/product/GetProductsResponse';

export class ProductApiClient extends BaseApiClient {
    
    async getProductsList(): Promise<GetProductsResponse> {
        return this.get<GetProductsResponse>(Products.GetList);
    }

    // async postToProductsList(body: unknown) {
    //     return this.post(Products.PostToList, body);
    // }
}