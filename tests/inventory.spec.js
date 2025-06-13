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

// 4. Caso de teste, o Usuário remove um item do carrinho

test('Remover item do carrinho', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addItemToCart('sauce-labs-backpack');
    await productsPage.removeItemFromCart('sauce-labs-backpack');

    const cartCount = await productsPage.getCartCount();
    expect(cartCount).toBe('0');
});

// 5. Caso de teste, é verificado se o item está no carrinho após adicionar

test('Verificar no carrinho após adicionar', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');


    await productsPage.addItemToCart('sauce-labs-backpack');
    await cartPage.openCart();

    const itemsInCart = await cartPage.getCartItemsCount();
    expect(itemsInCart).toBe(1);
});
