import { Builder, By, WebDriver } from 'selenium-webdriver';
import 'chromedriver';
import { getElementById, getElementByXPath } from '../utils/index';

describe('Login Test', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  }, 15000); 

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('should log in successfully', async () => {
    await driver.get('http://localhost:3001/'); 
    const emailInput = await getElementById('email', driver);
    await emailInput.sendKeys('test@example.com');

    const passwordInput = await getElementById('password', driver);
    await passwordInput.sendKeys('password');

    const loginButton = await getElementById('submit', driver);
    await loginButton.click();

    await driver.sleep(2000);

    const errorMessage = await driver.findElement(By.className('error-message')).getText();
    console.log('Error Message:', errorMessage);

    const currentUrl = await driver.getCurrentUrl();
    console.log('Current URL after login:', currentUrl);

    const pageSource = await driver.getPageSource();
    console.log('Page Source after login:', pageSource);

    expect(currentUrl).toBe('http://localhost:3001/cashier');
  }, 30000);
});