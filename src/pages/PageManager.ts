import { Page } from '@playwright/test';
import { MenuBar } from './MenuBar';
import { ProductsPage } from './ProductsPage';
import { HomePage } from './HomePage';


export class PageManager {
    readonly page: Page;
    readonly menuBar: MenuBar;
    readonly productsPage: ProductsPage;
    readonly homePage: HomePage;

    constructor(page: Page) {
        this.page = page;
        this.menuBar = new MenuBar(page);
        this.productsPage = new ProductsPage(page);
        this.homePage = new HomePage(page);
    }
}