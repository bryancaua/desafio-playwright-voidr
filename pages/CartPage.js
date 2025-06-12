class CartPage {
    constructor(page) {
        this.page = page;
        this.cartLink = '.shopping_cart_link';
        this.cartItem = '.cart_item';
    }

    async openCart() {
        await this.page.click(this.cartLink);
    }

    async getCartItemsCount() {
        return await this.page.locator(this.cartItem).count();
    }
}

module.exports = { CartPage };

