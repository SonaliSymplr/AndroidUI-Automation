import { Element } from "../../node_modules/webdriverio";
import { TIME_OUT } from "./time-out.enum";

export let mobilePlatform;

export class BasePage {
  protected driverObj;

  constructor(driver: any) {
    this.driverObj = driver;
    mobilePlatform = this.driverObj.capabilities.platformName;
  }

  async findElement(elementLocator: string, timeout: number = TIME_OUT.xxl) {
    const element: Element = await this.driverObj.$(elementLocator);
    await element.waitForExist({
      timeout: timeout,
    });
    return element;
  }

  async findElements(elementLocator: string, timeout: number = TIME_OUT.xxl) {
    const elements: Element[] = await this.driverObj.$$(elementLocator);
    await this.driverObj.pause(2000);
    await elements[0].waitForExist({
      timeout: timeout,
    });
    return elements;
  }

  async enterText(
    elementLocator: string,
    textToEnter: string,
    timeout: number = TIME_OUT.xxl,
    isClickRequired: boolean = true
  ) {
    const element: Element = await this.findElement(elementLocator, timeout);
    if (isClickRequired) {
      await element.click();
    }
    return await element.setValue(textToEnter);
  }

  async waitTillElementClickable(
    elementLocator: string,
    timeout: number = TIME_OUT.xxl
  ) {
    const element: Element = await this.findElement(elementLocator, timeout);
    await element.waitForClickable({
      timeout: timeout,
    });
  }

  async waitTillElementDisplayed(
    elementLocator: string,
    timeout: number = TIME_OUT.xxl
  ) {
    const element: Element = await this.findElement(elementLocator, timeout);
    await element.waitForDisplayed({
      timeout: timeout,
    });
  }

  async getElementText(elementLocator: string, timeout: number = TIME_OUT.xxl) {
    const element: Element = await this.findElement(elementLocator, timeout);
    return await element.getText();
  }

  /**
   * To check if the element is displayed
   *
   * @param elementLocator unique identifier to find he element
   * @param timeout it is optional, default value is TIME_OUT.xxl
   * @returns true if the element is displayed
   */
  protected async isDisplayed(
    elementLocator: string,
    timeout: number = TIME_OUT.xxl
  ): Promise<boolean> {
    const element: Element = await this.driverObj.$(elementLocator);
    await element.waitForExist({
      timeout: timeout,
    });
    return await element.isDisplayed();
  }

  /**
   * To check if the element exists
   *
   * @param elementLocator unique identifier to find the element
   * @param timeout it is optional, default value is TIME_OUT.xxl
   * @returns true if the element exists
   */
  protected async exists(
    elementLocator: string,
    timeout: number = TIME_OUT.xxl
  ): Promise<boolean> {
    try {
      return await this.isDisplayed(elementLocator, timeout);
    } catch (ex) {
      return false;
    }
  }

  /**
   * To check if the element is enabled
   *
   * @param elementLocator unique identifier to find the element
   * @param timeout it is optional, default value is TIME_OUT.xxl
   * @returns true if the element is enabled
   */
  protected async isEnabled(
    elementLocator: string,
    timeout: number = TIME_OUT.xxl
  ): Promise<boolean> {
    const element = await this.findElement(elementLocator, timeout);
    return element.isEnabled();
  }

  /**
   * To get the last element in an array of elements
   *
   * @param elementLocator unique identifier to find the element
   * @param timeout it is optional, default value is TIME_OUT.xxl
   * @returns the last element in an array of found elements
   */
  protected async findLastElement(
    elementLocator: string,
    timeout: number = TIME_OUT.xxl
  ) {
    await this.driverObj.pause(2000);
    const elements: Element[] = await this.findElements(elementLocator);
    return elements[elements.length - 1];
  }

  /**
   * Returns the found element as promise
   *
   * @param parentElement that need to be used as reference
   * @param elementLocator unique identifier to find the element
   * @param timeout it is optional, default value is TIME_OUT.xxl
   * @returns element if found or null if not found
   */
  protected async findInPromiseElement(
    parentElement: Promise<Element<"async">>,
    elementLocator: string,
    timeout: number = TIME_OUT.xxl
  ) {
    const parent = await parentElement;
    if (parent === undefined) {
      throw new Error(`Parent of ${elementLocator} is undefined`);
    }
    let element: Promise<Element<"async">> = parent.$(elementLocator);
    try {
      await (
        await element
      ).waitForExist({
        timeout: timeout,
      });
    } catch {
      console.log(`Element not found : Locator => ${elementLocator}`);
      element = null;
    }
    return element;
  }
}
