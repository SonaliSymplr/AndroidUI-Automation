import { he } from "date-fns/locale";
import { Element } from "../../../node_modules/webdriverio";
import { BasePage } from "./base.page";
import { TIME_OUT } from "./time-out.enum";

export class NativeBasePage extends BasePage {
  constructor(driver: any = mobileApp) {
    super(driver);
    this.driverObj = driver;
  }

  public async clickElement(
    elementLocator: string,
    timeout: number = TIME_OUT.xxl
  ): Promise<void> {
    const element: Element<"async"> = await this.findElement(
      elementLocator,
      timeout
    );
    return await element.click();
  }

  public async switchApp(): Promise<void> {
    await this.driverObj.touchAction([
      { action: "press", x: 300, y: 100 },
      { action: "moveTo", x: 250, y: 100 },
      "release",
    ]);
  }

  public async swipeUp(): Promise<void> {
    const { height } = await this.driverObj.getWindowRect();
    let xLocation: number = parseInt((height * 0.8).toString());
    xLocation = Math.floor(xLocation);
    await this.driverObj.touchAction([
      { action: "longPress", x: 50, y: xLocation },
      { action: "moveTo", x: 50, y: 50 },
      "release",
    ]);
  }

  public async hideKeyboard(): Promise<void> {
    await this.driverObj.hideKeyboard();
  }

  public async placeAppInFocus(
    appName: string,
    activityName: string
  ): Promise<void> {
    await this.driverObj.startActivity(appName, activityName);
  }

  public async goBack(): Promise<void> {
    await this.driverObj.back();
  }

  public async tapUserFromList(): Promise<void> {
    await this.driverObj.pause(3000);
    await this.driverObj.touchAction({
      action: "tap",
      x: 400,
      y: 450,
    });
  }

  public async background(): Promise<void> {
    await this.driverObj.background(5);
  }

  public async longPress(
    xcoordinate: number,
    ycoordinate: number
  ): Promise<void> {
    await this.driverObj.pause(3000);
    await this.driverObj.touchAction(
      {
        action: "longPress",
        x: xcoordinate,
        y: ycoordinate,
      },
      "perform"
    );
  }

  public async tapbutton(
    xcoordinate: number,
    ycoordinate: number
  ): Promise<void> {
    await this.driverObj.touchAction(
      {
        action: "tap",
        x: xcoordinate,
        y: ycoordinate,
      },
      "perform"
    );
  }

  public async scrollUp(): Promise<void> {
    const startPercentage = 10;
    const endPercentage = 90;
    const anchorPercentage = 50;

    const { width, height } = await this.driverObj.getWindowSize();
    const anchor = (height * anchorPercentage) / 100;
    const startPoint = (width * startPercentage) / 100;
    const endPoint = (width * endPercentage) / 100;

    await this.driverObj.touchPerform([
      {
        action: "press",
        options: {
          x: anchor,
          y: endPoint,
        },
      },
      {
        action: "wait",
        options: {
          ms: 1000,
        },
      },
      {
        action: "moveTo",
        options: {
          x: anchor,
          y: startPoint,
        },
      },
      {
        action: "release",
        options: {},
      },
    ]);
  }
}
