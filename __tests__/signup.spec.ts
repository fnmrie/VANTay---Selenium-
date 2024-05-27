import { Builder, By, WebDriver } from 'selenium-webdriver';
import 'chromedriver';

describe('Signup Page Test', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  }, 15000); 

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('should sign up successfully', async () => {
    await driver.get('http://localhost:3001/signup'); 
    const nameInput = await driver.findElement(By.name('name'));
    await nameInput.sendKeys('Lowes');

    const emailInput = await driver.findElement(By.name('email'));
    await emailInput.sendKeys('lowes@example.com');

    const roleSelect = await driver.findElement(By.name('role'));
    await roleSelect.sendKeys('CASHIER');

    const passwordInput = await driver.findElement(By.name('password'));
    await passwordInput.sendKeys('testpassword');

    const confirmPasswordInput = await driver.findElement(By.name('confirmPassword'));
    await confirmPasswordInput.sendKeys('testpassword');

    const createAccountButton = await driver.findElement(By.tagName('button'));
    await createAccountButton.click();

    
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toBe('http://localhost:3001/'); 
  }, 30000); 
});
