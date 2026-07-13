export interface GetProductsResponse {
    responseCode: number;
    products: ProductResponse[];
}

export interface ProductResponse {
    id: number;
    name: string;
    price: string;
    brand: string;
    category: CategoryResponse;
}

export interface CategoryResponse {
    usertype: UserTypeResponse;
    category: string;
}

export interface UserTypeResponse {
    usertype: string;
}