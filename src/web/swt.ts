/*
import { WebDriver, By, Key } from "selenium-webdriver";
import { assert } from "chai";
import { Browser, EBrowserType } from "./Browser";
import "./Extensions"
import _ = require("underscore");
let browser: Browser = new Browser(EBrowserType.Chrome);

export class SWT {
    browser: Browser | null;
    driver: WebDriver | null;
    constructor() {
        this.browser = new Browser(EBrowserType.Chrome);
        this.driver = null;
    }

    async initChome() {
        this.browser = new Browser(EBrowserType.Chrome);
        this.driver = this.browser.Initialize()
        await this.driver.manage().window().maximize();
    }
    // open an URL
    async open(url: string) {
        await this.driver?.open(url,"main");
    }
    async wait(timeInMs: number) {
        await sleep(timeInMs);
    }
    async hasText(text: string) {
        await this.driver?.verifyBodyText("body", text);
    }
    async hasTextAttrubute(selector: string, text: string) {
        await this.driver?.verifyBodyText(selector, text);
    }
    async hasNoText(text: string) {
        await this.driver?.verifyNoBodyText("body", text);
    }
    async hasAttr(selector: string, key: string, value: string) {
        await this.driver?.assertAttr(selector, key, value);
    }
    async click(selector: string) {
        await this.driver?.doSingleClick(selector);
    }
    async type(selector: string, text: string) {
        await this.driver?.doType(selector, text);
    }
    async typeAndEnter(selector: string, text: string) {
        //await this.driver?.typeWithEnter(selector, text);
    }

    async reset() {
        await this.driver?.doReset()
    }
    async endTest() {
        await this.driver?.quit()
    }
}

// Helper
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

*/