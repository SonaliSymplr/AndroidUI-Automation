import { Element } from "../../node_modules/webdriverio";
import { BasePage } from "./base.page";
import { TIME_OUT } from "./time-out.enum";

export class WebBasePage extends BasePage {
  constructor(capabilities: any = mobileApp) {
    super(capabilities);
    this.driverObj = capabilities;
  }

  async clickElement(elementLocator: string, timeout: number = TIME_OUT.xxl) {
    const element: Element<"async"> = await this.findElement(
      elementLocator,
      timeout
    );
    await this.waitTillElementDisplayed(elementLocator, timeout);
    return await element.click();
  }

  async navigateTo(url: string) {
    await this.driverObj.url(url);
  }

  async maximizeWindow() {
    await this.driverObj.maximizeWindow();
  }

  async switchToTabByUrl(url: string) {
    await this.driverObj.pause(3000);
    await this.driverObj.switchWindow(url);
  }

  async switchToIframeById(id: string) {
    await this.driverObj.pause(15000);
    let currentFrame;
    let currentFrameId;
    const iframes = await this.findElements("//iframe");
    for (let i = 0; i < iframes.length; i++) {
      currentFrame = iframes[i];
      currentFrameId = await currentFrame.getAttribute("id");
      if (currentFrameId === id) {
        await this.driverObj.switchToFrame(currentFrame);
        break;
      }
    }
  }

  async switchToIframeByXpath(elementLocator: string) {
    const element: Element<"async"> = await this.findElement(elementLocator);
    await this.driverObj.switchToFrame(element);
  }

  async switchToParentFrame() {
    await this.driverObj.switchToParentFrame();
  }
}
