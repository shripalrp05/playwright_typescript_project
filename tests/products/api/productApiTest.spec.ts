import { test, expect } from '../../../src/core/fixtures/api.fixtures';

test('GET /api/productsList returns a non-empty product list', {
  tag: ['@smoke', '@api'],
}, async ({ productService }) => {
  const products = await productService.getProducts();

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

