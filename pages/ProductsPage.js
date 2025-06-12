class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = '.shopping_cart_badge';
  }

  async addItemToCart(itemId) {
        await this.page.click(`[data-test="add-to-cart-${itemId}"]`);
    }

  async removeItemFromCart(itemId) {
        await this.page.click(`[data-test="remove-${itemId}"]`);
  } 
  
  async getCartCount() {
        const badge = this.page.locator(this.cartBadge);
        return badge.count() ? badge.textContent() : '0';
  }

  async isProductPage() {
        return this.page.url() === 'https://www.saucedemo.com/inventory.html';
  }
}

module.exports = { ProductsPage };