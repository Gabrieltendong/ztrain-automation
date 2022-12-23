import { Before, BeforeAll, AfterAll, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, firefox, webkit } from "playwright";
import { OurWorld } from "./types";

declare global {
    var browser: any;
    var page: any;
    var context: any;
}

setDefaultTimeout(10000);

BeforeAll(async function () {
  // Browsers are expensive in Playwright so only create 1
  global.browser = await webkit.launch({
    // Not headless so we can watch test runs
    headless: false,
    // Slow so we can see things happening
    slowMo: 500,
    
  });
  
});

AfterAll(async function () {
  await global.browser.close();
});

// Create a new test context and page per scenario
Before(async function (this: OurWorld) {
  this.context = await global.browser.newContext();
  this.page = await this.context.newPage();
  // this.page.setDefaultTimeout(10000);
});

// Cleanup after each scenario
After(async function (this: OurWorld, testCase: any) {
  if (testCase.result.status === Status.FAILED) {
    var stream = await this.page.screenshot();
    return this.attach(stream, 'image/png');
  }
  // await this.page.close();
  // await this.context.close();
});