const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');


// 7. Caso de teste, o usuário acessa os detalhes de um produto

test('Acessar detalhes de um produto', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await page.click('.inventory_item a'); // Clicará no primeiro produto

    await expect(page).toHaveURL(/inventory-item/);
    await expect(page.locator('.inventory_details_name')).toBeVisible();  //irá verificar se o nome do produto aparece

});


// 8. Caso de teste, o usuário volta para da página de produto para a lista

test('Voltar para a listagem de produtos', async ({ page }) => {

   const loginPage = new LoginPage(page);
   await loginPage.goto();
   await loginPage.login('standard_user', 'secret_sauce');

   await page.click('.inventory_item a');
   await page.click('[data-test="back-to-products"]');

   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

