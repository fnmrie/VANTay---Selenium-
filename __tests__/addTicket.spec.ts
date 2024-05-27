import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import 'chromedriver';

describe('Add Ticket Test', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  }, 15000); 

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test('should add a ticket successfully', async () => {
    await driver.get('http://localhost:3001/add-ticket'); 

    const passengerNameInput = await driver.findElement(By.name('passenger_name'));
    await passengerNameInput.sendKeys('John Doe');

    const passengerClassificationInput = await driver.findElement(By.name('passenger_classification'));
    await passengerClassificationInput.sendKeys('Adult');

    const passengerAddressInput = await driver.findElement(By.name('passenger_address'));
    await passengerAddressInput.sendKeys('123 Main Street');

    const passengerPhoneInput = await driver.findElement(By.name('passenger_phone_no'));
    await passengerPhoneInput.sendKeys('123-456-7890');

    const dateInput = await driver.findElement(By.name('date'));
    await dateInput.sendKeys('2024-06-01');

    const destinationInput = await driver.findElement(By.name('destination'));
    await destinationInput.sendKeys('New York');

    const seatNoInput = await driver.findElement(By.name('seat_no'));
    await seatNoInput.sendKeys('5');

    const fareInput = await driver.findElement(By.name('fare'));
    await fareInput.sendKeys('50');

    const vanIdInput = await driver.findElement(By.name('vanId'));
    await vanIdInput.sendKeys('1');

    const userIdInput = await driver.findElement(By.name('userId'));
    await userIdInput.sendKeys('1');

    const createTicketButton = await driver.findElement(By.tagName('button'));
    await createTicketButton.click();

    await driver.wait(until.urlIs('http://localhost:3001/cashier/add-ticket/:id'), 10000); 
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).toBe('http://localhost:3001/admin/manage-ticket'); 
  }, 30000); 
});
