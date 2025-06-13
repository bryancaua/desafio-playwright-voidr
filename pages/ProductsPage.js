class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = '.shopping_cart_badge';
    this.logoutMenuButton = '#react-burger-menu-btn';
    this.logoutLink = '#logout_sidebar_link';
  }

  async addItemToCart(itemId) {
        await this.page.click(`[data-test="add-to-cart-${itemId}"]`);
    }

  async removeItemFromCart(itemId) {
        await this.page.click(`[data-test="remove-${itemId}"]`);
  } 
  
async getCartCount() {
    const badge = this.page.locator(this.cartBadge);
    const count = await badge.count();
    return count ? await badge.textContent() : '0';
}

  async isProductPage() {
        return this.page.url() === 'https://www.saucedemo.com/inventory.html';
  }

  async logout() {
      await this.page.click(this.logoutMenuButton);
      await this.page.click(this.logoutLink);
  }
}

module.exports = { ProductsPage };