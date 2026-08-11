import { test, expect } from '../../src/core/fixtures/hybrid.fixtures';

test('Verify searched results display correct data', {
  tag: ['@smoke', '@hybrid', '@product'],
},  async ({ pages, productService }) => {

    const products = await productService.searchProducts('top');
    await expect(products.length).toBeGreaterThan(0);
    
    await pages.homePage.open();
    await pages.menuBar.goToProducts();
    await expect(pages.page).toHaveURL(/.*\/products/);
});