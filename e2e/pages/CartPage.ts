import { selectors } from '../support/selectors';

export class CartPage {
  async openCart(): Promise<void> {
    await expect(element(by.id(selectors.cart.tab))).toBeVisible();
    await element(by.id(selectors.cart.tab)).tap();
  }

  async assertHasItems(): Promise<void> {
    await expect(element(by.id(selectors.cart.itemCount))).toBeVisible();
  }

  async assertCanCheckout(): Promise<void> {
    await expect(element(by.id(selectors.cart.checkoutButton))).toBeVisible();
  }
}
