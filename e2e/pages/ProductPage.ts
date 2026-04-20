import { selectors } from '../support/selectors';

export class ProductPage {
  async addToCart(): Promise<void> {
    await expect(element(by.id(selectors.product.addToCartButton))).toBeVisible();
    await element(by.id(selectors.product.addToCartButton)).tap();
  }
}
