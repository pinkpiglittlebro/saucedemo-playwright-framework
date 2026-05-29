import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async openCart() {
        await this.cartLink.click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}