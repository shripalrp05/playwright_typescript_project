import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: 'tests',
    outputDir: 'test-results',

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
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari']
            }
        }
    ],
});