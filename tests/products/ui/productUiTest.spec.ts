import { test, expect } from '../../../src/core/fixtures/base';

test('should navigate to products via menu', async ({ pages }) => {
  await pages.menuBar.goToProducts();
  await expect(pages.page).toHaveURL(/.*\/products/);
});