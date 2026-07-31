import {Page, Locator} from '@playwright/test'; 

export class MenuBar {
    //#region Locators
    readonly page: Page;
    readonly searchBar: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.getByPlaceholder('Search Product');
        this.submitButton = page.locator('#submit_search');
    }
    //#endregion
}
