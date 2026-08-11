import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: 'tests',
    outputDir: 'test-results',

    timeout: 60000,

    reporter: [
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
        ['list']
    ],

    fullyParallel: true,

    use:{
        trace: 'on',
        screenshot: 'only-on-failure',
        video: 'off'
    },

    projects: [
        // API tests — any folder named "api", no browser
        {
            name: 'api',
            testMatch: '**/api/**/*.spec.ts',
        },
        {
            name: 'chromium',
            testMatch: [
                '**/ui/**/*.spec.ts',
                '**/userjourney/**/*.spec.ts'
            ],
            use: {
                ...devices['Desktop Chrome']
            }
        },
        {
            name: 'firefox',
            testMatch: [
                '**/ui/**/*.spec.ts',
                '**/userjourney/**/*.spec.ts'
            ],
            use: {
                ...devices['Desktop Firefox']
            }
        },
        {
            name: 'webkit',
            testMatch: [
                '**/ui/**/*.spec.ts',
                '**/userjourney/**/*.spec.ts'
            ],
            use: {
                ...devices['Desktop Safari']
            }
        }
    ],
});