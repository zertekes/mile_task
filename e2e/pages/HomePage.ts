import { selectors } from '../support/selectors';

export class HomePage {
  async openFirstProduct(): Promise<void> {
    await expect(element(by.id(selectors.home.firstProductCard))).toBeVisible();
    await element(by.id(selectors.home.firstProductCard)).tap();
  }
}
