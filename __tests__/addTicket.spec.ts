import { Builder, By, until, WebDriver } from 'selenium-webdriver';

describe('AddTicket Component', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://localhost:3001/cashier/add-ticket/333');
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  });

  test('should create a new ticket and navigate to cashier page', async () => {

    await driver.wait(until.elementLocated(By.css('.create-ticket-form')), 10000);

    await driver.findElement(By.css('input[name="passengerName"]')).sendKeys('John Doe');
    await driver.findElement(By.css('input[name="passengerClassification"]')).sendKeys('Regular');
    await driver.findElement(By.css('input[name="passengerAddress"]')).sendKeys('123 Main St');
    await driver.findElement(By.css('input[name="passengerPhoneNo"]')).sendKeys('555-555-5555');
    await driver.findElement(By.css('input[name="date"]')).sendKeys('2024-05-30T12:00');
    await driver.findElement(By.css('input[name="destination"]')).sendKeys('City Center');
    await driver.findElement(By.css('input[name="seatNo"]')).sendKeys('5');
    await driver.findElement(By.css('input[name="fare"]')).sendKeys('10');

    await driver.findElement(By.css('.btn-submit')).click();

    await driver.wait(until.urlIs('http://localhost:3001/cashier'), 10000);

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toBe('http://localhost:3001/cashier');
  }, 30000);
});
