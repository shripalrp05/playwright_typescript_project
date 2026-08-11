import { mergeTests } from '@playwright/test';
import { test as uiTest } from './ui.fixtures';
import { test as apiTest } from '../fixtures/api.fixtures';

export const test = mergeTests(uiTest, apiTest);
export const expect = test.expect;