import { BaseApiClient } from '../../core/network/baseApiClient';
import { Products } from '../../core/config/constants/urls';
import { GetProductsResponse } from '../../contracts/responses/product/GetProductsResponse';
import { BodyType } from '../../core/network/api.types';

export class ProductApiClient extends BaseApiClient {
    
    async getProductsList(): Promise<GetProductsResponse> {
        return this.get<GetProductsResponse>(Products.GetList);
    }

    async searchProducts(query: string): Promise<GetProductsResponse> {
        return this.post<GetProductsResponse>(
            Products.Search,
            { search_product: query },
            BodyType.FORM
        );
    }

}