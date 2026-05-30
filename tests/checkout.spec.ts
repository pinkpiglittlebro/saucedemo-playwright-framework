import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

import users from '../fixtures/users.json';

test.describe('Checkout Tests', () => {

    test('Complete Checkout Flow @smoke', async ({ page }) => {

        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();

        await loginPage.login(
            users.validUser.username,
            users.validUser.password
        );

        await productsPage.addBackpackToCart();

        await cartPage.openCart();

        await cartPage.checkout();

        await checkoutPage.enterCustomerInfo(
            'Eugene',
            'Li',
            'M1P0B1'
        );

        await checkoutPage.continueCheckout();

        await checkoutPage.finishOrder();

  

        await expect(
            checkoutPage.completeHeader
        ).toHaveText('Thank you for your order!');
    });
});