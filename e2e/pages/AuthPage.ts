import { selectors } from '../support/selectors';

export class AuthPage {
  async login(email: string, password: string): Promise<void> {
    await expect(element(by.id(selectors.auth.emailInput))).toBeVisible();
    await element(by.id(selectors.auth.emailInput)).replaceText(email);

    await expect(element(by.id(selectors.auth.passwordInput))).toBeVisible();
    await element(by.id(selectors.auth.passwordInput)).replaceText(password);

    await element(by.id(selectors.auth.submitButton)).tap();
  }

  async assertLoggedIn(): Promise<void> {
    await expect(element(by.id(selectors.auth.profileTab))).toBeVisible();
  }
}
