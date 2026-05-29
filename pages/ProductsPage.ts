import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly shoppingCartBadge: Locator;

    constructor(page: Page) {

        this.page = page;

        this.addToCartButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        );

        this.shoppingCartBadge = page.locator(
            '[data-test="shopping-cart-badge"]'
        );
    }

    async addBackpackToCart() {
        await this.addToCartButton.click();
    }
}