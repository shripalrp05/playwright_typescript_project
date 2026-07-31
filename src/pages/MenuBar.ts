import {Page, Locator} from '@playwright/test'; 

export class MenuBar {
    // #region Locators
    readonly page: Page;
    readonly homeLink: Locator;
    readonly productsLink: Locator;
    readonly cartLink: Locator;
    readonly loginLink: Locator;
    readonly testcasesLink: Locator;
    readonly apiTesting: Locator;
    readonly videoTutorials: Locator;
    readonly contactUs: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home' });
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.cartLink = page.getByRole('link', { name: 'Cart' });
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.testcasesLink = page.getByRole('link', { name: 'Test Cases' });
        this.apiTesting = page.getByRole('link', { name: 'API Testing' });
        this.videoTutorials = page.getByRole('link', { name: 'Video Tutorials' });
        this.contactUs = page.getByRole('link', { name: 'Contact us' });
    }
    //#endregion

    //#region Methods
    async goToHome() {
        await this.homeLink.click();
        await this.page.waitForURL('**/home');
    }

    async goToProducts() {
        await this.productsLink.click();
        await this.page.waitForURL('**/products');
    }

    async goToCart() {
        await this.cartLink.click();
        await this.page.waitForURL('**/view_cart');
    }

    async goToLogin() {
        await this.loginLink.click();
        await this.page.waitForURL('**/login');
    }

    async goToTestCases() {
        await this.testcasesLink.click();
        await this.page.waitForURL('**/test_cases');
    }

    async goToApiTesting() {
        await this.apiTesting.click();
        await this.page.waitForURL('**/api_list');
    }

    async goToVideoTutorials() {
        await this.videoTutorials.click();
        await this.page.waitForURL('https://www.youtube.com/c/AutomationExercise');
    }

    async goToContactUs() {
        await this.contactUs.click();
        await this.page.waitForURL('**/contact_us');
    }

    async clickMenuItem(itemName: string) {
        await this.page.getByRole('link', { name: itemName }).click();
        await this.page.waitForLoadState('domcontentloaded');
    }
    //#endregion
}