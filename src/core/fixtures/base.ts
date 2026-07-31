import { test as base } from '@playwright/test';
import { PageManager } from '../../pages/PageManager';

type Fixtures = {
    pages: PageManager;
};

/*
The Dummy website has ads being loaded, which can interfere with the tests. 
To prevent this, we can block requests to known ad hosts using route interception. 
The following code defines a list of ad host patterns and uses Playwright's route interception to block requests to those hosts during tests.
*/
const AD_HOST_PATTERNS = [
    /googlesyndication\.com/,
    /doubleclick\.net/,
    /googleadservices\.com/,
    /google\.com\/pagead/,
    /googletagservices\.com/,
];

export const test = base.extend<Fixtures>({
    pages: async ({ page }, use) => {
        await page.route('**/*', (route) => {
            const url = route.request().url();
            if (AD_HOST_PATTERNS.some((pattern) => pattern.test(url))) {
                return route.abort();
            }
            return route.continue();
        });
        const pages = new PageManager(page);
        await use(pages);
    }
});

export {expect} from '@playwright/test';