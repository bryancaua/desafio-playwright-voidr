const { test, expect }  = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage} = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');


// 3. Caso de teste, o Usuário adiciona um item ao carrinho

test('Adicionar item ao carrinho', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addItemToCart('sauce-labs-backpack');

    const cartCount = await productsPage.getCartCount();
    expect(cartCount).toBe('1');
});