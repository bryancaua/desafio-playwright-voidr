class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = '[data-test="checkout"]';
        this.firstNameInput = '[data-test="firstName"]';
        this.lastNameInput = '[data-test="lastName"]';
        this.postalCodeInput = '[data-test="postalCode"]';
        this.continueButton = '[data-test="continue"]';
        this.finishButton = '[data-test="finish"]';
        this.sucessMessage = '.complete-header';
        this.errorMessage = '[data-test="error"]';
    }

    async startCheckout() {
        await this.page.click(this.checkoutButton);
    }

    async fillCheckoutInfo(first, last, zip) {
        await this.page.fill(this.firstNameInput, first);
        await this.page.fill(this.lastNameInput, last);
        await this.page.fill(this.postalCodeInput, zip);
    }

    async continue(){
        await this.page.click(this.continueButton);

    }

    async finish() {
        await this.page.click(this.finishButton);
    }

    async getSucessMessage() {
        return this.page.locator(this.sucessMessage);
    }

    async getErrorMessage() {
        return this.page.locator(this.errorMessage);
    }
}

module.exports = {CheckoutPage};