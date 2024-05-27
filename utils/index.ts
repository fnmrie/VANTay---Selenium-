import { Builder, WebDriver } from 'selenium-webdriver';
import { until, By } from 'selenium-webdriver';

const waitUntilTime = 5 * 1000; // millisecond

export async function initializeDriver(): Promise<WebDriver> {
    const driver = await new Builder().forBrowser('chrome').build();
    return driver;
}

export async function getElementById(id: string, driver: WebDriver) {
    const el = await driver.wait(
        until.elementLocated(By.id(id)),
        waitUntilTime
    );

    return await driver.wait(until.elementIsVisible(el), waitUntilTime);
}

export async function getElementByXPath(xpath: string, driver: WebDriver) {
    const el = await driver.wait(
        until.elementLocated(By.xpath(xpath)),
        waitUntilTime
    );

    return await driver.wait(until.elementIsVisible(el), waitUntilTime);
}
