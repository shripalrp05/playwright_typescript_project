import { ProductApiClient } from '../clients/api/productApiClient';
import { ProductMapper } from '../mappers/ProductMapper';
import { Product } from '../models/Product';

export class ProductService {

    constructor(
        private readonly client: ProductApiClient
    ) {}

    async getProducts(): Promise<Product[]> {

        const response = await this.client.getProductsList();

        if(response.responseCode !== 200){

            throw new Error(
                `Unexpected response code ${response.responseCode}`
            );

        }
    
        return ProductMapper.toModels(response);

    }

    async searchProducts(query: string): Promise<Product[]> {

        const response = await this.client.searchProducts(query);

        if(response.responseCode !== 200){

            throw new Error(
                `Unexpected response code ${response.responseCode}`
            );

        }
    
        return ProductMapper.toModels(response);

    }
}