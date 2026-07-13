import { Product } from '../models/Product';    
import { GetProductsResponse } from '../contracts/responses/product/GetProductsResponse';

export class ProductMapper {

    static toModels(response: GetProductsResponse): Product[] {

        return response.products.map(product =>

            new Product(
                product.id,
                product.name,
                Number(product.price.replace("Rs. ", "")),
                product.brand,
                product.category.category,
                product.category.usertype.usertype
            )

        );

    }

}