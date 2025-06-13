const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');


// 11. Caso de teste, o usuário consegue fazer logout e tentiva de acesso á página protegida após sair

test('Logout e tentiva de acesso á página protegida após o logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.logout();

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // Tentativa direta de acesso á página protegida

    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});


// 12. Caso de teste, erro ao finalizar a compra após o usuário inserir dados inválidos

test('Erro ao finalizar compra com dados inválidos', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.addItemToCart('sauce-labs-backpack');
    await cartPage.openCart();
    await checkoutPage.startCheckout();
    await checkoutPage.fillCheckoutInfo('Bryan', '', '12345'); // sobrenome vazio
    await checkoutPage.continue();

    const error = await checkoutPage.getErrorMessage();
    await expect(error).toBeVisible();
    await expect(error).toContainText('Error');
});

// 13. Caso de teste, erro ao finalizar compra com todos os dados vazios 

  test('Erro ao finalizar compra com todos os campos vazios', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.addItemToCart('sauce-labs-backpack');
    await cartPage.openCart();
    await checkoutPage.startCheckout();
    await checkoutPage.fillCheckoutInfo('', '', '');
    await checkoutPage.continue();

    const error = await checkoutPage.getErrorMessage();
    await expect(error).toBeVisible();
    await expect(error).toContainText('Error');
  });