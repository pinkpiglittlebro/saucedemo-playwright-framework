import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

import users from '../fixtures/users.json';

test.describe('Cart Tests', () => {

    test('Add Item To Cart', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );

        await productsPage.addBackpackToCart();

        await expect(
            productsPage.shoppingCartBadge
        ).toHaveText('1');
    });
});