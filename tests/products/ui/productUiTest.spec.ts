import { test, expect } from '../../../src/core/fixtures/base';

test('should navigate to products via menu', {
  tag: ['@smoke', '@ui', '@product'],
}, async ({ pages }) => {
    await pages.homePage.open();
    await pages.menuBar.goToProducts();
    //await expect(pages.page).toHaveURL("https://automationexercise.com/products");
    await expect(pages.page).toHaveURL(/.*\/products/);
});