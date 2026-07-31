import {Page, Locator} from '@playwright/test'; 

export class HomePage {
    //#region Locators
    readonly page: Page;
    readonly livecarousel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.livecarousel = page.locator('#slider-carousel');
    }
    //#endregion

    //#region Methods
    async open() {
        await this.page.goto('https://automationexercise.com');
        await this.page.waitForLoadState('domcontentloaded');
        await this.livecarousel.waitFor({ state: 'visible' });
    }
    //#endregion
}
