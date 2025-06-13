const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');


// 11. Caso de teste, usuário consegue fazer logout e tentiva de acesso á página protegida após sair

test('Logout e tentiva de acesso á página protegida após o logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.logout();

    await expect(page).toHaveURL(/login/);

    // Tentativa direta de acesso á página protegida

    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL(/login/);
});