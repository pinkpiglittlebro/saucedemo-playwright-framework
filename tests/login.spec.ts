import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../fixtures/users.json';

test.describe('Login Tests', () => {

    test('Valid Login @smoke', async ({ page }) => {

        const loginPage = new LoginPage(page); // loginpage object

        await loginPage.goto(); // navigate to website

        // perform login
        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );

        //assertion
        await expect(page).toHaveURL(/inventory/);
    });

    test('Invalid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.invalidUser.username,
            users.invalidUser.password
        );

        await expect(loginPage.errorMessage).toBeVisible();
    });
});