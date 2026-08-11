
import { test as base } from '@playwright/test';
import { ProductApiClient } from '../../clients/api/productApiClient';
import { ProductService } from '../../services/productService';

type ApiFixtures = {
    productService: ProductService;
};

export const test = base.extend<ApiFixtures>({
    productService: async ({ request }, use) => {
        const client = new ProductApiClient(request);
        const service = new ProductService(client);
        await use(service);
    },
});

export { expect } from '@playwright/test';