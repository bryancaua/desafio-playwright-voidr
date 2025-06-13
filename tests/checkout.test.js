const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');


// 9. Caso de teste, o usuário finaliza a compra

test('Finalizar compra com sucesso', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.addItemToCart('sauce-labs-backpack');
    await cartPage.openCart();
    await checkoutPage.startCheckout();
    await checkoutPage.fillCheckoutInfo('Bryan', 'Santos', '12345');
    await checkoutPage.continue(); 
    await checkoutPage.finish(); 

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')
});