import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { credentials } from '../support/credentials';

describe('Subscribed user journey', () => {
  const authPage = new AuthPage();
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const cartPage = new CartPage();

  it('logs in and completes add-to-cart flow', async () => {
    await authPage.login(credentials.email, credentials.password);
    await authPage.assertLoggedIn();

    await homePage.openFirstProduct();
    await productPage.addToCart();

    await cartPage.openCart();
    await cartPage.assertHasItems();
    await cartPage.assertCanCheckout();
  });
});
