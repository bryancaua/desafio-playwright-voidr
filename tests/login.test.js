const { test, expect }  = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// 1. Caso de teste, usuário válido, login efetuado

test('Login com credenciais válidas', async ({page}) => {

    await page.goto ('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user'); // usuário válido
    await page.fill('#password', 'secret_sauce'); // senha válida

    await page.click('#login-button');

    // irá verificar se foi redirecionado para a página de produtos
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});


// 2. Caso de teste, usuário inválido e senha errada, falha no login

test('Login com credenciais inválidas', async ({page}) => {

    await page.goto ('https://www.saucedemo.com/');

    await page.fill('#user-name', 'usuario_invalido');
    await page.fill('#password', 'senha_invalida');

    await page.click('#login-button');

    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
})

// 6. Caso de teste, Usuário tenta logar com perfil bloqueado

test('Login com usuário bloqueado', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    const error = await loginPage.getErrorMessage();
    await expect(error).toBeVisible();
    await expect(error).toHaveText(/locked out/);
});