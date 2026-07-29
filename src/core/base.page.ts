import { Page, BrowserContext } from '@playwright/test';
import { ILogger } from './logger/logger.interface';
import { createLogger } from './logger/logger-factory';
import { errors } from '@playwright/test'

export abstract class BasePage {
    protected readonly page: Page;
    protected readonly context: BrowserContext;
    protected readonly logger: ILogger;

    constructor(page: Page) {
        this.page = page;
        this.context = page.context();
        this.logger = createLogger(this.constructor.name);
    }

    abstract isLoaded(): Promise<boolean>;

    async click(locator: string): Promise<void> {
        this.logger.info(`Clicking ${locator}`);
        await this.page.locator(locator).click();
    }

    async type(locator: string, text: string, clearFirst = true): Promise<void> {
        this.logger.info(`Typing "${text}" into ${locator}`);
        const element = this.page.locator(locator);
        if (clearFirst) {
            this.logger.warn(`Clearing existing text ${await this.page.locator(locator).textContent()} in ${locator} before typing`);
            await element.clear();
        }
        await element.fill(text);
    }

    async goto(path: string): Promise<void> {
        this.logger.info(`Navigating to ${path}`);
        try{
            await this.page.goto(`${path}`, {
            timeout: 10000, // 10 seconds
            });
            this.logger.info(`Successfully navigated to ${path}`);
        }
        catch (error) {
            if(error instanceof errors.TimeoutError){
                this.logger.error(`Timeout while trying to navigate to ${path} after 10 seconds.`);
            }
            else{
                this.logger.error(`Failed to navigate to ${path}: `, error);
            }
            throw error;
        }
    }

    async selectDropdownOption(locator: string, value: string): Promise<void> {
        this.logger.info(`Selecting "${value}" in ${locator}`);
        await this.page.locator(locator).selectOption(value);
    }
}