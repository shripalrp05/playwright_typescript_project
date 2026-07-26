import { test, expect } from '@playwright/test';
import { ProductService } from '../../../src/services/productService';
import { ProductApiClient } from '../../../src/clients/api/productApiClient';

test('GET /api/productsList returns a non-empty product list', {
  tag: ['@smoke', '@api'],
}, async ({ request }) => {
  const client = new ProductApiClient(request);
  const service = new ProductService(client);

  const products = await service.getProducts();

  expect(products.length).toBeGreaterThan(0);

  const firstProduct = products[0];
  expect(firstProduct).toEqual({
    id: expect.any(Number),
    name: expect.any(String),
    price: expect.any(Number),
    brand: expect.any(String),
    category: expect.any(String),
    userType: expect.any(String)
  });
});

